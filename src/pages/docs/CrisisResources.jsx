import { Callout } from "../../components/docs/Callout";
import { useLanguage } from "../../context/LanguageContext";

const content = {
  en: {
    lastUpdated: "Last updated: Apr 12, 2026",
    h1: "Crisis Resources in India",
    intro: "If you are feeling overwhelmed, having thoughts of self-harm, or experiencing a mental health emergency, please reach out for professional help immediately. You do not have to go through this alone.",
    calloutTitle: "Immediate Hotlines",
    aboutH2: "About these services",
    icallH3: "iCall (TISS)",
    icallP: "Initiated by the Tata Institute of Social Sciences (TISS). They offer free telephone and email-based counseling services. Telephone lines run Monday to Saturday, 10 AM to 8 PM.",
    vandrevalaH3: "Vandrevala Foundation",
    vandrevalaP: "A 24x7 crisis intervention and mental health helpline operated by trained clinical psychologists and psychiatrists. They offer multilingual support and are always available for suicide prevention.",
    nimhansH3: "NIMHANS Toll-Free Helpline",
    nimhansP: "The National Institute of Mental Health and Neuro-Sciences provides psychosocial support and mental health care. Highly recommended for acute distress.",
    aasraH3: "AASRA",
    aasraP: "A 24x7 crisis intervention center specifically focused on suicide prevention. Confidential and non-judgmental support.",
    whatH2: "What to do right now",
    steps: [
      <><strong>Ensure your physical safety.</strong> Remove yourself from any immediately dangerous situations or implements.</>,
      <><strong>Call a hotline.</strong> The people on the other end are trained to listen without judgment.</>,
      <><strong>Reach out to your trusted contact.</strong> Call a friend, family member, or whoever you listed in the MindfulSpace onboarding flow. Tell them "I am not safe right now."</>,
      <><strong>Go to the hospital.</strong> If you cannot guarantee your own safety, go to the nearest hospital casualty (ER) ward.</>,
    ],
  },
  hi: {
    lastUpdated: "अंतिम अपडेट: एप्रिल 12, 2026",
    h1: "भारत में संकट संसाधन",
    intro: "यदि आप अभिभूत महसूस कर रहे हैं, आत्म-नुकसान के विचार आ रहे हैं, या मानसिक स्वास्थ्य आपातकाल का अनुभव कर रहे हैं, तो कृपया तुरंत पेशेवर मदद के लिए संपर्क करें। आपको यह अकेले नहीं झेलना है।",
    calloutTitle: "तुरंत हेल्पलाइन",
    aboutH2: "इन सेवाओं के बारे में",
    icallH3: "iCall (TISS)",
    icallP: "Tata Institute of Social Sciences (TISS) द्वारा शुरू किया गया। वे मुफ्त टेलीफोन और ईमेल-आधारित परामर्श सेवाएं प्रदान करते हैं। टेलीफोन लाइनें सोमवार से शनिवार, सुबह 10 बजे से शाम 8 बजे तक चलती हैं।",
    vandrevalaH3: "Vandrevala Foundation",
    vandrevalaP: "प्रशिक्षित नैदानिक मनोवैज्ञानिकों और मनोचिकित्सकों द्वारा संचालित 24×7 संकट हस्तक्षेप और मानसिक स्वास्थ्य हेल्पलाइन। वे बहुभाषी समर्थन प्रदान करते हैं और आत्महत्या रोकथाम के लिए हमेशा उपलब्ध हैं।",
    nimhansH3: "NIMHANS टोल-फ्री हेल्पलाइन",
    nimhansP: "National Institute of Mental Health and Neuro-Sciences मनोसामाजिक समर्थन और मानसिक स्वास्थ्य देखभाल प्रदान करता है। तीव्र संकट के लिए अत्यधिक अनुशंसित।",
    aasraH3: "AASRA",
    aasraP: "आत्महत्या रोकथाम पर विशेष रूप से ध्यान केंद्रित एक 24×7 संकट हस्तक्षेप केंद्र। गोपनीय और निर्णय-मुक्त समर्थन।",
    whatH2: "अभी क्या करें",
    steps: [
      <><strong>अपनी शारीरिक सुरक्षा सुनिश्चित करें।</strong> किसी भी तुरंत खतरनाक स्थिति या वस्तुओं से खुद को दूर करें।</>,
      <><strong>हेल्पलाइन पर कॉल करें।</strong> दूसरी तरफ के लोग बिना निर्णय के सुनने के लिए प्रशिक्षित हैं।</>,
      <><strong>अपने विश्वसनीय संपर्क से संपर्क करें।</strong> किसी मित्र, परिवार के सदस्य, या जो भी आपने MindfulSpace ऑनबोर्डिंग में सूचीबद्ध किया हो उसे कॉल करें। उन्हें बताएं "मैं अभी सुरक्षित नहीं हूं।"</>,
      <><strong>अस्पताल जाएं।</strong> यदि आप अपनी सुरक्षा की गारंटी नहीं दे सकते, तो निकटतम अस्पताल के इमरजेंसी वार्ड जाएं।</>,
    ],
  },
  kn: {
  lastUpdated: "ಕೊನೆಯ ನವೀಕರಣ: ಏಪ್ರಿಲ್ 12, 2026",
  h1: "ಭಾರತದಲ್ಲಿನ ತುರ್ತು ಸಹಾಯ ಸಂಪನ್ಮೂಲಗಳು",
  intro: "ನೀವು ಒತ್ತಡದಿಂದ ತುಂಬಿಕೊಂಡಿರುವಂತೆ ಅನಿಸುತ್ತಿದ್ದರೆ, ಸ್ವಯಂ ಹಾನಿ ಬಗ್ಗೆ ಆಲೋಚನೆಗಳು ಬರುತ್ತಿದ್ದರೆ ಅಥವಾ ಮಾನಸಿಕ ಆರೋಗ್ಯ ತುರ್ತು ಪರಿಸ್ಥಿತಿಯನ್ನು ಅನುಭವಿಸುತ್ತಿದ್ದರೆ, ದಯವಿಟ್ಟು ತಕ್ಷಣವೇ ವೃತ್ತಿಪರ ಸಹಾಯವನ್ನು ಪಡೆಯಿರಿ. ನೀವು ಇದನ್ನು ಒಬ್ಬರೇ ಎದುರಿಸಬೇಕಾಗಿಲ್ಲ.",

  calloutTitle: "ತಕ್ಷಣದ ಸಹಾಯವಾಣಿ ಸಂಖ್ಯೆಗಳು",

  aboutH2: "ಈ ಸೇವೆಗಳ ಬಗ್ಗೆ",
  icallH3: "iCall (TISS)",
  icallP: "Tata Institute of Social Sciences (TISS) ಆರಂಭಿಸಿದ ಸೇವೆ. ಉಚಿತ ದೂರವಾಣಿ ಮತ್ತು ಇಮೇಲ್ ಆಧಾರಿತ ಸಮಾಲೋಚನೆ ನೀಡುತ್ತಾರೆ. ದೂರವಾಣಿ ಸೇವೆಗಳು ಸೋಮವಾರದಿಂದ ಶನಿವಾರದವರೆಗೆ ಬೆಳಗ್ಗೆ 10 ರಿಂದ ಸಂಜೆ 8ರವರೆಗೆ ಲಭ್ಯವಿರುತ್ತವೆ.",

  vandrevalaH3: "Vandrevala Foundation",
  vandrevalaP: "ಪ್ರಶಿಕ್ಷಿತ ಕ್ಲಿನಿಕಲ್ ಸೈಕಾಲಜಿಸ್ಟ್‌ಗಳು ಮತ್ತು ಸೈಕಿಯಾಟ್ರಿಸ್ಟ್‌ಗಳಿಂದ ನಿರ್ವಹಿಸಲ್ಪಡುವ 24×7 ತುರ್ತು ಸಹಾಯವಾಣಿ. ಬಹುಭಾಷಾ ಬೆಂಬಲವನ್ನು ನೀಡುತ್ತಾರೆ ಮತ್ತು ಆತ್ಮಹತ್ಯೆ ತಡೆಗಟ್ಟುವಲ್ಲಿ ಸದಾ ಲಭ್ಯವಿರುತ್ತಾರೆ.",

  nimhansH3: "NIMHANS ಟೋಲ್-ಫ್ರೀ ಸಹಾಯವಾಣಿ",
  nimhansP: "National Institute of Mental Health and Neuro-Sciences ಮನೋಸಾಮಾಜಿಕ ಬೆಂಬಲ ಮತ್ತು ಮಾನಸಿಕ ಆರೋಗ್ಯ ಸೇವೆಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ. ತೀವ್ರ ಮಾನಸಿಕ ಒತ್ತಡದ ಸಂದರ್ಭಗಳಲ್ಲಿ ಬಹಳ ಶಿಫಾರಸು ಮಾಡಲಾಗುತ್ತದೆ.",

  aasraH3: "AASRA",
  aasraP: "ಆತ್ಮಹತ್ಯೆ ತಡೆಗಟ್ಟುವಿಕೆಗೆ ವಿಶೇಷವಾಗಿ ಕೇಂದ್ರೀಕರಿಸಿದ 24×7 ತುರ್ತು ಸಹಾಯ ಕೇಂದ್ರ. ಗೌಪ್ಯ ಮತ್ತು ನಿರ್ಣಯರಹಿತ ಬೆಂಬಲವನ್ನು ಒದಗಿಸುತ್ತದೆ.",

  whatH2: "ಈಗ ಏನು ಮಾಡಬೇಕು",
  steps: [
    <><strong>ನಿಮ್ಮ ಶಾರೀರಿಕ ಸುರಕ್ಷತೆಯನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ.</strong> ಯಾವುದೇ ತಕ್ಷಣದ ಅಪಾಯಕರ ಪರಿಸ್ಥಿತಿ ಅಥವಾ ವಸ್ತುಗಳಿಂದ ದೂರವಿರಿ.</>,
    <><strong>ಸಹಾಯವಾಣಿಗೆ ಕರೆ ಮಾಡಿ.</strong> ಅಲ್ಲಿ ಇರುವವರು ನಿಮ್ಮ ಮಾತನ್ನು ನಿರ್ಣಯವಿಲ್ಲದೆ ಕೇಳಲು ತರಬೇತಿ ಪಡೆದಿದ್ದಾರೆ.</>,
    <><strong>ನಿಮ್ಮ ವಿಶ್ವಾಸಾರ್ಹ ವ್ಯಕ್ತಿಯನ್ನು ಸಂಪರ್ಕಿಸಿ.</strong> ಸ್ನೇಹಿತ, ಕುಟುಂಬ ಸದಸ್ಯ ಅಥವಾ MindfulSpace ನಲ್ಲಿ ನೀವು ಸೇರಿಸಿದ ವ್ಯಕ್ತಿಗೆ ಕರೆ ಮಾಡಿ. ಅವರಿಗೆ "ನಾನು ಈಗ ಸುರಕ್ಷಿತವಾಗಿಲ್ಲ" ಎಂದು ತಿಳಿಸಿ.</>,
    <><strong>ಆಸ್ಪತ್ರೆಗೆ ಹೋಗಿ.</strong> ನೀವು ನಿಮ್ಮ ಸುರಕ್ಷತೆಯನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಲು ಸಾಧ್ಯವಿಲ್ಲದಿದ್ದರೆ, ಹತ್ತಿರದ ಆಸ್ಪತ್ರೆಯ ತುರ್ತು ವಿಭಾಗಕ್ಕೆ ತೆರಳಿ.</>,
  ],
},
};

export default function CrisisResources() {
  const { lang } = useLanguage();
  const c = content[lang] || content.en;

  return (
    <>
      <p className="text-sm text-slate-500 mb-6">{c.lastUpdated}</p>
      <h1>{c.h1}</h1>

      <p>{c.intro}</p>

      <Callout type="danger" title={c.calloutTitle}>
        <ul className="mt-2 text-rose-100 space-y-2 border-none pl-4">
          <li><strong>iCall:</strong> <a href="tel:9152987821" className="text-rose-300 font-bold hover:underline">9152987821</a></li>
          <li><strong>Vandrevala Foundation:</strong> <a href="tel:18602662345" className="text-rose-300 font-bold hover:underline">1860-2662-345</a></li>
          <li><strong>NIMHANS:</strong> <a href="tel:08046110007" className="text-rose-300 font-bold hover:underline">080-46110007</a></li>
          <li><strong>AASRA:</strong> <a href="tel:9820466627" className="text-rose-300 font-bold hover:underline">9820466627</a></li>
        </ul>
      </Callout>

      <h2 id="about-these-services">{c.aboutH2}</h2>

      <h3 id="icall">{c.icallH3}</h3>
      <p>{c.icallP}</p>

      <h3 id="vandrevala-foundation">{c.vandrevalaH3}</h3>
      <p>{c.vandrevalaP}</p>

      <h3 id="nimhans">{c.nimhansH3}</h3>
      <p>{c.nimhansP}</p>

      <h3 id="aasra">{c.aasraH3}</h3>
      <p>{c.aasraP}</p>

      <hr className="my-8 border-[#1F2937]" />

      <h2 id="what-to-do-right-now">{c.whatH2}</h2>
      <ol>
        {c.steps.map((step, i) => <li key={i}>{step}</li>)}
      </ol>
    </>
  );
}
