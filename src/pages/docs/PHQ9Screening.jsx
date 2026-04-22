import { Callout } from "../../components/docs/Callout";
import { useLanguage } from "../../context/LanguageContext";

const content = {
  en: {
    lastUpdated: "Last updated: Apr 12, 2026",
    h1: "PHQ-9 Depression Screening",
    intro: "MindfulSpace includes a built-in Patient Health Questionnaire (PHQ-9), the gold-standard diagnostic tool used by healthcare professionals worldwide for screening, diagnosing, monitoring and measuring the severity of depression.",
    whatH2: "What is the PHQ-9?",
    whatP: "The PHQ-9 is a 9-question instrument given to patients in a primary care setting to screen for the presence and severity of depression. It asks you to reflect on the last two weeks and rate how often you've been bothered by specific problems, such as:",
    whatItems: ["Little interest or pleasure in doing things", "Feeling down, depressed, or hopeless", "Trouble falling or staying asleep, or sleeping too much", "Feeling tired or having little energy"],
    interpretH2: "How to interpret your score",
    interpretP: "Each of the 9 questions is scored from 0 (Not at all) to 3 (Nearly every day). The total score ranges from 0 to 27. Here is how medical professionals generally interpret the score:",
    tableHeaders: ["Score Range", "Depression Severity", "Recommended Action"],
    tableRows: [
      { range: "0 - 4", sev: "Minimal", sevClass: "text-emerald-400", action: "None to minimal action required. Monitor weekly." },
      { range: "5 - 9", sev: "Mild", sevClass: "text-yellow-400", action: "Watchful waiting; consider supportive counseling." },
      { range: "10 - 14", sev: "Moderate", sevClass: "text-orange-400", action: "Evaluate for active treatment (therapy/counseling)." },
      { range: "15 - 19", sev: "Moderately Severe", sevClass: "text-rose-400", action: "Active treatment required (therapy and/or medication)." },
      { range: "20 - 27", sev: "Severe", sevClass: "text-red-500", action: "Immediate active treatment necessary by a psychiatrist." },
    ],
    howH2: "How MindfulSpace uses the PHQ-9",
    howP: "When you complete the test in MindfulSpace:",
    howItems: [
      "The score is beautifully visualized in the UI.",
      "The result is saved to your medical history in your Dashboard.",
      <><strong>Question 9 Check:</strong> If you score &gt; 0 on question 9 (thoughts of self-harm), MindfulSpace immediately triggers a safety warning with crisis hotline numbers.</>,
      "Gemini analyzes your score bracket and generates 3 personalized coping strategies right on the results page.",
    ],
    limitH2: "Important Limitations",
    calloutTitle: "Screening ≠ Diagnosis",
    calloutText: <>Questionnaires like the PHQ-9 are screening tools, which means they highlight people who <em>might</em> be depressed. Only a qualified doctor or mental health professional can make an actual clinical diagnosis of Major Depressive Disorder.</>,
  },
  hi: {
    lastUpdated: "अंतिम अपडेट: अप्रैल 12, 2026",
    h1: "PHQ-9 अवसाद स्क्रीनिंग",
    intro: "MindfulSpace में एक अंतर्निहित Patient Health Questionnaire (PHQ-9) शामिल है, जो दुनिया भर में स्वास्थ्य देखभाल पेशेवरों द्वारा अवसाद की गंभीरता की जांच, निदान, निगरानी और मापने के लिए उपयोग किया जाने वाला स्वर्ण-मानक निदान उपकरण है।",
    whatH2: "PHQ-9 क्या है?",
    whatP: "PHQ-9 एक 9-प्रश्न उपकरण है जो प्राथमिक देखभाल सेटिंग में रोगियों को अवसाद की उपस्थिति और गंभीरता की जांच के लिए दिया जाता है। यह आपसे पिछले दो हफ्तों पर विचार करने और विशिष्ट समस्याओं से कितनी बार परेशान हुए यह रेट करने के लिए कहता है, जैसे:",
    whatItems: ["कामों में कम रुचि या आनंद", "उदास, निराश या निराशावादी महसूस करना", "नींद न आना या बहुत ज़्यादा सोना", "थकान महसूस करना या कम ऊर्जा होना"],
    interpretH2: "अपना स्कोर कैसे समझें",
    interpretP: "9 प्रश्नों में से प्रत्येक को 0 (बिल्कुल नहीं) से 3 (लगभग हर दिन) तक स्कोर किया जाता है। कुल स्कोर 0 से 27 तक होता है। चिकित्सा पेशेवर आमतौर पर स्कोर की व्याख्या इस प्रकार करते हैं:",
    tableHeaders: ["स्कोर सीमा", "अवसाद की गंभीरता", "अनुशंसित कार्रवाई"],
    tableRows: [
      { range: "0 - 4", sev: "न्यूनतम", sevClass: "text-emerald-400", action: "कोई से न्यूनतम कार्रवाई आवश्यक। साप्ताहिक निगरानी करें।" },
      { range: "5 - 9", sev: "हल्का", sevClass: "text-yellow-400", action: "सतर्क प्रतीक्षा; सहायक परामर्श पर विचार करें।" },
      { range: "10 - 14", sev: "मध्यम", sevClass: "text-orange-400", action: "सक्रिय उपचार (थेरेपी/परामर्श) के लिए मूल्यांकन करें।" },
      { range: "15 - 19", sev: "मध्यम गंभीर", sevClass: "text-rose-400", action: "सक्रिय उपचार आवश्यक (थेरेपी और/या दवा)।" },
      { range: "20 - 27", sev: "गंभीर", sevClass: "text-red-500", action: "मनोचिकित्सक द्वारा तत्काल सक्रिय उपचार आवश्यक।" },
    ],
    howH2: "MindfulSpace PHQ-9 का उपयोग कैसे करता है",
    howP: "जब आप MindfulSpace में परीक्षण पूरा करते हैं:",
    howItems: [
      "स्कोर UI में खूबसूरती से दिखाया जाता है।",
      "परिणाम आपके डैशबोर्ड में आपके चिकित्सा इतिहास में सहेजा जाता है।",
      <><strong>प्रश्न 9 जाँच:</strong> यदि आप प्रश्न 9 (आत्म-नुकसान के विचार) पर &gt; 0 स्कोर करते हैं, MindfulSpace तुरंत संकट हॉटलाइन नंबरों के साथ सुरक्षा चेतावनी ट्रिगर करता है।</>,
      "Gemini आपके स्कोर ब्रैकेट का विश्लेषण करके परिणाम पेज पर ही 3 व्यक्तिगत कॉपिंग रणनीतियां उत्पन्न करता है।",
    ],
    limitH2: "महत्वपूर्ण सीमाएं",
    calloutTitle: "स्क्रीनिंग ≠ निदान",
    calloutText: <>PHQ-9 जैसी प्रश्नावलियां स्क्रीनिंग उपकरण हैं, जिसका मतलब है कि वे उन लोगों को उजागर करती हैं जो <em>शायद</em> उदास हों। केवल एक योग्य डॉक्टर या मानसिक स्वास्थ्य पेशेवर ही Major Depressive Disorder का वास्तविक नैदानिक निदान कर सकते हैं।</>,
  },
  kn: {
  lastUpdated: "ಕೊನೆಯ ನವೀಕರಣ: ಅಕ್ಟೋ. 24, 2024",
  h1: "PHQ-9 ಮನೋನೈರಾಶ್ಯ ಪರೀಕ್ಷೆ",
  intro: "MindfulSpace ನಲ್ಲಿ ಒಳಗೊಂಡಿರುವ Patient Health Questionnaire (PHQ-9) ವಿಶ್ವದಾದ್ಯಂತ ಆರೋಗ್ಯ ತಜ್ಞರು ಮನೋನೈರಾಶ್ಯವನ್ನು ಪರಿಶೀಲಿಸಲು, ನಿರ್ಣಯಿಸಲು, ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡಲು ಮತ್ತು ಅದರ ತೀವ್ರತೆಯನ್ನು ಅಳೆಯಲು ಬಳಸುವ ಸ್ವರ್ಣ ಮಾನದಂಡದ ಸಾಧನವಾಗಿದೆ.",
  
  whatH2: "PHQ-9 ಎಂದರೆ ಏನು?",
  whatP: "PHQ-9 ಒಂದು 9 ಪ್ರಶ್ನೆಗಳ ಸಾಧನವಾಗಿದ್ದು, ಪ್ರಾಥಮಿಕ ಆರೈಕೆ ಪರಿಸರದಲ್ಲಿ ರೋಗಿಗಳಲ್ಲಿ ಮನೋನೈರಾಶ್ಯದ ಉಪಸ್ಥಿತಿ ಮತ್ತು ತೀವ್ರತೆಯನ್ನು ಪರಿಶೀಲಿಸಲು ಬಳಸಲಾಗುತ್ತದೆ. ಇದು ನೀವು ಕಳೆದ ಎರಡು ವಾರಗಳಲ್ಲಿ ಅನುಭವಿಸಿದ ಸಮಸ್ಯೆಗಳ ಬಗ್ಗೆ ಎಷ್ಟು ಬಾರಿ ತೊಂದರೆ ಅನುಭವಿಸಿದ್ದೀರಿ ಎಂದು ಅಳೆಯಲು ಕೇಳುತ್ತದೆ, ಉದಾಹರಣೆಗೆ:",
  whatItems: [
    "ಕೆಲಸಗಳಲ್ಲಿ ಆಸಕ್ತಿ ಅಥವಾ ಸಂತೋಷ ಕಡಿಮೆಯಾಗುವುದು",
    "ದುಃಖ, ನಿರಾಶೆ ಅಥವಾ ಹತಾಶ ಭಾವನೆ",
    "ನಿದ್ರೆ ಬರದಿರುವುದು ಅಥವಾ ತುಂಬಾ ಹೆಚ್ಚು ನಿದ್ರೆ ಮಾಡುವುದು",
    "ದಣಿವು ಅಥವಾ ಶಕ್ತಿಯ ಕೊರತೆ"
  ],
  
  interpretH2: "ನಿಮ್ಮ ಸ್ಕೋರ್ ಅನ್ನು ಹೇಗೆ ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು",
  interpretP: "9 ಪ್ರಶ್ನೆಗಳ ಪ್ರತಿಯೊಂದಕ್ಕೂ 0 (ಎಂದಿಗೂ ಇಲ್ಲ) ರಿಂದ 3 (ಪ್ರಾಯಶಃ ಪ್ರತಿದಿನ) ವರೆಗೆ ಅಂಕ ನೀಡಲಾಗುತ್ತದೆ. ಒಟ್ಟು ಸ್ಕೋರ್ 0 ರಿಂದ 27 ರವರೆಗೆ ಇರುತ್ತದೆ. ವೈದ್ಯಕೀಯ ತಜ್ಞರು ಸಾಮಾನ್ಯವಾಗಿ ಸ್ಕೋರ್ ಅನ್ನು ಹೀಗೆ ಅರ್ಥಮಾಡಿಕೊಳ್ಳುತ್ತಾರೆ:",
  
  tableHeaders: ["ಸ್ಕೋರ್ ಶ್ರೇಣಿ", "ಮನೋನೈರಾಶ್ಯದ ತೀವ್ರತೆ", "ಶಿಫಾರಸು ಮಾಡಿದ ಕ್ರಮ"],
  tableRows: [
    { range: "0 - 4", sev: "ಕನಿಷ್ಠ", sevClass: "text-emerald-400", action: "ಯಾವುದೇ ಅಥವಾ ಅಲ್ಪ ಕ್ರಮ ಸಾಕು. ವಾರದ ಮಟ್ಟದಲ್ಲಿ ಗಮನಿಸಿ." },
    { range: "5 - 9", sev: "ಸೌಮ್ಯ", sevClass: "text-yellow-400", action: "ಜಾಗರೂಕವಾಗಿ ಗಮನಿಸಿ; ಬೆಂಬಲ ಸಮಾಲೋಚನೆ ಪರಿಗಣಿಸಿ." },
    { range: "10 - 14", sev: "ಮಧ್ಯಮ", sevClass: "text-orange-400", action: "ಸಕ್ರಿಯ ಚಿಕಿತ್ಸೆ (ಥೆರಪಿ/ಸಮಾಲೋಚನೆ) ಅಗತ್ಯವಿದೆಯೇ ಎಂದು ಪರಿಶೀಲಿಸಿ." },
    { range: "15 - 19", sev: "ಮಧ್ಯಮ-ತೀವ್ರ", sevClass: "text-rose-400", action: "ಸಕ್ರಿಯ ಚಿಕಿತ್ಸೆ ಅಗತ್ಯ (ಥೆರಪಿ ಮತ್ತು/ಅಥವಾ ಔಷಧ)." },
    { range: "20 - 27", sev: "ತೀವ್ರ", sevClass: "text-red-500", action: "ಮನೋವೈದ್ಯರಿಂದ ತಕ್ಷಣದ ಚಿಕಿತ್ಸೆ ಅಗತ್ಯ." },
  ],
  
  howH2: "MindfulSpace PHQ-9 ಅನ್ನು ಹೇಗೆ ಬಳಸುತ್ತದೆ",
  howP: "ನೀವು MindfulSpace ನಲ್ಲಿ ಈ ಪರೀಕ್ಷೆಯನ್ನು ಪೂರ್ಣಗೊಳಿಸಿದಾಗ:",
  howItems: [
    "ಸ್ಕೋರ್ ಅನ್ನು UI ನಲ್ಲಿ ಸ್ಪಷ್ಟವಾಗಿ ಪ್ರದರ್ಶಿಸಲಾಗುತ್ತದೆ.",
    "ಫಲಿತಾಂಶವನ್ನು ನಿಮ್ಮ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ನ ವೈದ್ಯಕೀಯ ಇತಿಹಾಸದಲ್ಲಿ ಉಳಿಸಲಾಗುತ್ತದೆ.",
    <><strong>ಪ್ರಶ್ನೆ 9 ಪರಿಶೀಲನೆ:</strong> ನೀವು ಪ್ರಶ್ನೆ 9 (ಸ್ವಯಂ ಹಾನಿಯ ಚಿಂತನೆಗಳು) ಮೇಲೆ &gt; 0 ಸ್ಕೋರ್ ಮಾಡಿದರೆ, MindfulSpace ತಕ್ಷಣವೇ ಕ್ರೈಸಿಸ್ ಸಹಾಯವಾಣಿ ಸಂಖ್ಯೆಗಳೊಂದಿಗೆ ಎಚ್ಚರಿಕೆಯನ್ನು ನೀಡುತ್ತದೆ.</>,
    "Gemini ನಿಮ್ಮ ಸ್ಕೋರ್ ಶ್ರೇಣಿಯನ್ನು ವಿಶ್ಲೇಷಿಸಿ ಫಲಿತಾಂಶ ಪುಟದಲ್ಲೇ 3 ವೈಯಕ್ತಿಕ coping ತಂತ್ರಗಳನ್ನು ಸೂಚಿಸುತ್ತದೆ.",
  ],
  
  limitH2: "ಮುಖ್ಯ ಮಿತಿಗಳು",
  calloutTitle: "ಪರಿಶೀಲನೆ ≠ ನಿರ್ಣಯ",
  calloutText: <>PHQ-9ಂತಹ ಪ್ರಶ್ನಾವಳಿಗಳು ಕೇವಲ ಪರಿಶೀಲನಾ ಸಾಧನಗಳು, ಅಂದರೆ ಅವು <em>ಬಹುಶಃ</em> ಮನೋನೈರಾಶ್ಯ ಹೊಂದಿರಬಹುದಾದವರನ್ನು ಗುರುತಿಸುತ್ತವೆ. ನಿಜವಾದ ಕ್ಲಿನಿಕಲ್ ನಿರ್ಣಯವನ್ನು ಮಾತ್ರ ಅರ್ಹ ವೈದ್ಯರು ಅಥವಾ ಮಾನಸಿಕ ಆರೋಗ್ಯ ತಜ್ಞರು ಮಾಡಬಹುದು.</>,
},
};

export default function PHQ9Screening() {
  const { lang } = useLanguage();
  const c = content[lang] || content.en;

  return (
    <>
      <p className="text-sm text-slate-500 mb-6">{c.lastUpdated}</p>
      <h1>{c.h1}</h1>

      <p>{c.intro}</p>

      <h2 id="what-is-phq-9">{c.whatH2}</h2>
      <p>{c.whatP}</p>
      <ul>
        {c.whatItems.map((item, i) => <li key={i}>{item}</li>)}
      </ul>

      <h2 id="how-to-interpret">{c.interpretH2}</h2>
      <p>{c.interpretP}</p>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm text-left border-collapse border border-[#1F2937]">
          <thead className="bg-[#1E293B]">
            <tr>
              {c.tableHeaders.map((h, i) => (
                <th key={i} className="px-4 py-3 border-b border-[#1F2937] font-semibold text-white">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {c.tableRows.map((row, i) => (
              <tr key={i} className={`${i < c.tableRows.length - 1 ? "border-b border-[#1F2937]/50" : ""} hover:bg-[#1E293B]/50 transition-colors`}>
                <td className="px-4 py-3">{row.range}</td>
                <td className={`px-4 py-3 font-medium ${row.sevClass}`}>{row.sev}</td>
                <td className="px-4 py-3 text-slate-300">{row.action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 id="how-MindfulSpace-uses-phq9">{c.howH2}</h2>
      <p>{c.howP}</p>
      <ol>
        {c.howItems.map((item, i) => <li key={i}>{item}</li>)}
      </ol>

      <h2 id="limitations">{c.limitH2}</h2>
      <Callout type="warning" title={c.calloutTitle}>
        {c.calloutText}
      </Callout>
    </>
  );
}
