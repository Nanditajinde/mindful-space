// src/pages/ChatPage.jsx
import { useState, useEffect, useRef, useCallback } from "react";
import { Send, Mic, MicOff, Volume2, VolumeX, Loader2, Menu } from "lucide-react";
import { createSession, getSessions, getSessionMessages, updateSessionPreview, saveMessage, saveMoodLog } from "../firebase";
import { sendToGemini, detectCrisis } from "../gemini";
import { sendSilentCrisisSMS } from "../notifications";
import { analyzeSentiment } from "../sentiment";
import { analyzeMessage, aggregateSessionMood } from "../utils/passiveMoodDetector";
import { useLanguage } from "../context/LanguageContext";


const SpeechRecognitionAPI =
  typeof window !== "undefined"
    ? window.SpeechRecognition || window.webkitSpeechRecognition
    : null;
const hasSpeechRecognition = !!SpeechRecognitionAPI;
const hasSpeechSynthesis = typeof window !== "undefined" && "speechSynthesis" in window;

function speakText(text) {
  if (!hasSpeechSynthesis) return;
  window.speechSynthesis.cancel();
  const clean = text.replace(/\*\*/g, "").replace(/\[.*?\]/g, "").trim();
  const utt = new SpeechSynthesisUtterance(clean);
  utt.rate = 0.9;
  utt.pitch = 1.0;
  const voices = window.speechSynthesis.getVoices();
  const female = voices.find(
    (v) => /female|woman|samantha|karen|victoria|zira|susan|moira/i.test(v.name)
  );
  if (female) utt.voice = female;
  window.speechSynthesis.speak(utt);
}

function formatSessionTime(timestamp) {
  if (!timestamp) return "";
  let date;
  if (typeof timestamp.toDate === "function") {
    date = timestamp.toDate();
  } else if (typeof timestamp.toMillis === "function") {
    date = new Date(timestamp.toMillis());
  } else {
    date = new Date(timestamp);
  }
  if (isNaN(date.getTime())) return "Just now";
  const now = new Date();
  const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  if (date.getTime() >= todayStart - 86400000) {
    return date.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
  }
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

function chatErrorMessage(t, err) {
  const m = String(err?.message || err || "");
  const code = err?.code;
  if (code === "MISSING_GEMINI_KEY" || m.includes("VITE_GEMINI")) {
    return t("chat.errorConfig");
  }
  if (/401|403|not valid|invalid api key|API key|PERMISSION_DENIED|leaked/i.test(m)) {
    return t("chat.errorKeyInvalid");
  }
  if (
    /Failed to fetch|NetworkError|Load failed|network|fetch|ECONNREFUSED|CORS|blocked|SSL/i.test(
      m
    )
  ) {
    return t("chat.errorNetwork");
  }
  if (
    /429|quota|Resource exhausted|rate|too many|billing|payment required/i.test(m)
  ) {
    return t("chat.errorQuota");
  }
  if (import.meta.env.DEV && m.length > 0 && m.length < 400) {
    return `${t("chat.errorMsg")} (${m})`;
  }
  return t("chat.errorMsg");
}

function groupSessions(sessions, labels) {
  const groups = {
    [labels.today]: [],
    [labels.yesterday]: [],
    [labels.last7]: [],
    [labels.thisMonth]: [],
    [labels.older]: [],
  };
  const now = new Date();
  const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  const yesterdayStart = todayStart - 86400000;
  const last7DaysStart = todayStart - 7 * 86400000;
  const thisMonthStart = new Date(now.getFullYear(), now.getMonth(), 1).getTime();
  sessions.forEach((s) => {
    let t = s.createdAt?.toMillis ? s.createdAt.toMillis() : Date.now();
    if (t >= todayStart) groups[labels.today].push(s);
    else if (t >= yesterdayStart) groups[labels.yesterday].push(s);
    else if (t >= last7DaysStart) groups[labels.last7].push(s);
    else if (t >= thisMonthStart) groups[labels.thisMonth].push(s);
    else groups[labels.older].push(s);
  });
  return groups;
}

// ── Passive mood saver (standalone so it runs even on AI error) ──
function saveMoodIfNeeded(analyses, userId, setToastMsg) {
  if (analyses.length > 0 && analyses.length % 3 === 0) {
    const finalScore = aggregateSessionMood(analyses);
    const roundedScore = Math.round(finalScore);
    saveMoodLog(userId, roundedScore, "Auto-detected from conversation")
      .then(() => {
        setToastMsg(`Mood logged: ${roundedScore}/10`);
        setTimeout(() => setToastMsg(""), 3000);
      })
      .catch((err) => console.error("Mood save failed:", err));
  }
}

export default function ChatPage({ user, onCrisis, personality, trustedContact }) {
  const { t, lang } = useLanguage();
  const WELCOME = {
    role: "assistant",
    content: t("chat.welcome"),
  };

  const [sessions, setSessions] = useState([]);
  const [activeSessionId, setActiveSessionId] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sessionLoading, setSessionLoading] = useState(true);

  const [messages, setMessages] = useState([WELCOME]);
  const [geminiHistory, setGeminiHistory] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(false);
  const [recording, setRecording] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [voiceTooltip, setVoiceTooltip] = useState("");

  // Passive mood detection
  const [moodAnalyses, setMoodAnalyses] = useState([]);
  const [lastAiMessageTime, setLastAiMessageTime] = useState(null);
  const [inputStartTime, setInputStartTime] = useState(null);
  const [toastMsg, setToastMsg] = useState("");

  const bottomRef = useRef(null);
  const recognRef = useRef(null);
  const sendMsgRef = useRef(null);
  const moodAnalysesRef = useRef([]);

  // Keep ref in sync with state so we can access latest value anywhere
  useEffect(() => {
    moodAnalysesRef.current = moodAnalyses;
  }, [moodAnalyses]);

  useEffect(() => {
    (async () => {
      try {
        const historySessions = await getSessions(user.uid);
        const now = new Date();
        const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
        const todaysSession = historySessions.find((s) => {
          const t = s.createdAt?.toMillis ? s.createdAt.toMillis() : Date.now();
          return t >= todayStart;
        });
        let activeId = null;
        if (todaysSession) {
          activeId = todaysSession.id;
          setSessions(historySessions);
        } else {
          activeId = await createSession(user.uid);
          const newSession = {
            id: activeId,
            createdAt: { toMillis: () => Date.now(), toDate: () => new Date() },
            firstMessage: "New Chat",
            messageCount: 0,
          };
          setSessions([newSession, ...historySessions]);
        }
        await loadSessionChat(activeId);
      } catch (err) {
        console.error("Failed to load sessions:", err);
        // FAIL-SAFE: Allow chat to work even if Firestore is blocking
        setActiveSessionId("fallback-local-session");
      } finally {
        setSessionLoading(false);
      }
    })();
  }, [user.uid]);

  const loadSessionChat = async (sessionId) => {
    setFetching(true);
    setActiveSessionId(sessionId);
    setMoodAnalyses([]);
    moodAnalysesRef.current = [];
    if (window.innerWidth < 768) setSidebarOpen(false);
    try {
      const history = await getSessionMessages(user.uid, sessionId, 50);
      if (history.length > 0) {
        setMessages([WELCOME, ...history]);
        setGeminiHistory(
          history.map((m) => ({
            role: m.role === "assistant" ? "model" : "user",
            parts: [{ text: m.content }],
          }))
        );
      } else {
        setMessages([WELCOME]);
        setGeminiHistory([]);
      }
    } catch (err) {
      console.error("Failed to load session messages:", err);
    } finally {
      setFetching(false);
    }
  };

  const startNewChat = async () => {
    setFetching(true);
    setMoodAnalyses([]);
    moodAnalysesRef.current = [];
    if (window.innerWidth < 768) setSidebarOpen(false);
    try {
      const newId = await createSession(user.uid);
      const newSession = {
        id: newId,
        createdAt: { toMillis: () => Date.now(), toDate: () => new Date() },
        firstMessage: "New Chat",
        messageCount: 0,
      };
      setSessions((prev) => [newSession, ...prev]);
      setActiveSessionId(newId);
      setMessages([WELCOME]);
      setGeminiHistory([]);
    } catch (e) {
      console.error(e);
      setActiveSessionId(`fallback-local-session-${Date.now()}`);
      setMessages([WELCOME]);
      setGeminiHistory([]);
    } finally {
      setFetching(false);
    }
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (hasSpeechSynthesis) {
      window.speechSynthesis.getVoices();
      window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
    }
  }, []);

  const sendMessage = useCallback(
    async (textOverride) => {
      const text = (textOverride ?? input).trim();
      if (!text || loading || !activeSessionId) return;

      setInput("");
      const isFirstMessage = messages.length <= 1;
      setMessages((prev) => [...prev, { role: "user", content: text }]);
      setLoading(true);

      if (detectCrisis(text)) {
        onCrisis();
        // Silent background notification to trusted contact
        sendSilentCrisisSMS(trustedContact, user?.displayName?.split(" ")[0]).then(res => {
          if (res && !res.success) alert("SMS Failed: " + res.error);
          else if (res && res.success) alert("Crisis SMS sent successfully to your trusted contact!");
        });
      }

      // Capture timing BEFORE async calls
      const typingDuration = inputStartTime ? Date.now() - inputStartTime : 0;
      const responseDelay = lastAiMessageTime ? Date.now() - lastAiMessageTime : 0;
      setInputStartTime(null);

      // ── Run passive mood detection immediately (before AI call) ──
      const analysis = analyzeMessage(text, typingDuration, responseDelay);
      const updatedAnalyses = [...moodAnalysesRef.current, analysis];
      moodAnalysesRef.current = updatedAnalyses;
      setMoodAnalyses(updatedAnalyses);

      // Save mood every 3 messages — runs regardless of AI success/failure
      saveMoodIfNeeded(updatedAnalyses, user.uid, setToastMsg);

      try {
        if (isFirstMessage) {
          const preview = text.length > 35 ? text.substring(0, 35) + "..." : text;
          try {
            await updateSessionPreview(user.uid, activeSessionId, preview, 2);
          } catch (e) {
            console.warn("Could not update session preview (Firestore):", e);
          }
          setSessions((prev) =>
            prev.map((s) =>
              s.id === activeSessionId
                ? { ...s, firstMessage: preview, messageCount: 2 }
                : s
            )
          );
        }

        const aiText = await sendToGemini(
          geminiHistory,
          text,
          personality ?? null,
          lang,
          user?.displayName ?? null
        );
        if (!aiText) throw new Error("Gemini returned empty");
        if (aiText.includes("[CRISIS]")) {
          onCrisis();
          // Silent background notification if the AI detected it
          sendSilentCrisisSMS(trustedContact, user?.displayName?.split(" ")[0]).then(res => {
            if (res && !res.success) alert("SMS Failed: " + res.error);
            else if (res && res.success) alert("Crisis SMS sent successfully to your trusted contact!");
          });
        }
        const cleanText = aiText.replace("[CRISIS]", "").trim();

        const { score } = analyzeSentiment(text);

        setLastAiMessageTime(Date.now());

        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: cleanText },
        ]);
        setGeminiHistory((prev) => [
          ...prev,
          { role: "user", parts: [{ text }] },
          { role: "model", parts: [{ text: cleanText }] },
        ]);

        if (voiceEnabled) speakText(cleanText);

        try {
          await saveMessage(user.uid, activeSessionId, "user", text, score);
          await saveMessage(user.uid, activeSessionId, "assistant", cleanText, 0);
        } catch (dbErr) {
          console.warn("Firestore save failed, but chat continues:", dbErr);
        }
      } catch (err) {
        console.error("AI error:", err);
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: chatErrorMessage(t, err) },
        ]);
      } finally {
        setLoading(false);
      }
    },
    [
      input,
      loading,
      geminiHistory,
      voiceEnabled,
      user,
      onCrisis,
      activeSessionId,
      messages.length,
      inputStartTime,
      lastAiMessageTime,
      personality,
      lang,
      t,
    ]
  );

  useEffect(() => {
    sendMsgRef.current = sendMessage;
  }, [sendMessage]);

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const toggleRecording = () => {
    if (!hasSpeechRecognition) {
      setVoiceTooltip(t("chat.voiceUnsupported"));
      setTimeout(() => setVoiceTooltip(""), 3000);
      return;
    }
    if (recording) {
      recognRef.current?.stop();
      setRecording(false);
      return;
    }
    const recog = new SpeechRecognitionAPI();
    recog.lang = "en-IN";
    recog.interimResults = false;
    recog.maxAlternatives = 1;
    recog.onstart = () => setRecording(true);
    recog.onend = () => setRecording(false);
    recog.onerror = () => setRecording(false);
    recog.onresult = (e) => {
      const transcript = e.results[0][0].transcript;
      sendMsgRef.current(transcript);
    };
    recognRef.current = recog;
    recog.start();
  };

  const toggleVoiceOutput = () => {
    if (!hasSpeechSynthesis) {
      setVoiceTooltip(t("chat.speechUnsupported"));
      setTimeout(() => setVoiceTooltip(""), 3000);
      return;
    }
    if (voiceEnabled) window.speechSynthesis.cancel();
    setVoiceEnabled((v) => !v);
  };

  const sessionLabels = {
    today: t("chat.today"),
    yesterday: t("chat.yesterday"),
    last7: t("chat.last7"),
    thisMonth: t("chat.thisMonth"),
    older: t("chat.older"),
  };
  const groupedSessions = groupSessions(sessions, sessionLabels);

  return (
    <div className="flex flex-1 min-h-0 w-full relative overflow-hidden bg-[var(--page-background)]">

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-30 md:hidden animate-fade-in"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div
        className={`absolute md:relative z-40 md:z-0 h-full w-[260px] shrink-0 bg-[var(--surface-primary)] border-r border-[var(--border-primary)] flex flex-col transform transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="p-4 border-b border-[var(--border-primary)] shrink-0">
          <button
            onClick={startNewChat}
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-[#D5DEE6] bg-[#E4EAF0] hover:bg-[#D9E3EC] text-[#536D85] text-[14px] font-medium transition-all shadow-sm"
          >
            {t("chat.newChat")}
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-7 scroll-smooth">
          {sessionLoading ? (
            <div className="flex justify-center py-8">
              <Loader2 className="w-5 h-5 animate-spin text-[#647F98]" />
            </div>
          ) : (
            Object.entries(groupedSessions).map(([label, groupItems]) => {
              if (groupItems.length === 0) return null;
              return (
                <div key={label} className="animate-fade-in">
                  <h3 className="text-[11px] font-semibold text-[#777B80] tracking-wider uppercase mb-2 px-2">
                    {label}
                  </h3>
                  <div className="space-y-0.5">
                    {groupItems.map((s, idx) => {
                      const isActive = s.id === activeSessionId;
                      return (
                        <button
                          key={s.id}
                          onClick={() => loadSessionChat(s.id)}
                          className={`w-full text-left px-3 py-2.5 rounded-lg flex flex-col gap-1 transition-all duration-150 relative group ${
                            isActive
                              ? "bg-[#E4EAF0] text-[#536D85] font-semibold shadow-sm"
                              : "text-[#777B80] hover:bg-[#F6F3EE] hover:text-[#303D4A]"
                          }`}
                          style={{ animationDelay: `${idx * 50}ms` }}
                        >
                          {isActive && (
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-1 bg-[#647F98] rounded-r-full shadow-sm" />
                          )}
                          <span className="text-[14px] font-medium leading-tight truncate px-1">
                            {s.firstMessage || "New Chat"}
                          </span>
                          <span className="text-[11px] text-[#777B80] font-medium px-1">
                            {formatSessionTime(s.createdAt)}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      <div className="flex-1 flex flex-col h-full min-h-0 min-w-0 relative overflow-x-hidden z-0 bg-[var(--page-background)]">
          {/* Header */}
          <div className="px-6 sm:px-8 pt-6 pb-5 border-b border-[var(--border-primary)] mb-4 shrink-0 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <button
                className="md:hidden p-2 -ml-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] rounded-lg hover:bg-[var(--surface-secondary)] transition-colors"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu className="w-5 h-5" />
              </button>
              <div className="min-w-0">
                <h1 className="text-2xl sm:text-3xl font-semibold text-[var(--text-primary)] tracking-tight flex items-center gap-2 truncate">
                  {t("chat.title")}
                  {fetching && (
                    <Loader2 className="w-4 h-4 animate-spin text-[#647F98] ml-2 shrink-0" />
                  )}
                </h1>
                <p className="text-[var(--text-secondary)] text-sm mt-0.5 hidden sm:block truncate">
                  {t("chat.subtitle")}
                </p>
              </div>
            </div>

            {/* SOS button */}
            <button
              onClick={onCrisis}
              className="btn-sos py-2 px-3 sm:px-4 text-xs sm:text-sm font-semibold flex items-center gap-1.5 shrink-0"
              title="Immediate Crisis Helpline & SOS Support"
            >
              <span>🆘</span>
              <span className="hidden sm:inline">{t("crisis.title") || "Crisis Support"}</span>
              <span className="sm:hidden">SOS</span>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto overflow-x-hidden px-6 sm:px-8 space-y-6 sm:space-y-8 mb-4 min-h-0 w-full min-w-0 pb-4 scroll-smooth [scrollbar-gutter:stable]">
            {!fetching &&
              messages.map((msg, i) => (
                <Bubble key={i} msg={msg} user={user} index={i} />
              ))}
            {loading && <TypingIndicator />}
            <div ref={bottomRef} className="h-4" />
          </div>

          {/* Input Bar */}
          <div className="sticky bottom-0 bg-[var(--page-background)]/90 backdrop-blur-xl border-t border-[var(--border-primary)] px-6 sm:px-8 pt-4 pb-5 z-10 shrink-0">
            <div className="relative max-w-[800px] mx-auto">

              {toastMsg && (
                <div className="absolute -top-12 left-0 right-0 flex justify-center animate-fade-in">
                  <div className="text-xs text-[#536D85] bg-[#E4EAF0] border border-[#D5DEE6] rounded-full py-1.5 px-4 shadow-sm">
                    ✓ {toastMsg}
                  </div>
                </div>
              )}

              {voiceTooltip && (
                <div className="absolute -top-12 left-0 right-0 text-center text-xs text-[#B88745] bg-[#B88745]/10 border border-[#B88745]/20 rounded-lg py-2 px-3 mx-auto max-w-sm animate-fade-in shadow-sm">
                  {voiceTooltip}
                </div>
              )}

              <div className="flex items-end gap-2 bg-[var(--surface-primary)] border border-[var(--border-primary)] rounded-2xl p-2 shadow-sm focus-within:border-[#647F98] focus-within:ring-1 focus-within:ring-[#647F98]/20 transition-all duration-200">
                <button
                  onClick={toggleVoiceOutput}
                  title={voiceEnabled ? "Mute AI voice" : "Enable AI voice"}
                  className={`p-2.5 rounded-xl transition-colors shrink-0 ${
                    voiceEnabled
                      ? "text-[#647F98] bg-[#E4EAF0] hover:bg-[#D9E3EC]"
                      : "text-[#777B80] hover:text-[#303D4A] hover:bg-[#F6F3EE]"
                  }`}
                >
                  {voiceEnabled ? (
                    <Volume2 className="w-[18px] h-[18px]" />
                  ) : (
                    <VolumeX className="w-[18px] h-[18px]" />
                  )}
                </button>

                <textarea
                  className="flex-1 text-[var(--text-primary)] placeholder-[var(--text-secondary)] bg-transparent resize-none text-[15px] leading-relaxed px-2 py-3 focus:outline-none max-h-32"
                  placeholder={t("chat.placeholder")}
                  value={input}
                  onChange={(e) => {
                    if (!inputStartTime) setInputStartTime(Date.now());
                    setInput(e.target.value);
                  }}
                  onKeyDown={handleKey}
                  rows={1}
                  disabled={loading || fetching}
                />

                <div className="flex items-center gap-1 shrink-0 bg-[#E4EAF0] rounded-xl p-1">
                  <button
                    onClick={toggleRecording}
                    disabled={fetching}
                    title={recording ? "Stop recording" : "Start voice input"}
                    className={`relative p-2 rounded-lg transition-colors ${
                      recording
                        ? "text-[#C64C4C] bg-[#C64C4C]/10"
                        : "text-[#777B80] hover:text-[#303D4A] hover:bg-[#D9E3EC] disabled:opacity-50"
                    }`}
                  >
                    {recording ? (
                      <MicOff className="w-[18px] h-[18px]" />
                    ) : (
                      <Mic className="w-[18px] h-[18px]" />
                    )}
                    {recording && (
                      <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#C64C4C] animate-pulse" />
                    )}
                  </button>

                  <button
                    onClick={() => sendMessage()}
                    disabled={loading || fetching || !input.trim()}
                    className={`p-2 rounded-lg transition-all flex items-center justify-center ${
                      input.trim() && !loading && !fetching
                        ? "bg-[#647F98] hover:bg-[#536D85] text-white shadow-sm"
                        : "bg-transparent text-[#777B80] cursor-not-allowed"
                    }`}
                  >
                    {loading ? (
                      <Loader2 className="w-[18px] h-[18px] animate-spin" />
                    ) : (
                      <Send className="w-[18px] h-[18px]" />
                    )}
                  </button>
                </div>
              </div>

              {recording && (
                <div className="flex items-center justify-center gap-1.5 py-3 animate-fade-in absolute -top-14 left-1/2 -translate-x-1/2 bg-[var(--surface-primary)] border border-[var(--border-primary)] rounded-full px-6 shadow-md w-max">
                  <span className="text-[#C64C4C] text-xs font-medium mr-1 tracking-wide">
                    {t("chat.listening")}
                  </span>
                  {Array.from({ length: 5 }, (_, i) => (
                    <span
                      key={i}
                      className="waveform-bar h-2.5 bg-[#C64C4C]"
                      style={{ animationDelay: `${i * 0.15}s` }}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
  );
}

function Bubble({ msg, user, index }) {
  const isUser = msg.role === "user";
  const [imgFailed, setImgFailed] = useState(false);
  const showPhoto = Boolean(user?.photoURL) && !imgFailed;
  const parts = msg.content.split("**");
  const formatted = parts.map((p, i) =>
    i % 2 === 1 ? (
      <strong key={i} className={`font-semibold ${isUser ? 'text-white' : 'text-[#303D4A]'}`}>
        {p}
      </strong>
    ) : (
      p
    )
  );

  return (
    <div
      className={`flex w-full min-w-0 gap-3 sm:gap-4 ${isUser ? "flex-row-reverse" : "flex-row"} animate-fade-in`}
      style={{ animationFillMode: "both" }}
    >
      <div className="shrink-0 mt-1 w-9">
        {isUser ? (
          showPhoto ? (
            <img
              src={user.photoURL}
              alt=""
              onError={() => setImgFailed(true)}
              className="w-9 h-9 rounded-full object-cover shadow-sm ring-1 ring-white/10"
            />
          ) : (
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold text-white bg-[var(--primary)]/80 ring-1 ring-black/5 shadow-sm"
              aria-hidden
            >
              {(user?.displayName || user?.email || "U").charAt(0).toUpperCase()}
            </div>
          )
        ) : (
          <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg bg-[var(--bg-sidebar)] border border-[var(--border)] shadow-sm">
            🧠
          </div>
        )}
      </div>
      <div
        className={`min-w-0 max-w-[min(100%,_90%)] sm:max-w-[75%] px-4 sm:px-5 py-4 text-[15px] leading-relaxed whitespace-pre-wrap [overflow-wrap:anywhere] shadow-sm ${
          isUser
            ? "bg-[var(--primary)] text-white rounded-2xl rounded-tr-sm"
            : "bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-main)] rounded-2xl rounded-tl-sm prose-custom"
        }`}
      >
        {formatted}
      </div>
    </div>
  );
}

function TypingIndicator() {
  return (
    <div className="flex w-full min-w-0 gap-3 sm:gap-4 animate-fade-in">
      <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg shrink-0 bg-[var(--bg-sidebar)] border border-[var(--border)] shadow-sm mt-1">
        🧠
      </div>
      <div className="bg-[var(--bg-card)] border border-[var(--border)] px-6 py-4 rounded-2xl rounded-tl-sm shadow-sm flex items-center">
        <div className="typing-wave flex gap-1.5 items-center h-2">
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}     