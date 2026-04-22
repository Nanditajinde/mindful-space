import { Callout } from "../../components/docs/Callout";
import { useLanguage } from "../../context/LanguageContext";

const content = {
  en: {
    lastUpdated: "Last updated: Apr 12, 2026",
    h1: "Understanding Depression",
    intro: "Depression (Major Depressive Disorder) is a common and serious medical illness that negatively affects how you feel, the way you think, and how you act. It is also highly treatable. It causes feelings of sadness and/or a loss of interest in activities you once enjoyed.",
    signsH2: "Signs you may be experiencing depression",
    signsIntro: "Symptoms can vary from mild to severe and can include:",
    signs: ["Feeling sad or having a depressed mood", "Loss of interest or pleasure in activities once enjoyed", "Changes in appetite — weight loss or gain unrelated to dieting", "Trouble sleeping or sleeping too much", "Loss of energy or increased fatigue", "Increase in purposeless physical activity (e.g., inability to sit still, pacing) or slowed movements/speech", "Feeling worthless or guilty", "Difficulty thinking, concentrating, or making decisions", "Thoughts of death or suicide"],
    calloutTitle: "Note on clinical diagnosis",
    calloutText: "Symptoms must last at least two weeks and must represent a change in your previous level of functioning for a diagnosis of depression.",
    mythsH2: "Common myths about depression",
    myths: [
      <><strong>Myth:</strong> "It's just sadness, you can snap out of it."<br /><strong>Fact:</strong> Depression is a complex medical condition, not a weakness of character.</>,
      <><strong>Myth:</strong> "You need a reason to be depressed."<br /><strong>Fact:</strong> While trauma or grief can trigger depression, it can also manifest due to biological chemistry without a precise "event" triggering it.</>,
    ],
    selfH2: "Self-help strategies",
    selfIntro: "While professional help is critical, certain lifestyle changes can assist in recovery:",
    selfItems: [
      <><strong>Physical Activity:</strong> Exercise releases endorphins which act as natural mood lifters.</>,
      <><strong>Sleep Hygiene:</strong> Regulate your circadian rhythm by sleeping strictly at the same times every day.</>,
      <><strong>Set limits:</strong> Reduce stress by unburdening your daily schedule where possible.</>,
    ],
    professionalH2: "Professional resources in India",
    professionalP: "If you are struggling heavily with depression to the point it interferes with your daily functioning, we recommend reaching out to clinical professionals in India through resources like Practo, or directly visiting your nearest government hospital's Psychiatric ward.",
  },
  hi: {
    lastUpdated: "अंतिम अपडेट: अप्रैल 12, 2026",
    h1: "अवसाद को समझना",
    intro: "अवसाद (Major Depressive Disorder) एक आम और गंभीर चिकित्सा बीमारी है जो आपकी भावनाओं, सोच और कार्यों को नकारात्मक रूप से प्रभावित करती है। यह अत्यधिक उपचार योग्य भी है। यह उदासी की भावनाएं और/या उन गतिविधियों में रुचि का नुकसान उत्पन्न करती है जो आप कभी आनंद लेते थे।",
    signsH2: "संकेत जो बताते हैं कि आप अवसाद का अनुभव कर रहे हैं",
    signsIntro: "लक्षण हल्के से गंभीर तक भिन्न हो सकते हैं और इनमें शामिल हो सकते हैं:",
    signs: ["उदास महसूस करना या अवसादग्रस्त मूड होना", "पहले की पसंदीदा गतिविधियों में रुचि या आनंद का नुकसान", "भूख में परिवर्तन — डाइटिंग से असंबंधित वजन कम या बढ़ना", "सोने में परेशानी या बहुत ज़्यादा सोना", "ऊर्जा का नुकसान या थकान बढ़ना", "उद्देश्यहीन शारीरिक गतिविधि में वृद्धि (जैसे स्थिर न बैठ पाना) या धीमी गति/वाणी", "खुद को बेकार या दोषी महसूस करना", "सोचने, ध्यान केंद्रित करने, या निर्णय लेने में कठिनाई", "मृत्यु या आत्महत्या के विचार"],
    calloutTitle: "नैदानिक निदान पर नोट",
    calloutText: "अवसाद के निदान के लिए लक्षणों को कम से कम दो सप्ताह तक रहना होगा और आपके पिछले कार्य स्तर में बदलाव होना चाहिए।",
    mythsH2: "अवसाद के बारे में सामान्य मिथक",
    myths: [
      <><strong>मिथक:</strong> "यह सिर्फ उदासी है, आप इससे बाहर निकल सकते हैं।"<br /><strong>तथ्य:</strong> अवसाद एक जटिल चिकित्सा स्थिति है, चरित्र की कमज़ोरी नहीं।</>,
      <><strong>मिथक:</strong> "अवसाद के लिए कारण की ज़रूरत होती है।"<br /><strong>तथ्य:</strong> हालांकि आघात या दुःख अवसाद को ट्रिगर कर सकता है, यह जैविक रसायन के कारण बिना किसी सटीक "घटना" के भी प्रकट हो सकता है।</>,
    ],
    selfH2: "स्व-सहायता रणनीतियां",
    selfIntro: "हालांकि पेशेवर मदद महत्वपूर्ण है, कुछ जीवनशैली परिवर्तन ठीक होने में सहायता कर सकते हैं:",
    selfItems: [
      <><strong>शारीरिक गतिविधि:</strong> व्यायाम एंडोर्फिन रिलीज़ करता है जो प्राकृतिक मूड उठाने वाले के रूप में काम करते हैं।</>,
      <><strong>नींद की स्वच्छता:</strong> हर दिन सख्ती से एक ही समय पर सोकर अपनी सर्कडियन लय को नियंत्रित करें।</>,
      <><strong>सीमाएं निर्धारित करें:</strong> जहाँ संभव हो अपने दैनिक कार्यक्रम का बोझ कम करके तनाव घटाएं।</>,
    ],
    professionalH2: "भारत में पेशेवर संसाधन",
    professionalP: "यदि आप इतने भारी रूप से अवसाद से जूझ रहे हैं कि यह आपके दैनिक कार्य में हस्तक्षेप करता है, हम Practo जैसे संसाधनों के माध्यम से भारत में नैदानिक पेशेवरों से संपर्क करने, या सीधे अपने निकटतम सरकारी अस्पताल के मनोरोग वार्ड का दौरा करने की सलाह देते हैं।",
  },
  kn: {
  lastUpdated: "ಕೊನೆಯ ನವೀಕರಣ: ಏಪ್ರಿಲ್ 12, 2026",
  h1: "ಮನೋನಿಲೆಯನ್ನು (ಡಿಪ್ರೆಶನ್) ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು",
  intro: "ಮನೋನಿಲೆ (Major Depressive Disorder) ಒಂದು ಸಾಮಾನ್ಯ ಮತ್ತು ಗಂಭೀರ ವೈದ್ಯಕೀಯ ಸಮಸ್ಯೆಯಾಗಿದ್ದು, ಇದು ನಿಮ್ಮ ಭಾವನೆಗಳು, ಆಲೋಚನೆಗಳು ಮತ್ತು ವರ್ತನೆಗಳನ್ನು ನಕಾರಾತ್ಮಕವಾಗಿ ಪ್ರಭಾವಿಸುತ್ತದೆ. ಇದು ಚಿಕಿತ್ಸೆ ಪಡೆಯಬಹುದಾದ ಸ್ಥಿತಿಯಾಗಿದೆ. ಇದು ದುಃಖದ ಭಾವನೆಗಳು ಮತ್ತು/ಅಥವಾ ನೀವು ಹಿಂದೆ ಇಷ್ಟಪಟ್ಟ ಚಟುವಟಿಕೆಗಳಲ್ಲಿ ಆಸಕ್ತಿಯ ಕೊರತೆಯನ್ನು ಉಂಟುಮಾಡುತ್ತದೆ.",

  signsH2: "ನೀವು ಮನೋನಿಲೆಯನ್ನು ಅನುಭವಿಸುತ್ತಿರುವ ಸೂಚನೆಗಳು",
  signsIntro: "ಲಕ್ಷಣಗಳು ಸೌಮ್ಯದಿಂದ ಗಂಭೀರ ಮಟ್ಟದವರೆಗೆ ಬದಲಾಗಬಹುದು ಮತ್ತು ಇವುಗಳನ್ನು ಒಳಗೊಂಡಿರಬಹುದು:",
  signs: [
    "ದುಃಖಿತ ಅಥವಾ ಖಿನ್ನತೆಯ ಮನಸ್ಥಿತಿ ಹೊಂದಿರುವುದು",
    "ಹಿಂದೆ ಇಷ್ಟಪಟ್ಟ ಚಟುವಟಿಕೆಗಳಲ್ಲಿ ಆಸಕ್ತಿ ಅಥವಾ ಸಂತೋಷ ಕಳೆದುಕೊಳ್ಳುವುದು",
    "ಭೂಕೆಯಲ್ಲಿ ಬದಲಾವಣೆ — ಡಯಟ್‌ಗೆ ಸಂಬಂಧಿಸದೇ ತೂಕ ಹೆಚ್ಚಳ ಅಥವಾ ಇಳಿಕೆ",
    "ನಿದ್ರೆಯಲ್ಲಿ ತೊಂದರೆ ಅಥವಾ ಅತಿಯಾಗಿ ನಿದ್ರೆ ಮಾಡುವುದು",
    "ಶಕ್ತಿ ಕೊರತೆ ಅಥವಾ ಹೆಚ್ಚಿದ ದಣಿವು",
    "ಉದ್ದೇಶವಿಲ್ಲದ ದೈಹಿಕ ಚಟುವಟಿಕೆ ಹೆಚ್ಚಳ (ಉದಾ: ಒಂದೇ ಜಾಗದಲ್ಲಿ ಕುಳಿತುಕೊಳ್ಳಲು ಆಗದಿರುವುದು) ಅಥವಾ ನಿಧಾನ ಚಲನ/ಮಾತು",
    "ತಮ್ಮನ್ನು ಅಪ್ರಯೋಜಕ ಅಥವಾ ಅಪರಾಧಿ ಎಂದು ಭಾವಿಸುವುದು",
    "ಆಲೋಚನೆ, ಗಮನ ಅಥವಾ ನಿರ್ಧಾರ ಕೈಗೊಳ್ಳುವಲ್ಲಿ ಕಷ್ಟ",
    "ಮರಣ ಅಥವಾ ಆತ್ಮಹತ್ಯೆ ಬಗ್ಗೆ ಆಲೋಚನೆಗಳು"
  ],

  calloutTitle: "ಕ್ಲಿನಿಕಲ್ ನಿರ್ಣಯದ ಬಗ್ಗೆ ಗಮನಿಸಿ",
  calloutText: "ಮನೋನಿಲೆ ಎಂದು ನಿರ್ಧಾರ ಮಾಡಲು, ಈ ಲಕ್ಷಣಗಳು ಕನಿಷ್ಠ ಎರಡು ವಾರಗಳ ಕಾಲ ಮುಂದುವರಿಯಬೇಕು ಮತ್ತು ನಿಮ್ಮ ಹಿಂದಿನ ಕಾರ್ಯಕ್ಷಮತೆಯಲ್ಲಿ ಬದಲಾವಣೆ ತೋರಿಸಬೇಕು.",

  mythsH2: "ಮನೋನಿಲೆಯ ಬಗ್ಗೆ ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆಗಳು",
  myths: [
    <><strong>ತಪ್ಪು ಕಲ್ಪನೆ:</strong> "ಇದು ಕೇವಲ ದುಃಖ, ನೀವು ಇದರಿಂದ ಹೊರಬರಬಹುದು."<br /><strong>ವಾಸ್ತವ:</strong> ಮನೋನಿಲೆ ಒಂದು ಸಂಕೀರ್ಣ ವೈದ್ಯಕೀಯ ಸ್ಥಿತಿ, ಇದು ವ್ಯಕ್ತಿತ್ವದ ದುರ್ಬಲತೆ ಅಲ್ಲ.</>,
    <><strong>ತಪ್ಪು ಕಲ್ಪನೆ:</strong> "ಮನೋನಿಲೆಗೆ ಒಂದು ಕಾರಣ ಬೇಕು."<br /><strong>ವಾಸ್ತವ:</strong> ಟ್ರಾಮಾ ಅಥವಾ ದುಃಖವು ಇದನ್ನು ಪ್ರೇರೇಪಿಸಬಹುದು, ಆದರೆ ಕೆಲವೊಮ್ಮೆ ಇದು ಯಾವುದೇ ನಿರ್ದಿಷ್ಟ ಕಾರಣವಿಲ್ಲದೆ ಜೈವಿಕ ರಾಸಾಯನಿಕ ಬದಲಾವಣೆಗಳಿಂದಲೂ ಉಂಟಾಗಬಹುದು.</>,
  ],

  selfH2: "ಸ್ವಯಂ ಸಹಾಯ ತಂತ್ರಗಳು",
  selfIntro: "ವೃತ್ತಿಪರ ಸಹಾಯ ಬಹಳ ಮುಖ್ಯವಾದರೂ, ಕೆಲವು ಜೀವನಶೈಲಿ ಬದಲಾವಣೆಗಳು ಚೇತರಿಕೆಗೆ ಸಹಾಯ ಮಾಡುತ್ತವೆ:",
  selfItems: [
    <><strong>ದೇಹದ ಚಟುವಟಿಕೆ:</strong> ವ್ಯಾಯಾಮವು ಎಂಡಾರ್ಫಿನ್ ಬಿಡುಗಡೆ ಮಾಡುತ್ತದೆ, ಇದು ಸಹಜವಾಗಿ ಮನಸ್ಥಿತಿಯನ್ನು ಉತ್ತಮಗೊಳಿಸುತ್ತದೆ.</>,
    <><strong>ನಿದ್ರೆ ನಿಯಮ:</strong> ಪ್ರತಿದಿನ ಒಂದೇ ಸಮಯದಲ್ಲಿ ನಿದ್ರೆ ಮಾಡುವ ಮೂಲಕ ನಿಮ್ಮ ದೇಹದ ಗಡಿಯಾರವನ್ನು ನಿಯಂತ್ರಿಸಿ.</>,
    <><strong>ಮಿತಿ ನಿಗದಿ ಮಾಡಿ:</strong> ಸಾಧ್ಯವಾದಲ್ಲಿ ದಿನಚರಿಯನ್ನು ಕಡಿಮೆ ಮಾಡಿ ಒತ್ತಡವನ್ನು ಇಳಿಸಿ.</>,
  ],

  professionalH2: "ಭಾರತದಲ್ಲಿನ ವೃತ್ತಿಪರ ಸಂಪನ್ಮೂಲಗಳು",
  professionalP: "ನಿಮ್ಮ ದೈನಂದಿನ ಜೀವನವನ್ನು ತೊಂದರೆಗೊಳಿಸುವ ಮಟ್ಟಕ್ಕೆ ಮನೋನಿಲೆಯಿಂದ ಬಳಲುತ್ತಿದ್ದರೆ, Practo ಮುಂತಾದ ವೇದಿಕೆಗಳ ಮೂಲಕ ಅಥವಾ ಹತ್ತಿರದ ಸರ್ಕಾರಿ ಆಸ್ಪತ್ರೆಯ ಮಾನಸಿಕ ಆರೋಗ್ಯ ವಿಭಾಗವನ್ನು ಸಂಪರ್ಕಿಸುವುದು ಶಿಫಾರಸು ಮಾಡಲಾಗುತ್ತದೆ.",
},
};

export default function DepressionGuide() {
  const { lang } = useLanguage();
  const c = content[lang] || content.en;

  return (
    <>
      <p className="text-sm text-slate-500 mb-6">{c.lastUpdated}</p>
      <h1>{c.h1}</h1>

      <p>{c.intro}</p>

      <h2 id="signs-you-may-be-experiencing-depression">{c.signsH2}</h2>
      <p>{c.signsIntro}</p>
      <ul>
        {c.signs.map((sign, i) => <li key={i}>{sign}</li>)}
      </ul>

      <Callout type="warning" title={c.calloutTitle}>
        {c.calloutText}
      </Callout>

      <h2 id="common-myths">{c.mythsH2}</h2>
      <ul>
        {c.myths.map((myth, i) => <li key={i}>{myth}</li>)}
      </ul>

      <h2 id="self-help-strategies">{c.selfH2}</h2>
      <p>{c.selfIntro}</p>
      <ul>
        {c.selfItems.map((item, i) => <li key={i}>{item}</li>)}
      </ul>

      <h2 id="professional-resources">{c.professionalH2}</h2>
      <p>{c.professionalP}</p>
    </>
  );
}
