import { Steps, Step } from "../../components/docs/Steps";
import { useLanguage } from "../../context/LanguageContext";

const content = {
  en: {
    lastUpdated: "Last updated: Apr 12, 2026",
    h1: "Evidence-Based Coping Strategies",
    intro: "When you are experiencing an acute mental health episode (like a panic attack or severe depressive spiral), attempting to \"think your way out of it\" rarely works. The strategies below are physiological and cognitive interventions designed to short-circuit the stress response.",
    breathH2: "Breathing Techniques",
    breathP: "Deep breathing stimulates the parasympathetic nervous system, which acts as a brake on your body's stress response.",
    breathSteps: [
      { title: "Box Breathing", desc: "Inhale for 4 seconds. Hold for 4 seconds. Exhale for 4 seconds. Hold empty for 4 seconds. Repeat 4 times. This is used by military personnel to maintain calm in high-stress situations." },
      { title: "4-7-8 Breathing", desc: "Inhale through your nose for 4 seconds. Hold your breath for 7 seconds. Exhale completely through your mouth with a whoosh sound for 8 seconds. This acts as a natural tranquilizer." },
    ],
    groundH2: "Grounding Techniques",
    groundP: <>Grounding pulls you out of your head and forcefully anchors your attention in the physical world. The most famous is the <strong>5-4-3-2-1</strong> method. Look around you and identify:</>,
    groundItems: [
      <><strong>5</strong> things you can <em>see</em></>,
      <><strong>4</strong> things you can <em>touch</em> (and feel their texture)</>,
      <><strong>3</strong> things you can <em>hear</em></>,
      <><strong>2</strong> things you can <em>smell</em></>,
      <><strong>1</strong> thing you can <em>taste</em></>,
    ],
    reframeH2: "Cognitive Reframing",
    reframeP: "Cognitive reframing is a core CBT technique. It involves noticing a negative thought, challenging its factual accuracy, and replacing it.",
    reframeQuote: <>
      <strong>Instead of:</strong> "I failed this test, I'm going to ruin my entire career."<br />
      <strong>Reframe to:</strong> "I didn't do well on this test, which is disappointing. But one test does not dictate my entire future, and I can study differently next time."
    </>,
    physH2: "Physical Strategies",
    physIntro: "Sometimes you need to physically change your body chemistry:",
    physItems: [
      <><strong>The Mammalian Dive Reflex:</strong> Submerging your face in ice-cold water for 15-30 seconds instantly slows your heart rate.</>,
      <><strong>Intense Exercise:</strong> Doing jumping jacks or sprinting for 60 seconds burns off excess adrenaline during a panic attack.</>,
    ],
    supportH2: "Building Support Systems",
    supportP: <>Isolation feeds mental illness. Simply stating, "I am having a really hard time right now" to a trusted friend or family member breaks the illusion that you have to suffer alone. This is why MindfulSpace requires a <strong>Trusted Contact</strong> inside the app.</>,
  },
  hi: {
    lastUpdated: "अंतिम अपडेट: अप्रैल 12, 2026",
    h1: "साक्ष्य-आधारित कॉपिंग रणनीतियां",
    intro: "जब आप एक तीव्र मानसिक स्वास्थ्य प्रकरण (जैसे पैनिक अटैक या गंभीर अवसादग्रस्त सर्पिल) का अनुभव कर रहे हों, तो \"इससे सोच कर निकलने\" की कोशिश शायद ही काम करती है। नीचे दी गई रणनीतियां शारीरिक और संज्ञानात्मक हस्तक्षेप हैं जो तनाव प्रतिक्रिया को शॉर्ट-सर्किट करने के लिए डिज़ाइन की गई हैं।",
    breathH2: "श्वास लेने की तकनीकें",
    breathP: "गहरी सांस लेना पैरासिम्पेथेटिक तंत्रिका तंत्र को उत्तेजित करता है, जो आपके शरीर की तनाव प्रतिक्रिया पर ब्रेक की तरह काम करता है।",
    breathSteps: [
      { title: "बॉक्स ब्रीदिंग", desc: "4 सेकंड के लिए सांस लें। 4 सेकंड के लिए रोकें। 4 सेकंड के लिए छोड़ें। 4 सेकंड के लिए खाली रोकें। 4 बार दोहराएं। इसका उपयोग सैन्य कर्मियों द्वारा उच्च-तनाव स्थितियों में शांत रहने के लिए किया जाता है।" },
      { title: "4-7-8 ब्रीदिंग", desc: "अपनी नाक से 4 सेकंड के लिए सांस लें। 7 सेकंड के लिए अपनी सांस रोकें। अपने मुंह से 8 सेकंड के लिए पूरी तरह से छोड़ें। यह एक प्राकृतिक शामक के रूप में काम करता है।" },
    ],
    groundH2: "ग्राउंडिंग तकनीकें",
    groundP: <>ग्राउंडिंग आपको अपने दिमाग से बाहर खींचती है और जबरदस्ती आपका ध्यान भौतिक दुनिया में लंगर डालती है। सबसे प्रसिद्ध है <strong>5-4-3-2-1</strong> पद्धति। अपने आसपास देखें और पहचानें:</>,
    groundItems: [
      <><strong>5</strong> चीजें जो आप <em>देख</em> सकते हैं</>,
      <><strong>4</strong> चीजें जो आप <em>छू</em> सकते हैं (और उनकी बनावट महसूस कर सकते हैं)</>,
      <><strong>3</strong> चीजें जो आप <em>सुन</em> सकते हैं</>,
      <><strong>2</strong> चीजें जो आप <em>सूंघ</em> सकते हैं</>,
      <><strong>1</strong> चीज़ जो आप <em>चख</em> सकते हैं</>,
    ],
    reframeH2: "संज्ञानात्मक पुनर्रचना",
    reframeP: "संज्ञानात्मक पुनर्रचना एक मूल CBT तकनीक है। इसमें एक नकारात्मक विचार देखना, उसकी तथ्यात्मक सटीकता को चुनौती देना और उसे बदलना शामिल है।",
    reframeQuote: <>
      <strong>इसके बजाय:</strong> "मैं यह परीक्षा में फेल हो गया, मैं अपना पूरा करियर बर्बाद करने वाला हूं।"<br />
      <strong>पुनर्रचना करें:</strong> "मैंने इस परीक्षा में अच्छा नहीं किया, जो निराशाजनक है। लेकिन एक परीक्षा मेरे पूरे भविष्य को तय नहीं करती, और मैं अगली बार अलग तरह से पढ़ सकता हूं।"
    </>,
    physH2: "शारीरिक रणनीतियां",
    physIntro: "कभी-कभी आपको शारीरिक रूप से अपनी शारीरिक रसायन बदलने की जरूरत होती है:",
    physItems: [
      <><strong>मैमेलियन डाइव रिफ्लेक्स:</strong> 15-30 सेकंड के लिए अपना चेहरा बर्फ-ठंडे पानी में डुबोना तुरंत आपकी हृदय गति धीमी कर देता है।</>,
      <><strong>तीव्र व्यायाम:</strong> पैनिक अटैक के दौरान 60 सेकंड तक जंपिंग जैक या स्प्रिंटिंग करने से अतिरिक्त एड्रेनालाईन जलता है।</>,
    ],
    supportH2: "समर्थन प्रणालियां बनाना",
    supportP: <>अलगाव मानसिक बीमारी को खिलाता है। किसी विश्वसनीय मित्र या परिवार के सदस्य से बस "मुझे अभी वास्तव में कठिन समय हो रहा है" कहना यह भ्रम तोड़ता है कि आपको अकेले पीड़ित होना है। इसीलिए MindfulSpace ऐप के अंदर <strong>विश्वसनीय संपर्क</strong> की आवश्यकता रखता है।</>,
  },
  kn: {
  lastUpdated: "ಕೊನೆಯ ನವೀಕರಣ: ಏಪ್ರಿಲ್ 12, 2026",
  h1: "ಸಾಕ್ಷ್ಯಾಧಾರಿತ ನಿಭಾಯಿಸುವ ತಂತ್ರಗಳು",
  intro: "ನೀವು ತೀವ್ರ ಮಾನಸಿಕ ಆರೋಗ್ಯ ಸಮಸ್ಯೆಯನ್ನು (ಉದಾಹರಣೆಗೆ ಪ್ಯಾನಿಕ್ ಅಟ್ಯಾಕ್ ಅಥವಾ ಗಂಭೀರ ಮನೋನಿಲೆ ಕುಸಿತ) ಅನುಭವಿಸುತ್ತಿರುವಾಗ, ಅದರಿಂದ ‘ಆಲೋಚನೆ ಮೂಲಕ ಹೊರಬರಲು’ ಪ್ರಯತ್ನಿಸುವುದು ಸಾಮಾನ್ಯವಾಗಿ ಫಲಕಾರಿಯಾಗುವುದಿಲ್ಲ. ಕೆಳಗಿನ ತಂತ್ರಗಳು ದೇಹಶಾಸ್ತ್ರೀಯ ಮತ್ತು ಜ್ಞಾನಾತ್ಮಕ ವಿಧಾನಗಳು ಆಗಿದ್ದು, ಒತ್ತಡ ಪ್ರತಿಕ್ರಿಯೆಯನ್ನು ತಕ್ಷಣ ಕಡಿಮೆ ಮಾಡಲು ಸಹಾಯ ಮಾಡುತ್ತವೆ.",

  breathH2: "ಉಸಿರಾಟ ತಂತ್ರಗಳು",
  breathP: "ಆಳವಾದ ಉಸಿರಾಟವು ಪರಾಸಿಂಪಥೆಟಿಕ್ ನರ ವ್ಯವಸ್ಥೆಯನ್ನು ಸಕ್ರಿಯಗೊಳಿಸುತ್ತದೆ, ಇದು ನಿಮ್ಮ ದೇಹದ ಒತ್ತಡ ಪ್ರತಿಕ್ರಿಯೆಯನ್ನು ನಿಧಾನಗೊಳಿಸುತ್ತದೆ.",
  breathSteps: [
    { title: "ಬಾಕ್ಸ್ ಬ್ರಿದಿಂಗ್", desc: "4 ಸೆಕೆಂಡು ಉಸಿರೆಳೆದುಕೊಳ್ಳಿ. 4 ಸೆಕೆಂಡು ಹಿಡಿದುಕೊಳ್ಳಿ. 4 ಸೆಕೆಂಡು ಉಸಿರಬಿಡಿ. 4 ಸೆಕೆಂಡು ಖಾಲಿಯಾಗಿ ಹಿಡಿದುಕೊಳ್ಳಿ. ಇದನ್ನು 4 ಬಾರಿ ಪುನರಾವರ್ತಿಸಿ. ಇದು ಹೆಚ್ಚಿನ ಒತ್ತಡದ ಪರಿಸ್ಥಿತಿಗಳಲ್ಲಿ ಶಾಂತವಾಗಿರಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ." },
    { title: "4-7-8 ಉಸಿರಾಟ", desc: "4 ಸೆಕೆಂಡು ಮೂಗಿನ ಮೂಲಕ ಉಸಿರೆಳೆದುಕೊಳ್ಳಿ. 7 ಸೆಕೆಂಡು ಹಿಡಿದುಕೊಳ್ಳಿ. 8 ಸೆಕೆಂಡು ಬಾಯಿಯಿಂದ ಸಂಪೂರ್ಣವಾಗಿ ಉಸಿರಬಿಡಿ. ಇದು ನೈಸರ್ಗಿಕ ಶಾಂತಿಕಾರಕವಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ." },
  ],

  groundH2: "ಗ್ರೌಂಡಿಂಗ್ ತಂತ್ರಗಳು",
  groundP: <>ಗ್ರೌಂಡಿಂಗ್ ನಿಮ್ಮ ಮನಸ್ಸಿನಿಂದ ನಿಮ್ಮ ಗಮನವನ್ನು ಹೊರತೆಗೆದು ಭೌತಿಕ ಜಗತ್ತಿನಲ್ಲಿ ನೆಲೆಯೂರಿಸುತ್ತದೆ. ಅತ್ಯಂತ ಪ್ರಸಿದ್ಧ ವಿಧಾನ <strong>5-4-3-2-1</strong>. ನಿಮ್ಮ ಸುತ್ತಲೂ ನೋಡಿ ಮತ್ತು ಗುರುತಿಸಿ:</>,
  groundItems: [
    <><strong>5</strong> ನೀವು <em>ನೋಡಬಹುದಾದ</em> ವಸ್ತುಗಳು</>,
    <><strong>4</strong> ನೀವು <em>ಸ್ಪರ್ಶಿಸಬಹುದಾದ</em> ವಸ್ತುಗಳು (ಅವುಗಳ ಸ್ಪರ್ಶವನ್ನು ಅನುಭವಿಸಿ)</>,
    <><strong>3</strong> ನೀವು <em>ಕೇಳಬಹುದಾದ</em> ಧ್ವನಿಗಳು</>,
    <><strong>2</strong> ನೀವು <em>ವಾಸನೆ ಅನುಭವಿಸಬಹುದಾದ</em> ವಸ್ತುಗಳು</>,
    <><strong>1</strong> ನೀವು <em>ರುಚಿಸಬಹುದಾದ</em> ವಸ್ತು</>,
  ],

  reframeH2: "ಜ್ಞಾನಾತ್ಮಕ ಮರುರೂಪಣೆ",
  reframeP: "ಜ್ಞಾನಾತ್ಮಕ ಮರುರೂಪಣೆ (Cognitive Reframing) ಒಂದು ಪ್ರಮುಖ CBT ತಂತ್ರವಾಗಿದೆ. ಇದು ನಕಾರಾತ್ಮಕ ಆಲೋಚನೆಯನ್ನು ಗುರುತಿಸುವುದು, ಅದರ ನಿಜಾಸ್ತಿತ್ವವನ್ನು ಪ್ರಶ್ನಿಸುವುದು ಮತ್ತು ಅದನ್ನು ಬದಲಾಯಿಸುವುದನ್ನು ಒಳಗೊಂಡಿದೆ.",
  reframeQuote: <>
    <strong>ಇದಕ್ಕೆ ಬದಲು:</strong> "ನಾನು ಈ ಪರೀಕ್ಷೆಯಲ್ಲಿ ವಿಫಲವಾಯಿತು, ನನ್ನ ಭವಿಷ್ಯ ಹಾಳಾಗುತ್ತದೆ."<br />
    <strong>ಹೀಗೆ ಯೋಚಿಸಿ:</strong> "ನಾನು ಈ ಪರೀಕ್ಷೆಯಲ್ಲಿ ಚೆನ್ನಾಗಿ ಮಾಡಲಿಲ್ಲ, ಅದು ನಿರಾಶಾಜನಕ. ಆದರೆ ಒಂದು ಪರೀಕ್ಷೆ ನನ್ನ ಭವಿಷ್ಯವನ್ನು ನಿರ್ಧರಿಸುವುದಿಲ್ಲ, ಮುಂದಿನ ಬಾರಿ ಬೇರೆ ರೀತಿಯಲ್ಲಿ ಸಿದ್ಧತೆ ಮಾಡಿಕೊಳ್ಳಬಹುದು."
  </>,

  physH2: "ದೇಹಾಧಾರಿತ ತಂತ್ರಗಳು",
  physIntro: "ಕೆಲವೊಮ್ಮೆ ನಿಮ್ಮ ದೇಹದ ರಾಸಾಯನಿಕ ಪ್ರತಿಕ್ರಿಯೆಯನ್ನು ಬದಲಾಯಿಸುವುದು ಅಗತ್ಯವಾಗುತ್ತದೆ:",
  physItems: [
    <><strong>ಮ್ಯಾಮೇಲಿಯನ್ ಡೈವ್ ರಿಫ್ಲೆಕ್ಸ್:</strong> 15–30 ಸೆಕೆಂಡುಗಳ ಕಾಲ ನಿಮ್ಮ ಮುಖವನ್ನು ಹಿಮಶೀತ ನೀರಿನಲ್ಲಿ ಮುಳುಗಿಸುವುದರಿಂದ ಹೃದಯಬಡಿತ ತಕ್ಷಣ ನಿಧಾನಗೊಳ್ಳುತ್ತದೆ.</>,
    <><strong>ತೀವ್ರ ವ್ಯಾಯಾಮ:</strong> ಪ್ಯಾನಿಕ್ ಅಟ್ಯಾಕ್ ಸಮಯದಲ್ಲಿ 60 ಸೆಕೆಂಡು ಜಂಪಿಂಗ್ ಜ್ಯಾಕ್ಸ್ ಅಥವಾ ಸ್ಪ್ರಿಂಟಿಂಗ್ ಮಾಡುವುದರಿಂದ ಹೆಚ್ಚುವರಿ ಅಡ್ರೆನಲಿನ್ ಕಡಿಮೆಯಾಗುತ್ತದೆ.</>,
  ],

  supportH2: "ಬೆಂಬಲ ವ್ಯವಸ್ಥೆ ನಿರ್ಮಾಣ",
  supportP: <>ಒಂಟಿತನವು ಮಾನಸಿಕ ಆರೋಗ್ಯ ಸಮಸ್ಯೆಗಳನ್ನು ಹೆಚ್ಚಿಸುತ್ತದೆ. “ನನಗೆ ಈಗ ತುಂಬಾ ಕಷ್ಟವಾಗುತ್ತಿದೆ” ಎಂದು ವಿಶ್ವಾಸಾರ್ಹ ಸ್ನೇಹಿತ ಅಥವಾ ಕುಟುಂಬ ಸದಸ್ಯರಿಗೆ ಹೇಳುವುದರಿಂದ ನೀವು ಒಬ್ಬರೇ ಅಲ್ಲ ಎಂಬ ಅರಿವು ಬರುತ್ತದೆ. ಅದಕ್ಕಾಗಿಯೇ MindfulSpace ಆಪ್‌ನಲ್ಲಿ <strong>ವಿಶ್ವಾಸಾರ್ಹ ಸಂಪರ್ಕ</strong> ಅಗತ್ಯವಿದೆ.</>,
},
};

export default function CopingStrategies() {
  const { lang } = useLanguage();
  const c = content[lang] || content.en;

  return (
    <>
      <p className="text-sm text-slate-500 mb-6">{c.lastUpdated}</p>
      <h1>{c.h1}</h1>

      <p>{c.intro}</p>

      <h2 id="breathing-techniques">{c.breathH2}</h2>
      <p>{c.breathP}</p>

      <Steps>
        {c.breathSteps.map((step, i) => (
          <Step key={i} number={String(i + 1)} title={step.title}>
            {step.desc}
          </Step>
        ))}
      </Steps>

      <h2 id="grounding-techniques">{c.groundH2}</h2>
      <p>{c.groundP}</p>
      <ul>
        {c.groundItems.map((item, i) => <li key={i}>{item}</li>)}
      </ul>

      <h2 id="cognitive-reframing">{c.reframeH2}</h2>
      <p>{c.reframeP}</p>
      <blockquote>
        <p className="not-italic text-slate-300 border-l-4 border-teal-500 pl-4 py-1 my-4 bg-[#1E293B] rounded-r-lg">
          {c.reframeQuote}
        </p>
      </blockquote>

      <h2 id="physical-strategies">{c.physH2}</h2>
      <p>{c.physIntro}</p>
      <ul>
        {c.physItems.map((item, i) => <li key={i}>{item}</li>)}
      </ul>

      <h2 id="building-support-systems">{c.supportH2}</h2>
      <p>{c.supportP}</p>
    </>
  );
}
