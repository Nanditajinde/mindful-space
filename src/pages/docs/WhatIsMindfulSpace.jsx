import { Callout } from "../../components/docs/Callout";
import { useLanguage } from "../../context/LanguageContext";

const content = {
  en: {
    lastUpdated: "Last updated: April 12, 2026",
    h1: "What is MindfulSpace?",
    intro: "MindfulSpace is an intelligent, accessible mental health companion built to bridge the gap between people in distress and the psychological support they need. Powered by Google Gemini AI, MindfulSpace offers a private, non-judgmental space to express your feelings, track your mood, and take scientifically validated mental health screenings.",
    calloutTitle: "Not a Replacement for Professional Care",
    calloutText: <>MindfulSpace is designed to provide immediate support, emotional tracking, and self-guided screening. It is <strong>not</strong> a substitute for a licensed therapist, psychiatrist, or medical professional. If you are experiencing a severe mental health crisis, please reach out to emergency services immediately.</>,
    coreCapH2: "Core Capabilities",
    coreCapIntro: "MindfulSpace was built with a comprehensive toolkit designed to foster mental well-being:",
    caps: [
      <><strong>AI Chat Support:</strong> Talk naturally about your day, your stress, or your anxieties. The Gemini-powered assistant is fine-tuned to listen with empathy and offer grounding techniques without rushing to "solve" your problems.</>,
      <><strong>Clinical Screenings:</strong> Take the PHQ-9 (Depression) and GAD-7 (Anxiety) assessments directly in the app.</>,
      <><strong>AI Score Interpretation:</strong> Instead of leaving you with just a number, Gemini analyzes your assessment scores and provides tailored coping strategies.</>,
      <><strong>Daily Mood Tracker:</strong> Keep a record of your daily emotional state to identify triggers and trends over time.</>,
      <><strong>Crisis Detection:</strong> Built-in safeguards instantly detect phrases related to self-harm and automatically present the user with a pre-configured Trusted Contact and national crisis hotlines.</>,
      <><strong>Voice Interaction:</strong> Speak your thoughts aloud using the Web Speech API, and listen to the AI's responses for a completely hands-free, conversational experience.</>,
    ],
    whoH2: "Who is it for?",
    whoText: "MindfulSpace is designed for anyone navigating the complexities of modern life. Whether you are a student facing exam pressure, a working professional dealing with burnout, or simply someone going through a tough week, MindfulSpace provides a safe, anonymous outlet. We built this specifically keeping in mind the 150+ million people in India requiring mental health care interventions who currently lack access.",
    notH2: "What MindfulSpace is NOT",
    notCalloutTitle: "Important Limitations",
    notCaps: [
      <><strong>Not a therapist:</strong> MindfulSpace cannot build a long-term clinical treatment plan.</>,
      <><strong>Not for emergencies:</strong> The AI cannot dispatch emergency services to your location.</>,
      <><strong>Not a diagnostic tool:</strong> The PHQ-9 and GAD-7 screenings are indicative, not definitive medical diagnoses.</>,
    ],
  },
  hi: {
    lastUpdated: "अंतिम अपडेट: अप्रैल 12, 2026",
    h1: "MindfulSpace क्या है?",
    intro: "MindfulSpace एक बुद्धिमान, सुलभ मानसिक स्वास्थ्य साथी है जो संकट में लोगों और उन्हें आवश्यक मनोवैज्ञानिक सहायता के बीच की खाई को पाटने के लिए बनाया गया है। Google Gemini AI द्वारा संचालित, MindfulSpace आपकी भावनाएं व्यक्त करने, मूड ट्रैक करने और वैज्ञानिक रूप से सत्यापित मानसिक स्वास्थ्य स्क्रीनिंग लेने के लिए एक निजी, निर्णय-मुक्त स्थान प्रदान करता है।",
    calloutTitle: "पेशेवर देखभाल का विकल्प नहीं",
    calloutText: <>MindfulSpace तात्काल सहायता, भावनात्मक ट्रैकिंग और स्व-निर्देशित स्क्रीनिंग प्रदान करने के लिए डिज़ाइन किया गया है। यह किसी लाइसेंस प्राप्त थेरेपिस्ट, मनोचिकित्सक या चिकित्सा पेशेवर का <strong>विकल्प नहीं</strong> है। यदि आप गंभीर मानसिक स्वास्थ्य संकट का सामना कर रहे हैं, तो कृपया तुरंत आपातकालीन सेवाओं से संपर्क करें।</>,
    coreCapH2: "मुख्य क्षमताएं",
    coreCapIntro: "MindfulSpace को मानसिक स्वास्थ्य को बढ़ावा देने के लिए व्यापक टूलकिट के साथ बनाया गया है:",
    caps: [
      <><strong>AI चैट सपोर्ट:</strong> अपने दिन, तनाव या चिंताओं के बारे में स्वाभाविक रूप से बात करें। Gemini-संचालित सहायक सहानुभूति के साथ सुनने और आपकी समस्याओं को "हल" करने की जल्दी किए बिना ग्राउंडिंग तकनीकें प्रदान करने के लिए ट्यून किया गया है।</>,
      <><strong>क्लिनिकल स्क्रीनिंग:</strong> PHQ-9 (अवसाद) और GAD-7 (चिंता) मूल्यांकन सीधे ऐप में लें।</>,
      <><strong>AI स्कोर व्याख्या:</strong> आपको सिर्फ एक नंबर देने के बजाय, Gemini आपके मूल्यांकन स्कोर का विश्लेषण करके अनुकूलित कॉपिंग रणनीतियां प्रदान करता है।</>,
      <><strong>दैनिक मूड ट्रैकर:</strong> ट्रिगर और रुझानों की पहचान करने के लिए समय के साथ अपनी दैनिक भावनात्मक स्थिति का रिकॉर्ड रखें।</>,
      <><strong>संकट पहचान:</strong> अंतर्निहित सुरक्षा उपाय तुरंत आत्म-नुकसान से संबंधित वाक्यांशों का पता लगाते हैं और उपयोगकर्ता को पूर्व-कॉन्फ़िगर विश्वसनीय संपर्क और राष्ट्रीय संकट हॉटलाइन प्रस्तुत करते हैं।</>,
      <><strong>वॉइस इंटरैक्शन:</strong> Web Speech API का उपयोग करके अपने विचार ज़ोर से बोलें, और पूरी तरह हैंड्स-फ्री, बातचीत के अनुभव के लिए AI की प्रतिक्रियाएं सुनें।</>,
    ],
    whoH2: "यह किसके लिए है?",
    whoText: "MindfulSpace आधुनिक जीवन की जटिलताओं से गुज़र रहे किसी भी व्यक्ति के लिए डिज़ाइन किया गया है। चाहे आप परीक्षा के दबाव का सामना करने वाले छात्र हों, बर्नआउट से जूझते कामकाजी पेशेवर हों, या बस किसी कठिन हफ्ते से गुज़र रहे व्यक्ति हों, MindfulSpace एक सुरक्षित, गुमनाम आउटलेट प्रदान करता है। हमने इसे विशेष रूप से भारत के 15 करोड़ से अधिक लोगों को ध्यान में रखते हुए बनाया है जो मानसिक स्वास्थ्य देखभाल तक पहुंच से वंचित हैं।",
    notH2: "MindfulSpace क्या नहीं है",
    notCalloutTitle: "महत्वपूर्ण सीमाएं",
    notCaps: [
      <><strong>थेरेपिस्ट नहीं:</strong> MindfulSpace दीर्घकालिक नैदानिक उपचार योजना नहीं बना सकता।</>,
      <><strong>आपात स्थितियों के लिए नहीं:</strong> AI आपके स्थान पर आपातकालीन सेवाएं नहीं भेज सकता।</>,
      <><strong>निदान उपकरण नहीं:</strong> PHQ-9 और GAD-7 स्क्रीनिंग सांकेतिक हैं, निश्चित चिकित्सा निदान नहीं।</>,
    ],
  },
 kn: {
  lastUpdated: "ಕೊನೆಯ ನವೀಕರಣ: ಅಕ್ಟೋಬರ್ 24, 2024",
  h1: "MindfulSpace ಎಂದರೇನು?",
  intro: "MindfulSpace ಒಂದು ಬುದ್ಧಿವಂತ ಮತ್ತು ಸುಲಭವಾಗಿ ಬಳಕೆ ಮಾಡಬಹುದಾದ ಮಾನಸಿಕ ಆರೋಗ್ಯ ಸಹಾಯಕವಾಗಿದೆ. ಸಂಕಷ್ಟದಲ್ಲಿರುವ ಜನರು ಮತ್ತು ಅವರಿಗೆ ಅಗತ್ಯವಿರುವ ಮನೋವೈಜ್ಞಾನಿಕ ಬೆಂಬಲದ ನಡುವೆ ಇರುವ ಅಂತರವನ್ನು ಕಡಿಮೆ ಮಾಡಲು ಇದು ನಿರ್ಮಿಸಲಾಗಿದೆ. Google Gemini AI ಮೂಲಕ ಚಾಲಿತವಾಗಿರುವ MindfulSpace, ನಿಮ್ಮ ಭಾವನೆಗಳನ್ನು ವ್ಯಕ್ತಪಡಿಸಲು, ಮೂಡ್ ಟ್ರ್ಯಾಕ್ ಮಾಡಲು ಮತ್ತು ವೈಜ್ಞಾನಿಕವಾಗಿ ಪರಿಶೀಲಿಸಲಾದ ಮಾನಸಿಕ ಆರೋಗ್ಯ ಪರೀಕ್ಷೆಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳಲು ಖಾಸಗಿ ಮತ್ತು ತೀರ್ಪಿಲ್ಲದ ಸ್ಥಳವನ್ನು ಒದಗಿಸುತ್ತದೆ.",

  calloutTitle: "ವೃತ್ತಿಪರ ಚಿಕಿತ್ಸೆಗೆ ಪರ್ಯಾಯವಲ್ಲ",
  calloutText: "MindfulSpace ತಕ್ಷಣದ ಬೆಂಬಲ, ಭಾವನೆಗಳ ಟ್ರ್ಯಾಕಿಂಗ್ ಮತ್ತು ಸ್ವಯಂ ಮಾರ್ಗದರ್ಶಿತ ಪರೀಕ್ಷೆಗಳನ್ನು ಒದಗಿಸಲು ವಿನ್ಯಾಸಗೊಳಿಸಲಾಗಿದೆ. ಇದು ಲೈಸೆನ್ಸ್ ಪಡೆದ ಥೆರಪಿಸ್ಟ್, ಸೈಕಿಯಾಟ್ರಿಸ್ಟ್ ಅಥವಾ ವೈದ್ಯಕೀಯ ವೃತ್ತಿಪರರ ಪರ್ಯಾಯವಲ್ಲ. ನೀವು ಗಂಭೀರ ಮಾನಸಿಕ ಆರೋಗ್ಯ ಸಂಕಷ್ಟವನ್ನು ಅನುಭವಿಸುತ್ತಿದ್ದರೆ, ದಯವಿಟ್ಟು ತಕ್ಷಣವೇ ತುರ್ತು ಸೇವೆಗಳನ್ನು ಸಂಪರ್ಕಿಸಿ.",

  coreCapH2: "ಮುಖ್ಯ ಸಾಮರ್ಥ್ಯಗಳು",
  coreCapIntro: "MindfulSpace ಮಾನಸಿಕ ಆರೋಗ್ಯವನ್ನು ಉತ್ತೇಜಿಸಲು ಸಮಗ್ರ ಟೂಲ್‌ಕಿಟ್‌ನೊಂದಿಗೆ ನಿರ್ಮಿಸಲಾಗಿದೆ:",
  caps: [
    "AI ಚಾಟ್ ಬೆಂಬಲ: ನಿಮ್ಮ ದಿನ, ಒತ್ತಡ ಅಥವಾ ಚಿಂತೆಗಳ ಬಗ್ಗೆ ಸಹಜವಾಗಿ ಮಾತನಾಡಿ. Gemini ಚಾಲಿತ ಸಹಾಯಕ ಸಹಾನುಭೂತಿಯಿಂದ ಕೇಳುತ್ತದೆ ಮತ್ತು ಸಮಸ್ಯೆಗಳನ್ನು ತಕ್ಷಣ ಪರಿಹರಿಸಲು ಯತ್ನಿಸದೇ ನೆರವಾಗುತ್ತದೆ.",
    "ಕ್ಲಿನಿಕಲ್ ಪರೀಕ್ಷೆಗಳು: PHQ-9 (ಅವಸಾದ) ಮತ್ತು GAD-7 (ಆತಂಕ) ಮೌಲ್ಯಮಾಪನಗಳನ್ನು ನೇರವಾಗಿ ಅಪ್ಲಿಕೇಶನ್‌ನಲ್ಲಿ ತೆಗೆದುಕೊಳ್ಳಿ.",
    "AI ವಿಶ್ಲೇಷಣೆ: ಕೇವಲ ಸಂಖ್ಯೆಯನ್ನು ನೀಡುವುದಲ್ಲ, Gemini ನಿಮ್ಮ ಫಲಿತಾಂಶಗಳನ್ನು ವಿಶ್ಲೇಷಿಸಿ ನಿಮಗೆ ಹೊಂದುವ ಪರಿಹಾರ ಮಾರ್ಗಗಳನ್ನು ಸೂಚಿಸುತ್ತದೆ.",
    "ದೈನಂದಿನ ಮೂಡ್ ಟ್ರ್ಯಾಕರ್: ನಿಮ್ಮ ದಿನನಿತ್ಯದ ಭಾವನೆಗಳನ್ನು ದಾಖಲಿಸಿ, ಟ್ರಿಗರ್‌ಗಳು ಮತ್ತು ಪ್ಯಾಟರ್ನ್‌ಗಳನ್ನು ಗುರುತಿಸಿ.",
    "ಸಂಕಷ್ಟ ಪತ್ತೆ: ಆತ್ಮಹಾನಿ ಸಂಬಂಧಿತ ಪದಗಳನ್ನು ತಕ್ಷಣ ಗುರುತಿಸಿ, ವಿಶ್ವಾಸಾರ್ಹ ಸಂಪರ್ಕ ಮತ್ತು ರಾಷ್ಟ್ರೀಯ ಸಹಾಯ ಸಂಖ್ಯೆಯನ್ನು ತೋರಿಸುತ್ತದೆ.",
    "ವಾಯ್ಸ್ ಇಂಟರ್ಯಾಕ್ಷನ್: Web Speech API ಬಳಸಿ ನಿಮ್ಮ ಭಾವನೆಗಳನ್ನು ಮಾತಿನಲ್ಲಿ ಹೇಳಿ ಮತ್ತು AI ಉತ್ತರಗಳನ್ನು ಕೇಳಿ — ಸಂಪೂರ್ಣ ಹ್ಯಾಂಡ್ಸ್-ಫ್ರೀ ಅನುಭವ."
  ],

  whoH2: "ಇದು ಯಾರಿಗಾಗಿ?",
  whoText: "MindfulSpace ಆಧುನಿಕ ಜೀವನದ ಒತ್ತಡಗಳನ್ನು ಎದುರಿಸುತ್ತಿರುವ ಪ್ರತಿಯೊಬ್ಬರಿಗೂ ವಿನ್ಯಾಸಗೊಳಿಸಲಾಗಿದೆ. ನೀವು ಪರೀಕ್ಷಾ ಒತ್ತಡದಲ್ಲಿರುವ ವಿದ್ಯಾರ್ಥಿಯಾಗಿರಲಿ, ಕೆಲಸದ ಒತ್ತಡದಿಂದ ಬಳಲುತ್ತಿರುವ ಉದ್ಯೋಗಿಯಾಗಿರಲಿ ಅಥವಾ ಕಷ್ಟಕರ ಸಮಯವನ್ನು ಅನುಭವಿಸುತ್ತಿರುವವರಾಗಿರಲಿ — ಇದು ಸುರಕ್ಷಿತ ಮತ್ತು ಅನಾಮಧೇಯ ಸ್ಥಳವನ್ನು ಒದಗಿಸುತ್ತದೆ. ಭಾರತದಲ್ಲಿ ಮಾನಸಿಕ ಆರೋಗ್ಯ ಸೇವೆ ಅಗತ್ಯವಿರುವ 15 ಕೋಟಿಗೂ ಹೆಚ್ಚು ಜನರನ್ನು ಗಮನದಲ್ಲಿಟ್ಟುಕೊಂಡು ಇದನ್ನು ನಿರ್ಮಿಸಲಾಗಿದೆ.",

  notH2: "MindfulSpace ಏನು ಅಲ್ಲ",
  notCalloutTitle: "ಮುಖ್ಯ ಮಿತಿಗಳು",
  notCaps: [
    "ಥೆರಪಿಸ್ಟ್ ಅಲ್ಲ: ದೀರ್ಘಕಾಲದ ಚಿಕಿತ್ಸೆ ಯೋಜನೆ ನೀಡಲು ಸಾಧ್ಯವಿಲ್ಲ.",
    "ತುರ್ತು ಪರಿಸ್ಥಿತಿಗಳಿಗೆ ಅಲ್ಲ: ನಿಮ್ಮ ಸ್ಥಳಕ್ಕೆ ತುರ್ತು ಸೇವೆಗಳನ್ನು ಕಳುಹಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ.",
    "ನಿದಾನ ಸಾಧನ ಅಲ್ಲ: PHQ-9 ಮತ್ತು GAD-7 ಫಲಿತಾಂಶಗಳು ಸೂಚಕ ಮಾತ್ರ, ಅಂತಿಮ ವೈದ್ಯಕೀಯ ನಿದಾನವಲ್ಲ."
  ]
},
};

export default function WhatIsMindfulSpace() {
  const { lang } = useLanguage();
  const c = content[lang] || content.en;

  return (
    <>
      <p className="text-sm text-slate-500 mb-6">{c.lastUpdated}</p>
      <h1>{c.h1}</h1>

      <p>{c.intro}</p>

      <Callout type="warning" title={c.calloutTitle}>
        {c.calloutText}
      </Callout>

      <h2 id="core-capabilities">{c.coreCapH2}</h2>
      <p>{c.coreCapIntro}</p>

      <ul>
        {c.caps.map((cap, i) => <li key={i}>{cap}</li>)}
      </ul>

      <h2 id="who-is-it-for">{c.whoH2}</h2>
      <p>{c.whoText}</p>

      <h2 id="what-MindfulSpace-is-not">{c.notH2}</h2>
      <Callout type="danger" title={c.notCalloutTitle}>
        <ul className="mt-2 mb-0 border-none pl-4 space-y-1">
          {c.notCaps.map((cap, i) => <li key={i}>{cap}</li>)}
        </ul>
      </Callout>
    </>
  );
}
