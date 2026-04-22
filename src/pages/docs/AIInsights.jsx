import { Steps, Step } from "../../components/docs/Steps";
import { Badge } from "../../components/docs/Badge";
import { useLanguage } from "../../context/LanguageContext";

const content = {
  en: {
    lastUpdated: "Last updated: Oct 24, 2024",
    h1: "AI Insights Dashboard",
    intro: "The AI Insights feature is the analytical brain of MindfulSpace. Instead of leaving you to interpret raw graphs and assessment scores by yourself, MindfulSpace uses Google Gemini to synthesize your data into a clear, actionable weekly psychological report.",
    whatH2: "What are AI Insights?",
    whatP: "Unlike the Chat Support feature (which is tactical and immediate), AI Insights is strategic to your mental well-being over time. It reviews your data and searches for patterns you might have missed.",
    howH2: "How insights are generated",
    steps: [
      { title: "Data Aggregation", desc: "MindfulSpace fetches your last 14 days of mood logs, text-sentiment logs, and your 3 most recent clinical assessments (PHQ-9 and GAD-7) from secure Firebase storage." },
      { title: "Format and Payload construction", desc: "This raw data is simplified and securely bundled into a JSON payload. Personal identifiers (like your exact messages) are heavily limited in this contextual payload." },
      { title: "Gemini 2.5 Analysis", desc: "The payload is sent to Google Gemini 2.5 Flash with a strict medical-grade system prompt guiding the model to act as a psychological analyst, writing a structured Markdown report highlighting variances and suggesting CBT/DBT frameworks." },
    ],
    understandH2: "Understanding your report",
    understandP: "The generated report is heavily structured so it is easy to read. You will typically see:",
    sections: [
      <><strong>Observed Patterns:</strong> "Your mood tends to dip significantly on Thursdays, correlating with your notes about weekly sprint deadlines."</>,
      <><strong>Assessment Context:</strong> "Your recent GAD-7 score moved from 12 (Moderate) to 8 (Mild) over the last three weeks, indicating a positive trend in anxiety management."</>,
      <><strong>Action Plan:</strong> A short, bulleted list of immediate, low-friction coping strategies (like 5-4-3-2-1 grounding) specifically targeted at the negative emotions you've charted recently.</>,
      <><strong>Focus Area:</strong> One primary mental health goal for you to work on for the upcoming week.</>,
    ],
  },
  hi: {
    lastUpdated: "अंतिम अपडेट: अक्टू. 24, 2024",
    h1: "AI इनसाइट्स डैशबोर्ड",
    intro: "AI इनसाइट्स फीचर MindfulSpace का विश्लेषणात्मक दिमाग है। आपको कच्चे ग्राफ और मूल्यांकन स्कोर खुद समझने के लिए छोड़ने के बजाय, MindfulSpace आपके डेटा को स्पष्ट, कार्रवाई योग्य साप्ताहिक मनोवैज्ञानिक रिपोर्ट में संश्लेषित करने के लिए Google Gemini का उपयोग करता है।",
    whatH2: "AI इनसाइट्स क्या हैं?",
    whatP: "चैट सपोर्ट फीचर (जो सामरिक और तत्काल है) के विपरीत, AI इनसाइट्स समय के साथ आपकी मानसिक भलाई के लिए रणनीतिक है। यह आपके डेटा की समीक्षा करता है और उन पैटर्न की खोज करता है जो आपने शायद नहीं देखे।",
    howH2: "इनसाइट्स कैसे उत्पन्न होते हैं",
    steps: [
      { title: "डेटा एकत्रीकरण", desc: "MindfulSpace सुरक्षित Firebase स्टोरेज से आपके पिछले 14 दिनों के मूड लॉग, टेक्स्ट-सेंटिमेंट लॉग और आपके 3 सबसे हालिया नैदानिक मूल्यांकन (PHQ-9 और GAD-7) प्राप्त करता है।" },
      { title: "प्रारूप और पेलोड निर्माण", desc: "इस कच्चे डेटा को सरल बनाया जाता है और JSON पेलोड में सुरक्षित रूप से बांधा जाता है। व्यक्तिगत पहचानकर्ता (जैसे आपके सटीक संदेश) इस संदर्भात्मक पेलोड में बहुत सीमित हैं।" },
      { title: "Gemini 2.5 विश्लेषण", desc: "पेलोड को Google Gemini 2.5 Flash को कड़े चिकित्सा-ग्रेड सिस्टम प्रॉम्प्ट के साथ भेजा जाता है जो मॉडल को मनोवैज्ञानिक विश्लेषक के रूप में कार्य करने के लिए, भिन्नताओं को उजागर करते हुए और CBT/DBT फ्रेमवर्क सुझाते हुए एक संरचित Markdown रिपोर्ट लिखने के लिए निर्देशित करता है।" },
    ],
    understandH2: "अपनी रिपोर्ट समझना",
    understandP: "उत्पन्न रिपोर्ट बहुत संरचित है इसलिए पढ़ना आसान है। आप आमतौर पर देखेंगे:",
    sections: [
      <><strong>अवलोकित पैटर्न:</strong> "आपका मूड गुरुवार को काफी गिरता है, जो साप्ताहिक स्प्रिंट डेडलाइन के बारे में आपके नोट्स से संबंधित है।"</>,
      <><strong>मूल्यांकन संदर्भ:</strong> "आपका हालिया GAD-7 स्कोर पिछले तीन हफ्तों में 12 (मध्यम) से 8 (हल्का) हो गया, जो चिंता प्रबंधन में सकारात्मक रुझान दर्शाता है।"</>,
      <><strong>कार्य योजना:</strong> तत्काल, कम-ऊर्जा वाली कॉपिंग रणनीतियों (जैसे 5-4-3-2-1 ग्राउंडिंग) की एक छोटी, बुलेटेड सूची जो विशेष रूप से आपकी हाल की नकारात्मक भावनाओं पर लक्षित है।</>,
      <><strong>फोकस क्षेत्र:</strong> आने वाले हफ्ते के लिए आपके लिए काम करने का एक प्राथमिक मानसिक स्वास्थ्य लक्ष्य।</>,
    ],
  },
  kn: {
  lastUpdated: "ಕೊನೆಯ ಅಪ್‌ಡೇಟ್: ಏಪ್ರಿಲ್ 12, 2026",
  h1: "AI ಇನ್‌ಸೈಟ್ಸ್ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
  intro: "AI ಇನ್‌ಸೈಟ್ಸ್ ವೈಶಿಷ್ಟ್ಯವು MindfulSpace ನ ವಿಶ್ಲೇಷಣಾತ್ಮಕ ಮೆದುಳು ಆಗಿದೆ. ಕಚ್ಚಾ ಗ್ರಾಫ್‌ಗಳು ಮತ್ತು ಮೌಲ್ಯಮಾಪನ ಸ್ಕೋರ್‌ಗಳನ್ನು ನೀವು ಸ್ವತಃ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಬೇಕಾಗಿಲ್ಲ. ಬದಲಾಗಿ, MindfulSpace ನಿಮ್ಮ ಡೇಟಾವನ್ನು ಸ್ಪಷ್ಟ ಮತ್ತು ಕ್ರಿಯಾತ್ಮಕ ವಾರಾಂತ್ಯ ಮಾನಸಿಕ ವರದಿಯಾಗಿ ಪರಿವರ್ತಿಸಲು Google Gemini ಅನ್ನು ಬಳಸುತ್ತದೆ.",

  whatH2: "AI ಇನ್‌ಸೈಟ್ಸ್ ಎಂದರೇನು?",
  whatP: "ಚಾಟ್ ಸಪೋರ್ಟ್ ವೈಶಿಷ್ಟ್ಯವು (ತಕ್ಷಣದ ಮತ್ತು ತಾತ್ಕಾಲಿಕವಾದದ್ದು) ಇದ್ದರೆ, AI ಇನ್‌ಸೈಟ್ಸ್ ನಿಮ್ಮ ಮಾನಸಿಕ ಆರೋಗ್ಯವನ್ನು ದೀರ್ಘಾವಧಿಯಲ್ಲಿ ಸುಧಾರಿಸಲು ಸಹಾಯಕವಾಗುತ್ತದೆ. ಇದು ನಿಮ್ಮ ಡೇಟಾವನ್ನು ವಿಶ್ಲೇಷಿಸಿ ನೀವು ಗಮನಿಸದೇ ಇರುವ ಮಾದರಿಗಳನ್ನು ಪತ್ತೆಹಚ್ಚುತ್ತದೆ.",

  howH2: "ಇನ್‌ಸೈಟ್ಸ್ ಹೇಗೆ ರಚಿಸಲಾಗುತ್ತದೆ",
  steps: [
    { title: "ಡೇಟಾ ಸಂಗ್ರಹಣೆ", desc: "MindfulSpace ನಿಮ್ಮ ಕಳೆದ 14 ದಿನಗಳ ಮೂಡ್ ಲಾಗ್‌ಗಳು, ಟೆಕ್ಸ್ಟ್-ಸೆಂಟಿಮೆಂಟ್ ಲಾಗ್‌ಗಳು ಮತ್ತು ನಿಮ್ಮ ಇತ್ತೀಚಿನ 3 ಕ್ಲಿನಿಕಲ್ ಮೌಲ್ಯಮಾಪನಗಳು (PHQ-9 ಮತ್ತು GAD-7) ಅನ್ನು ಸುರಕ್ಷಿತ Firebase ಸಂಗ್ರಹಣೆಯಿಂದ ಪಡೆಯುತ್ತದೆ." },
    { title: "ಫಾರ್ಮ್ಯಾಟ್ ಮತ್ತು ಪೇಲೋಡ್ ನಿರ್ಮಾಣ", desc: "ಈ ಕಚ್ಚಾ ಡೇಟಾವನ್ನು ಸರಳಗೊಳಿಸಿ JSON ಪೇಲೋಡ್ ರೂಪದಲ್ಲಿ ಸುರಕ್ಷಿತವಾಗಿ ಸಿದ್ಧಪಡಿಸಲಾಗುತ್ತದೆ. ವೈಯಕ್ತಿಕ ಮಾಹಿತಿ (ನಿಮ್ಮ ನಿಖರ ಸಂದೇಶಗಳಂತೆ) ಈ ಪೇಲೋಡ್‌ನಲ್ಲಿ ತುಂಬಾ ಸೀಮಿತವಾಗಿರುತ್ತದೆ." },
    { title: "Gemini 2.5 ವಿಶ್ಲೇಷಣೆ", desc: "ಈ ಪೇಲೋಡ್ ಅನ್ನು Google Gemini 2.5 Flash ಗೆ ಕಠಿಣ ವೈದ್ಯಕೀಯ-ಮಟ್ಟದ ಸಿಸ್ಟಮ್ ಪ್ರಾಂಪ್ಟ್‌ನೊಂದಿಗೆ ಕಳುಹಿಸಲಾಗುತ್ತದೆ. ಇದು ಮಾದರಿಯನ್ನು ಮಾನಸಿಕ ವಿಶ್ಲೇಷಕರಂತೆ ಕಾರ್ಯನಿರ್ವಹಿಸಲು ಮತ್ತು ವ್ಯತ್ಯಾಸಗಳನ್ನು ಗುರುತಿಸಿ CBT/DBT ವಿಧಾನಗಳನ್ನು ಸೂಚಿಸುವ ರಚಿತ Markdown ವರದಿ ಬರೆಯಲು ಮಾರ್ಗದರ್ಶನ ಮಾಡುತ್ತದೆ." },
  ],

  understandH2: "ನಿಮ್ಮ ವರದಿಯನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು",
  understandP: "ರಚಿತ ವರದಿಯನ್ನು ಸುಲಭವಾಗಿ ಓದಲು ರೂಪಿಸಲಾಗಿದೆ. ನೀವು ಸಾಮಾನ್ಯವಾಗಿ ನೋಡಬಹುದಾದವು:",

  sections: [
    <><strong>ಗಮನಿಸಿದ ಮಾದರಿಗಳು:</strong> "ನಿಮ್ಮ ಮೂಡ್ ಗುರುವಾರಗಳಲ್ಲಿ ಹೆಚ್ಚು ಕಡಿಮೆಯಾಗುತ್ತದೆ, ಇದು ವಾರದ ಸ್ಪ್ರಿಂಟ್ ಡೆಡ್‌ಲೈನ್‌ಗಳ ಬಗ್ಗೆ ನಿಮ್ಮ ನೋಟ್‌ಗಳೊಂದಿಗೆ ಸಂಬಂಧಿಸಿದೆ."</>,
    <><strong>ಮೌಲ್ಯಮಾಪನ ಸಂದರ್ಭ:</strong> "ನಿಮ್ಮ ಇತ್ತೀಚಿನ GAD-7 ಸ್ಕೋರ್ ಕಳೆದ ಮೂರು ವಾರಗಳಲ್ಲಿ 12 (ಮಧ್ಯಮ) ರಿಂದ 8 (ಸಾಮಾನ್ಯ) ಗೆ ಇಳಿದಿದೆ, ಇದು ಆತಂಕ ನಿರ್ವಹಣೆಯಲ್ಲಿ ಸುಧಾರಣೆಯನ್ನು ಸೂಚಿಸುತ್ತದೆ."</>,
    <><strong>ಕ್ರಿಯಾ ಯೋಜನೆ:</strong> ತಕ್ಷಣದ, ಸರಳ ನಿರ್ವಹಣಾ ವಿಧಾನಗಳ (ಉದಾ: 5-4-3-2-1 ಗ್ರೌಂಡಿಂಗ್) ಚಿಕ್ಕ ಪಟ್ಟಿಯನ್ನು ನೀಡಲಾಗುತ್ತದೆ, ಇದು ಇತ್ತೀಚಿನ ನಕಾರಾತ್ಮಕ ಭಾವನೆಗಳಿಗೆ ಹೊಂದಿಕೊಳ್ಳುತ್ತದೆ.</>,
    <><strong>ಫೋಕಸ್ ಪ್ರದೇಶ:</strong> ಮುಂದಿನ ವಾರದಲ್ಲಿ ನೀವು ಗಮನಹರಿಸಬೇಕಾದ ಪ್ರಮುಖ ಮಾನಸಿಕ ಆರೋಗ್ಯ ಗುರಿ.</>,
  ],
},
};

export default function AIInsights() {
  const { lang } = useLanguage();
  const c = content[lang] || content.en;

  return (
    <>
      <p className="text-sm text-slate-500 mb-6">{c.lastUpdated}</p>
      <h1>{c.h1} <Badge type="ai">Powered by Gemini</Badge></h1>

      <p>{c.intro}</p>

      <h2 id="what-are-ai-insights">{c.whatH2}</h2>
      <p>{c.whatP}</p>

      <h2 id="how-insights-are-generated">{c.howH2}</h2>
      <Steps>
        {c.steps.map((step, i) => (
          <Step key={i} number={String(i + 1)} title={step.title}>
            {step.desc}
          </Step>
        ))}
      </Steps>

      <h2 id="understanding-your-report">{c.understandH2}</h2>
      <p>{c.understandP}</p>
      <ul>
        {c.sections.map((section, i) => <li key={i}>{section}</li>)}
      </ul>
    </>
  );
}
