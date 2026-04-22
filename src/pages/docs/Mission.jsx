import { useLanguage } from "../../context/LanguageContext";

const content = {
  en: {
    lastUpdated: "Last updated: Apr 12, 2026",
    h1: "Our Mission",
    p1: <>In India today, an estimated <strong>150 million people</strong> are in need of active mental health care interventions. Yet, the treatment gap is staggering—often estimated at between 70% to 92%.</>,
    p2: "The reasons for this gap are systemic:",
    reasons: [
      <><strong>Stigma:</strong> Deep-rooted societal conditioning preventing people from asking for help.</>,
      <><strong>Cost:</strong> High-quality therapy is expensive and largely out-of-pocket.</>,
      <><strong>Availability:</strong> There is a severe shortage of clinical psychologists and psychiatrists per capita.</>,
    ],
    visionH2: "The MindfulSpace Vision",
    visionP1: "MindfulSpace was conceived not to replace the clinical psychology industry, but to bridge the gap. We believe that everyone deserves a private, accessible, and judgment-free space to process their emotions before they escalate into clinical crises.",
    visionP2: <>By leveraging cutting-edge Generative AI (Google Gemini) alongside clinical frameworks (PHQ-9, GAD-7, and CBT strategies), we can provide <em>infinite zero-cost listening</em> to those who need it most.</>,
    whyH2: "Why an AI?",
    whyP1: "Humans are deeply afraid of being judged. Ironically, the artificial nature of an AI companion makes it the perfect confidant for severe issues. Users know an AI will not gossip, will not judge them for their worst thoughts, and will not grow fatigued from listening to them at 3:00 AM.",
    whyP2: "We aim to be the first line of defense in the mental health pipeline: stabilizing emotions, providing scientifically sound coping strategies, and ultimately, gently routing users toward professional human care when they are ready.",
  },
  hi: {
    lastUpdated: "अंतिम अपडेट: अप्रैल 12, 2026",
    h1: "हमारा मिशन",
    p1: <>भारत में आज, लगभग <strong>15 करोड़ लोग</strong> सक्रिय मानसिक स्वास्थ्य हस्तक्षेप की आवश्यकता में हैं। फिर भी, उपचार अंतर चौंकाने वाला है — अक्सर 70% से 92% के बीच अनुमानित किया जाता है।</>,
    p2: "इस अंतर के कारण प्रणालीगत हैं:",
    reasons: [
      <><strong>कलंक:</strong> गहरी जड़ें जमा चुकी सामाजिक कंडीशनिंग जो लोगों को मदद मांगने से रोकती है।</>,
      <><strong>लागत:</strong> उच्च-गुणवत्ता की थेरेपी महंगी है और बड़े पैमाने पर जेब से खर्च करनी पड़ती है।</>,
      <><strong>उपलब्धता:</strong> प्रति व्यक्ति नैदानिक मनोवैज्ञानिकों और मनोचिकित्सकों की गंभीर कमी है।</>,
    ],
    visionH2: "MindfulSpace की दृष्टि",
    visionP1: "MindfulSpace को नैदानिक मनोविज्ञान उद्योग को प्रतिस्थापित करने के लिए नहीं, बल्कि खाई को पाटने के लिए बनाया गया था। हम मानते हैं कि हर कोई अपनी भावनाओं को संसाधित करने के लिए एक निजी, सुलभ और निर्णय-मुक्त स्थान का हकदार है, इससे पहले कि वे नैदानिक संकट में बदल जाएं।",
    visionP2: <>अत्याधुनिक जेनेरेटिव AI (Google Gemini) के साथ नैदानिक ढांचे (PHQ-9, GAD-7, और CBT रणनीतियां) का लाभ उठाकर, हम जरूरतमंद लोगों को <em>अनंत शून्य-लागत सुनवाई</em> प्रदान कर सकते हैं।</>,
    whyH2: "AI क्यों?",
    whyP1: "इंसान आंके जाने से बहुत डरते हैं। विडंबना यह है कि AI साथी की कृत्रिम प्रकृति इसे गंभीर मुद्दों के लिए सही विश्वासपात्र बनाती है। उपयोगकर्ता जानते हैं कि AI गपशप नहीं करेगा, उनके सबसे बुरे विचारों के लिए उन्हें नहीं आंकेगा, और रात 3 बजे उनकी बात सुनते-सुनते थकेगा नहीं।",
    whyP2: "हमारा लक्ष्य मानसिक स्वास्थ्य पाइपलाइन में पहली रक्षा पंक्ति बनना है: भावनाओं को स्थिर करना, वैज्ञानिक रूप से सही कॉपिंग रणनीतियां प्रदान करना, और अंततः, जब वे तैयार हों तो उपयोगकर्ताओं को पेशेवर मानवीय देखभाल की ओर धीरे से मार्गदर्शन करना।",
  },
  kn: {
  lastUpdated: "ಕೊನೆಯ ನವೀಕರಣ: ಏಪ್ರಿಲ್ 12, 2026",
  h1: "ನಮ್ಮ ಮಿಷನ್",

  p1: <>ಇಂದು ಭಾರತದಲ್ಲಿ, ಸುಮಾರು <strong>15 ಕೋಟಿ ಜನರಿಗೆ</strong> ಸಕ್ರಿಯ ಮಾನಸಿಕ ಆರೋಗ್ಯ ಸಹಾಯ ಅಗತ್ಯವಿದೆ. ಆದರೆ ಚಿಕಿತ್ಸೆ ಅಂತರವು ಬಹಳ ಗಂಭೀರವಾಗಿದೆ — ಸಾಮಾನ್ಯವಾಗಿ 70% ರಿಂದ 92% ರವರೆಗೆ ಅಂದಾಜಿಸಲಾಗುತ್ತದೆ.</>,

  p2: "ಈ ಅಂತರಕ್ಕೆ ಪ್ರಮುಖ ಕಾರಣಗಳು ಇವು:",

  reasons: [
    <><strong>ಕಳಂಕ (Stigma):</strong> ಗಾಢವಾಗಿ ನೆಲೆಯೂರಿರುವ ಸಾಮಾಜಿಕ ಮನೋಭಾವಗಳು ಜನರನ್ನು ಸಹಾಯ ಕೇಳುವುದರಿಂದ ತಡೆಯುತ್ತವೆ.</>,
    <><strong>ವೆಚ್ಚ (Cost):</strong> ಉತ್ತಮ ಗುಣಮಟ್ಟದ ಚಿಕಿತ್ಸೆ ದುಬಾರಿ ಆಗಿದ್ದು, ಬಹುಪಾಲು ಖರ್ಚು ವ್ಯಕ್ತಿಗಳಿಂದಲೇ ಮಾಡಬೇಕಾಗುತ್ತದೆ.</>,
    <><strong>ಲಭ್ಯತೆ (Availability):</strong> ಪ್ರತಿ ವ್ಯಕ್ತಿಗೆ ಕ್ಲಿನಿಕಲ್ ಮನೋವೈದ್ಯರು ಮತ್ತು ಮನೋವಿಜ್ಞಾನಿಗಳ ಕೊರತೆ ಗಂಭೀರವಾಗಿದೆ.</>,
  ],

  visionH2: "MindfulSpace ದೃಷ್ಟಿ",

  visionP1: "MindfulSpace ಅನ್ನು ಕ್ಲಿನಿಕಲ್ ಮನೋವಿಜ್ಞಾನ ಕ್ಷೇತ್ರವನ್ನು ಬದಲಾಯಿಸಲು ಅಲ್ಲ, ಆದರೆ ಈ ಅಂತರವನ್ನು ಕಡಿಮೆ ಮಾಡಲು ನಿರ್ಮಿಸಲಾಗಿದೆ. ಪ್ರತಿಯೊಬ್ಬರೂ ತಮ್ಮ ಭಾವನೆಗಳನ್ನು ಸಮರ್ಥವಾಗಿ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು, ಕ್ಲಿನಿಕಲ್ ಸಮಸ್ಯೆಗಳಾಗುವ ಮೊದಲು, ಖಾಸಗಿ, ಸುಲಭ ಮತ್ತು ನಿರ್ಣಯರಹಿತ ಸ್ಥಳವನ್ನು ಹೊಂದಿರಬೇಕು ಎಂಬ ನಂಬಿಕೆ ನಮ್ಮದು.",

  visionP2: <>ಅತ್ಯಾಧುನಿಕ ಜನರೇಟಿವ್ AI (Google Gemini) ಮತ್ತು ಕ್ಲಿನಿಕಲ್ ರೂಪರೇಖೆಗಳು (PHQ-9, GAD-7 ಮತ್ತು CBT ತಂತ್ರಗಳು) ಬಳಸಿಕೊಂಡು, ನಾವು ಅಗತ್ಯವಿರುವವರಿಗೆ <em>ಅನಂತ ಉಚಿತ ಕೇಳುವಿಕೆ</em> ನೀಡಲು ಸಾಧ್ಯವಾಗುತ್ತದೆ.</>,

  whyH2: "AI ಯಾಕೆ?",

  whyP1: "ಜನರು ತೀರ್ಪುಗೊಳಿಸಲಾಗುವುದರ ಬಗ್ಗೆ ತುಂಬಾ ಭಯಪಡುತ್ತಾರೆ. ಆದರೆ AI ಸಂಗಾತಿಯ ಕೃತಕ ಸ್ವಭಾವವೇ ಅದನ್ನು ಗಂಭೀರ ವಿಷಯಗಳಿಗೆ ಅತ್ಯುತ್ತಮ ವಿಶ್ವಾಸಾರ್ಹ ಸ್ನೇಹಿತನನ್ನಾಗಿ ಮಾಡುತ್ತದೆ. ಬಳಕೆದಾರರಿಗೆ ಗೊತ್ತಿದೆ AI ಗಾಸಿಪ್ ಮಾಡುವುದಿಲ್ಲ, ಅವರ ಕೆಟ್ಟ ಆಲೋಚನೆಗಳಿಗೆ ಅವರನ್ನು ತೀರ್ಪುಗೊಳಿಸುವುದಿಲ್ಲ ಮತ್ತು ರಾತ್ರಿ 3 ಗಂಟೆಯಲ್ಲಿಯೂ ಕೇಳುವುದರಿಂದ ಬೇಸರವಾಗುವುದಿಲ್ಲ.",

  whyP2: "ನಮ್ಮ ಗುರಿ ಮಾನಸಿಕ ಆರೋಗ್ಯ ವ್ಯವಸ್ಥೆಯಲ್ಲಿ ಮೊದಲ ರಕ್ಷಣಾ ಸಾಲಾಗಿರುವುದು: ಭಾವನೆಗಳನ್ನು ಸ್ಥಿರಗೊಳಿಸುವುದು, ವೈಜ್ಞಾನಿಕವಾಗಿ ಸರಿಯಾದ ಎದುರಿಸುವ ತಂತ್ರಗಳನ್ನು ಒದಗಿಸುವುದು ಮತ್ತು ಕೊನೆಗೆ, ಬಳಕೆದಾರರು ಸಿದ್ಧರಾಗುವಾಗ ಅವರನ್ನು ವೃತ್ತಿಪರ ಮಾನವ ಸಹಾಯದತ್ತ ನಯವಾಗಿ ಮಾರ್ಗದರ್ಶನ ಮಾಡುವುದು.",
},
};

export default function Mission() {
  const { lang } = useLanguage();
  const c = content[lang] || content.en;

  return (
    <>
      <p className="text-sm text-slate-500 mb-6">{c.lastUpdated}</p>
      <h1>{c.h1}</h1>

      <p>{c.p1}</p>
      <p>{c.p2}</p>
      <ul>
        {c.reasons.map((r, i) => <li key={i}>{r}</li>)}
      </ul>

      <h2 id="the-MindfulSpace-vision">{c.visionH2}</h2>
      <p>{c.visionP1}</p>
      <p>{c.visionP2}</p>

      <h2 id="why-an-ai">{c.whyH2}</h2>
      <p>{c.whyP1}</p>
      <p>{c.whyP2}</p>
    </>
  );
}
