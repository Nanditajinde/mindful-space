import { Callout } from "../../components/docs/Callout";
import { useLanguage } from "../../context/LanguageContext";

const content = {
  en: {
    lastUpdated: "Last updated: Apr 12, 2026",
    h1: "GAD-7 Anxiety Screening",
    intro: "MindfulSpace incorporates the General Anxiety Disorder-7 (GAD-7), a reliable and valid 7-item clinical tool used to screen for and measure the severity of generalized anxiety disorder in clinical practice.",
    whatH2: "What is the GAD-7?",
    whatP: "The GAD-7 asks you to reflect on the last two weeks and rate how often you've been bothered by specific anxiety-related problems, such as:",
    whatItems: ["Feeling nervous, anxious, or on edge", "Not being able to stop or control worrying", "Trouble relaxing", "Being so restless it's hard to sit still"],
    interpretH2: "How to interpret your score",
    interpretP: "Each of the 7 questions is scored from 0 (Not at all) to 3 (Nearly every day). The total score ranges from 0 to 21. Here is how medical professionals generally interpret the score:",
    tableHeaders: ["Score Range", "Anxiety Severity", "Recommendation"],
    tableRows: [
      { range: "0 - 4", sev: "Minimal Anxiety", sevClass: "text-emerald-400", action: "No specific treatment required. Manage stress normally." },
      { range: "5 - 9", sev: "Mild Anxiety", sevClass: "text-yellow-400", action: "Monitor symptoms. Consider preventative stress management." },
      { range: "10 - 14", sev: "Moderate Anxiety", sevClass: "text-orange-400", action: "Consider further evaluation and therapy." },
      { range: "15 - 21", sev: "Severe Anxiety", sevClass: "text-red-500", action: "Active evaluation and treatment by a professional indicated." },
    ],
    howH2: "How MindfulSpace uses the GAD-7",
    howP: <>Similar to the PHQ-9, your GAD-7 results are stored securely in your dashboard history. MindfulSpace uses these scores to construct longitudinal data about your anxiety levels over time. If your scores are consistently in the "Moderate" or "Severe" range, the <strong>AI Insights Dashboard</strong> will pick up on this pattern and suggest breathing techniques, cognitive reframing exercises, or professional help.</>,
    limitH2: "Important Limitations",
    calloutTitle: "Not a complete diagnosis",
    calloutText: "While the GAD-7 is excellent at screening for Generalized Anxiety Disorder, it may not fully capture other forms of anxiety like Panic Disorder, Social Anxiety Disorder, or PTSD. Always consult a healthcare provider for a thorough examination.",
  },
  hi: {
    lastUpdated: "अंतिम अपडेट: एप्रिल 12, 2026",
    h1: "GAD-7 चिंता स्क्रीनिंग",
    intro: "MindfulSpace में General Anxiety Disorder-7 (GAD-7) शामिल है, जो नैदानिक अभ्यास में सामान्यीकृत चिंता विकार की जाँच और गंभीरता मापने के लिए उपयोग किया जाने वाला एक विश्वसनीय और वैध 7-आइटम नैदानिक उपकरण है।",
    whatH2: "GAD-7 क्या है?",
    whatP: "GAD-7 आपसे पिछले दो हफ्तों पर विचार करने और विशिष्ट चिंता-संबंधित समस्याओं से कितनी बार परेशान हुए यह रेट करने के लिए कहता है, जैसे:",
    whatItems: ["घबराहट, बेचैनी या तनाव महसूस करना", "चिंता रोकना मुश्किल लगना", "आराम न कर पाना", "इतनी बेचैनी कि बैठना मुश्किल"],
    interpretH2: "अपना स्कोर कैसे समझें",
    interpretP: "7 प्रश्नों में से प्रत्येक को 0 (बिल्कुल नहीं) से 3 (लगभग हर दिन) तक स्कोर किया जाता है। कुल स्कोर 0 से 21 तक होता है। चिकित्सा पेशेवर आमतौर पर स्कोर की व्याख्या इस प्रकार करते हैं:",
    tableHeaders: ["स्कोर सीमा", "चिंता की गंभीरता", "अनुशंसा"],
    tableRows: [
      { range: "0 - 4", sev: "न्यूनतम चिंता", sevClass: "text-emerald-400", action: "कोई विशिष्ट उपचार आवश्यक नहीं। सामान्य रूप से तनाव प्रबंधन करें।" },
      { range: "5 - 9", sev: "हल्की चिंता", sevClass: "text-yellow-400", action: "लक्षणों की निगरानी करें। निवारक तनाव प्रबंधन पर विचार करें।" },
      { range: "10 - 14", sev: "मध्यम चिंता", sevClass: "text-orange-400", action: "आगे मूल्यांकन और थेरेपी पर विचार करें।" },
      { range: "15 - 21", sev: "गंभीर चिंता", sevClass: "text-red-500", action: "पेशेवर द्वारा सक्रिय मूल्यांकन और उपचार इंगित।" },
    ],
    howH2: "MindfulSpace GAD-7 का उपयोग कैसे करता है",
    howP: <>PHQ-9 की तरह, आपके GAD-7 परिणाम आपके डैशबोर्ड इतिहास में सुरक्षित रूप से संग्रहीत हैं। MindfulSpace इन स्कोर का उपयोग समय के साथ आपके चिंता स्तरों के बारे में दीर्घकालिक डेटा बनाने के लिए करता है। यदि आपके स्कोर लगातार "मध्यम" या "गंभीर" श्रेणी में हैं, तो <strong>AI इनसाइट्स डैशबोर्ड</strong> इस पैटर्न को पकड़ेगा और साँस लेने की तकनीकें, संज्ञानात्मक पुनर्रचना अभ्यास, या पेशेवर मदद का सुझाव देगा।</>,
    limitH2: "महत्वपूर्ण सीमाएं",
    calloutTitle: "पूर्ण निदान नहीं",
    calloutText: "हालांकि GAD-7 सामान्यीकृत चिंता विकार की जाँच में उत्कृष्ट है, यह Panic Disorder, Social Anxiety Disorder, या PTSD जैसी अन्य प्रकार की चिंता को पूरी तरह से नहीं पकड़ सकता। गहन जाँच के लिए हमेशा स्वास्थ्य सेवा प्रदाता से परामर्श लें।",
  },
  kn: {
  lastUpdated: "ಕೊನೆಯ ನವೀಕರಣ: ಏಪ್ರಿಲ್ 12, 2026",
  h1: "GAD-7 ಆತಂಕ ಪರೀಕ್ಷೆ",
  intro: "MindfulSpace ನಲ್ಲಿ General Anxiety Disorder-7 (GAD-7) ಒಳಗೊಂಡಿದೆ, ಇದು ಕ್ಲಿನಿಕಲ್ ಪ್ರಾಕ್ಟೀಸ್‌ನಲ್ಲಿ ಸಾಮಾನ್ಯೀಕೃತ ಆತಂಕ ವ್ಯಾಧಿಯನ್ನು ಗುರುತಿಸಲು ಮತ್ತು ಅದರ ತೀವ್ರತೆಯನ್ನು ಅಳೆಯಲು ಬಳಸುವ ವಿಶ್ವಾಸಾರ್ಹ ಮತ್ತು ಮಾನ್ಯ 7-ಪ್ರಶ್ನೆಗಳ ಸಾಧನವಾಗಿದೆ.",
  
  whatH2: "GAD-7 ಎಂದರೇನು?",
  whatP: "GAD-7 ನಿಮ್ಮನ್ನು ಕಳೆದ ಎರಡು ವಾರಗಳ ಬಗ್ಗೆ ಯೋಚಿಸಲು ಹೇಳುತ್ತದೆ ಮತ್ತು ನೀವು ಎಷ್ಟು ಬಾರಿ ನಿರ್ದಿಷ್ಟ ಆತಂಕ ಸಂಬಂಧಿತ ಸಮಸ್ಯೆಗಳಿಂದ ತೊಂದರೆ ಅನುಭವಿಸಿದ್ದೀರಿ ಎಂಬುದನ್ನು ಅಳೆಯಲು ಕೇಳುತ್ತದೆ, ಉದಾಹರಣೆಗೆ:",
  whatItems: [
    "ಅಶಾಂತ, ಆತಂಕ ಅಥವಾ ಒತ್ತಡದಲ್ಲಿರುವಂತೆ ಅನುಭವಿಸುವುದು",
    "ಚಿಂತೆ ನಿಯಂತ್ರಿಸಲು ಅಥವಾ ನಿಲ್ಲಿಸಲು ಸಾಧ್ಯವಾಗದಿರುವುದು",
    "ಆರಾಮ ಪಡೆಯಲು ಕಷ್ಟಪಡುವುದು",
    "ಇಷ್ಟೊಂದು ಅಶಾಂತಿ ಆಗುವುದು ಕುಳಿತುಕೊಳ್ಳಲು ಕಷ್ಟವಾಗುವುದು"
  ],

  interpretH2: "ನಿಮ್ಮ ಅಂಕೆಯನ್ನು ಹೇಗೆ ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು",
  interpretP: "7 ಪ್ರಶ್ನೆಗಳಲ್ಲಿನ ಪ್ರತಿಯೊಂದಕ್ಕೂ 0 (ಎಲ್ಲವೂ ಇಲ್ಲ) ರಿಂದ 3 (ಸುಮಾರು ಪ್ರತಿದಿನ) ವರೆಗೆ ಅಂಕೆ ನೀಡಲಾಗುತ್ತದೆ. ಒಟ್ಟು ಅಂಕೆ 0 ರಿಂದ 21 ವರೆಗೆ ಇರುತ್ತದೆ. ವೈದ್ಯಕೀಯ ತಜ್ಞರು ಸಾಮಾನ್ಯವಾಗಿ ಇದನ್ನು ಈ ರೀತಿಯಾಗಿ ವ್ಯಾಖ್ಯಾನಿಸುತ್ತಾರೆ:",
  
  tableHeaders: ["ಅಂಕೆ ಶ್ರೇಣಿ", "ಆತಂಕದ ತೀವ್ರತೆ", "ಶಿಫಾರಸು"],
  tableRows: [
    { range: "0 - 4", sev: "ಕಡಿಮೆ ಆತಂಕ", sevClass: "text-emerald-400", action: "ಯಾವುದೇ ವಿಶೇಷ ಚಿಕಿತ್ಸೆ ಅಗತ್ಯವಿಲ್ಲ. ಸಾಮಾನ್ಯವಾಗಿ ಒತ್ತಡವನ್ನು ನಿರ್ವಹಿಸಿ." },
    { range: "5 - 9", sev: "ಸ್ವಲ್ಪ ಆತಂಕ", sevClass: "text-yellow-400", action: "ಲಕ್ಷಣಗಳನ್ನು ಗಮನಿಸಿ. ತಡೆಗಟ್ಟುವ ಒತ್ತಡ ನಿರ್ವಹಣೆಯನ್ನು ಪರಿಗಣಿಸಿ." },
    { range: "10 - 14", sev: "ಮಧ್ಯಮ ಆತಂಕ", sevClass: "text-orange-400", action: "ಹೆಚ್ಚಿನ ಮೌಲ್ಯಮಾಪನ ಮತ್ತು ಚಿಕಿತ್ಸೆ ಪರಿಗಣಿಸಿ." },
    { range: "15 - 21", sev: "ತೀವ್ರ ಆತಂಕ", sevClass: "text-red-500", action: "ವೈದ್ಯರಿಂದ ಸಕ್ರಿಯ ಮೌಲ್ಯಮಾಪನ ಮತ್ತು ಚಿಕಿತ್ಸೆ ಅಗತ್ಯ." },
  ],

  howH2: "MindfulSpace GAD-7 ಅನ್ನು ಹೇಗೆ ಬಳಸುತ್ತದೆ",
  howP: <>PHQ-9 ನಂತೆ, ನಿಮ್ಮ GAD-7 ಫಲಿತಾಂಶಗಳು ನಿಮ್ಮ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ಇತಿಹಾಸದಲ್ಲಿ ಸುರಕ್ಷಿತವಾಗಿ ಸಂಗ್ರಹಿಸಲಾಗುತ್ತದೆ. MindfulSpace ಈ ಅಂಕೆಗಳನ್ನು ಕಾಲಕ್ರಮೇಣ ನಿಮ್ಮ ಆತಂಕ ಮಟ್ಟದ ಬಗ್ಗೆ ಡೇಟಾ ನಿರ್ಮಿಸಲು ಬಳಸುತ್ತದೆ. ನಿಮ್ಮ ಅಂಕೆಗಳು ನಿರಂತರವಾಗಿ "ಮಧ್ಯಮ" ಅಥವಾ "ತೀವ್ರ" ಶ್ರೇಣಿಯಲ್ಲಿ ಇದ್ದರೆ, <strong>AI ಇನ್ಸೈಟ್ಸ್ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್</strong> ಈ ಮಾದರಿಯನ್ನು ಗುರುತಿಸಿ ಉಸಿರಾಟ ತಂತ್ರಗಳು, ಸಂಜ್ಞಾತ್ಮಕ ಪುನರ್‌ರೂಪಣೆ ವ್ಯಾಯಾಮಗಳು ಅಥವಾ ವೃತ್ತಿಪರ ಸಹಾಯವನ್ನು ಸೂಚಿಸುತ್ತದೆ.</>,

  limitH2: "ಮುಖ್ಯ ಮಿತಿಗಳು",
  calloutTitle: "ಪೂರ್ಣ ನಿರ್ಣಯವಲ್ಲ",
  calloutText: "GAD-7 ಸಾಮಾನ್ಯೀಕೃತ ಆತಂಕ ವ್ಯಾಧಿಯನ್ನು ಗುರುತಿಸಲು ಉತ್ತಮವಾದರೂ, ಇದು Panic Disorder, Social Anxiety Disorder ಅಥವಾ PTSD போன்ற ಇತರ ಆತಂಕ ರೂಪಗಳನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ಹಿಡಿಯದೇ ಇರಬಹುದು. ಸಂಪೂರ್ಣ ಪರಿಶೀಲನೆಗಾಗಿ ವೈದ್ಯರನ್ನು ಸಂಪರ್ಕಿಸುವುದು ಅವಶ್ಯಕ."
},
};

export default function GAD7Screening() {
  const { lang } = useLanguage();
  const c = content[lang] || content.en;

  return (
    <>
      <p className="text-sm text-slate-500 mb-6">{c.lastUpdated}</p>
      <h1>{c.h1}</h1>

      <p>{c.intro}</p>

      <h2 id="what-is-gad-7">{c.whatH2}</h2>
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

      <h2 id="how-MindfulSpace-uses-gad7">{c.howH2}</h2>
      <p>{c.howP}</p>

      <h2 id="limitations">{c.limitH2}</h2>
      <Callout type="warning" title={c.calloutTitle}>
        {c.calloutText}
      </Callout>
    </>
  );
}
