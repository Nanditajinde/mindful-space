import { Badge } from "../../components/docs/Badge";
import { useLanguage } from "../../context/LanguageContext";

const content = {
  en: {
    lastUpdated: "Last updated: Apr 12, 2026",
    h1: "Tech Stack",
    intro: "MindfulSpace is built with a modern, carefully-chosen technology stack focused on developer experience, speed, and scalability. Here's a breakdown of every layer of the stack.",
    frontendH2: "Frontend",
    frontendItems: [
      { name: "React 18", badge: "Framework", desc: "Component-based UI framework with concurrent rendering, React Context API, and hooks-based state management." },
      { name: "Vite", badge: "Build Tool", desc: "An ultra-fast build tool that replaces Create React App. Provides Hot Module Replacement (HMR) in milliseconds." },
    ],
    stylingH2: "Styling",
    stylingItems: [
      { name: "Tailwind CSS v4", badge: "CSS", desc: "Utility-first CSS framework. Provides a design system foundation and rapid iteration on UI without writing custom CSS." },
      { name: "Lucide React", badge: "Icons", desc: "Lightweight, consistent icon library with 1000+ beautiful SVG-based icons." },
    ],
    aiH2: "AI / Backend",
    aiItems: [
      { name: "Google Gemini 2.5 Flash", badge: "AI", desc: "Google's latest, fastest generative AI model. Used for chat support, assessment interpretation, and the AI Insights dashboard." },
    ],
    backendH2: "Backend & Auth",
    backendItems: [
      { name: "Firebase Auth", badge: "Auth", desc: "Google-backed authentication platform using OAuth 2.0. We use the \"Sign in with Google\" popup/redirect flow." },
      { name: "Cloud Firestore", badge: "Database", desc: "NoSQL document database from Google Firebase. Stores all user data (chats, mood logs, assessments) with per-document security rules." },
    ],
    routingH2: "Routing",
    routingItems: [
      { name: "React Router DOM v7", badge: "Routing", desc: "Client-side routing library. Handles all page transitions and SPA (Single Page Application) navigation." },
    ],
  },
  hi: {
    lastUpdated: "अंतिम अपडेट: अक्टू. 24, 2024",
    h1: "टेक स्टैक",
    intro: "MindfulSpace डेवलपर अनुभव, गति और स्केलेबिलिटी पर केंद्रित एक आधुनिक, ध्यानपूर्वक चुने गए प्रौद्योगिकी स्टैक के साथ बनाया गया है। स्टैक की हर परत का विवरण यहाँ है।",
    frontendH2: "फ्रंटएंड",
    frontendItems: [
      { name: "React 18", badge: "Framework", desc: "कंपोनेंट-आधारित UI फ्रेमवर्क जिसमें समवर्ती रेंडरिंग, React Context API और हुक्स-आधारित स्टेट मैनेजमेंट है।" },
      { name: "Vite", badge: "Build Tool", desc: "एक अल्ट्रा-फास्ट बिल्ड टूल जो Create React App की जगह लेता है। मिलीसेकंड में Hot Module Replacement (HMR) प्रदान करता है।" },
    ],
    stylingH2: "स्टाइलिंग",
    stylingItems: [
      { name: "Tailwind CSS v4", badge: "CSS", desc: "Utility-first CSS फ्रेमवर्क। कस्टम CSS लिखे बिना डिज़ाइन सिस्टम फाउंडेशन और UI पर तेजी से पुनरावृत्ति प्रदान करता है।" },
      { name: "Lucide React", badge: "Icons", desc: "1000+ सुंदर SVG-आधारित आइकन के साथ हल्की, सुसंगत आइकन लाइब्रेरी।" },
    ],
    aiH2: "AI / बैकएंड",
    aiItems: [
      { name: "Google Gemini 2.5 Flash", badge: "AI", desc: "Google का नवीनतम, सबसे तेज़ जेनेरेटिव AI मॉडल। चैट सपोर्ट, मूल्यांकन व्याख्या और AI इनसाइट्स डैशबोर्ड के लिए उपयोग किया जाता है।" },
    ],
    backendH2: "बैकएंड और प्रमाणीकरण",
    backendItems: [
      { name: "Firebase Auth", badge: "Auth", desc: "OAuth 2.0 का उपयोग करने वाला Google-समर्थित प्रमाणीकरण प्लेटफॉर्म। हम \"Google से साइन इन\" पॉपअप/रीडायरेक्ट फ्लो का उपयोग करते हैं।" },
      { name: "Cloud Firestore", badge: "Database", desc: "Google Firebase का NoSQL दस्तावेज़ डेटाबेस। प्रति-दस्तावेज़ सुरक्षा नियमों के साथ सभी उपयोगकर्ता डेटा (चैट, मूड लॉग, मूल्यांकन) संग्रहीत करता है।" },
    ],
    routingH2: "राउटिंग",
    routingItems: [
      { name: "React Router DOM v7", badge: "Routing", desc: "क्लाइंट-साइड राउटिंग लाइब्रेरी। सभी पेज ट्रांज़िशन और SPA (Single Page Application) नेविगेशन को संभालता है।" },
    ],
  },
  kn: {
  lastUpdated: "ಕೊನೆಯ ನವೀಕರಣ: ಅಕ್ಟೋಬರ್ 24, 2024",
  h1: "ನಮ್ಮ ಧ್ಯೇಯ",
  p1: "ಭಾರತದಲ್ಲಿ ಇಂದು, ಸುಮಾರು 15 ಕೋಟಿ ಜನರು ಸಕ್ರಿಯ ಮಾನಸಿಕ ಆರೋಗ್ಯ ನೆರವು ಅಗತ್ಯವಿದೆ. ಆದರೂ, ಚಿಕಿತ್ಸೆ ಅಂತರವು ಆಶ್ಚರ್ಯಕರವಾಗಿದೆ — ಸಾಮಾನ್ಯವಾಗಿ 70% ರಿಂದ 92% ನಡುವೆ ಅಂದಾಜಿಸಲಾಗಿದೆ.",
  p2: "ಈ ಅಂತರಕ್ಕೆ ಕಾರಣಗಳು ವ್ಯವಸ್ಥಾತ್ಮಕವಾಗಿವೆ:",
  reasons: [
    "ಕಳಂಕ: ಸಮಾಜದಲ್ಲಿ ಆಳವಾಗಿ ಬೇರುಬಿಟ್ಟಿರುವ ಕಲ್ಪನೆಗಳು ಜನರನ್ನು ಸಹಾಯ ಕೇಳುವುದರಿಂದ ತಡೆಯುತ್ತವೆ.",
    "ವೆಚ್ಚ: ಉತ್ತಮ ಗುಣಮಟ್ಟದ ಥೆರಪಿ ದುಬಾರಿ ಮತ್ತು ಹೆಚ್ಚಿನದಾಗಿ ಸ್ವಂತ ಖರ್ಚಿನಿಂದಲೇ.",
    "ಲಭ್ಯತೆ: ಪ್ರತಿಯೊಬ್ಬರಿಗೆ ಕ್ಲಿನಿಕಲ್ ಸೈಕಾಲಜಿಸ್ಟ್‌ಗಳು ಮತ್ತು ಸೈಕಿಯಾಟ್ರಿಸ್ಟ್‌ಗಳ ಕೊರತೆ.",
  ],
  visionH2: "MindfulSpace ದೃಷ್ಟಿ",
  visionP1: "MindfulSpace ಅನ್ನು ಕ್ಲಿನಿಕಲ್ ಮಾನಸಿಕ ವಿಜ್ಞಾನವನ್ನು ಬದಲಾಯಿಸಲು ಅಲ್ಲ, ಆದರೆ ಅಂತರವನ್ನು ತುಂಬಲು ನಿರ್ಮಿಸಲಾಗಿದೆ. ಪ್ರತಿಯೊಬ್ಬರೂ ತಮ್ಮ ಭಾವನೆಗಳನ್ನು ಮುಕ್ತವಾಗಿ ವ್ಯಕ್ತಪಡಿಸಲು ಖಾಸಗಿ, ಸುಲಭ ಮತ್ತು ತೀರ್ಪಿಲ್ಲದ ಸ್ಥಳವನ್ನು ಹೊಂದಬೇಕು ಎಂದು ನಾವು ನಂಬುತ್ತೇವೆ.",
  visionP2: "ಅತ್ಯಾಧುನಿಕ AI (Google Gemini) ಮತ್ತು ಕ್ಲಿನಿಕಲ್ ಫ್ರೇಮ್‌ವರ್ಕ್‌ಗಳನ್ನು (PHQ-9, GAD-7, CBT) ಬಳಸಿಕೊಂಡು, ನಾವು ಅಗತ್ಯವಿರುವವರಿಗೆ ಅನಿಯಮಿತ ಉಚಿತ ಸಹಾಯ ಒದಗಿಸಬಹುದು.",
  whyH2: "AI ಯಾಕೆ?",
  whyP1: "ಜನರು ತೀರ್ಪುಗೆ ಒಳಗಾಗುವುದಕ್ಕೆ ಭಯಪಡುತ್ತಾರೆ. ಆದರೆ AI ಯ ಕೃತಕ ಸ್ವಭಾವವೇ ಅದನ್ನು ಉತ್ತಮ ಸ್ನೇಹಿತನಾಗಿಸುತ್ತದೆ. ಅದು ನಿಮ್ಮ ವಿಚಾರಗಳನ್ನು ಯಾರಿಗೂ ಹೇಳುವುದಿಲ್ಲ, ನಿಮ್ಮನ್ನು ತೀರ್ಪು ಮಾಡುವುದಿಲ್ಲ, ಮತ್ತು ಯಾವಾಗಲೂ ಕೇಳಲು ಸಿದ್ಧವಾಗಿರುತ್ತದೆ.",
  whyP2: "ನಮ್ಮ ಗುರಿ ಮಾನಸಿಕ ಆರೋಗ್ಯದಲ್ಲಿ ಮೊದಲ ರಕ್ಷಣಾ ಹಂತವಾಗುವುದು — ಭಾವನೆಗಳನ್ನು ಸ್ಥಿರಗೊಳಿಸುವುದು, ವೈಜ್ಞಾನಿಕ ರೀತಿಯ ಪರಿಹಾರಗಳನ್ನು ನೀಡುವುದು ಮತ್ತು ಅಗತ್ಯವಿದ್ದಾಗ ವೃತ್ತಿಪರ ಸಹಾಯದ ಕಡೆಗೆ ಮಾರ್ಗದರ್ಶನ ಮಾಡುವುದು.",
},
};

function TechItem({ name, badge, desc }) {
  return (
    <div className="flex items-start gap-3 mb-4 p-4 rounded-xl border border-[#1F2937] bg-[#1E293B]/50 not-prose">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-white font-semibold text-sm">{name}</span>
          <Badge type="info">{badge}</Badge>
        </div>
        <p className="text-slate-300 text-sm m-0">{desc}</p>
      </div>
    </div>
  );
}

export default function TechStack() {
  const { lang } = useLanguage();
  const c = content[lang] || content.en; 

  return (
    <>
      <p className="text-sm text-slate-500 mb-6">{c.lastUpdated}</p>
      <h1>{c.h1}</h1>

      <p>{c.intro}</p>

      <h2 id="frontend">{c.frontendH2}</h2>
      {c.frontendItems.map((item, i) => (
        <TechItem key={i} {...item} />
      ))}

      <h2 id="styling">{c.stylingH2}</h2>
      {c.stylingItems.map((item, i) => (
        <TechItem key={i} {...item} />
      ))}

      <h2 id="ai-backend">{c.aiH2}</h2>
      {c.aiItems.map((item, i) => (
        <TechItem key={i} {...item} />
      ))}

      <h2 id="backend-auth">{c.backendH2}</h2>
      {c.backendItems.map((item, i) => (
        <TechItem key={i} {...item} />
      ))}

      <h2 id="routing">{c.routingH2}</h2>
      {c.routingItems.map((item, i) => (
        <TechItem key={i} {...item} />
      ))}
    </>
  );
}
