// src/utils/passiveMoodDetector.js
// Option 1: Typing speed & pattern analysis
// Option 2: Response time analysis  
// Option 3: Language pattern analysis (first person, sentence length, questions)

const DEPRESSION_WORDS = [
  "alone", "tired", "empty", "hopeless", "worthless", "nobody", "nothing",
  "pointless", "hate", "never", "always", "fail", "ugly", "stupid", "burden",
  "useless", "broken", "lost", "numb", "dark", "sad", "cry", "crying",
  "depressed", "anxious", "scared", "afraid", "overwhelmed", "exhausted",

  // 🔥 Gen Z / modern expressions
  "cooked", "done", "dead", "burnt out", "drained", "low", "feeling low",
  "not okay", "not ok", "not fine", "over it", "so done", "giving up",
  "no energy", "can't deal", "cant deal", "too much", "falling apart",
  "losing it", "messed up", "sucks", "this sucks", "hate this",
  "no point", "what's the point", "why bother", "idk anymore",
  "i'm tired", "im tired", "so tired", "really tired",

  // 💀 Slang
  "meh", "ugh", "bruh", "l", "big l", "trash", "mid", "worst",
  "not vibing", "no vibe", "bad vibe", "off", "feels off"
];

const POSITIVE_WORDS = [
  "happy", "good", "great", "better", "okay", "fine", "excited", "grateful",
  "hopeful", "loved", "calm", "peaceful", "motivated", "proud", "thankful",
  "improving", "progress", "wonderful", "amazing", "joy", "relieved",
  "confident", "strong", "blessed", "cheerful", "content", "optimistic",

  // 🔥 Gen Z / modern expressions
  "vibing", "good vibes", "feels good", "feeling good", "doing better",
  "getting better", "all good", "it's okay", "its okay", "im okay",
  "i'm okay", "feeling okay", "not bad", "pretty good", "chill",
  "peace", "at peace", "doing fine", "feeling fine",

  // 🚀 Slang
  "w", "big w", "win", "winning", "slay", "ate", "that was fire",
  "fire", "lit", "love that", "so good", "nice", "awesome",
  "cool", "great day", "feels great"
];

/**
 * OPTION 1 — Typing Speed Analysis
 */
function analyzeTypingSpeed(text, typingDuration) {
  if (!typingDuration || typingDuration <= 0) return 0;
  const charsPerSecond = text.length / (typingDuration / 1000);
  
  if (charsPerSecond < 2) return -1.5;
  if (charsPerSecond <= 8) return 0;
  if (charsPerSecond <= 15) return 0.5;
  return -0.5;
}

/**
 * OPTION 2 — Response Time Analysis
 */
function analyzeResponseTime(responseDelay) {
  if (!responseDelay || responseDelay <= 0) return 0;
  const seconds = responseDelay / 1000;
  
  if (seconds < 10) return 0.5;
  if (seconds <= 60) return 0;
  if (seconds <= 300) return -1;
  return -2;
}

/**
 * OPTION 3 — Language Pattern Analysis
 */
function analyzeLanguagePatterns(text) {
  const words = text.toLowerCase().replace(/[^a-z\s?!.]/g, "").split(/\s+/).filter(Boolean);
  const wordCount = words.length;
  if (wordCount === 0) return 0;

  let score = 0;

  const firstPerson = words.filter(w => w === "i" || w === "me" || w === "myself").length;
  const firstPersonRatio = firstPerson / wordCount;
  if (firstPersonRatio > 0.3) score -= 2;
  else if (firstPersonRatio > 0.2) score -= 1;

  const negCount = words.filter(w => DEPRESSION_WORDS.includes(w)).length;
  score -= (negCount / wordCount) * 10;

  const posCount = words.filter(w => POSITIVE_WORDS.includes(w)).length;
  score += (posCount / wordCount) * 15;

  if (wordCount <= 2) score -= 1;
  else if (wordCount >= 5 && wordCount <= 20) score += 0.5;
  else if (wordCount >= 30) score -= 0.5;

  const questionCount = (text.match(/\?/g) || []).length;
  if (questionCount >= 2) score -= 0.5;

  const exclamCount = (text.match(/!/g) || []).length;
  if (exclamCount >= 1) score += 0.5;

  return score;
}

/**
 * Main analysis function
 */
export function analyzeMessage(text, typingDuration = 0, responseDelay = 0) {
  if (!text || text.trim().length === 0) return { score: 5, breakdown: {} };

  const typingScore = analyzeTypingSpeed(text, typingDuration);
  const responseScore = analyzeResponseTime(responseDelay);
  const languageScore = analyzeLanguagePatterns(text);

  const breakdown = {
    typing: typingScore,
    response: responseScore,
    language: languageScore,
  };

  let rawScore = 5 + (languageScore * 0.6) + (typingScore * 0.2) + (responseScore * 0.2);

  const score = Math.max(1, Math.min(10, Math.round(rawScore * 10) / 10));

  return { score, breakdown };
}

/**
 * Aggregate session mood
 */
export function aggregateSessionMood(analyses) {
  if (analyses.length === 0) return 5;

  let totalWeight = 0;
  let weightedSum = 0;

  analyses.forEach((a, i) => {
    const weight = i + 1;
    weightedSum += a.score * weight;
    totalWeight += weight;
  });

  const avg = weightedSum / totalWeight;
  return Math.max(1, Math.min(10, Math.round(avg * 10) / 10));
}