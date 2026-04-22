import { Callout } from "../../components/docs/Callout";
import { Steps, Step } from "../../components/docs/Steps";
import { CodeBlock } from "../../components/docs/CodeBlock";
import { useLanguage } from "../../context/LanguageContext";

const content = {
  en: {
    lastUpdated: "Last updated: Apr 12, 2026",
    h1: "Quick Start Guide",
    intro: "Ready to get started with MindfulSpace? Follow these simple steps to set up your account and begin your wellness journey.",
    steps: [
      {
        title: "Open the App",
        desc: <>Navigate to the main application by clicking the "Try MindfulSpace" button in the top right, or going directly to the root domain.</>,
      },
      {
        title: "Sign in Securely",
        desc: <>Click the "Continue with Google" button. You will be redirected to Google's secure authentication flow.</>,
      },
      {
        title: "Configure Emergency Safety",
        desc: <>Upon your first login, a modal will appear requesting a Trusted Contact. This cannot be skipped.
          <CodeBlock language="text" code={`Name: Jane Doe\nPhone: +91 98765 43210\nRelationship: Sister`} />
          This information is encrypted and only shown back to you if the AI detects a crisis.</>,
      },
      {
        title: "Start Your First Chat",
        desc: <>You'll be dropped immediately into the chat interface. Try saying something natural:
          <CodeBlock language="text" code={`"I have a massive presentation tomorrow and my chest feels tight."`} />
          Notice how the AI responds with validating statements rather than just generic advice.</>,
      },
      {
        title: "Establish a Baseline",
        desc: <>Head over to the <strong>Assessments</strong> tab on the left sidebar and take the PHQ-9. This establishes a baseline for your psychological profile, allowing your AI Insights dashboard to track your progress accurately over the coming weeks.</>,
      },
    ],
    readyH3: "Ready to explore?",
    readySub: "Read about our specific features in the next section.",
  },
  hi: {
    lastUpdated: "अंतिम अपडेट: अप्रैल 12, 2026",
    h1: "त्वरित शुरुआत गाइड",
    intro: "MindfulSpace के साथ शुरू करने के लिए तैयार हैं? अपना खाता सेट करने और अपनी वेलनेस यात्रा शुरू करने के लिए इन सरल चरणों का पालन करें।",
    steps: [
      {
        title: "ऐप खोलें",
        desc: <>ऊपर दाईं ओर "MindfulSpace आज़माएं" बटन पर क्लिक करके या सीधे रूट डोमेन पर जाकर मुख्य एप्लिकेशन पर नेविगेट करें।</>,
      },
      {
        title: "सुरक्षित रूप से साइन इन करें",
        desc: <>"Google से जारी रखें" बटन पर क्लिक करें। आपको Google के सुरक्षित प्रमाणीकरण प्रवाह पर पुनर्निर्देशित किया जाएगा।</>,
      },
      {
        title: "आपातकालीन सुरक्षा कॉन्फ़िगर करें",
        desc: <>पहली बार लॉगिन पर, एक मॉडल विश्वसनीय संपर्क मांगेगा। इसे छोड़ा नहीं जा सकता।
          <CodeBlock language="text" code={`नाम: रिया शर्मा\nफ़ोन: +91 98765 43210\nसंबंध: बहन`} />
          यह जानकारी एन्क्रिप्ट की गई है और केवल तभी दिखाई जाती है जब AI संकट का पता लगाए।</>,
      },
      {
        title: "पहली चैट शुरू करें",
        desc: <>आप तुरंत चैट इंटरफ़ेस में आ जाएंगे। कुछ स्वाभाविक कहने की कोशिश करें:
          <CodeBlock language="text" code={`"कल मेरी बड़ी प्रेजेंटेशन है और मेरा सीना तंग महसूस हो रहा है।"`} />
          ध्यान दें कि AI केवल जेनेरिक सलाह के बजाय सहानुभूतिपूर्ण कथनों के साथ कैसे प्रतिक्रिया देता है।</>,
      },
      {
        title: "बेसलाइन स्थापित करें",
        desc: <>बाईं साइडबार पर <strong>मूल्यांकन</strong> टैब पर जाएं और PHQ-9 लें। यह आपके मनोवैज्ञानिक प्रोफ़ाइल के लिए एक बेसलाइन स्थापित करता है, जिससे आपका AI इनसाइट्स डैशबोर्ड आने वाले हफ्तों में आपकी प्रगति को सटीक रूप से ट्रैक कर सकता है।</>,
      },
    ],
    readyH3: "एक्सप्लोर करने के लिए तैयार?",
    readySub: "अगले भाग में हमारी विशिष्ट सुविधाओं के बारे में पढ़ें।",
  },
  kn: {
  lastUpdated: "ಕೊನೆಯ ನವೀಕರಣ: ಅಕ್ಟೋ. 24, 2024",
  h1: "ತ್ವರಿತ ಪ್ರಾರಂಭ ಮಾರ್ಗದರ್ಶಿ",
  intro: "MindfulSpace ಅನ್ನು ಪ್ರಾರಂಭಿಸಲು ಸಿದ್ಧವೇ? ನಿಮ್ಮ ಖಾತೆಯನ್ನು ಹೊಂದಿಸಿ ಮತ್ತು ನಿಮ್ಮ ವೆಲ್‌ನೆಸ್ ಪ್ರಯಾಣವನ್ನು ಆರಂಭಿಸಲು ಈ ಸರಳ ಹಂತಗಳನ್ನು ಅನುಸರಿಸಿ.",
  
  steps: [
    {
      title: "ಆಪ್ ತೆರೆಯಿರಿ",
      desc: <>ಮೇಲಿನ ಬಲ ಭಾಗದಲ್ಲಿರುವ "Try MindfulSpace" ಬಟನ್ ಕ್ಲಿಕ್ ಮಾಡುವುದರಿಂದ ಅಥವಾ ನೇರವಾಗಿ ರುಟ್ ಡೊಮೇನ್‌ಗೆ ಹೋಗುವುದರಿಂದ ಮುಖ್ಯ ಅಪ್ಲಿಕೇಶನ್‌ಗೆ ಹೋಗಿ.</>,
    },
    {
      title: "ಭದ್ರವಾಗಿ ಸೈನ್ ಇನ್ ಮಾಡಿ",
      desc: <>"Continue with Google" ಬಟನ್ ಕ್ಲಿಕ್ ಮಾಡಿ. ನೀವು Google ನ ಭದ್ರ ದೃಢೀಕರಣ ಪ್ರಕ್ರಿಯೆಗೆ ಮರುನಿರ್ದೇಶಿತರಾಗುತ್ತೀರಿ.</>,
    },
    {
      title: "ತುರ್ತು ಭದ್ರತಾ ವ್ಯವಸ್ಥೆ ಹೊಂದಿಸಿ",
      desc: <>ಮೊದಲ ಬಾರಿ ಲಾಗಿನ್ ಮಾಡಿದಾಗ, Trusted Contact ಅನ್ನು ಕೇಳುವ ಒಂದು ಮೋಡಲ್ ತೋರಿಸಲಾಗುತ್ತದೆ. ಇದನ್ನು ಬಿಟ್ಟುಹೋಗಲು ಸಾಧ್ಯವಿಲ್ಲ.
        <CodeBlock language="text" code={`ಹೆಸರು: ರಮ್ಯಾ\nಫೋನ್: +91 98765 43210\nಸಂಬಂಧ: ಸಹೋದರಿ`} />
        ಈ ಮಾಹಿತಿ ಎನ್ಕ್ರಿಪ್ಟ್ ಮಾಡಲ್ಪಟ್ಟಿದ್ದು, AI ಸಂಕಷ್ಟವನ್ನು ಪತ್ತೆಹಚ್ಚಿದಾಗ ಮಾತ್ರ ನಿಮಗೆ ತೋರಿಸಲಾಗುತ್ತದೆ.</>,
    },
    {
      title: "ಮೊದಲ ಚಾಟ್ ಪ್ರಾರಂಭಿಸಿ",
      desc: <>ನೀವು ತಕ್ಷಣ ಚಾಟ್ ಇಂಟರ್ಫೇಸ್‌ಗೆ ಪ್ರವೇಶಿಸುತ್ತೀರಿ. ಸ್ವಾಭಾವಿಕವಾಗಿ ಏನಾದರೂ ಹೇಳಿ:
        <CodeBlock language="text" code={`"ನಾಳೆ ನನ್ನ ದೊಡ್ಡ ಪ್ರೆಸೆಂಟೇಶನ್ ಇದೆ ಮತ್ತು ನನ್ನ ಎದೆ ಬಿಗಿಯಾಗಿ ಅನಿಸುತ್ತಿದೆ."`} />
        AI ಸಾಮಾನ್ಯ ಸಲಹೆ ನೀಡುವುದಕ್ಕಿಂತ ಸಹಾನುಭೂತಿಯ ಪ್ರತಿಕ್ರಿಯೆ ನೀಡುವುದನ್ನು ಗಮನಿಸಿ.</>,
    },
    {
      title: "ಮೂಲ ಮಟ್ಟವನ್ನು ಸ್ಥಾಪಿಸಿ",
      desc: <>ಎಡಭಾಗದ ಸೈಡ್‌ಬಾರ್‌ನಲ್ಲಿರುವ <strong>Assessments</strong> ಟ್ಯಾಬ್‌ಗೆ ಹೋಗಿ ಮತ್ತು PHQ-9 ಪರೀಕ್ಷೆಯನ್ನು ತೆಗೆದುಕೊಳ್ಳಿ. ಇದು ನಿಮ್ಮ ಮಾನಸಿಕ ಪ್ರೊಫೈಲ್‌ಗೆ ಮೂಲ ಮಟ್ಟವನ್ನು ಸ್ಥಾಪಿಸುತ್ತದೆ ಮತ್ತು ನಿಮ್ಮ AI Insights ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ಮುಂದಿನ ವಾರಗಳಲ್ಲಿ ನಿಮ್ಮ ಪ್ರಗತಿಯನ್ನು ಸರಿಯಾಗಿ ಟ್ರ್ಯಾಕ್ ಮಾಡಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.</>,
    },
  ],
  
  readyH3: "ಅನ್ವೇಷಿಸಲು ಸಿದ್ಧವೇ?",
  readySub: "ಮುಂದಿನ ವಿಭಾಗದಲ್ಲಿ ನಮ್ಮ ವೈಶಿಷ್ಟ್ಯಗಳ ಬಗ್ಗೆ ಓದಿ.",
},
};

export default function QuickStart() {
  const { lang } = useLanguage();
  const c = content[lang] || content.en;

  return (
    <>
      <p className="text-sm text-slate-500 mb-6">{c.lastUpdated}</p>
      <h1>{c.h1}</h1>

      <p>{c.intro}</p>

      <Steps>
        {c.steps.map((step, i) => (
          <Step key={i} number={String(i + 1)} title={step.title}>
            {step.desc}
          </Step>
        ))}
      </Steps>

      <div className="mt-8 p-6 bg-[#1E293B] rounded-xl border border-[#1F2937] text-center">
        <h3 className="text-white font-semibold text-lg mb-2">{c.readyH3}</h3>
        <p className="text-slate-400 text-sm mb-4">{c.readySub}</p>
      </div>
    </>
  );
}
