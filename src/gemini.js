// src/gemini.js
import {
  GoogleGenerativeAI,
  HarmBlockThreshold,
  HarmCategory,
} from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(
  typeof API_KEY === "string" ? API_KEY : ""
);

/** Soften default filters: wellness/health phrasing is often misclassified as "dangerous". */
const CHAT_SAFETY_SETTINGS = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
  },
];

/**
 * `gemini-1.5-flash` is not available on current v1beta for many keys (404).
 * Order: prefer 2.5, then flash-lite and 2.0 variants (separate per-model quota on free tier).
 */
const CHAT_MODELS = [
  "gemini-2.5-flash",
  "gemini-2.5-flash-lite",
  "gemini-2.0-flash-001",
  "gemini-2.0-flash",
  "gemini-flash-latest",
];

function getTrimmedApiKey() {
  const k = import.meta.env.VITE_GEMINI_API_KEY;
  if (typeof k !== "string" || !k.trim()) {
    const err = new Error("VITE_GEMINI_API_KEY_MISSING");
    err.code = "MISSING_GEMINI_KEY";
    throw err;
  }
  return k.trim();
}

/**
 * Prefer response.text(), but recover text from parts if the helper throws
 * (e.g. some edge cases) and surface block reasons clearly.
 * @param {import("@google/generative-ai").GenerateContentResult} result
 * @returns {string}
 */
function getChatResponseText(result) {
  const response = result?.response;
  if (!response) {
    throw new Error("No response from Gemini");
  }
  if (response.promptFeedback?.blockReason) {
    throw new Error(
      `Prompt was blocked: ${response.promptFeedback.blockReason}`
    );
  }
  try {
    const text = response.text();
    if (text && String(text).trim()) return String(text).trim();
  } catch {
    // Fall through: manual extraction or rethrow with finish reason
  }
  const candidate = response.candidates?.[0];
  const parts = candidate?.content?.parts;
  if (Array.isArray(parts) && parts.length) {
    const joined = parts
      .map((p) => (p && p.text != null ? String(p.text) : ""))
      .join("")
      .trim();
    if (joined) return joined;
  }
  const fr = candidate?.finishReason;
  if (fr === "SAFETY" || fr === "RECITATION") {
    throw new Error(
      "The model could not complete a reply for that message. Try rephrasing or ask something else."
    );
  }
  throw new Error(
    fr
      ? `The model did not return text (reason: ${fr})`
      : "The model did not return any text"
  );
}

// ── Base System Prompt ────────────────────────────────────────────
const BASE_SYSTEM_PROMPT = `You are MindfulSpace, a deeply empathetic and warm emotional companion. Your purpose is to be a safe, non-judgmental space where people can open up about their inner worlds. You aren't just a bot; you are a compassionate listener who understands the weight of human emotions.

PERSONALITY & VOICE:
- **Be Human, Not Robotic**: Avoid phrases like "As an AI," "I understand how you feel," or "It's important to..." instead, use natural, warm language. Speak like a close, wise friend.
- **Deep Empathy**: Always validate the user's feelings first. If they are hurting, sit with them in that feeling before trying to "fix" it.
- **Encourage Openness**: Use gentle, open-ended questions that invite the user to share more. (e.g., "That sounds like a lot to carry... what does that feel like in your body right now?" or "I'm here for all of it, if you want to let it out.")
- **Flow**: Keep responses conversational and concise. Avoid long lists unless specifically asked. Use the user's name naturally.

EMOTIONAL WELL-BEING & ADVICE:
- **Anxiety & Stress**: If you detect anxiety, overwhelm, or stress, offer immediate comfort and 1-2 gentle, practical grounding techniques (like a quick breathing exercise or a small sensory check-in). Don't just list them—introduce them as something you can do together.
- **Vulnerability**: If a user shares something difficult, thank them for trusting you. Make them feel brave for speaking up.

CRISIS & SAFETY (CRITICAL):
- **Crisis Detection**: If the user uses life-threatening language (e.g., "I don't want to live," "I want to end it," "The world is better without me"), respond with intense compassion, tell them they matter, and **MANDATORY**: add the tag [CRISIS] at the very end of your message. This triggers a safety popup.
- **No Toxicity**: Never use toxic positivity (e.g., "Just be happy!"). Acknowledge that life is hard.

NEVER:
- Give medical diagnoses or prescribe medication.
- Sound dismissive or repetitive.
- Refuse to help with general wellness questions.`;

function buildLanguageLine(language) {
  const languageInstructions = {
    en: "Reply in English only.",
    hi: "Reply in Hindi (Devanagari script, everyday Indian Hindi) only.",
    mr: "Reply in Marathi (मराठी) only.",
  };
  const line = languageInstructions[language] || languageInstructions.en;
  return `

LANGUAGE:
${line}`;
}

/** User display name (first name preferred) for the model */
function buildUserNameBlock(displayName) {
  const name = (displayName || "").trim() || "friend";
  return `

USER (address them by this name when appropriate):
Preferred name: ${name}`;
}

/** 
 * Internal mapping to ensure the AI gets consistent English instructions 
 * regardless of the user's interface language.
 */
const PERSONALITY_MAP = {
  // Q1: Description
  "personality.q1.o1": "Introverted (prefer alone time, be gentle)",
  "personality.q1.o2": "Extroverted (enjoys socializing, be engaging)",
  "personality.q1.o3": "Ambivert (somewhere in between)",
  // Q2: Needs
  "personality.q2.o1": "Just someone to listen (avoid giving unsolicited advice)",
  "personality.q2.o2": "Practical advice (provide actionable steps)",
  "personality.q2.o3": "Distraction (light conversation, positivity)",
  "personality.q2.o4": "Motivation (energetic and encouraging)",
  // Q3: Comfort
  "personality.q3.o1": "Very comfortable talking about emotions",
  "personality.q3.o2": "Somewhat comfortable",
  "personality.q3.o3": "Not very comfortable (be patient and soft)",
  "personality.q3.o4": "Finds it difficult to open up (be extremely gentle)",
  // Q4: Coping
  "personality.q4.o1": "Copes by talking to others",
  "personality.q4.o2": "Copes by keeping to themselves",
  "personality.q4.o3": "Copes by staying busy",
  "personality.q4.o4": "Does not cope well (needs extra support)",
  // Q5: Situation
  "personality.q5.o1": "Currently feeling anxious",
  "personality.q5.o2": "Currently feeling low or sad",
  "personality.q5.o3": "Currently feeling stressed",
  "personality.q5.o4": "Exploring the app (general check-in)",
  // Q6: Support Tone
  "personality.q6.o1": "Prefers Gentle and Empathetic support",
  "personality.q6.o2": "Prefers Motivational and Energetic support",
  "personality.q6.o3": "Prefers Calm and Practical support",
  "personality.q6.o4": "No specific tone preference",
};

/** Build personality note to inject into system prompt */
function buildPersonalityNote(personality) {
  if (!personality) return "";

  const profile = {
    desc: PERSONALITY_MAP[personality.personality] || "Unknown",
    needs: PERSONALITY_MAP[personality.support] || "Unknown",
    comfort: PERSONALITY_MAP[personality.comfort] || "Unknown",
    coping: PERSONALITY_MAP[personality.coping] || "Unknown",
    situation: PERSONALITY_MAP[personality.situation] || "Unknown",
    tone: PERSONALITY_MAP[personality.tone] || "Unknown",
  };

  return `

USER PROFILE & ADAPTATION RULES:
- **User Description**: ${profile.desc}
- **Primary Need**: ${profile.needs}
- **Emotional Comfort**: ${profile.comfort}
- **Stress Response**: ${profile.coping}
- **Current State**: ${profile.situation}
- **Requested Tone**: ${profile.tone}

INSTRUCTIONS FOR ADAPTATION:
1. If the user needs "Just someone to listen", do not provide advice unless they explicitly ask. Just validate and mirror.
2. If they prefer a "Gentle" or "Calm" tone, use softer words and avoid exclamation marks.
3. If they are "Feeling anxious" or "Low", prioritize safety and immediate emotional validation.
4. If they find it "difficult to open up", be the one to gently lead the conversation with non-intrusive questions.
5. Always respect the "Requested Tone" above in every sentence you write.`;
}

/**
 * Send a message to Gemini with full conversation history.
 * @param {Array} history - prior turns: [{ role: 'user' | 'model', parts: [{ text: string }] }]
 * @param {string} message - the new user message
 * @param {Object|null} personality - profile from Firestore
 * @param {string} language - 'en' | 'hi' | 'mr' (matches LanguageContext)
 * @param {string|null} userDisplayName - for personalization
 * @returns {Promise<string>} AI response text
 */
/**
 * Only stop trying other models for clear auth / key problems.
 * 404/429/5xx can differ per model; 429 often succeeds on another model with its own cap.
 */
function isNonRetriableChatError(err) {
  const s = err?.status;
  if (s === 401 || s === 403) return true;
  const m = String(err?.message || err || "");
  if (/MISSING_GEMINI|VITE_GEMINI_API_KEY_MISSING/.test(m)) return true;
  if (
    /API key not valid|API_KEY_INVALID|invalid API key|leaked|PERMISSION_DENIED|not enabled for the Generative Language API/i.test(
      m
    )
  ) {
    return true;
  }
  return false;
}

/**
 * @param {Array} history
 * @param {string} message
 * @returns {import("@google/generative-ai").Content[]}
 */
function buildChatRequestContents(history, message) {
  const text = String(message ?? "").trim();
  if (!text) {
    throw new Error("Empty user message");
  }
  const h = (history || []).map((t) => ({
    role: t.role,
    parts: t.parts,
  }));
  h.push({ role: "user", parts: [{ text }] });
  while (h.length > 0 && h[0].role !== "user") {
    h.shift();
  }
  if (h.length === 0) {
    h.push({ role: "user", parts: [{ text }] });
  }
  return h;
}

export async function sendToGemini(
  history,
  message,
  personality = null,
  language = "en",
  userDisplayName = null
) {
  const key = getTrimmedApiKey();
  const gen = new GoogleGenerativeAI(key);

  const nameForPrompt =
    (userDisplayName && userDisplayName.split(" ")[0]) || userDisplayName;
  const systemText =
    BASE_SYSTEM_PROMPT +
    buildUserNameBlock(nameForPrompt) +
    buildLanguageLine(language) +
    buildPersonalityNote(personality);

  const contents = buildChatRequestContents(history, message);
  let lastError;

  for (let i = 0; i < CHAT_MODELS.length; i++) {
    const modelName = CHAT_MODELS[i];
    try {
      const model = gen.getGenerativeModel({
        model: modelName,
        systemInstruction: systemText,
        safetySettings: CHAT_SAFETY_SETTINGS,
        generationConfig: {
          maxOutputTokens: 700,
          temperature: 0.7,
        },
      });
      const result = await model.generateContent({ contents });
      return getChatResponseText(result);
    } catch (e) {
      lastError = e;
      if (isNonRetriableChatError(e)) {
        throw e;
      }
      if (i < CHAT_MODELS.length - 1) {
        console.warn(
          `[MindfulSpace] Chat model "${modelName}" failed; trying next.`,
          e?.message
        );
        continue;
      }
      throw e;
    }
  }
  throw lastError;
}

/**
 * Generate interpretation for PHQ-9 or GAD-7 score
 */
export async function interpretAssessment(type, score, severity, userName, language = 'en') {
  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
    generationConfig: { maxOutputTokens: 500, temperature: 0.6 },
  });

  const testName = type === "phq9" ? "PHQ-9 depression" : "GAD-7 anxiety";
  const maxScore = type === "phq9" ? 27 : 21;

  const languageInstructions = {
    'en': 'Respond in English.',
    'hi': 'Respond in Hindi (भारतीय हिंदी).',
    'mr': 'Respond in Marathi (मराठी).',
  };
  const langInstruction = languageInstructions[language] || languageInstructions['en'];

  const prompt = `${langInstruction}
${userName} completed the ${testName} screening. Score: ${score}/${maxScore} (${severity}).
  
Write a SHORT empathetic interpretation (2-3 sentences) speaking directly to ${userName}.
Then list exactly 4 practical coping strategies for their score level.

Reply ONLY in this JSON format, no markdown:
{"interpretation":"...","tips":["tip1","tip2","tip3","tip4"]}`;

  const result = await model.generateContent(prompt);
  const text = result.response.text().trim();

  try {
    return JSON.parse(text);
  } catch {
    return {
      interpretation: null,
      tips: null,
    };
  }
}

/**
 * Detect crisis keywords in a message
 */
export function detectCrisis(message) {
  const patterns = [
    /suicide|suicidal/i,
    /kill\s*myself/i,
    /end\s*my\s*life/i,
    /want\s*to\s*die/i,
    /don'?t\s*want\s*to\s*(be\s*here|live)/i,
    /better\s*off\s*(dead|without\s*me)/i,
    /self.?harm|cutting\s*myself/i,
    /no\s*reason\s*to\s*live/i,
  ];
  return patterns.some((p) => p.test(message));
}

/**
 * Generate AI insights from mood logs and assessment history
 */
export async function getAIInsights(moodLogs, phq9, gad7, language = 'en') {
  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
    generationConfig: { maxOutputTokens: 2500, temperature: 0.75 },
  });

  const moodSummary = moodLogs.length
    ? moodLogs
      .map(
        (l) =>
          `${l.date}: mood ${l.score}/10${l.note ? ` (note: "${l.note}")` : ""}`
      )
      .join("\n")
    : "No mood logs recorded yet.";

  const phq9Summary = phq9.length
    ? phq9
      .map((a) => `${a.date}: PHQ-9 score ${a.totalScore}/27 (${a.severity})`)
      .join("\n")
    : "No PHQ-9 assessments taken.";

  const gad7Summary = gad7.length
    ? gad7
      .map((a) => `${a.date}: GAD-7 score ${a.totalScore}/21 (${a.severity})`)
      .join("\n")
    : "No GAD-7 assessments taken.";

  const languageInstructions = {
    'en': 'Respond in English.',
    'hi': 'Respond in Hindi (भारतीय हिंदी).',
    'mr': 'Respond in Marathi (मराठी).',
  };
  const langInstruction = languageInstructions[language] || languageInstructions['en'];

  const prompt = `You are a compassionate mental health data analyst.
${langInstruction}
Analyze this user's data and provide exactly this structure:

MOOD LOGS (last 14 days):
${moodSummary}

PHQ-9 DEPRESSION SCORES:
${phq9Summary}

GAD-7 ANXIETY SCORES:
${gad7Summary}

Provide the response using EXACTLY these 5 section headers, each on its own line followed by content:

PATTERN: What patterns do you notice in their mood?

INSIGHTS: What specifically affects their mood positively and negatively based on their data?

ACTION PLAN: Give 5 specific, practical, evidence-based actions this person can take RIGHT NOW to improve their mental state. Be specific, not generic. Reference their actual scores and patterns.

PROGRESS: What positive progress can you identify, even small wins?

FOCUS THIS WEEK: One single achievable thing to focus on.

Be warm, specific, and hopeful. Use their actual numbers.`;

  const result = await model.generateContent(prompt);
  return result.response.text();
}