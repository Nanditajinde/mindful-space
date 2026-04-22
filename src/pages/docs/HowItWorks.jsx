import { Callout } from "../../components/docs/Callout";
import { Steps, Step } from "../../components/docs/Steps";
import { useLanguage } from "../../context/LanguageContext";

const content = {
  en: {
    lastUpdated: "Last updated: Apr 12, 2026",
    h1: "How MindfulSpace Works",
    intro: "MindfulSpace operates at the intersection of modern web technology, generative AI, and clinical psychology frameworks to deliver a seamless support experience.",
    techH2: "The Technology",
    techP1: <>At its core, MindfulSpace leverages <strong>Google Gemini 2.5 Flash</strong> to drive the conversational interface. We utilize a highly specialized system prompt that restricts Gemini from offering medical advice, forcing it instead into a supportive, empathetic listening mode.</>,
    techP2: <>We also employ real-time <strong>JavaScript-based Sentiment Analysis</strong> on the client side. Every message you send is scored (from highly negative to highly positive). This data is silently fed into your historical profile, allowing the AI to generate long-term insights without requiring manual mood logging.</>,
    flowH2: "Conversation Flow",
    flowIntro: "The standard user journey designed to keep you safe and supported is simple:",
    steps: [
      { title: "Sign in with Google", desc: "Authentication is handled securely via Firebase. We only store your basic profile information (Name and Email) to personalize your experience." },
      { title: "Add a Trusted Contact", desc: "Before you can chat, MindfulSpace requires you to input a Trusted Contact. This is a crucial safety mechanism; if you ever express thoughts of self-harm, this contact is immediately presented to you." },
      { title: "Chat with MindfulSpace AI", desc: "Talk freely. The AI remembers the context of your current conversation and uses your past sentiment scores to understand your baseline mood." },
      { title: "Take Clinical Assessments", desc: "Periodically navigate to the Assessments tab to take the PHQ-9 or GAD-7. The results are saved to your profile and interpreted by Gemini." },
      { title: "Review Insights on Dashboard", desc: "Visit the Dashboard to see your 14-day mood trend, your assessment history, and tap the \"Generate AI Insights\" button for a comprehensive weekly psychological review." },
    ],
    privacyH2: "Data & Privacy",
    privacyP: "We understand that mental health data is highly sensitive. MindfulSpace is built with zero-trust architecture using Firebase Firestore Security Rules.",
    privacyCalloutTitle: "Your Data is Yours",
    privacyCalloutText: <>Your chat logs, assessment scores, and mood entries are tied strictly to your authenticated UID. Not even database administrators can query your data without your explicit permission. We <strong>never</strong> sell or share your conversational data with third-party advertisers.</>,
  },
  hi: {
    lastUpdated: "अंतिम अपडेट: अप्रैल 12, 2026",
    h1: "MindfulSpace कैसे काम करता है",
    intro: "MindfulSpace एक निर्बाध सहायता अनुभव प्रदान करने के लिए आधुनिक वेब प्रौद्योगिकी, जेनेरेटिव AI और नैदानिक मनोविज्ञान ढांचों के संगम पर काम करता है।",
    techH2: "प्रौद्योगिकी",
    techP1: <>मूल रूप से, MindfulSpace संवादी इंटरफेस चलाने के लिए <strong>Google Gemini 2.5 Flash</strong> का उपयोग करता है। हम एक अत्यधिक विशेष सिस्टम प्रॉम्प्ट का उपयोग करते हैं जो Gemini को चिकित्सा सलाह देने से रोकता है और इसे एक सहायक, सहानुभूतिपूर्ण सुनने के मोड में रखता है।</>,
    techP2: <>हम क्लाइंट साइड पर रियल-टाइम <strong>JavaScript-आधारित सेंटिमेंट विश्लेषण</strong> भी करते हैं। आपके द्वारा भेजा गया प्रत्येक संदेश स्कोर किया जाता है (अत्यधिक नकारात्मक से अत्यधिक सकारात्मक तक)। यह डेटा चुपचाप आपकी ऐतिहासिक प्रोफ़ाइल में फीड होता है, जिससे AI मैन्युअल मूड लॉगिंग की आवश्यकता के बिना दीर्घकालिक इनसाइट्स उत्पन्न कर सकता है।</>,
    flowH2: "बातचीत प्रवाह",
    flowIntro: "आपको सुरक्षित और समर्थित रखने के लिए डिज़ाइन की गई मानक उपयोगकर्ता यात्रा सरल है:",
    steps: [
      { title: "Google से साइन इन करें", desc: "प्रमाणीकरण Firebase के माध्यम से सुरक्षित रूप से संभाला जाता है। हम आपके अनुभव को वैयक्तिकृत करने के लिए केवल आपकी मूल प्रोफ़ाइल जानकारी (नाम और ईमेल) संग्रहीत करते हैं।" },
      { title: "विश्वसनीय संपर्क जोड़ें", desc: "चैट करने से पहले, MindfulSpace को आपको एक विश्वसनीय संपर्क दर्ज करना होगा। यह एक महत्वपूर्ण सुरक्षा तंत्र है; यदि आप कभी आत्म-नुकसान के विचार व्यक्त करते हैं, तो यह संपर्क आपको तुरंत प्रस्तुत किया जाता है।" },
      { title: "MindfulSpace AI से चैट करें", desc: "स्वतंत्र रूप से बात करें। AI आपकी वर्तमान बातचीत का संदर्भ याद रखता है और आपके बेसलाइन मूड को समझने के लिए आपके पिछले सेंटिमेंट स्कोर का उपयोग करता है।" },
      { title: "नैदानिक मूल्यांकन लें", desc: "PHQ-9 या GAD-7 लेने के लिए समय-समय पर Assessments टैब पर जाएं। परिणाम आपकी प्रोफ़ाइल में सहेजे जाते हैं और Gemini द्वारा व्याख्या की जाती है।" },
      { title: "डैशबोर्ड पर इनसाइट्स की समीक्षा करें", desc: "अपना 14-दिन का मूड ट्रेंड, मूल्यांकन इतिहास देखने के लिए डैशबोर्ड पर जाएं, और व्यापक साप्ताहिक मनोवैज्ञानिक समीक्षा के लिए \"AI इनसाइट्स जनरेट करें\" बटन टैप करें।" },
    ],
    privacyH2: "डेटा और गोपनीयता",
    privacyP: "हम समझते हैं कि मानसिक स्वास्थ्य डेटा अत्यधिक संवेदनशील है। MindfulSpace Firebase Firestore Security Rules का उपयोग करके जीरो-ट्रस्ट आर्किटेक्चर के साथ बनाया गया है।",
    privacyCalloutTitle: "आपका डेटा आपका है",
    privacyCalloutText: <>आपके चैट लॉग, मूल्यांकन स्कोर और मूड प्रविष्टियां आपके प्रमाणिकृत UID से सख्ती से बंधी हैं। डेटाबेस प्रशासक भी आपकी स्पष्ट अनुमति के बिना आपके डेटा को क्वेरी नहीं कर सकते। हम <strong>कभी नहीं</strong> आपका संवादी डेटा तृतीय-पक्ष विज्ञापनदाताओं को बेचते या साझा करते हैं।</>,
  },
  kn: {
  lastUpdated: "ಕೊನೆಯ ನವೀಕರಣ: ಏಪ್ರಿಲ್ 12, 2026",
  h1: "MindfulSpace ಹೇಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ",
  intro: "MindfulSpace ಆಧುನಿಕ ವೆಬ್ ತಂತ್ರಜ್ಞಾನ, ಜನರೇಟಿವ್ AI ಮತ್ತು ಕ್ಲಿನಿಕಲ್ ಮನೋವಿಜ್ಞಾನ ರೂಪರೇಖೆಗಳ ಸಂಗಮದಲ್ಲಿ ಕಾರ್ಯನಿರ್ವಹಿಸಿ, ಸುಗಮವಾದ ಬೆಂಬಲ ಅನುಭವವನ್ನು ಒದಗಿಸುತ್ತದೆ.",

  techH2: "ತಂತ್ರಜ್ಞಾನ",
  techP1: <>ಮೂಲತಃ, MindfulSpace ಸಂಭಾಷಣಾ ಇಂಟರ್‌ಫೇಸ್ ಅನ್ನು ಚಾಲನೆ ಮಾಡಲು <strong>Google Gemini 2.5 Flash</strong> ಅನ್ನು ಬಳಸುತ್ತದೆ. ನಾವು Gemini ಗೆ ವೈದ್ಯಕೀಯ ಸಲಹೆ ನೀಡುವುದನ್ನು ನಿರ್ಬಂಧಿಸುವ ವಿಶೇಷ ಸಿಸ್ಟಮ್ ಪ್ರಾಂಪ್ಟ್ ಅನ್ನು ಬಳಸುತ್ತೇವೆ ಮತ್ತು ಅದನ್ನು ಸಹಾಯಕ ಹಾಗೂ ಸಹಾನುಭೂತಿಯುತ ಕೇಳುವ ಮೋಡ್‌ನಲ್ಲಿ ಇಡುತ್ತೇವೆ.</>,
  techP2: <>ನಾವು ಕ್ಲೈಂಟ್ ಸೈಡ್‌ನಲ್ಲಿ ರಿಯಲ್-ಟೈಮ್ <strong>JavaScript ಆಧಾರಿತ ಸೆಂಟಿಮೆಂಟ್ ವಿಶ್ಲೇಷಣೆ</strong> ಅನ್ನು ಸಹ ಬಳಸುತ್ತೇವೆ. ನೀವು ಕಳುಹಿಸುವ ಪ್ರತಿಯೊಂದು ಸಂದೇಶಕ್ಕೂ (ತೀವ್ರ ನಕಾರಾತ್ಮಕದಿಂದ ತೀವ್ರ ಸಕಾರಾತ್ಮಕವರೆಗೆ) ಅಂಕೆ ನೀಡಲಾಗುತ್ತದೆ. ಈ ಡೇಟಾ ನಿಮ್ಮ ಇತಿಹಾಸ ಪ್ರೊಫೈಲ್‌ಗೆ ಸೇರಿಸಲಾಗುತ್ತದೆ, ಇದರಿಂದ AI ದೀರ್ಘಕಾಲದ ಒಳನೋಟಗಳನ್ನು ಮ್ಯಾನುಯಲ್ ಮೂಡ್ ಲಾಗಿಂಗ್ ಇಲ್ಲದೆ ರಚಿಸುತ್ತದೆ.</>,

  flowH2: "ಸಂಭಾಷಣೆಯ ಪ್ರಕ್ರಿಯೆ",
  flowIntro: "ನಿಮ್ಮ ಸುರಕ್ಷತೆ ಮತ್ತು ಬೆಂಬಲಕ್ಕಾಗಿ ವಿನ್ಯಾಸಗೊಳಿಸಲಾದ ಸಾಮಾನ್ಯ ಬಳಕೆದಾರ ಪ್ರಯಾಣ ಸರಳವಾಗಿದೆ:",
  steps: [
    { title: "Google ಮೂಲಕ ಸೈನ್ ಇನ್ ಮಾಡಿ", desc: "ಪ್ರಮಾಣೀಕರಣವನ್ನು Firebase ಮೂಲಕ ಸುರಕ್ಷಿತವಾಗಿ ನಿರ್ವಹಿಸಲಾಗುತ್ತದೆ. ನಿಮ್ಮ ಅನುಭವವನ್ನು ವೈಯಕ್ತಿಕಗೊಳಿಸಲು ನಾವು ನಿಮ್ಮ ಮೂಲ ಪ್ರೊಫೈಲ್ ಮಾಹಿತಿ (ಹೆಸರು ಮತ್ತು ಇಮೇಲ್) ಮಾತ್ರ ಸಂಗ್ರಹಿಸುತ್ತೇವೆ." },
    { title: "ವಿಶ್ವಾಸಾರ್ಹ ಸಂಪರ್ಕವನ್ನು ಸೇರಿಸಿ", desc: "ಚಾಟ್ ಮಾಡಲು ಮೊದಲು, MindfulSpace ನಿಮಗೆ ಒಂದು ವಿಶ್ವಾಸಾರ್ಹ ಸಂಪರ್ಕವನ್ನು ನಮೂದಿಸಲು ಅಗತ್ಯವಿದೆ. ಇದು ಪ್ರಮುಖ ಸುರಕ್ಷತಾ ವ್ಯವಸ್ಥೆ; ನೀವು ಯಾವಾಗಲಾದರೂ ಸ್ವಯಂ ಹಾನಿ ಯೋಚನೆಗಳನ್ನು ವ್ಯಕ್ತಪಡಿಸಿದರೆ, ಈ ಸಂಪರ್ಕವನ್ನು ತಕ್ಷಣ ನಿಮಗೆ ತೋರಿಸಲಾಗುತ್ತದೆ." },
    { title: "MindfulSpace AI ಜೊತೆ ಚಾಟ್ ಮಾಡಿ", desc: "ಮುಕ್ತವಾಗಿ ಮಾತನಾಡಿ. AI ನಿಮ್ಮ ಪ್ರಸ್ತುತ ಸಂಭಾಷಣೆಯ ಸಂದರ್ಭವನ್ನು ನೆನಪಿಟ್ಟುಕೊಳ್ಳುತ್ತದೆ ಮತ್ತು ನಿಮ್ಮ ಹಿಂದಿನ ಸೆಂಟಿಮೆಂಟ್ ಅಂಕೆಗಳನ್ನು ಬಳಸಿಕೊಂಡು ನಿಮ್ಮ ಮೂಲಭೂತ ಮನಸ್ಥಿತಿಯನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುತ್ತದೆ." },
    { title: "ಕ್ಲಿನಿಕಲ್ ಮೌಲ್ಯಮಾಪನಗಳನ್ನು ಮಾಡಿ", desc: "ಕಾಲಕಾಲಕ್ಕೆ Assessments ಟ್ಯಾಬ್‌ಗೆ ಹೋಗಿ PHQ-9 ಅಥವಾ GAD-7 ಪರೀಕ್ಷೆಗಳನ್ನು ಮಾಡಿ. ಫಲಿತಾಂಶಗಳನ್ನು ನಿಮ್ಮ ಪ್ರೊಫೈಲ್‌ನಲ್ಲಿ ಉಳಿಸಲಾಗುತ್ತದೆ ಮತ್ತು Gemini ಮೂಲಕ ವಿವರಣೆ ನೀಡಲಾಗುತ್ತದೆ." },
    { title: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ನಲ್ಲಿ ಒಳನೋಟಗಳನ್ನು ಪರಿಶೀಲಿಸಿ", desc: "ನಿಮ್ಮ 14 ದಿನಗಳ ಮೂಡ್ ಟ್ರೆಂಡ್, ಮೌಲ್ಯಮಾಪನ ಇತಿಹಾಸವನ್ನು ನೋಡಲು ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ಗೆ ಭೇಟಿ ನೀಡಿ ಮತ್ತು ಸಮಗ್ರ ವಾರಾಂತರ ಮಾನಸಿಕ ವಿಶ್ಲೇಷಣೆಗೆ \"AI Insights ರಚಿಸಿ\" ಬಟನ್ ಅನ್ನು ಒತ್ತಿರಿ." },
  ],

  privacyH2: "ಡೇಟಾ ಮತ್ತು ಗೌಪ್ಯತೆ",
  privacyP: "ಮಾನಸಿಕ ಆರೋಗ್ಯ ಡೇಟಾ ಅತ್ಯಂತ ಸಂವೇದನಾಶೀಲವಾಗಿದೆ ಎಂಬುದನ್ನು ನಾವು ಅರಿತಿದ್ದೇವೆ. MindfulSpace ಅನ್ನು Firebase Firestore Security Rules ಬಳಸುವ ಜೀರೋ-ಟ್ರಸ್ಟ್ ಆರ್ಕಿಟೆಕ್ಚರ್‌ನೊಂದಿಗೆ ನಿರ್ಮಿಸಲಾಗಿದೆ.",

  privacyCalloutTitle: "ನಿಮ್ಮ ಡೇಟಾ ನಿಮ್ಮದೇ",
  privacyCalloutText: <>ನಿಮ್ಮ ಚಾಟ್ ಲಾಗ್‌ಗಳು, ಮೌಲ್ಯಮಾಪನ ಅಂಕೆಗಳು ಮತ್ತು ಮೂಡ್ ದಾಖಲಾತಿಗಳು ನಿಮ್ಮ ಪ್ರಮಾಣೀಕೃತ UID ಗೆ ಕಟ್ಟುನಿಟ್ಟಾಗಿ ಸಂಬಂಧಿಸಲಾಗಿದೆ. ನಿಮ್ಮ ಸ್ಪಷ್ಟ ಅನುಮತಿ ಇಲ್ಲದೆ ಡೇಟಾಬೇಸ್ ಆಡ್ಮಿನ್‌ಗಳಿಗೂ ನಿಮ್ಮ ಡೇಟಾವನ್ನು ಪ್ರವೇಶಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ. ನಾವು ನಿಮ್ಮ ಸಂಭಾಷಣಾ ಡೇಟಾವನ್ನು <strong>ಯಾವತ್ತೂ</strong> ಮೂರನೇ ಪಕ್ಷದ ಜಾಹೀರಾತುದಾರರಿಗೆ ಮಾರುವುದಿಲ್ಲ ಅಥವಾ ಹಂಚಿಕೊಳ್ಳುವುದಿಲ್ಲ.</>,
},
};

export default function HowItWorks() {
  const { lang } = useLanguage();
  const c = content[lang] || content.en;

  return (
    <>
      <p className="text-sm text-slate-500 mb-6">{c.lastUpdated}</p>
      <h1>{c.h1}</h1>

      <p>{c.intro}</p>

      <h2 id="the-technology">{c.techH2}</h2>
      <p>{c.techP1}</p>
      <p>{c.techP2}</p>

      <h2 id="conversation-flow">{c.flowH2}</h2>
      <p>{c.flowIntro}</p>

      <Steps>
        {c.steps.map((step, i) => (
          <Step key={i} number={String(i + 1)} title={step.title}>
            {step.desc}
          </Step>
        ))}
      </Steps>

      <h2 id="data-and-privacy">{c.privacyH2}</h2>
      <p>{c.privacyP}</p>
      <Callout type="success" title={c.privacyCalloutTitle}>
        {c.privacyCalloutText}
      </Callout>
    </>
  );
}
