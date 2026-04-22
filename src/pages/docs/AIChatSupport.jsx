import { Callout } from "../../components/docs/Callout";
import { CodeBlock } from "../../components/docs/CodeBlock";
import { useLanguage } from "../../context/LanguageContext";

const content = {
  en: {
    lastUpdated: "Last updated: Apr 12, 2026",  
    h1: "AI Chat Support",
    intro: "The core of MindfulSpace is our conversational AI assistant, powered by Google Gemini 2.5 Flash. It is fundamentally different from standard chatbots because of its highly specific system prompt and local sentiment tracking.",
    howH2: "How the Chat Works",
    howP: "When you send a message, it is packaged alongside your last 30 messages (to maintain context) and sent directly to Gemini. However, before the AI generates a single word, it references an invisible \"System Prompt\":",
    sentimentH2: "Sentiment Analysis",
    sentimentP: "We run a pure-JavaScript sentiment scoring algorithm locally in your browser before the message even hits our servers. Words like \"exhausted,\" \"hopeless,\" and \"angry\" lower the score, while words like \"excited,\" \"calm,\" and \"better\" raise it. This score is saved alongside the encrypted message in Firebase, feeding into your Dashboard insights.",
    crisisH2: "Crisis Detection",
    crisisP: "Safety is non-negotiable. We employ a dual-layered crisis detection mechanism:",
    crisisItems: [
      <><strong>Local Keyword Matching:</strong> If you type high-risk keywords ("kill myself", "want to die", "end it"), the UI intercepts the message immediately and throws the <em>CrisisModal</em> blocking overlay.</>,
      <><strong>AI Contextual Matching:</strong> If the AI infers suicidal ideation contextually (even without specific trigger words), it prepends the hidden <code>[CRISIS]</code> tag to its response, which also triggers the safety overlay.</>,
    ],
    crisisCalloutTitle: "The Crisis Overlay",
    crisisCalloutText: "The Crisis Overlay locks the screen, displays your Trusted Contact's phone number, and provides quick-tap links to national Indian suicide helplines (like iCall and Vandrevala Foundation).",
    historyH2: "Conversation History",
    historyP: "Every time you chat, your messages are securely appended to your private Firebase Cloud Firestore document. They are tied directly to your Google Identity UID. Loading the app pulls the last 30 days of context so the AI remembers what you were struggling with yesterday.",
    voiceH2: "Voice Mode",
    voiceP: <>Sometimes typing is too much. You can tap the Microphone icon to speak into your device. We use the browser's native Web Speech API to transcribe your voice instantly, and the Speech Synthesis API to speak the AI's responses back in a calming voice. Read more on the <a href="/docs/voice-mode" className="text-teal-400">Voice Mode page</a>.</>,
  },
  hi: {
    lastUpdated: "अंतिम अपडेट: अप्रैल 12, 2026",
    h1: "AI चैट सपोर्ट",
    intro: "MindfulSpace का मूल हमारा संवादी AI सहायक है, जो Google Gemini 2.5 Flash द्वारा संचालित है। यह अपने अत्यधिक विशिष्ट सिस्टम प्रॉम्प्ट और स्थानीय सेंटिमेंट ट्रैकिंग के कारण मानक चैटबॉट्स से मौलिक रूप से अलग है।",
    howH2: "चैट कैसे काम करती है",
    howP: "जब आप कोई संदेश भेजते हैं, तो उसे आपके पिछले 30 संदेशों (संदर्भ बनाए रखने के लिए) के साथ पैकेज करके सीधे Gemini को भेजा जाता है। हालांकि, AI एक भी शब्द उत्पन्न करने से पहले, एक अदृश्य \"System Prompt\" का संदर्भ लेता है:",
    sentimentH2: "सेंटिमेंट विश्लेषण",
    sentimentP: "संदेश हमारे सर्वर तक पहुंचने से पहले ही हम आपके ब्राउज़र में स्थानीय रूप से एक शुद्ध-JavaScript सेंटिमेंट स्कोरिंग एल्गोरिदम चलाते हैं। \"exhausted,\" \"hopeless,\" और \"angry\" जैसे शब्द स्कोर कम करते हैं, जबकि \"excited,\" \"calm,\" और \"better\" जैसे शब्द इसे बढ़ाते हैं। यह स्कोर Firebase में एन्क्रिप्टेड संदेश के साथ सहेजा जाता है, जो आपके डैशबोर्ड इनसाइट्स में योगदान देता है।",
    crisisH2: "संकट पहचान",
    crisisP: "सुरक्षा से कोई समझौता नहीं। हम दो-स्तरीय संकट पहचान तंत्र का उपयोग करते हैं:",
    crisisItems: [
      <><strong>स्थानीय कीवर्ड मिलान:</strong> यदि आप उच्च-जोखिम कीवर्ड टाइप करते हैं ("kill myself", "want to die", "end it"), UI तुरंत संदेश को इंटरसेप्ट करता है और <em>CrisisModal</em> ब्लॉकिंग ओवरले दिखाता है।</>,
      <><strong>AI प्रासंगिक मिलान:</strong> यदि AI संदर्भगत रूप से आत्मघाती विचार का अनुमान लगाता है (विशिष्ट ट्रिगर शब्दों के बिना भी), तो यह अपनी प्रतिक्रिया में छिपा हुआ <code>[CRISIS]</code> टैग जोड़ता है, जो सुरक्षा ओवरले को भी ट्रिगर करता है।</>,
    ],
    crisisCalloutTitle: "संकट ओवरले",
    crisisCalloutText: "संकट ओवरले स्क्रीन को लॉक कर देता है, आपके विश्वसनीय संपर्क का फोन नंबर दिखाता है, और राष्ट्रीय भारतीय आत्महत्या हेल्पलाइन (जैसे iCall और Vandrevala Foundation) के लिए क्विक-टैप लिंक प्रदान करता है।",
    historyH2: "बातचीत का इतिहास",
    historyP: "हर बार जब आप चैट करते हैं, तो आपके संदेश सुरक्षित रूप से आपके निजी Firebase Cloud Firestore दस्तावेज़ में जोड़े जाते हैं। वे सीधे आपके Google Identity UID से जुड़े होते हैं। ऐप लोड करने पर पिछले 30 दिनों का संदर्भ आता है, इसलिए AI को याद रहता है कि आप कल किस चीज़ से जूझ रहे थे।",
    voiceH2: "वॉइस मोड",
    voiceP: <>कभी-कभी टाइपिंग बहुत ज़्यादा लगती है। आप माइक्रोफ़ोन आइकन टैप करके अपने डिवाइस में बोल सकते हैं। हम ब्राउज़र के मूल Web Speech API का उपयोग करके आपकी आवाज़ को तुरंत ट्रांसक्राइब करते हैं, और एक शांत आवाज़ में AI की प्रतिक्रियाएं वापस बोलने के लिए Speech Synthesis API का उपयोग करते हैं। <a href="/info/voice-mode" className="text-teal-400">वॉइस मोड पेज</a> पर अधिक पढ़ें।</>,
  },
  kn: {
  lastUpdated: "ಕೊನೆಯ ಅಪ್‌ಡೇಟ್: ಏಪ್ರಿಲ್ 12, 2026",
  h1: "AI ಚಾಟ್ ಬೆಂಬಲ",
  intro: "MindfulSpace ನ ಮುಖ್ಯ ಭಾಗವು ನಮ್ಮ ಸಂಭಾಷಣಾತ್ಮಕ AI ಸಹಾಯಕವಾಗಿದೆ, ಇದು Google Gemini 2.5 Flash ಮೂಲಕ ಚಾಲಿತವಾಗಿದೆ. ಇದು ಅದರ ವಿಶೇಷವಾದ ಸಿಸ್ಟಮ್ ಪ್ರಾಂಪ್ಟ್ ಮತ್ತು ಸ್ಥಳೀಯ ಸೆಂಟಿಮೆಂಟ್ ಟ್ರ್ಯಾಕಿಂಗ್‌ನಿಂದ ಸಾಮಾನ್ಯ ಚಾಟ್‌ಬಾಟ್‌ಗಳಿಂದ ವಿಭಿನ್ನವಾಗಿದೆ.",
  
  howH2: "ಚಾಟ್ ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ",
  howP: "ನೀವು ಸಂದೇಶ ಕಳುಹಿಸಿದಾಗ, ಅದು ನಿಮ್ಮ ಕೊನೆಯ 30 ಸಂದೇಶಗಳೊಂದಿಗೆ (ಸಂದರ್ಭವನ್ನು ಉಳಿಸಿಕೊಳ್ಳಲು) ಸೇರಿಸಿ ನೇರವಾಗಿ Gemini ಗೆ ಕಳುಹಿಸಲಾಗುತ್ತದೆ. ಆದರೆ, AI ಒಂದು ಪದವನ್ನು ರಚಿಸುವ ಮೊದಲು, ಅದು ಒಂದು ಅಡಗಿದ \"System Prompt\" ಅನ್ನು ಉಲ್ಲೇಖಿಸುತ್ತದೆ:",

  sentimentH2: "ಸೆಂಟಿಮೆಂಟ್ ವಿಶ್ಲೇಷಣೆ",
  sentimentP: "ನಿಮ್ಮ ಸಂದೇಶವು ನಮ್ಮ ಸರ್ವರ್‌ಗಳಿಗೆ ತಲುಪುವ ಮೊದಲು, ನಾವು ನಿಮ್ಮ ಬ್ರೌಸರ್‌ನಲ್ಲಿ ಸ್ಥಳೀಯವಾಗಿ ಶುದ್ಧ JavaScript ಸೆಂಟಿಮೆಂಟ್ ಸ್ಕೋರಿಂಗ್ ಅಲ್ಗಾರಿದಮ್ ಅನ್ನು ಕಾರ್ಯಗತಗೊಳಿಸುತ್ತೇವೆ. \"exhausted,\" \"hopeless,\" ಮತ್ತು \"angry\" ಎಂಬ ಪದಗಳು ಸ್ಕೋರ್ ಅನ್ನು ಕಡಿಮೆ ಮಾಡುತ್ತವೆ, ಆದರೆ \"excited,\" \"calm,\" ಮತ್ತು \"better\" ಪದಗಳು ಅದನ್ನು ಹೆಚ್ಚಿಸುತ್ತವೆ. ಈ ಸ್ಕೋರ್ Firebase ನಲ್ಲಿ ಎನ್ಕ್ರಿಪ್ಟ್ ಮಾಡಿದ ಸಂದೇಶದೊಂದಿಗೆ ಸಂಗ್ರಹವಾಗುತ್ತದೆ ಮತ್ತು ನಿಮ್ಮ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ಇನ್‌ಸೈಟ್ಸ್‌ಗೆ ಸಹಾಯ ಮಾಡುತ್ತದೆ.",

  crisisH2: "ಸಂಕಷ್ಟ ಪತ್ತೆ",
  crisisP: "ಭದ್ರತೆ ಅತ್ಯಂತ ಮುಖ್ಯ. ನಾವು ಎರಡು ಹಂತದ ಸಂಕಷ್ಟ ಪತ್ತೆ ವ್ಯವಸ್ಥೆಯನ್ನು ಬಳಸುತ್ತೇವೆ:",

  crisisItems: [
    <><strong>ಸ್ಥಳೀಯ ಕೀವರ್ಡ್ ಮ್ಯಾಚಿಂಗ್:</strong> ನೀವು ಹೆಚ್ಚಿನ ಅಪಾಯದ ಕೀವರ್ಡ್‌ಗಳನ್ನು (\"kill myself\", \"want to die\", \"end it\") ಟೈಪ್ ಮಾಡಿದರೆ, UI ತಕ್ಷಣವೇ ಸಂದೇಶವನ್ನು ತಡೆದು <em>CrisisModal</em> ಬ್ಲಾಕಿಂಗ್ ಓವರ್‌ಲೇ ಅನ್ನು ತೋರಿಸುತ್ತದೆ.</>,
    <><strong>AI ಸಂಧರ್ಭ ಮ್ಯಾಚಿಂಗ್:</strong> AI ಸಂಧರ್ಭದ ಆಧಾರದ ಮೇಲೆ ಆತ್ಮಹತ್ಯೆಯ ಚಿಂತನೆಗಳನ್ನು ಗುರುತಿಸಿದರೆ (ನಿರ್ದಿಷ್ಟ ಪದಗಳಿಲ್ಲದಿದ್ದರೂ), ಅದು ತನ್ನ ಪ್ರತಿಕ್ರಿಯೆಯಲ್ಲಿ ಅಡಗಿದ <code>[CRISIS]</code> ಟ್ಯಾಗ್ ಅನ್ನು ಸೇರಿಸುತ್ತದೆ, ಇದು ಭದ್ರತಾ ಓವರ್‌ಲೇ ಅನ್ನು ಪ್ರಾರಂಭಿಸುತ್ತದೆ.</>,
  ],

  crisisCalloutTitle: "ಸಂಕಷ್ಟ ಓವರ್‌ಲೇ",
  crisisCalloutText: "ಸಂಕಷ್ಟ ಓವರ್‌ಲೇ ಪರದೆನ್ನು ಲಾಕ್ ಮಾಡುತ್ತದೆ, ನಿಮ್ಮ ವಿಶ್ವಾಸಾರ್ಹ ಸಂಪರ್ಕದ ಫೋನ್ ಸಂಖ್ಯೆಯನ್ನು ತೋರಿಸುತ್ತದೆ ಮತ್ತು ರಾಷ್ಟ್ರೀಯ ಭಾರತೀಯ ಆತ್ಮಹತ್ಯೆ ಸಹಾಯವಾಣಿ (iCall ಮತ್ತು Vandrevala Foundation) ಗೆ ತ್ವರಿತ ಲಿಂಕ್‌ಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ.",

  historyH2: "ಸಂಭಾಷಣೆ ಇತಿಹಾಸ",
  historyP: "ಪ್ರತಿ ಬಾರಿ ನೀವು ಚಾಟ್ ಮಾಡಿದಾಗ, ನಿಮ್ಮ ಸಂದೇಶಗಳನ್ನು ಸುರಕ್ಷಿತವಾಗಿ ನಿಮ್ಮ ಖಾಸಗಿ Firebase Cloud Firestore ಡಾಕ್ಯುಮೆಂಟ್‌ಗೆ ಸೇರಿಸಲಾಗುತ್ತದೆ. ಅವು ನಿಮ್ಮ Google Identity UID ಗೆ ನೇರವಾಗಿ ಸಂಪರ್ಕ ಹೊಂದಿರುತ್ತವೆ. ಆಪ್ ಲೋಡ್ ಆಗುವಾಗ ಕೊನೆಯ 30 ದಿನಗಳ ಸಂಧರ್ಭವನ್ನು ಪಡೆಯುತ್ತದೆ, ಆದ್ದರಿಂದ AI ಗೆ ನೀವು ನಿನ್ನೆ ಎದುರಿಸಿದ ಸಮಸ್ಯೆಗಳು ನೆನಪಿರುತ್ತವೆ.",

  voiceH2: "ವಾಯ್ಸ್ ಮೋಡ್",
  voiceP: <>ಕೆಲವೊಮ್ಮೆ ಟೈಪ್ ಮಾಡುವುದು ಕಷ್ಟವಾಗಬಹುದು. ನೀವು ಮೈಕ್ರೋಫೋನ್ ಐಕಾನ್ ಒತ್ತಿ ನಿಮ್ಮ ಸಾಧನದಲ್ಲಿ ಮಾತನಾಡಬಹುದು. ನಾವು ಬ್ರೌಸರ್‌ನ ಮೂಲ Web Speech API ಅನ್ನು ಬಳಸಿ ನಿಮ್ಮ ಧ್ವನಿಯನ್ನು ತಕ್ಷಣ ಪಠ್ಯಕ್ಕೆ ಪರಿವರ್ತಿಸುತ್ತೇವೆ ಮತ್ತು Speech Synthesis API ಮೂಲಕ AI ಪ್ರತಿಕ್ರಿಯೆಯನ್ನು ಶಾಂತ ಧ್ವನಿಯಲ್ಲಿ ಮತ್ತೆ ಕೇಳಿಸುತ್ತೇವೆ. <a href="/info/voice-mode" className="text-teal-400">ವಾಯ್ಸ್ ಮೋಡ್ ಪುಟ</a> ನಲ್ಲಿ ಇನ್ನಷ್ಟು ಓದಿ.</>,
},
};

export default function AIChatSupport() {
  const { lang } = useLanguage();
  const c = content[lang] || content.en;

  return (
    <>
      <p className="text-sm text-slate-500 mb-6">{c.lastUpdated}</p>
      <h1>{c.h1}</h1>

      <p>{c.intro}</p>

      <h2 id="how-the-chat-works">{c.howH2}</h2>
      <p>{c.howP}</p>

      <CodeBlock
        language="javascript"
        code={`// The strict psychological guardrails placed on Gemini
const SYSTEM_PROMPT = \`
You are MindfulSpace, an empathetic, non-judgmental mental health companion.
1. NEVER offer clinical advice, diagnoses, or medication recommendations.
2. If the user mentions self-harm, immediately prepend your response with [CRISIS].
3. Validate emotions before offering coping mechanisms.
4. Keep responses conversational, concise, and grounded in DBT/CBT principles.
\`;`}
      />

      <h2 id="sentiment-analysis">{c.sentimentH2}</h2>
      <p>{c.sentimentP}</p>

      <h2 id="crisis-detection">{c.crisisH2}</h2>
      <p>{c.crisisP}</p>
      <ol>
        {c.crisisItems.map((item, i) => <li key={i}>{item}</li>)}
      </ol>

      <Callout type="danger" title={c.crisisCalloutTitle}>
        {c.crisisCalloutText}
      </Callout>

      <h2 id="conversation-history">{c.historyH2}</h2>
      <p>{c.historyP}</p>

      <h2 id="voice-mode">{c.voiceH2}</h2>
      <p>{c.voiceP}</p>
    </>
  );
}
