import { Badge } from "../../components/docs/Badge";
import { useLanguage } from "../../context/LanguageContext";

const content = {
  en: {
    lastUpdated: "Last updated: Oct 24, 2024",
    h1: "Built with Gemini",
    intro: "MindfulSpace is built on top of Google's Gemini 2.5 Flash, a highly capable multimodal generative AI model. We specifically chose Gemini for MindfulSpace for the following reasons:",
    whyH2: "Why Gemini?",
    reasons: [
      <><strong>Safety-first design:</strong> Gemini's safety filters and layered safety features make it the most responsible choice for a healthcare-adjacent application.</>,
      <><strong>Speed:</strong> Flash is optimized for speed, which is important in an app centered around synchronous conversation.</>,
      <><strong>Deep reasoning:</strong> Mental health assessment interpretation requires sophisticated understanding of context and nuance.</>,
      <><strong>Google ecosystem integration:</strong> The project uses Firebase (a Google product) for backend, making a unified API architecture natural.</>,
    ],
    usageH2: "How Gemini is used in MindfulSpace",
    usages: [
      { feature: "AI Chat Support", badge: "Core", desc: "Every conversational exchange is backed by Gemini. The system prompt is carefully engineered to restrict responses to empathetic, non-clinical support." },
      { feature: "Assessment Interpretation", badge: "Insights", desc: "After you submit a PHQ-9 or GAD-7 score, the numerical results are passed to Gemini to generate a natural-language explanation and coping strategies." },
      { feature: "AI Insights Dashboard", badge: "Analytics", desc: "Your 14-day mood and sentiment history, alongside recent assessments, form the context that Gemini analyzes to write your weekly psychological report." },
    ],
    safetyH2: "AI Safety & Responsibility",
    safetyP: "We have not disabled Gemini's built-in safety filters. In addition to its defaults, we further constrain the model via our System Prompt to prevent it from ever providing medical diagnoses, medication recommendations, or triggering dangerous thoughts.",
    privacyH2: "Privacy Considerations",
    privacyP: "Your individual chat messages and personal details are NOT passed directly to Gemini. For the AI Insights report, only an aggregated statistical summary of your activity (not the messages themselves) is included in the Gemini prompt payload.",
  },
  hi: {
    lastUpdated: "अंतिम अपडेट: अक्टू. 24, 2024",
    h1: "Gemini के साथ बनाया",
    intro: "MindfulSpace Google के Gemini 2.5 Flash पर बनाया गया है, जो एक अत्यधिक सक्षम मल्टीमोडल जेनेरेटिव AI मॉडल है। हमने MindfulSpace के लिए विशेष रूप से Gemini को निम्नलिखित कारणों से चुना:",
    whyH2: "Gemini क्यों?",
    reasons: [
      <><strong>सुरक्षा-प्रथम डिज़ाइन:</strong> Gemini के सुरक्षा फ़िल्टर और स्तरित सुरक्षा सुविधाएं इसे स्वास्थ्य-संबंधी अनुप्रयोग के लिए सबसे जिम्मेदार विकल्प बनाती हैं।</>,
      <><strong>गति:</strong> Flash गति के लिए अनुकूलित है, जो समकालिक बातचीत केंद्रित ऐप में महत्वपूर्ण है।</>,
      <><strong>गहरा तर्क:</strong> मानसिक स्वास्थ्य मूल्यांकन की व्याख्या के लिए संदर्भ और सूक्ष्मता की परिष्कृत समझ की आवश्यकता होती है।</>,
      <><strong>Google इकोसिस्टम एकीकरण:</strong> परियोजना बैकएंड के लिए Firebase (एक Google उत्पाद) का उपयोग करती है, जिससे एकीकृत API आर्किटेक्चर स्वाभाविक है।</>,
    ],
    usageH2: "MindfulSpace में Gemini का उपयोग",
    usages: [
      { feature: "AI चैट सपोर्ट", badge: "Core", desc: "प्रत्येक संवादी आदान-प्रदान Gemini द्वारा समर्थित है। सिस्टम प्रॉम्प्ट सावधानीपूर्वक सहानुभूतिपूर्ण, गैर-नैदानिक समर्थन तक प्रतिक्रियाओं को प्रतिबंधित करने के लिए इंजीनियर किया गया है।" },
      { feature: "मूल्यांकन व्याख्या", badge: "Insights", desc: "PHQ-9 या GAD-7 स्कोर जमा करने के बाद, संख्यात्मक परिणाम प्राकृतिक-भाषा स्पष्टीकरण और कॉपिंग रणनीतियां उत्पन्न करने के लिए Gemini को पास किए जाते हैं।" },
      { feature: "AI इनसाइट्स डैशबोर्ड", badge: "Analytics", desc: "आपका 14-दिन का मूड और सेंटिमेंट इतिहास, हालिया मूल्यांकनों के साथ, वह संदर्भ बनाते हैं जिसे Gemini आपकी साप्ताहिक मनोवैज्ञानिक रिपोर्ट लिखने के लिए विश्लेषण करता है।" },
    ],
    safetyH2: "AI सुरक्षा और जिम्मेदारी",
    safetyP: "हमने Gemini के अंतर्निहित सुरक्षा फ़िल्टर को अक्षम नहीं किया है। इसके डिफ़ॉल्ट के अलावा, हम आगे मॉडल को अपने System Prompt के माध्यम से प्रतिबंधित करते हैं ताकि यह कभी चिकित्सा निदान, दवा सिफारिशें न दे, या खतरनाक विचारों को ट्रिगर न करे।",
    privacyH2: "गोपनीयता विचार",
    privacyP: "आपके व्यक्तिगत चैट संदेश और व्यक्तिगत विवरण सीधे Gemini को पास नहीं किए जाते। AI इनसाइट्स रिपोर्ट के लिए, Gemini प्रॉम्प्ट पेलोड में केवल आपकी गतिविधि का एकत्रित सांख्यिकीय सारांश (संदेश स्वयं नहीं) शामिल है।",
  },
  kn: {
  lastUpdated: "ಕೊನೆಯ ನವೀಕರಣ: ಏಪ್ರಿಲ್ 12, 2026",
  h1: "Gemini ಮೂಲಕ ನಿರ್ಮಿಸಲಾಗಿದೆ",
  intro: "MindfulSpace ಅನ್ನು Google ನ Gemini 2.5 Flash ಮೇಲೆ ನಿರ್ಮಿಸಲಾಗಿದೆ, ಇದು ಅತ್ಯಂತ ಸಾಮರ್ಥ್ಯವಿರುವ ಮಲ್ಟಿಮೋಡಲ್ ಜನರೇಟಿವ್ AI ಮಾದರಿ. ನಾವು MindfulSpace ಗಾಗಿ Gemini ಅನ್ನು ವಿಶೇಷವಾಗಿ ಕೆಳಗಿನ ಕಾರಣಗಳಿಂದ ಆಯ್ಕೆ ಮಾಡಿದ್ದೇವೆ:",

  whyH2: "ಏಕೆ Gemini?",
  reasons: [
    <><strong>ಭದ್ರತೆ-ಮೊದಲ ವಿನ್ಯಾಸ:</strong> Gemini ನ ಭದ್ರತಾ ಫಿಲ್ಟರ್‌ಗಳು ಮತ್ತು ಬಹು-ಪದರ ಭದ್ರತಾ ವೈಶಿಷ್ಟ್ಯಗಳು ಇದನ್ನು ಆರೋಗ್ಯ ಸಂಬಂಧಿತ ಅಪ್ಲಿಕೇಶನ್‌ಗಳಿಗೆ ಅತ್ಯಂತ ಜವಾಬ್ದಾರಿಯುತ ಆಯ್ಕೆಯನ್ನಾಗಿಸುತ್ತವೆ.</>,
    <><strong>ವೇಗ:</strong> Flash ವೇಗಕ್ಕಾಗಿ ಆಪ್ಟಿಮೈಸ್ ಮಾಡಲಾಗಿದೆ, ಇದು ರಿಯಲ್-ಟೈಮ್ ಸಂಭಾಷಣೆಗೆ ಮುಖ್ಯವಾಗಿದೆ.</>,
    <><strong>ಆಳವಾದ ವಿಶ್ಲೇಷಣೆ:</strong> ಮಾನಸಿಕ ಆರೋಗ್ಯ ಮೌಲ್ಯಮಾಪನವನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ಸನ್ನಿವೇಶ ಮತ್ತು ಸೂಕ್ಷ್ಮತೆಯ ಆಳವಾದ ಗ್ರಹಿಕೆ ಅಗತ್ಯವಿದೆ.</>,
    <><strong>Google ಪರಿಸರ ವ್ಯವಸ್ಥೆಯ ಏಕೀಕರಣ:</strong> ಈ ಪ್ರಾಜೆಕ್ಟ್ Firebase (Google ಉತ್ಪನ್ನ) ಅನ್ನು ಬ್ಯಾಕೆಂಡ್‌ಗೆ ಬಳಸುತ್ತದೆ, ಆದ್ದರಿಂದ ಏಕೀಕೃತ API ವಿನ್ಯಾಸ ಸಹಜವಾಗಿರುತ್ತದೆ.</>,
  ],

  usageH2: "MindfulSpace ನಲ್ಲಿ Gemini ಅನ್ನು ಹೇಗೆ ಬಳಸಲಾಗುತ್ತದೆ",
  usages: [
    { feature: "AI ಚಾಟ್ ಬೆಂಬಲ", badge: "Core", desc: "ಪ್ರತಿ ಸಂಭಾಷಣೆಯೂ Gemini ಮೂಲಕ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ. ಸಿಸ್ಟಮ್ ಪ್ರಾಂಪ್ಟ್ ಅನ್ನು ಸಹಾನುಭೂತಿಯುತ ಮತ್ತು ವೈದ್ಯಕೀಯೇತರ ಬೆಂಬಲಕ್ಕೆ ಮಾತ್ರ ಸೀಮಿತಗೊಳಿಸಲಾಗಿದೆ." },
    { feature: "ಮೌಲ್ಯಮಾಪನ ವಿವರಣೆ", badge: "Insights", desc: "ನೀವು PHQ-9 ಅಥವಾ GAD-7 ಅಂಕಗಳನ್ನು ಸಲ್ಲಿಸಿದ ನಂತರ, ಅವುಗಳನ್ನು ಸಹಜ ಭಾಷೆಯಲ್ಲಿ ವಿವರಣೆ ಮತ್ತು ಸಲಹೆಗಳನ್ನು ನೀಡಲು Gemini ಗೆ ಕಳುಹಿಸಲಾಗುತ್ತದೆ." },
    { feature: "AI ಇನ್ಸೈಟ್ಸ್ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್", badge: "Analytics", desc: "ನಿಮ್ಮ 14 ದಿನಗಳ ಮೂಡ್ ಮತ್ತು ಸೆಂಟಿಮೆಂಟ್ ಡೇಟಾ, ಇತ್ತೀಚಿನ ಮೌಲ್ಯಮಾಪನಗಳೊಂದಿಗೆ, Gemini ನಿಮ್ಮ ವಾರದ ಮಾನಸಿಕ ವರದಿ ಬರೆಯಲು ಬಳಸುತ್ತದೆ." },
  ],

  safetyH2: "AI ಭದ್ರತೆ ಮತ್ತು ಜವಾಬ್ದಾರಿ",
  safetyP: "ನಾವು Gemini ನ ಒಳನಿರ್ಮಿತ ಭದ್ರತಾ ಫಿಲ್ಟರ್‌ಗಳನ್ನು ನಿಷ್ಕ್ರಿಯಗೊಳಿಸಿಲ್ಲ. ಅದರ ಡೀಫಾಲ್ಟ್ ವ್ಯವಸ್ಥೆಗಳ ಜೊತೆಗೆ, ನಮ್ಮ System Prompt ಮೂಲಕ ಮಾದರಿಯನ್ನು ಮತ್ತಷ್ಟು ನಿಯಂತ್ರಿಸಿ, ಇದು ವೈದ್ಯಕೀಯ ನಿರ್ಣಯಗಳು, ಔಷಧ ಸಲಹೆಗಳು ಅಥವಾ ಅಪಾಯಕಾರಿ ಆಲೋಚನೆಗಳನ್ನು ನೀಡದಂತೆ ನೋಡಿಕೊಳ್ಳುತ್ತೇವೆ.",

  privacyH2: "ಗೌಪ್ಯತೆ ಕುರಿತು ವಿಚಾರಗಳು",
  privacyP: "ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಚಾಟ್ ಸಂದೇಶಗಳು ಮತ್ತು ವಿವರಗಳನ್ನು ನೇರವಾಗಿ Gemini ಗೆ ಕಳುಹಿಸಲಾಗುವುದಿಲ್ಲ. AI Insights ವರದಿಗಾಗಿ, ನಿಮ್ಮ ಚಟುವಟಿಕೆಯ ಒಟ್ಟುಗೂಡಿಸಿದ ಅಂಕಿಅಂಶಗಳ ಸಾರಾಂಶವನ್ನು ಮಾತ್ರ (ಸಂದೇಶಗಳಿಲ್ಲ) Gemini ಗೆ ಕಳುಹಿಸಲಾಗುತ್ತದೆ.",
},
};

export default function BuiltWithGemini() {
  const { lang } = useLanguage();
  const c = content[lang] || content.en;

  return (
    <>
      <p className="text-sm text-slate-500 mb-6">{c.lastUpdated}</p>
      <h1>{c.h1} <Badge type="ai">Gemini</Badge></h1>

      <p>{c.intro}</p>

      <h2 id="why-gemini">{c.whyH2}</h2>
      <ul>
        {c.reasons.map((r, i) => <li key={i}>{r}</li>)}
      </ul>

      <h2 id="how-gemini-is-used">{c.usageH2}</h2>
      {c.usages.map((usage, i) => (
        <div key={i} className="mb-6 p-4 rounded-xl border border-[#1F2937] bg-[#1E293B]/50">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-white font-semibold text-base m-0">{usage.feature}</h3>
            <Badge type="ai">{usage.badge}</Badge>
          </div>
          <p className="text-slate-300 text-sm m-0">{usage.desc}</p>
        </div>
      ))}

      <h2 id="ai-safety">{c.safetyH2}</h2>
      <p>{c.safetyP}</p>

      <h2 id="privacy">{c.privacyH2}</h2>
      <p>{c.privacyP}</p>
    </>
  );
}
