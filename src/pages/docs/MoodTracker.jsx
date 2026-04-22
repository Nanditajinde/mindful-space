import { Callout } from "../../components/docs/Callout";
import { useLanguage } from "../../context/LanguageContext";

const content = {
  en: {
    lastUpdated: "Last updated: Apr 12, 2026",
    h1: "Mood Tracker",
    intro: "Emotions are fluid. Keeping track of them is a highly effective cognitive-behavioral technique to identify triggers, validate feelings, and measure the effectiveness of new habits or medications.",
    loggingH2: "Logging your mood",
    loggingP1: <>You can log your mood manually from the <strong>Dashboard</strong> page. MindfulSpace provides a simple 1-10 slider where 1 represents "Extremely Low" and 10 represents "Extremely High/Positive".</>,
    loggingP2: <>We encourage you to use the optional text area underneath the slider to briefly describe <em>why</em> you feel the way you do. "Got 8 hours of sleep!" or "Struggling with a deadline at work" adds vital context to your score.</>,
    microCalloutTitle: "Micro-Logging",
    microCalloutText: "You don't just have to log manually. MindfulSpace also runs JavaScript sentiment analysis on your Chat Support messages. If you tell the bot you're having an awful day, that sentiment is subtly factored into your overarching mood profile.",
    readingH2: "Reading your mood chart",
    readingP: "The Dashboard visualizes your exact mood trajectory over the last 14 days using a clean line graph.",
    chartItems: [
      <><strong>X-Axis:</strong> The date of the log.</>,
      <><strong>Y-Axis:</strong> Your 1-10 score.</>,
      <><strong>Baseline (5.0):</strong> We draw a subtle mid-line across the graph. Consistently staying below this line for weeks may correlate with depressive symptoms and should encourage you to take a PHQ-9 screening.</>,
    ],
    aiH2: "How AI uses your mood data",
    aiP: <>Your mood chart is not just a passive display. When you click the "Generate AI Insights" button, Gemini 2.5 Flash analyzes the slope, variance, and notes of your mood data alongside your clinical assessments to provide a comprehensive weekly report.</>,
  },
  hi: {
    lastUpdated: "अंतिम अपडेट: अप्रैल 12, 2026",
    h1: "मूड ट्रैकर",
    intro: "भावनाएं तरल होती हैं। उन्हें ट्रैक करना ट्रिगर की पहचान, भावनाओं को मान्य करने और नई आदतों या दवाओं की प्रभावशीलता मापने के लिए एक अत्यधिक प्रभावी संज्ञानात्मक-व्यवहारिक तकनीक है।",
    loggingH2: "अपना मूड लॉग करना",
    loggingP1: <>आप <strong>डैशबोर्ड</strong> पेज से मैन्युअल रूप से अपना मूड लॉग कर सकते हैं। MindfulSpace एक सरल 1-10 स्लाइडर प्रदान करता है जहाँ 1 "बहुत कम" और 10 "बहुत अधिक/सकारात्मक" दर्शाता है।</>,
    loggingP2: <>हम आपको स्लाइडर के नीचे वैकल्पिक टेक्स्ट क्षेत्र का उपयोग करके संक्षेप में यह बताने के लिए प्रोत्साहित करते हैं कि आप <em>क्यों</em> ऐसा महसूस करते हैं। "8 घंटे की नींद आई!" या "काम पर डेडलाइन से जूझ रहा हूँ" आपके स्कोर में महत्वपूर्ण संदर्भ जोड़ता है।</>,
    microCalloutTitle: "माइक्रो-लॉगिंग",
    microCalloutText: "आपको केवल मैन्युअल रूप से लॉग नहीं करना होगा। MindfulSpace आपके चैट सपोर्ट संदेशों पर JavaScript सेंटिमेंट विश्लेषण भी चलाता है। यदि आप बॉट को बताते हैं कि आपका दिन बहुत बुरा गया, तो वह सेंटिमेंट सूक्ष्म रूप से आपके समग्र मूड प्रोफ़ाइल में जोड़ा जाता है।",
    readingH2: "अपना मूड चार्ट पढ़ना",
    readingP: "डैशबोर्ड एक साफ लाइन ग्राफ का उपयोग करके पिछले 14 दिनों में आपकी सटीक मूड ट्रैजेक्टरी विज़ुअलाइज़ करता है।",
    chartItems: [
      <><strong>X-अक्ष:</strong> लॉग की तारीख।</>,
      <><strong>Y-अक्ष:</strong> आपका 1-10 स्कोर।</>,
      <><strong>बेसलाइन (5.0):</strong> हम ग्राफ में एक सटल मध्य-रेखा खींचते हैं। हफ्तों तक इस रेखा के नीचे रहना अवसादग्रस्त लक्षणों से संबंधित हो सकता है और PHQ-9 स्क्रीनिंग लेने के लिए प्रोत्साहित करना चाहिए।</>,
    ],
    aiH2: "AI आपके मूड डेटा का उपयोग कैसे करता है",
    aiP: <>आपका मूड चार्ट सिर्फ एक निष्क्रिय प्रदर्शन नहीं है। जब आप "AI इनसाइट्स जनरेट करें" बटन पर क्लिक करते हैं, तो Gemini 2.5 Flash आपके नैदानिक मूल्यांकनों के साथ आपके मूड डेटा की ढाल, भिन्नता और नोट्स का विश्लेषण करके एक व्यापक साप्ताहिक रिपोर्ट प्रदान करता है।</>,
  },
  kn: {
  lastUpdated: "ಕೊನೆಯ ನವೀಕರಣ: ಅಕ್ಟೋ. 24, 2024",
  h1: "ಮೂಡ್ ಟ್ರ್ಯಾಕರ್",
  intro: "ಭಾವನೆಗಳು ನಿರಂತರವಾಗಿ ಬದಲಾಗುತ್ತಿರುತ್ತವೆ. ಅವುಗಳನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡುವುದು ಟ್ರಿಗರ್‌ಗಳನ್ನು ಗುರುತಿಸಲು, ಭಾವನೆಗಳನ್ನು ಮಾನ್ಯಗೊಳಿಸಲು ಮತ್ತು ಹೊಸ ಅಭ್ಯಾಸಗಳು ಅಥವಾ ಔಷಧಿಗಳ ಪರಿಣಾಮಕಾರಿತ್ವವನ್ನು ಅಳೆಯಲು ಅತ್ಯಂತ ಪರಿಣಾಮಕಾರಿ ಸಂಜ್ಞಾನಾತ್ಮಕ-ಪ್ರವರ್ತನಾ ತಂತ್ರವಾಗಿದೆ.",
  
  loggingH2: "ನಿಮ್ಮ ಮೂಡ್ ಅನ್ನು ದಾಖಲಿಸುವುದು",
  loggingP1: <>ನೀವು <strong>ಡ್ಯಾಶ್‌ಬೋರ್ಡ್</strong> ಪುಟದಿಂದ ನಿಮ್ಮ ಮೂಡ್ ಅನ್ನು ಕೈಯಾರೆ ದಾಖಲಿಸಬಹುದು. MindfulSpace ಸರಳವಾದ 1-10 ಸ್ಲೈಡರ್ ಅನ್ನು ಒದಗಿಸುತ್ತದೆ, ಇಲ್ಲಿ 1 "ಅತೀ ಕಡಿಮೆ" ಮತ್ತು 10 "ಅತೀ ಹೆಚ್ಚು/ಧನಾತ್ಮಕ" ಅನ್ನು ಸೂಚಿಸುತ್ತದೆ.</>,
  loggingP2: <>ನೀವು ಹೇಗೆ ಭಾವಿಸುತ್ತಿದ್ದೀರಿ ಎಂಬುದಕ್ಕೆ <em>ಯಾಕೆ</em> ಎಂಬುದನ್ನು ಸಂಕ್ಷಿಪ್ತವಾಗಿ ವಿವರಿಸಲು ಸ್ಲೈಡರ್ ಕೆಳಗಿನ ಆಯ್ಕೆಯ ಪಠ್ಯ ಪ್ರದೇಶವನ್ನು ಬಳಸಲು ನಾವು ನಿಮಗೆ ಪ್ರೋತ್ಸಾಹಿಸುತ್ತೇವೆ. "8 ಗಂಟೆಗಳ ನಿದ್ರೆ ಸಿಕ್ಕಿತು!" ಅಥವಾ "ಕೆಲಸದ ಡೆಡ್‌ಲೈನ್‌ ಬಗ್ಗೆ ಒತ್ತಡ" ಎಂಬವು ನಿಮ್ಮ ಸ್ಕೋರ್‌ಗೆ ಮಹತ್ವದ ಹಿನ್ನೆಲೆ ನೀಡುತ್ತವೆ.</>,
  
  microCalloutTitle: "ಮೈಕ್ರೋ-ಲಾಗಿಂಗ್",
  microCalloutText: "ನೀವು ಕೇವಲ ಕೈಯಾರೆ ಲಾಗ್ ಮಾಡುವ ಅಗತ್ಯವಿಲ್ಲ. MindfulSpace ನಿಮ್ಮ ಚಾಟ್ ಸಂದೇಶಗಳ ಮೇಲೆ JavaScript ಆಧಾರಿತ ಸೆಂಟಿಮೆಂಟ್ ವಿಶ್ಲೇಷಣೆಯನ್ನು ನಡೆಸುತ್ತದೆ. ನೀವು ಬಾಟ್‌ಗೆ ನಿಮ್ಮ ದಿನ ಬಹಳ ಕೆಟ್ಟದಾಗಿತ್ತು ಎಂದು ಹೇಳಿದರೆ, ಆ ಭಾವನೆ ನಿಮ್ಮ ಒಟ್ಟು ಮೂಡ್ ಪ್ರೊಫೈಲ್‌ಗೆ ಸೂಕ್ಷ್ಮವಾಗಿ ಸೇರಿಸಲಾಗುತ್ತದೆ.",
  
  readingH2: "ನಿಮ್ಮ ಮೂಡ್ ಚಾರ್ಟ್ ಅನ್ನು ಓದುವುದು",
  readingP: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ಕಳೆದ 14 ದಿನಗಳ ನಿಮ್ಮ ಮೂಡ್ ಬದಲಾವಣೆಯನ್ನು ಸರಳ ಲೈನ್ ಗ್ರಾಫ್ ಮೂಲಕ ಪ್ರದರ್ಶಿಸುತ್ತದೆ.",
  
  chartItems: [
    <><strong>X-ಅಕ್ಷ:</strong> ದಾಖಲೆ ದಿನಾಂಕ.</>,
    <><strong>Y-ಅಕ್ಷ:</strong> ನಿಮ್ಮ 1-10 ಸ್ಕೋರ್.</>,
    <><strong>ಬೇಸ್‌ಲೈನ್ (5.0):</strong> ಗ್ರಾಫ್‌ನಲ್ಲಿ ಮಧ್ಯ ರೇಖೆಯನ್ನು ತೋರಿಸಲಾಗುತ್ತದೆ. ವಾರಗಳ ಕಾಲ ಈ ರೇಖೆಗಿಂತ ಕೆಳಗೆ ಇರುವುದರಿಂದ ಡಿಪ್ರೆಶನ್ ಲಕ್ಷಣಗಳೊಂದಿಗೆ ಸಂಬಂಧ ಇರಬಹುದು ಮತ್ತು PHQ-9 ಪರೀಕ್ಷೆ ಮಾಡಲು ಪ್ರೇರೇಪಿಸುತ್ತದೆ.</>,
  ],
  
  aiH2: "AI ನಿಮ್ಮ ಮೂಡ್ ಡೇಟಾವನ್ನು ಹೇಗೆ ಬಳಸುತ್ತದೆ",
  aiP: <>ನಿಮ್ಮ ಮೂಡ್ ಚಾರ್ಟ್ ಕೇವಲ ಪ್ರದರ್ಶನವಲ್ಲ. ನೀವು "AI ಇನ್ಸೈಟ್ಸ್ ರಚಿಸಿ" ಬಟನ್ ಕ್ಲಿಕ್ ಮಾಡಿದಾಗ, Gemini 2.5 Flash ನಿಮ್ಮ ಮೂಡ್ ಡೇಟಾದ ಬದಲಾವಣೆ, ವ್ಯತ್ಯಾಸ ಮತ್ತು ಟಿಪ್ಪಣಿಗಳನ್ನು ನಿಮ್ಮ ಕ್ಲಿನಿಕಲ್ ಅಸೆಸ್ಮೆಂಟ್‌ಗಳೊಂದಿಗೆ ವಿಶ್ಲೇಷಿಸಿ ಸಮಗ್ರ ವಾರದ ವರದಿಯನ್ನು ನೀಡುತ್ತದೆ.</>,
},
};

export default function MoodTracker() {
  const { lang } = useLanguage();
  const c = content[lang] || content.en;

  return (
    <>
      <p className="text-sm text-slate-500 mb-6">{c.lastUpdated}</p>
      <h1>{c.h1}</h1>

      <p>{c.intro}</p>

      <h2 id="logging-your-mood">{c.loggingH2}</h2>
      <p>{c.loggingP1}</p>
      <p>{c.loggingP2}</p>

      <Callout type="info" title={c.microCalloutTitle}>
        {c.microCalloutText}
      </Callout>

      <h2 id="reading-your-chart">{c.readingH2}</h2>
      <p>{c.readingP}</p>
      <ul>
        {c.chartItems.map((item, i) => <li key={i}>{item}</li>)}
      </ul>

      <h2 id="ai-usage">{c.aiH2}</h2>
      <p>{c.aiP}</p>
    </>
  );
}
