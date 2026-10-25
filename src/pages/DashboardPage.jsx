// src/pages/DashboardPage.jsx
import { useState, useEffect, useRef } from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, ReferenceLine,
} from "recharts";
import { loadMoodLogs, loadAssessments, saveMoodLog } from "../firebase";
import { getAIInsights } from "../gemini";
import { Loader2, Sparkles, TrendingUp, NotebookPen } from "lucide-react";
import InsightsModal from "../components/InsightsModal";
import { useLanguage } from "../context/LanguageContext";

export default function DashboardPage({ user }) {
  const { t, lang } = useLanguage();
  const [moodLogs, setMoodLogs] = useState([]);
  const [phq9, setPhq9] = useState([]);
  const [gad7, setGad7] = useState([]);
  const [moodScore, setMoodScore] = useState(5);
  const [moodNote, setMoodNote] = useState("");
  const [logging, setLogging] = useState(false);
  const [loading, setLoading] = useState(true);

  // Insights state
  const [showInsights, setShowInsights] = useState(false);
  const [insightsText, setInsightsText] = useState("");
  const [insightsLoading, setInsightsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const [logs, p, g] = await Promise.all([
          loadMoodLogs(user.uid, 14),
          loadAssessments(user.uid, "phq9", 5),
          loadAssessments(user.uid, "gad7", 5),
        ]);
        setMoodLogs(logs); setPhq9(p); setGad7(g);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [user.uid]);

  const logMood = async () => {
    setLogging(true);
    try {
      await saveMoodLog(user.uid, moodScore, moodNote);
      const updated = await loadMoodLogs(user.uid, 14);
      setMoodLogs(updated);
      setMoodNote("");
    } catch (err) { console.error(err); }
    setLogging(false);
  };

  // Map English severity labels (stored in Firestore) → translation keys
  const SEV_MAP = {
    "Minimal": "sev.Minimal",
    "Mild": "sev.Mild",
    "Moderate": "sev.Moderate",
    "Moderately Severe": "sev.ModeratelySevere",
    "Severe": "sev.Severe",
    "Minimal Anxiety": "sev.MinimalAnxiety",
    "Mild Anxiety": "sev.MildAnxiety",
    "Moderate Anxiety": "sev.ModerateAnxiety",
    "Severe Anxiety": "sev.SevereAnxiety",
  };
  const translateSeverity = (label) => label ? (t(SEV_MAP[label] ?? label) ?? label) : label;

  const fetchInsights = async () => {
    setShowInsights(true);
    if (insightsText) return;
    setInsightsLoading(true);
    try {
      const [latestLogs, latestPhq9, latestGad7] = await Promise.all([
        loadMoodLogs(user.uid, 14),
        loadAssessments(user.uid, "phq9", 3),
        loadAssessments(user.uid, "gad7", 3),
      ]);
      const text = await getAIInsights(latestLogs, latestPhq9, latestGad7, lang);
      setInsightsText(text);
    } catch (err) {
      console.error(err);
      setInsightsText("Unable to generate insights at this time. Please try again later.");
    } finally {
      setInsightsLoading(false);
    }
  };

  const avgMood = moodLogs.length
    ? (moodLogs.reduce((s, l) => s + l.score, 0) / moodLogs.length).toFixed(1)
    : null;

  if (loading) return (
    <div className="flex-1 flex items-center justify-center">
      <div className="spinner-orbital" />
    </div>
  );

  return (
    <div className="flex-1 w-full max-w-[1000px] mx-auto animate-fade-in relative pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[var(--border-primary)] mb-8">
        <div>
          <h1 className="text-3xl font-semibold text-[var(--text-primary)] tracking-tight">{t("dash.title")}</h1>
          <p className="text-sm mt-1.5 text-[var(--text-secondary)]">{t("dash.sub")}</p>
        </div>
        <button
          onClick={fetchInsights}
          className="btn-primary group flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium shadow-sm"
        >
          <Sparkles className="w-4 h-4 text-white/90 group-hover:scale-105 transition-transform" />
          <span>{t("dash.insights")}</span>
        </button>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
        <div className="bg-[var(--surface-primary)] border border-[var(--border-primary)] rounded-xl p-6 shadow-sm hover:border-[#879BAD] transition-colors group flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-xl bg-[#E4EAF0] flex items-center justify-center mt-1">
              <TrendingUp className="w-5 h-5 text-[#536D85]" />
            </div>
            <div className="text-[11px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider px-2 py-0.5 rounded bg-[#FBFAF7] border border-[var(--border-primary)]">{t("dash.overall")}</div>
          </div>
          <div>
            <div className="text-3xl font-semibold text-[var(--text-primary)] tracking-tight">{avgMood ?? "—"}<span className="text-base font-normal text-[var(--text-secondary)] ml-1">/10</span></div>
            <div className="text-[13px] text-[var(--text-secondary)] mt-1.5 font-medium">{t("dash.avgMood")}</div>
          </div>
        </div>

        <div className="bg-[var(--surface-primary)] border border-[var(--border-primary)] rounded-xl p-6 shadow-sm hover:border-[#879BAD] transition-colors group flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-xl bg-[#EAE5ED] flex items-center justify-center mt-1 text-xl">
              😔
            </div>
            <div className="text-[11px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider px-2 py-0.5 rounded bg-[#FBFAF7] border border-[var(--border-primary)]">{t("dash.depression")}</div>
          </div>
          <div>
            <div className="text-3xl font-semibold text-[var(--text-primary)] tracking-tight">{phq9[0] ? String(phq9[0].totalScore) : "—"}<span className="text-base font-normal text-[var(--text-secondary)] ml-1">{phq9[0] ? "/27" : ""}</span></div>
            <div className="text-[13px] text-[var(--text-secondary)] mt-1.5 font-medium">{phq9[0]?.severity ? translateSeverity(phq9[0].severity) : t("dash.notTaken")}</div>
          </div>
        </div>

        <div className="bg-[var(--surface-primary)] border border-[var(--border-primary)] rounded-xl p-6 shadow-sm hover:border-[#879BAD] transition-colors group flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-xl bg-[#F0E5DC] flex items-center justify-center mt-1 text-xl">
              😰
            </div>
            <div className="text-[11px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider px-2 py-0.5 rounded bg-[#FBFAF7] border border-[var(--border-primary)]">{t("dash.anxiety")}</div>
          </div>
          <div>
            <div className="text-3xl font-semibold text-[var(--text-primary)] tracking-tight">{gad7[0] ? String(gad7[0].totalScore) : "—"}<span className="text-base font-normal text-[var(--text-secondary)] ml-1">{gad7[0] ? "/21" : ""}</span></div>
            <div className="text-[13px] text-[var(--text-secondary)] mt-1.5 font-medium">{gad7[0]?.severity ? translateSeverity(gad7[0].severity) : t("dash.notTaken")}</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">

        {/* Mood Chart */}
        <div className="lg:col-span-2 bg-[var(--surface-primary)] border border-[var(--border-primary)] rounded-xl p-6 sm:p-7 shadow-sm">
          <h2 className="text-[16px] font-semibold text-[var(--text-primary)] mb-1">{t("dash.moodTrend")}</h2>
          <p className="text-[13px] text-[var(--text-secondary)] mb-6">{t("dash.moodTrendSub")}</p>
          {moodLogs.length === 0 ? (
            <div className="flex items-center justify-center h-48 border border-dashed border-[var(--border-primary)] rounded-xl bg-[#FBFAF7]">
              <p className="text-sm text-[var(--text-secondary)]">{t("dash.noLogs")}</p>
            </div>
          ) : (
            <ResponsiveContainer width="100%" height={260}>
              <LineChart data={moodLogs} margin={{ top: 5, right: 10, left: -25, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(48, 61, 74, 0.08)" vertical={false} />
                <XAxis dataKey="date" tick={{ fill: "#777B80", fontSize: 11, fontWeight: 500 }} axisLine={false} tickLine={false} dy={15} />
                <YAxis domain={[1, 10]} tick={{ fill: "#777B80", fontSize: 11, fontWeight: 500 }} axisLine={false} tickLine={false} dx={-10} />
                <Tooltip
                  contentStyle={{ background: "#FFFFFF", border: "1px solid #E4DFD7", borderRadius: "10px", color: "#303D4A", boxShadow: "0 2px 8px rgba(48, 61, 74, 0.06)" }}
                  itemStyle={{ color: "#647F98", fontWeight: 600 }}
                  labelStyle={{ color: "#777B80", marginBottom: "4px", fontSize: "12px" }}
                  cursor={{ stroke: 'rgba(100, 127, 152, 0.2)', strokeWidth: 1, strokeDasharray: "4 4" }}
                />
                <ReferenceLine y={5} stroke="rgba(48, 61, 74, 0.12)" strokeDasharray="4 4" />
                <Line
                  type="monotone"
                  dataKey="score"
                  stroke="#647F98"
                  strokeWidth={2.5}
                  dot={{ fill: "#647F98", r: 4, strokeWidth: 0 }}
                  activeDot={{ r: 6, fill: "#536D85", stroke: "#FFFFFF", strokeWidth: 2 }}
                  isAnimationActive={false}
                />
              </LineChart>
            </ResponsiveContainer>
          )}
        </div>

        {/* Log Mood Sidebar Panel */}
        <div className="lg:col-span-1 bg-[var(--surface-primary)] border border-[var(--border-primary)] rounded-xl p-6 sm:p-7 shadow-sm flex flex-col">
          <div className="flex items-center gap-2.5 mb-1">
            <NotebookPen className="w-4 h-4 text-[#647F98]" />
            <h2 className="text-[16px] font-semibold text-[var(--text-primary)]">{t("dash.logMood")}</h2>
          </div>
          <p className="text-[13px] text-[var(--text-secondary)] mb-5">{t("dash.logMoodSub")}</p>

          <div className="mb-6 flex-1">
            {/* Quick Mood Selection Buttons (Prompt Rule 5: gentle background colors) */}
            <div className="grid grid-cols-3 gap-2 mb-5">
              <button
                type="button"
                onClick={() => setMoodScore(3)}
                className={`p-2.5 rounded-[10px] text-center transition-all duration-180 border ${
                  moodScore <= 3
                    ? "bg-[#EAE5ED] border-[#647F98] ring-2 ring-[#647F98]/20 shadow-sm"
                    : "bg-[#EAE5ED]/70 border-transparent hover:bg-[#EAE5ED]"
                }`}
              >
                <div className="text-xl mb-1">😞</div>
                <div className="text-xs font-medium text-[#303D4A]">{t("dash.low")}</div>
              </button>

              <button
                type="button"
                onClick={() => setMoodScore(5)}
                className={`p-2.5 rounded-[10px] text-center transition-all duration-180 border ${
                  moodScore >= 4 && moodScore <= 7
                    ? "bg-[#F0E5DC] border-[#647F98] ring-2 ring-[#647F98]/20 shadow-sm"
                    : "bg-[#F0E5DC]/70 border-transparent hover:bg-[#F0E5DC]"
                }`}
              >
                <div className="text-xl mb-1">😐</div>
                <div className="text-xs font-medium text-[#303D4A]">Neutral</div>
              </button>

              <button
                type="button"
                onClick={() => setMoodScore(9)}
                className={`p-2.5 rounded-[10px] text-center transition-all duration-180 border ${
                  moodScore >= 8
                    ? "bg-[#E4EAF0] border-[#647F98] ring-2 ring-[#647F98]/20 shadow-sm"
                    : "bg-[#E4EAF0]/70 border-transparent hover:bg-[#E4EAF0]"
                }`}
              >
                <div className="text-xl mb-1">😄</div>
                <div className="text-xs font-medium text-[#303D4A]">{t("dash.high")}</div>
              </button>
            </div>

            {/* Fine-tuning Score Slider */}
            <div className="flex justify-between items-center text-xs mb-3 text-[var(--text-secondary)] font-medium">
              <span>Score Level</span>
              <span className="font-semibold text-sm text-[#536D85] bg-[#E4EAF0] px-3 py-1 rounded-lg border border-[#D5DEE6]">{moodScore} / 10</span>
            </div>
            <input
              type="range" min={1} max={10} value={moodScore}
              onChange={(e) => setMoodScore(Number(e.target.value))}
              className="w-full cursor-pointer accent-[#647F98] mb-5 h-2 bg-[#E4DFD7] rounded-lg appearance-none"
            />
            <div className="relative">
              <textarea
                className="w-full bg-[var(--input-bg)] text-[var(--text-primary)] placeholder-[var(--text-muted)] border border-[var(--input-border)] rounded-xl px-3.5 py-2.5 text-sm leading-relaxed resize-none focus:outline-none focus:border-[#647F98] focus:ring-2 focus:ring-[#647F98]/15 transition-all"
                placeholder={t("dash.notePlaceholder")}
                rows={3}
                value={moodNote}
                onChange={(e) => setMoodNote(e.target.value)}
              />
            </div>
          </div>
          <button
            onClick={logMood}
            disabled={logging}
            className="btn-primary w-full py-2.5 text-sm font-semibold flex justify-center items-center gap-2 shadow-sm"
          >
            {logging ? <Loader2 className="w-4 h-4 animate-spin" /> : t("dash.saveEntry")}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* PHQ-9 History */}
        {phq9.length > 0 && (
          <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-6 shadow-sm">
            <h2 className="text-[15px] font-semibold text-[var(--text-main)] mb-6">{t("dash.phq9History")}</h2>
            <div className="space-y-5">
              {phq9.map((a, i) => <HistoryRow key={i} a={a} max={27} t={t} translateSeverity={translateSeverity} />)}
            </div>
          </div>
        )}

        {/* GAD-7 History */}
        {gad7.length > 0 && (
          <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-6 shadow-sm">
            <h2 className="text-[15px] font-semibold text-[var(--text-main)] mb-6">{t("dash.gad7History")}</h2>
            <div className="space-y-5">
              {gad7.map((a, i) => <HistoryRow key={i} a={a} max={21} t={t} translateSeverity={translateSeverity} />)}
            </div>
          </div>
        )}
      </div>

      {/* AI Insights Modal */}
      {showInsights && (
        <InsightsModal
          userId={user.uid}
          text={insightsText}
          loading={insightsLoading}
          onClose={() => setShowInsights(false)}
        />
      )}
    </div>
  );
}

function HistoryRow({ a, max, t, translateSeverity }) {
  const pct = Math.round((a.totalScore / max) * 100);
  const bar = pct <= 33 ? "#527A66" : pct <= 55 ? "#B88745" : pct <= 74 ? "#C49A82" : "#C64C4C";
  return (
    <div className="flex items-center gap-5 group">
      <div className="text-[12px] font-medium w-16 flex-shrink-0 text-[var(--text-secondary)]">{a.date}</div>
      <div className="flex-1">
        <div className="flex justify-between text-[12px] mb-1.5 font-medium">
          <span className="text-[var(--text-primary)]">{translateSeverity(a.severity)}</span>
          <span className="text-[var(--text-secondary)]">{a.totalScore}<span className="text-[var(--text-muted)]">/{max}</span></span>
        </div>
        <div className="w-full rounded-full h-1.5 bg-[#E4DFD7] overflow-hidden">
          <div
            className="h-full transition-all duration-500 ease-out rounded-full"
            style={{ width: `${pct}%`, background: bar }}
          />
        </div>
      </div>
    </div>
  );
}
