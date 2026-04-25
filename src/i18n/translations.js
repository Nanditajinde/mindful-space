// src/i18n/translations.js
// All translations for English (en), Hindi (hi), and Kannada (kn)

const translations = {
  en: {
    // ─── Sidebar / Navigation ───────────────────────────────────────────────
    "nav.chat": "MindfulSpace AI",
    "nav.dashboard": "Dashboard",
    "nav.assessments": "Assessments",
    "nav.guides": "Mental Health Guides",
    "nav.about": "About Us",
    "nav.trustedContact": "Trusted Contact",
    "nav.helpSupport": "Help & Support",
    "nav.language": "Language",

    // ─── Login Page ─────────────────────────────────────────────────────────
    "login.welcome": "Welcome back",
    "login.subtitle": "Sign in to access your personal wellness companion, track your mood, and talk to MindfulSpace AI.",
    "login.continueGoogle": "Continue with Google",
    "login.signingIn": "Signing in…",
    "login.disclaimer": "MindfulSpace is not a substitute for professional care.",
    "login.crisis": "Crisis? Call",
    "login.badge.secure": "Secure",
    "login.badge.ai": "AI-Powered",
    "login.badge.free": "Free",

    // ─── Account Panel ───────────────────────────────────────────────────────
    "account.title": "Account",
    "account.freeTrial": "Free Trial",
    "account.loading": "Loading...",
    "account.trialEnded": "Your free trial has ended",
    "account.trialEndedSub": "Upgrade to Pro to continue enjoying MindfulSpace",
    "account.daysLeft": "days left",
    "account.inTrial": "in your free trial",
    "account.after30": "After 30 days:",
    "account.upgrade": "Upgrade to Pro",
    "account.signOut": "Sign Out",

    // ─── Marketing Navbar ────────────────────────────────────────────────────
    "mkt.nav.features": "Features",
    "mkt.nav.howItWorks": "How it Works",
    "mkt.nav.docs": "Documentation",
    "mkt.nav.tryFree": "Try for free →",

    // ─── Hero ────────────────────────────────────────────────────────────────
    "hero.badge": "Powered by Google Gemini",
    "hero.headline1": "Mental health support that",
    "hero.headline2": "actually understands you",
    "hero.sub": "An empathetic, private, and intelligent companion built for India. Access clinical-grade screenings, daily mood tracking, and instant support without the cost.",
    "hero.cta1": "Get Started Free",
    "hero.cta2": "See how it works",
    "hero.trust1": "No subscription",
    "hero.trust2": "100% free",
    "hero.trust3": "Built for India",
    "hero.chat.user": "I'm feeling really overwhelmed with everything going on right now.",
    "hero.chat.ai": "I hear you. It's completely valid to feel overwhelmed when so much is on your plate. Take a deep breath. Would it help to break down what's on your mind right now?",

    // ─── Stats ───────────────────────────────────────────────────────────────
    "stats.indiansCare": "Indians need care",
    "stats.aiSupport": "AI Support",
    "stats.private": "Private & Secure",
    "stats.free": "Free",
    "stats.forever": "Forever",

    // ─── Features ────────────────────────────────────────────────────────────
    "features.heading": "Built for your mind.",
    "features.sub": "Everything you need to track, manage, and understand your mental health, without complex subscriptions or hidden fees.",
    "features.chat.title": "AI Chat Support",
    "features.chat.desc": "Non-judgmental, conversational support powered by Gemini 2.5 Flash. Discuss your day, manage stress, or navigate anxiety at any hour.",
    "features.voice.title": "Voice Mode",
    "features.voice.desc": "Hands-free venting. Speak your mind and let MindfulSpace listen when typing feels like too much work.",
    "features.phq9.title": "PHQ-9 Screening",
    "features.phq9.desc": "Take the clinical standard depression screening entirely in-app to establish your baseline.",
    "features.mood.title": "Mood Tracker",
    "features.mood.desc": "Visualize your emotional trajectory over the last 14 days to understand triggers better.",
    "features.insights.title": "AI Insights",
    "features.insights.desc": "Gemini analyzes your chats, mood data, and assessments to generate a personalized weekly summary.",
    "features.privacy.title": "Zero-Trust Privacy",
    "features.privacy.desc": "Your data is locked to your account. We never sell your chat logs to advertisers. Ever.",

    // ─── How It Works ────────────────────────────────────────────────────────
    "how.heading": "From signup to support in 60 seconds.",
    "how.sub": "We ripped out every unnecessary step so you can get help the second you need it.",
    "how.step1.title": "Sign up securely",
    "how.step1.desc": "One click with Google. No messy passwords.",
    "how.step2.title": "Add a contact",
    "how.step2.desc": "Input a trusted friend's number for safety emergencies.",
    "how.step3.title": "Start talking",
    "how.step3.desc": "Instantly drop into the chat and begin releasing stress.",

    

    // ─── CTA ─────────────────────────────────────────────────────────────────
    "cta.heading": "Your mental health matters.",
    "cta.button": "Open MindfulSpace →",
    "cta.crisis": "In crisis? iCall India:",

    // ─── Footer ──────────────────────────────────────────────────────────────
    "footer.tagline": "An AI mental health companion powered by Google Gemini. Accessible, private, and 100% free. Built for India.",
    "footer.product": "Product",
    "footer.signIn": "Sign in",
    "footer.docs": "Documentation",
    "footer.features": "Features",
    "footer.privacy": "Privacy Policy",
    "footer.crisis": "Crisis Helplines (India)",
    "footer.copy": " All rights reserved.",
    "footer.builtWith": "Built with ",

    // ─── Personality Test ────────────────────────────────────────────────────
    "personality.title": "Quick Personalisation",
    "personality.sub": "Help MindfulSpace understand you better — 6 quick questions",
    "personality.questionOf": "Question {n} of {total}",
    "personality.skip": "Skip for now",
    // Q1
    "personality.q1": "How would you describe yourself?",
    "personality.q1.o1": "Introverted — I prefer alone time",
    "personality.q1.o2": "Extroverted — I enjoy socializing",
    "personality.q1.o3": "Somewhere in between",
    // Q2
    "personality.q2": "When you're struggling, what do you need most?",
    "personality.q2.o1": "Just someone to listen",
    "personality.q2.o2": "Practical advice",
    "personality.q2.o3": "Distraction",
    "personality.q2.o4": "Motivation",
    // Q3
    "personality.q3": "How comfortable are you talking about your emotions?",
    "personality.q3.o1": "Very comfortable",
    "personality.q3.o2": "Somewhat comfortable",
    "personality.q3.o3": "Not very comfortable",
    "personality.q3.o4": "I find it difficult",
    // Q4
    "personality.q4": "How do you usually cope with stress?",
    "personality.q4.o1": "Talk to someone",
    "personality.q4.o2": "Keep it to myself",
    "personality.q4.o3": "Exercise or stay busy",
    "personality.q4.o4": "I don't cope well",
    // Q5
    "personality.q5": "What best describes your current situation?",
    "personality.q5.o1": "Feeling anxious",
    "personality.q5.o2": "Feeling low or sad",
    "personality.q5.o3": "Feeling stressed",
    "personality.q5.o4": "Just exploring the app",
    // Q6
    "personality.q6": "What kind of support do you prefer from MindfulSpace?",
    "personality.q6.o1": "Gentle and empathetic",
    "personality.q6.o2": "Motivational and energetic",
    "personality.q6.o3": "Calm and practical",
    "personality.q6.o4": "No preference",

    // ─── Chat Page ─────────────────────────────────────────────────────
    "chat.title": "MindfulSpace Chat",
    "chat.subtitle": "Your secure, AI-powered wellness space.",
    "chat.newChat": "New Chat +",
    "chat.today": "Today",
    "chat.yesterday": "Yesterday",
    "chat.last7": "Last 7 days",
    "chat.thisMonth": "This month",
    "chat.older": "Older",
    "chat.placeholder": "Share how you're feeling…",
    "chat.listening": "Listening",
    "chat.welcome": "Hi there 👋 I'm **MindfulSpace**, your personal wellness companion.\n\nI'm here to listen without judgment. How are you feeling today?",
    "chat.errorMsg": "I'm sorry, I had trouble responding. Please try again in a moment.",
    "chat.errorConfig":
      "The AI could not be reached. Ensure VITE_GEMINI_API_KEY is set in your .env file, restart the dev server, and rebuild for production. Get a key from Google AI Studio (aistudio.google.com/apikey).",
    "chat.errorKeyInvalid":
      "The Gemini API key was rejected. Create a new key at Google AI Studio, update VITE_GEMINI_API_KEY in .env, restrict the key to your site if needed, and restart the dev server.",
    "chat.errorNetwork":
      "Could not reach Google's servers. Check your internet connection, VPN, firewall, or try another browser. If this persists, the browser may be blocking the request.",
    "chat.errorQuota":
      "The AI service rate limit or quota was hit. Wait a few minutes, check billing on Google AI Studio, or create a new API key with quota remaining.",
    "chat.voiceUnsupported": "Voice input not supported in this browser. Try Chrome.",
    "chat.speechUnsupported": "Speech synthesis not supported in this browser.",

    // ─── Dashboard Page ─────────────────────────────────────────────────
    "dash.title": "Dashboard",
    "dash.sub": "Track and review your psychological well-being.",
    "dash.insights": "Generate AI Insights",
    "dash.avgMood": "Avg Mood (14 days)",
    "dash.overall": "Overall",
    "dash.depression": "Depression",
    "dash.anxiety": "Anxiety",
    "dash.notTaken": "Not taken yet",
    "dash.moodTrend": "Mood Trend",
    "dash.moodTrendSub": "Daily mood score over the past 14 days",
    "dash.noLogs": "No mood logs yet. Log below to see trends.",
    "dash.logMood": "Log Today's Mood",
    "dash.logMoodSub": "How are you feeling right now?",
    "dash.low": "Low",
    "dash.high": "High",
    "dash.notePlaceholder": "Add an optional note about your day...",
    "dash.saveEntry": "Save Entry",
    "dash.saving": "Saving...",
    "dash.phq9History": "PHQ-9 History",
    "dash.gad7History": "GAD-7 History",

    // ─── Assessment Page ─────────────────────────────────────────────────
    "assess.title": "Assessments",
    "assess.sub": "Scientifically validated screening tools to understand your well-being. These tests take only a few minutes.",
    "assess.note": "Note:",
    "assess.noteText": "These tools are for screening only and do not constitute a clinical diagnosis. Always consult a healthcare professional.",
    "assess.phq9.sub": "Depression Screening",
    "assess.phq9.desc": "9 questions about the past 2 weeks. Takes ~2 minutes.",
    "assess.gad7.sub": "Anxiety Screening",
    "assess.gad7.desc": "7 questions about the past 2 weeks. Takes ~1 minute.",
    "assess.over2weeks": "Over the last 2 weeks, how often have you been bothered by:",
    "assess.opt.never": "Not at all",
    "assess.opt.several": "Several days",
    "assess.opt.half": "More than half the days",
    "assess.opt.nearly": "Nearly every day",
    "assess.crisis": "If you're having thoughts of self-harm, please reach out to iCall (9152987821) immediately.",
    "assess.cancel": "Cancel",
    "assess.submit": "Submit Assessment",
    "assess.takeAnother": "Take another test",
    "assess.analysis": "MindfulSpace Analysis",
    "assess.strategies": "Recommended Strategies",
    "assess.reachOut": "⚠️ Please reach out for support",
    "assess.selfHarm": "Your response suggests you may be having thoughts of self-harm. Help is available.",
    "assess.unanswered": "Please answer all questions.",

    // ─── Fallback Coping Tips ────────────────────────────────────────────
    "assess.fallback.tip1": "Practice slow, deep breathing for 5 minutes when you feel overwhelmed",
    "assess.fallback.tip2": "Keep a short daily mood journal to spot patterns early",
    "assess.fallback.tip3": "Reach out to one trusted person this week to share how you're feeling",
    "assess.fallback.tip4": "Consider speaking with a counsellor or therapist",
    "assess.fallback.interpretation": "Thank you for completing this assessment. These results can be a helpful starting point for conversations with a mental health professional.",

    // PHQ-9 questions
    "assess.phq9.q1": "Little interest or pleasure in doing things?",
    "assess.phq9.q2": "Feeling down, depressed, or hopeless?",
    "assess.phq9.q3": "Trouble falling/staying asleep, or sleeping too much?",
    "assess.phq9.q4": "Feeling tired or having little energy?",
    "assess.phq9.q5": "Poor appetite or overeating?",
    "assess.phq9.q6": "Feeling bad about yourself or that you are a failure?",
    "assess.phq9.q7": "Trouble concentrating on things?",
    "assess.phq9.q8": "Moving/speaking so slowly others noticed, or being fidgety/restless?",
    "assess.phq9.q9": "Thoughts that you'd be better off dead or of hurting yourself?",
    // GAD-7 questions
    "assess.gad7.q1": "Feeling nervous, anxious, or on edge?",
    "assess.gad7.q2": "Not being able to stop or control worrying?",
    "assess.gad7.q3": "Worrying too much about different things?",
    "assess.gad7.q4": "Trouble relaxing?",
    "assess.gad7.q5": "Being so restless it's hard to sit still?",
    "assess.gad7.q6": "Becoming easily annoyed or irritable?",
    "assess.gad7.q7": "Feeling afraid as if something awful might happen?",

    // ─── Severity Labels ──────────────────────────────────────────────────
    "sev.Minimal": "Minimal",
    "sev.Mild": "Mild",
    "sev.Moderate": "Moderate",
    "sev.ModeratelySevere": "Moderately Severe",
    "sev.Severe": "Severe",
    "sev.MinimalAnxiety": "Minimal Anxiety",
    "sev.MildAnxiety": "Mild Anxiety",
    "sev.ModerateAnxiety": "Moderate Anxiety",
    "sev.SevereAnxiety": "Severe Anxiety",

    // ─── Crisis Modal ────────────────────────────────────────────────────
    "crisis.title": "We're Here For You",
    "crisis.sub1": "It sounds like you're going through something really hard.",
    "crisis.sub2": "You are not alone.",
    "crisis.sub3": "Please reach out to a crisis counsellor or your trusted contact right now.",
    "crisis.whatsapp": "Message Trusted Contact",
    "crisis.continue": "I understand — continue",

    // ─── Crisis Helplines ─────────────────────────────────────────────
    "crisis.helplines.title": "Crisis Helplines (India)",
    "crisis.helplines.kiran": "📞 Kiran (24/7): 1800-599-0019",
    "crisis.helplines.icall": "📞 iCALL (TISS - Working hours): 9152987821",
    "crisis.helplines.vandrevala": "📞 Vandrevala (24/7): 1860-2662-345",
    "crisis.helplines.aasra": "📞 AASRA (24/7): 9820466627",
    "crisis.helplines.note": "*Availability may vary. In emergencies, contact local services.",

    
  },

  hi: {
    // ─── Sidebar / Navigation ───────────────────────────────────────────────
    "nav.chat": "MindfulSpace AI",
    "nav.dashboard": "डैशबोर्ड",
    "nav.assessments": "मूल्यांकन",
    "nav.guides": "मानसिक स्वास्थ्य गाइड",
    "nav.about": "हमारे बारे में",
    "nav.trustedContact": "विश्वसनीय संपर्क",
    "nav.helpSupport": "सहायता",
    "nav.language": "भाषा",

    // ─── Login Page ─────────────────────────────────────────────────────────
    "login.welcome": "वापस आपका स्वागत है",
    "login.subtitle": "अपने व्यक्तिगत वेलनेस साथी तक पहुंचने, मूड ट्रैक करने और MindfulSpace AI से बात करने के लिए साइन इन करें।",
    "login.continueGoogle": "Google से जारी रखें",
    "login.signingIn": "साइन इन हो रहा है…",
    "login.disclaimer": "MindfulSpace पेशेवर देखभाल का विकल्प नहीं है।",
    "login.crisis": "संकट में? कॉल करें",
    "login.badge.secure": "सुरक्षित",
    "login.badge.ai": "AI-संचालित",
    "login.badge.free": "मुफ़्त",

    // ─── Account Panel ───────────────────────────────────────────────────────
    "account.title": "खाता",
    "account.freeTrial": "मुफ़्त ट्रायल",
    "account.loading": "लोड हो रहा है...",
    "account.trialEnded": "आपका मुफ़्त ट्रायल समाप्त हो गया है",
    "account.trialEndedSub": "MindfulSpace का आनंद लेना जारी रखने के लिए Pro में अपग्रेड करें",
    "account.daysLeft": "दिन बचे हैं",
    "account.inTrial": "आपके मुफ़्त ट्रायल में",
    "account.after30": "30 दिन बाद:",
    "account.upgrade": "Pro में अपग्रेड करें",
    "account.signOut": "साइन आउट",

    // ─── Marketing Navbar ────────────────────────────────────────────────────
    "mkt.nav.features": "विशेषताएं",
    "mkt.nav.howItWorks": "यह कैसे काम करता है",
    "mkt.nav.docs": "दस्तावेज़ीकरण",
    "mkt.nav.tryFree": "मुफ़्त में आज़माएं →",

    // ─── Hero ────────────────────────────────────────────────────────────────
    "hero.badge": "Google Gemini द्वारा संचालित",
    "hero.headline1": "मानसिक स्वास्थ्य सहायता जो",
    "hero.headline2": "वास्तव में आपको समझती है",
    "hero.sub": "भारत के लिए बनाया गया एक सहानुभूतिपूर्ण, निजी और बुद्धिमान साथी। बिना किसी लागत के क्लिनिकल स्क्रीनिंग, दैनिक मूड ट्रैकिंग और तत्काल सहायता प्राप्त करें।",
    "hero.cta1": "मुफ़्त शुरू करें",
    "hero.cta2": "देखें यह कैसे काम करता है",
    "hero.trust1": "कोई सदस्यता नहीं",
    "hero.trust2": "100% मुफ़्त",
    "hero.trust3": "भारत के लिए बना",
    "hero.chat.user": "मुझे अभी हर चीज़ से बहुत अभिभूत महसूस हो रहा है।",
    "hero.chat.ai": "मैं आपको सुन रहा हूं। जब इतना सब हो तो अभिभूत महसूस करना बिल्कुल सामान्य है। गहरी सांस लें। क्या अभी अपने मन की बात को विस्तार से बताने में मदद मिलेगी?",

    // ─── Stats ───────────────────────────────────────────────────────────────
    "stats.indiansCare": "भारतीयों को देखभाल की ज़रूरत है",
    "stats.aiSupport": "AI सहायता",
    "stats.private": "निजी और सुरक्षित",
    "stats.free": "मुफ़्त",
    "stats.forever": "हमेशा के लिए",

    // ─── Features ────────────────────────────────────────────────────────────
    "features.heading": "आपके मन के लिए बना।",
    "features.sub": "बिना जटिल सदस्यता या छुपी फीस के अपने मानसिक स्वास्थ्य को ट्रैक, प्रबंधित और समझने के लिए सब कुछ।",
    "features.chat.title": "AI चैट सपोर्ट",
    "features.chat.desc": "Gemini 2.5 Flash द्वारा संचालित निर्णय-मुक्त बातचीत सहायता। किसी भी घंटे अपना दिन, तनाव या चिंता पर चर्चा करें।",
    "features.voice.title": "वॉइस मोड",
    "features.voice.desc": "हैंड्स-फ्री वेंटिंग। जब टाइपिंग बहुत ज़्यादा लगे तो MindfulSpace को सुनने दें।",
    "features.phq9.title": "PHQ-9 स्क्रीनिंग",
    "features.phq9.desc": "अपनी बेसलाइन स्थापित करने के लिए पूरी तरह इन-ऐप क्लिनिकल डिप्रेशन स्क्रीनिंग लें।",
    "features.mood.title": "मूड ट्रैकर",
    "features.mood.desc": "ट्रिगर को बेहतर समझने के लिए पिछले 14 दिनों में अपनी भावनात्मक यात्रा देखें।",
    "features.insights.title": "AI इनसाइट्स",
    "features.insights.desc": "Gemini आपकी चैट, मूड डेटा और मूल्यांकन का विश्लेषण करके व्यक्तिगत साप्ताहिक सारांश बनाता है।",
    "features.privacy.title": "ज़ीरो-ट्रस्ट प्राइवेसी",
    "features.privacy.desc": "आपका डेटा आपके खाते से लॉक है। हम आपके चैट लॉग कभी विज्ञापनदाताओं को नहीं बेचते।",

    // ─── How It Works ────────────────────────────────────────────────────────
    "how.heading": "साइनअप से सहायता तक 60 सेकंड में।",
    "how.sub": "हमने हर अनावश्यक चरण हटा दिया ताकि आप जरूरत पड़ने पर तुरंत मदद पा सकें।",
    "how.step1.title": "सुरक्षित रूप से साइन अप करें",
    "how.step1.desc": "Google से एक क्लिक। कोई जटिल पासवर्ड नहीं।",
    "how.step2.title": "संपर्क जोड़ें",
    "how.step2.desc": "सुरक्षा आपात स्थिति के लिए किसी विश्वसनीय मित्र का नंबर दर्ज करें।",
    "how.step3.title": "बात करना शुरू करें",
    "how.step3.desc": "तुरंत चैट में आएं और तनाव दूर करना शुरू करें।",

    

    // ─── CTA ─────────────────────────────────────────────────────────────────
    "cta.heading": "आपका मानसिक स्वास्थ्य महत्वपूर्ण है।",
    "cta.button": "MindfulSpace खोलें →",
    "cta.crisis": "संकट में? iCall India:",

    // ─── Footer ──────────────────────────────────────────────────────────────
    "footer.tagline": "Google Gemini द्वारा संचालित एक AI मानसिक स्वास्थ्य साथी। सुलभ, निजी और 100% मुफ़्त। भारत के लिए बना।",
    "footer.product": "उत्पाद",
    "footer.signIn": "साइन इन",
    "footer.docs": "दस्तावेज़ीकरण",
    "footer.features": "विशेषताएं",
    "footer.privacy": "गोपनीयता नीति",
    "footer.crisis": "संकट हेल्पलाइन (भारत)",
    "footer.copy": " सर्वाधिकार सुरक्षित।",
    "footer.builtWith": " और के साथ बनाया गया",

    // ─── Personality Test ────────────────────────────────────────────────────
    "personality.title": "त्वरित व्यक्तित्व परीक्षण",
    "personality.sub": "MindfulSpace को आपको बेहतर समझने में मदद करें — 6 त्वरित प्रश्न",
    "personality.questionOf": "प्रश्न {n} / {total}",
    "personality.skip": "अभी छोड़ें",
    // Q1
    "personality.q1": "आप खुद को कैसे वर्णित करेंगे?",
    "personality.q1.o1": "अंतर्मुखी — मैं अकेले समय पसंद करता हूं",
    "personality.q1.o2": "बहिर्मुखी — मुझे समाजीकरण पसंद है",
    "personality.q1.o3": "बीच में कहीं",
    // Q2
    "personality.q2": "जब आप संघर्ष कर रहे होते हैं, तो आपको सबसे ज्यादा क्या चाहिए?",
    "personality.q2.o1": "बस कोई सुनने वाला",
    "personality.q2.o2": "व्यावहारिक सलाह",
    "personality.q2.o3": "ध्यान बंटाना",
    "personality.q2.o4": "प्रेरणा",
    // Q3
    "personality.q3": "आप अपनी भावनाओं के बारे में बात करने में कितने सहज हैं?",
    "personality.q3.o1": "बहुत सहज",
    "personality.q3.o2": "कुछ हद तक सहज",
    "personality.q3.o3": "ज्यादा सहज नहीं",
    "personality.q3.o4": "मुझे मुश्किल लगता है",
    // Q4
    "personality.q4": "आप आमतौर पर तनाव से कैसे निपटते हैं?",
    "personality.q4.o1": "किसी से बात करना",
    "personality.q4.o2": "खुद में रखना",
    "personality.q4.o3": "व्यायाम या व्यस्त रहना",
    "personality.q4.o4": "मैं अच्छे से नहीं निपट पाता",
    // Q5
    "personality.q5": "आपकी वर्तमान स्थिति को सबसे अच्छा क्या वर्णित करता है?",
    "personality.q5.o1": "चिंतित महसूस कर रहा हूं",
    "personality.q5.o2": "उदास महसूस कर रहा हूं",
    "personality.q5.o3": "तनावग्रस्त महसूस कर रहा हूं",
    "personality.q5.o4": "बस ऐप एक्सप्लोर कर रहा हूं",
    // Q6
    "personality.q6": "आप MindfulSpace से किस प्रकार की सहायता पसंद करते हैं?",
    "personality.q6.o1": "कोमल और सहानुभूतिपूर्ण",
    "personality.q6.o2": "प्रेरक और ऊर्जावान",
    "personality.q6.o3": "शांत और व्यावहारिक",
    "personality.q6.o4": "कोई प्राथमिकता नहीं",

    // ─── Chat Page ─────────────────────────────────────────────────────
    "chat.title": "MindfulSpace चैट",
    "chat.subtitle": "आपका सुरक्षित, AI-संचालित वेलनेस स्थान।",
    "chat.newChat": "नई चैट +",
    "chat.today": "आज",
    "chat.yesterday": "कल",
    "chat.last7": "पिछले 7 दिन",
    "chat.thisMonth": "इस महीने",
    "chat.older": "पहले",
    "chat.placeholder": "आप कैसा महसूस कर रहे हैं…",
    "chat.listening": "सुन रहा है",
    "chat.welcome": "नमस्ते 👋 मैं **MindfulSpace** हूं, आपका व्यक्तिगत वेलनेस साथी।\n\nमैं बिना किसी निर्णय के सुनने के लिए यहां हूं। आज आप कैसा महसूस कर रहे हैं?",
    "chat.errorMsg": "मुझे खेद है, मुझे जवाब देने में कठिनाई हुई। कृपया एक पल में पुनः प्रयास करें।",
    "chat.errorConfig":
      "AI तक पहुंच नहीं बन पाई। सुनिश्चित करें कि .env में VITE_GEMINI_API_KEY सेट है, डेव सर्वर पुनः चलाएं, और प्रोडक्शन के लिए पुनः बिल्ड करें। कुंजी Google AI Studio (aistudio.google.com/apikey) से प्राप्त करें।",
    "chat.errorKeyInvalid":
      "Gemini API कुंजी अस्वीकृत। Google AI Studio पर नई कुंजी बनाएं, .env में VITE_GEMINI_API_KEY अपडेट करें, और डेव सर्वर पुनः चलाएं।",
    "chat.errorNetwork":
      "Google सर्वर तक पहुंच नहीं। इंटरनेट, VPN या फ़ायरवॉल जांचें।",
    "chat.errorQuota":
      "AI सेवा की सीमा पूरी हो गई। कुछ मिनट प्रतीक्षा करें या Google AI Studio पर कोटा जांचें।",
    "chat.voiceUnsupported": "इस ब्राउज़र में वॉइस इनपुट समर्थित नहीं है। Chrome आज़माएं।",
    "chat.speechUnsupported": "इस ब्राउज़र में स्पीच सिंथेसिस समर्थित नहीं है।",

    // ─── Dashboard Page ─────────────────────────────────────────────────
    "dash.title": "डैशबोर्ड",
    "dash.sub": "अपनी मनोवैज्ञानिक भलाई को ट्रैक करें और समीक्षा करें।",
    "dash.insights": "AI इनसाइट्स जनरेट करें",
    "dash.avgMood": "औसत मूड (14 दिन)",
    "dash.overall": "समग्र",
    "dash.depression": "अवसाद",
    "dash.anxiety": "चिंता",
    "dash.notTaken": "अभी तक नहीं लिया",
    "dash.moodTrend": "मूड ट्रेंड",
    "dash.moodTrendSub": "पिछले 14 दिनों में दैनिक मूड स्कोर",
    "dash.noLogs": "अभी तक कोई मूड लॉग नहीं। ट्रेंड देखने के लिए नीचे लॉग करें।",
    "dash.logMood": "आज का मूड लॉग करें",
    "dash.logMoodSub": "आप अभी कैसा महसूस कर रहे हैं?",
    "dash.low": "कम",
    "dash.high": "ज़्यादा",
    "dash.notePlaceholder": "अपने दिन के बारे में एक वैकल्पिक नोट जोड़ें...",
    "dash.saveEntry": "प्रविष्टि सहेजें",
    "dash.saving": "सहेज रहा है...",
    "dash.phq9History": "PHQ-9 इतिहास",
    "dash.gad7History": "GAD-7 इतिहास",

    // ─── Assessment Page ─────────────────────────────────────────────────
    "assess.title": "मूल्यांकन",
    "assess.sub": "आपकी भलाई समझने के लिए वैज्ञानिक रूप से सत्यापित स्क्रीनिंग उपकरण। ये परीक्षण केवल कुछ मिनट लेते हैं।",
    "assess.note": "नोट:",
    "assess.noteText": "ये उपकरण केवल स्क्रीनिंग के लिए हैं और नैदानिक निदान नहीं हैं। हमेशा स्वास्थ्य पेशेवर से परामर्श लें।",
    "assess.phq9.sub": "अवसाद स्क्रीनिंग",
    "assess.phq9.desc": "पिछले 2 सप्ताहों के बारे में 9 प्रश्न। ~2 मिनट लगते हैं।",
    "assess.gad7.sub": "चिंता स्क्रीनिंग",
    "assess.gad7.desc": "पिछले 2 सप्ताहों के बारे में 7 प्रश्न। ~1 मिनट लगता है।",
    "assess.over2weeks": "पिछले 2 हफ्तों में, आप कितनी बार इससे परेशान रहे:",
    "assess.opt.never": "बिल्कुल नहीं",
    "assess.opt.several": "कुछ दिन",
    "assess.opt.half": "आधे से ज़्यादा दिन",
    "assess.opt.nearly": "लगभग हर दिन",
    "assess.crisis": "अगर आप खुद को नुकसान पहुंचाने के विचार कर रहे हैं, तो कृपया iCall (9152987821) से तुरंत संपर्क करें।",
    "assess.cancel": "रद्द करें",
    "assess.submit": "मूल्यांकन जमा करें",
    "assess.takeAnother": "एक और परीक्षण लें",
    "assess.analysis": "MindfulSpace विश्लेषण",
    "assess.strategies": "अनुशंसित रणनीतियाँ",
    "assess.reachOut": "⚠️ कृपया सहायता के लिए संपर्क करें",
    "assess.selfHarm": "आपकी प्रतिक्रिया से पता चलता है कि आपके मन में आत्म-नुकसान के विचार हो सकते हैं। सहायता उपलब्ध है।",
    "assess.unanswered": "कृपया सभी प्रश्नों का उत्तर दें।",

    // ─── Fallback Coping Tips ────────────────────────────────────────────
    "assess.fallback.tip1": "जब आप अभिभूत महसूस करें तो 5 मिनट के लिए धीमी गहरी सांस लें",
    "assess.fallback.tip2": "पैटर्न जल्दी पकड़ने के लिए एक छोटी दैनिक मूड डायरी रखें",
    "assess.fallback.tip3": "इस हफ्ते अपने विश्वसनीय मित्र से अपनी भावनाओं के बारे में बात करें",
    "assess.fallback.tip4": "एक परामर्शदाता या चिकित्सक से बात करने पर विचार करें",    
    "assess.fallback.interpretation": "इस मूल्यांकन को पूरा करने के लिए धन्यवाद। ये परिणाम एक मानसिक स्वास्थ्य पेशेवर के साथ बातचीत के लिए एक सहायक शुरुआत हो सकते हैं।",
    // PHQ-9 questions
    "assess.phq9.q1": "कामों में कम रुचि या आनंद?",
    "assess.phq9.q2": "उदास, निराश या निराशावादी महसूस करना?",
    "assess.phq9.q3": "नींद न आना या देर तक सोना?",
    "assess.phq9.q4": "थकान महसूस करना या कम ऊर्जा होना?",
    "assess.phq9.q5": "भूख न लगना या ज़्यादा खाना?",
    "assess.phq9.q6": "खुद को बुरा लगना या उनमस्ता महसूस करना?",
    "assess.phq9.q7": "ध्यान केंद्रित करने में कठिनाई?",
    "assess.phq9.q8": "इतनी धीरी हरकत या बोलना कि दूसरों ने ध्यान दिया, या बेचैनी होना?",
    "assess.phq9.q9": "सोचना कि मर जाना बेहतर होगा या खुद को नुकसान पहुंचाने के विचार?",
    // GAD-7 questions
    "assess.gad7.q1": "घबराहट, चिंता या बेचैनी महसूस करना?",
    "assess.gad7.q2": "चिंता रोकना मुश्किल लगना?",
    "assess.gad7.q3": "अलग-अलग चीज़ों के बारे में ज़रूरत से ज़्यादा सोचना?",
    "assess.gad7.q4": "आराम न कर पाना?",
    "assess.gad7.q5": "इतनी बेचैनी कि बैठना मुश्किल होना?",
    "assess.gad7.q6": "आसानी से चिड़चिड़ा या गुस्सा आना?",
    "assess.gad7.q7": "डर लगना जैसे कुछ बुरा होने वाला है?",

    // ─── Severity Labels ──────────────────────────────────────────────────
    "sev.Minimal": "न्यूनतम",
    "sev.Mild": "हल्का",
    "sev.Moderate": "मध्यम",
    "sev.ModeratelySevere": "मध्यम गंभीर",
    "sev.Severe": "गंभीर",
    "sev.MinimalAnxiety": "न्यूनतम चिंता",
    "sev.MildAnxiety": "हल्की चिंता",
    "sev.ModerateAnxiety": "मध्यम चिंता",
    "sev.SevereAnxiety": "गंभीर चिंता",

    // ─── Crisis Modal ────────────────────────────────────────────────────
    "crisis.title": "हम आपके लिए यहां हैं",
    "crisis.sub1": "लगता है आप कुछ कठिन दौर से गुज़र रहे हैं।",
    "crisis.sub2": "आप अकेले नहीं हैं।",
    "crisis.sub3": "कृपया अभी किसी संकट परामर्शदाता या अपने विश्वसनीय संपर्क से संपर्क करें।",
    "crisis.whatsapp": "विश्वसनीय संपर्क को संदेश भेजें",
    "crisis.continue": "मैं समझता हूं — जारी रखें",

    // ─── Crisis Helplines ─────────────────────────────────────────────
    "crisis.helplines.title": "संकट हेल्पलाइन (भारत)",
    "crisis.helplines.kiran": "📞 किरण (24/7): 1800-599-0019",
    "crisis.helplines.icall": "📞 iCALL (TISS - कार्य समय): 9152987821",
    "crisis.helplines.vandrevala": "📞 वंद्रेवाला (24/7): 1860-2662-345",
    "crisis.helplines.aasra": "📞 AASRA (24/7): 9820466627",
    "crisis.helplines.note": "*उपलब्धता बदल सकती है। आपात स्थिति में स्थानीय सेवाओं से संपर्क करें।",

  },

 

kn: {
  // ─── Sidebar / Navigation ───────────────────────────────────────────────
  "nav.chat": "MindfulSpace AI",
  "nav.dashboard": "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
  "nav.assessments": "ಮೌಲ್ಯಮಾಪನಗಳು",
  "nav.guides": "ಮಾನಸಿಕ ಆರೋಗ್ಯ ಮಾರ್ಗದರ್ಶಿಗಳು",
  "nav.about": "ನಮ್ಮ ಬಗ್ಗೆ",
  "nav.trustedContact": "ವಿಶ್ವಾಸಾರ್ಹ ಸಂಪರ್ಕ",
  "nav.helpSupport": "ಸಹಾಯ & ಬೆಂಬಲ",
  "nav.language": "ಭಾಷೆ",

  // ─── Login Page ─────────────────────────────────────────────────────────
  "login.welcome": "ಮತ್ತೆ ಸ್ವಾಗತ",
  "login.subtitle": "ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ವೆಲ್‌ನೆಸ್ ಸಂಗಾತಿಯನ್ನು ಪ್ರವೇಶಿಸಲು, ನಿಮ್ಮ ಮೂಡ್ ಟ್ರ್ಯಾಕ್ ಮಾಡಲು ಮತ್ತು MindfulSpace AI ಜೊತೆ ಮಾತನಾಡಲು ಸೈನ್ ಇನ್ ಮಾಡಿ.",
  "login.continueGoogle": "Google ಮೂಲಕ ಮುಂದುವರಿಸಿ",
  "login.signingIn": "ಸೈನ್ ಇನ್ ಆಗುತ್ತಿದೆ…",
  "login.disclaimer": "MindfulSpace ವೃತ್ತಿಪರ ಆರೈಕೆಗೆ ಪರ್ಯಾಯವಲ್ಲ.",
  "login.crisis": "ತುರ್ತು ಪರಿಸ್ಥಿತಿ? ಕರೆ ಮಾಡಿ",
  "login.badge.secure": "ಸುರಕ್ಷಿತ",
  "login.badge.ai": "AI ಚಾಲಿತ",
  "login.badge.free": "ಉಚಿತ",

  // ─── Account Panel ───────────────────────────────────────────────────────
  "account.title": "ಖಾತೆ",
  "account.freeTrial": "ಉಚಿತ ಪ್ರಯೋಗ",
  "account.loading": "ಲೋಡ್ ಆಗುತ್ತಿದೆ...",
  "account.trialEnded": "ನಿಮ್ಮ ಉಚಿತ ಪ್ರಯೋಗ ಮುಗಿದಿದೆ",
  "account.trialEndedSub": "MindfulSpace ಬಳಸಲು Pro ಗೆ ಅಪ್‌ಗ್ರೇಡ್ ಮಾಡಿ",
  "account.daysLeft": "ದಿನಗಳು ಬಾಕಿ",
  "account.inTrial": "ನಿಮ್ಮ ಉಚಿತ ಪ್ರಯೋಗದಲ್ಲಿ",
  "account.after30": "30 ದಿನಗಳ ನಂತರ:",
  "account.upgrade": "Pro ಗೆ ಅಪ್‌ಗ್ರೇಡ್ ಮಾಡಿ",
  "account.signOut": "ಸೈನ್ ಔಟ್",

  // ─── Marketing Navbar ────────────────────────────────────────────────────
  "mkt.nav.features": "ವೈಶಿಷ್ಟ್ಯಗಳು",
  "mkt.nav.howItWorks": "ಇದು ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ",
  "mkt.nav.docs": "ಡಾಕ್ಯುಮೆಂಟೇಶನ್",
  "mkt.nav.tryFree": "ಉಚಿತವಾಗಿ ಪ್ರಯತ್ನಿಸಿ →",

  // ─── Hero ────────────────────────────────────────────────────────────────
  "hero.badge": "Google Gemini ಮೂಲಕ ಚಾಲಿತ",
  "hero.headline1": "ಮಾನಸಿಕ ಆರೋಗ್ಯ ಬೆಂಬಲ",
  "hero.headline2": "ನಿಜವಾಗಿಯೂ ನಿಮಗೆ ಅರ್ಥವಾಗುತ್ತದೆ",
  "hero.sub": "ಭಾರತಕ್ಕಾಗಿ ನಿರ್ಮಿಸಲಾದ ಸಹಾನುಭೂತಿಯುತ, ಖಾಸಗಿ ಮತ್ತು ಬುದ್ಧಿವಂತ ಸಂಗಾತಿ.",
  "hero.cta1": "ಉಚಿತವಾಗಿ ಪ್ರಾರಂಭಿಸಿ",
  "hero.cta2": "ಇದು ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ ನೋಡಿ",
  "hero.trust1": "ಯಾವುದೇ ಚಂದಾದಾರಿಕೆ ಇಲ್ಲ",
  "hero.trust2": "100% ಉಚಿತ",
  "hero.trust3": "ಭಾರತಕ್ಕಾಗಿ ನಿರ್ಮಿಸಲಾಗಿದೆ",
  "hero.chat.user": "ನನಗೆ ಈಗ ಎಲ್ಲವೂ ತುಂಬಾ ಒತ್ತಡವಾಗುತ್ತಿದೆ.",
  "hero.chat.ai": "ನಾನು ನಿಮಗೆ ಕೇಳುತ್ತಿದ್ದೇನೆ. ಇದು ಸಹಜವಾಗಿದೆ. ಸ್ವಲ್ಪ ಆಳವಾದ ಉಸಿರೆಳೆಯಿರಿ.",

  // ─── Stats ───────────────────────────────────────────────────────────────
  "stats.indiansCare": "ಭಾರತೀಯರಿಗೆ ಆರೈಕೆ ಅಗತ್ಯ",
  "stats.aiSupport": "AI ಬೆಂಬಲ",
  "stats.private": "ಖಾಸಗಿ & ಸುರಕ್ಷಿತ",
  "stats.free": "ಉಚಿತ",
  "stats.forever": "ಎಂದಿಗೂ",

  // ─── Features ────────────────────────────────────────────────────────────
  "features.heading": "ನಿಮ್ಮ ಮನಸ್ಸಿಗಾಗಿ ನಿರ್ಮಿಸಲಾಗಿದೆ.",
  "features.sub": "ನಿಮ್ಮ ಮಾನಸಿಕ ಆರೋಗ್ಯವನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ಬೇಕಾದ ಎಲ್ಲವೂ.",
  "features.chat.title": "AI ಚಾಟ್ ಬೆಂಬಲ",
  "features.chat.desc": "ನ್ಯಾಯವಿಲ್ಲದ ಸಂಭಾಷಣೆ ಬೆಂಬಲ.",
  "features.voice.title": "ವಾಯ್ಸ್ ಮೋಡ್",
  "features.voice.desc": "ಹ್ಯಾಂಡ್ಸ್-ಫ್ರೀ ಮಾತನಾಡಿ.",
  "features.phq9.title": "PHQ-9 ಪರೀಕ್ಷೆ",
  "features.phq9.desc": "ಡಿಪ್ರೆಷನ್ ಪರಿಶೀಲನೆ.",
  "features.mood.title": "ಮೂಡ್ ಟ್ರ್ಯಾಕರ್",
  "features.mood.desc": "ನಿಮ್ಮ ಭಾವನೆಗಳನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ.",
  "features.insights.title": "AI ಇನ್ಸೈಟ್ಸ್",
  "features.insights.desc": "ವೈಯಕ್ತಿಕ ವಿಶ್ಲೇಷಣೆ.",
  "features.privacy.title": "ಗೋಪ್ಯತೆ",
  "features.privacy.desc": "ನಿಮ್ಮ ಡೇಟಾ ಸುರಕ್ಷಿತವಾಗಿದೆ.",

  // ─── How It Works ────────────────────────────────────────────────────────
  "how.heading": "60 ಸೆಕೆಂಡ್‌ನಲ್ಲಿ ಸಹಾಯ ಪಡೆಯಿರಿ.",
  "how.sub": "ತಕ್ಷಣ ಸಹಾಯ ಪಡೆಯಲು ಸರಳ ಹಂತಗಳು.",
  "how.step1.title": "ಸೈನ್ ಅಪ್ ಮಾಡಿ",
  "how.step1.desc": "Google ಮೂಲಕ ಒಂದು ಕ್ಲಿಕ್.",
  "how.step2.title": "ಸಂಪರ್ಕ ಸೇರಿಸಿ",
  "how.step2.desc": "ವಿಶ್ವಾಸಾರ್ಹ ಸ್ನೇಹಿತನ ಸಂಖ್ಯೆಯನ್ನು ಸೇರಿಸಿ.",
  "how.step3.title": "ಮಾತನಾಡಲು ಪ್ರಾರಂಭಿಸಿ",
  "how.step3.desc": "ತಕ್ಷಣ ಚಾಟ್ ಪ್ರಾರಂಭಿಸಿ.",

  
  // ─── CTA ─────────────────────────────────────────────────────────────────
  "cta.heading": "ನಿಮ್ಮ ಮಾನಸಿಕ ಆರೋಗ್ಯ ಮುಖ್ಯವಾಗಿದೆ.",
  "cta.button": "MindfulSpace ತೆರೆಯಿರಿ →",
  "cta.crisis": "ತುರ್ತು ಪರಿಸ್ಥಿತಿ? iCall India:",

  // ─── Footer ──────────────────────────────────────────────────────────────
  "footer.tagline": "AI ಮಾನಸಿಕ ಆರೋಗ್ಯ ಸಂಗಾತಿ.",
  "footer.product": "ಉತ್ಪನ್ನ",
  "footer.signIn": "ಸೈನ್ ಇನ್",
  "footer.docs": "ಡಾಕ್ಯುಮೆಂಟೇಶನ್",
  "footer.features": "ವೈಶಿಷ್ಟ್ಯಗಳು",
  "footer.privacy": "ಗೋಪ್ಯತೆ ನೀತಿ",
  "footer.crisis": "ಸಂಕಟ ಸಹಾಯವಾಣಿ",
  "footer.copy": " ಎಲ್ಲಾ ಹಕ್ಕುಗಳು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.",
  "footer.builtWith": " ಸಹ ನಿರ್ಮಿಸಲಾಗಿದೆ",

  // ─── Personality Test ────────────────────────────────────────────────────
  "personality.title": "ವೇಗವಾದ ವ್ಯಕ್ತಿತ್ವ ಪರೀಕ್ಷೆ",
  "personality.sub": "MindfulSpace ನಿಮಗೆ ಉತ್ತಮವಾಗಿ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ಸಹಾಯ ಮಾಡಿ — 6 ವೇಗವಾದ ಪ್ರಶ್ನೆಗಳು",
  "personality.questionOf": "ಪ್ರಶ್ನೆ {n} / {total}",
  "personality.skip": "ಈಗ ಬಿಡಿ",

  // Q1
  "personality.q1": "ನೀವು ನಿಮ್ಮನ್ನು ಹೇಗೆ ವರ್ಣಿಸುತ್ತೀರಿ?",
  "personality.q1.o1": "ಅಂತರ್ಮುಖಿ — ನಾನು ಒಂಟಿಯಾಗಿ ಸಮಯ ಕಳೆಯಲು ಇಷ್ಟಪಡುತ್ತೇನೆ",
  "personality.q1.o2": "ಬಹಿರ್ಮುಖಿ — ನನಗೆ ಸಾಮಾಜಿಕವಾಗಿರುವುದು ಇಷ್ಟ",
  "personality.q1.o3": "ಮಧ್ಯದಲ್ಲೇ ಎಲ್ಲೋ",

  // Q2
  "personality.q2": "ನೀವು ಸಂಕಷ್ಟದಲ್ಲಿದ್ದಾಗ, ನಿಮಗೆ ಅತ್ಯಂತ ಬೇಕಾಗಿರುವುದು ಏನು?",
  "personality.q2.o1": "ಯಾರಾದರೂ ಕೇಳುವವರು",
  "personality.q2.o2": "ಪ್ರಾಯೋಗಿಕ ಸಲಹೆ",
  "personality.q2.o3": "ಮನಸ್ಸು ಬೇರೆಡೆಗೆ ತಿರುಗಿಸುವುದು",
  "personality.q2.o4": "ಪ್ರೇರಣೆ",

  // Q3
  "personality.q3": "ನಿಮ್ಮ ಭಾವನೆಗಳ ಬಗ್ಗೆ ಮಾತನಾಡಲು ನೀವು ಎಷ್ಟು ಆರಾಮವಾಗಿದ್ದೀರಿ?",
  "personality.q3.o1": "ತುಂಬಾ ಆರಾಮವಾಗಿದ್ದೇನೆ",
  "personality.q3.o2": "ಸ್ವಲ್ಪ ಆರಾಮವಾಗಿದ್ದೇನೆ",
  "personality.q3.o3": "ಅಷ್ಟಾಗಿ ಆರಾಮವಾಗಿಲ್ಲ",
  "personality.q3.o4": "ನನಗೆ ಇದು ಕಷ್ಟವಾಗಿದೆ",

  // Q4
  "personality.q4": "ನೀವು ಸಾಮಾನ್ಯವಾಗಿ ಒತ್ತಡವನ್ನು ಹೇಗೆ ನಿಭಾಯಿಸುತ್ತೀರಿ?",
  "personality.q4.o1": "ಯಾರಾದರೂ ಜೊತೆ ಮಾತನಾಡುತ್ತೇನೆ",
  "personality.q4.o2": "ನನ್ನಲ್ಲೇ ಇಟ್ಟುಕೊಳ್ಳುತ್ತೇನೆ",
  "personality.q4.o3": "ವ್ಯಾಯಾಮ ಮಾಡುತ್ತೇನೆ ಅಥವಾ ಬ್ಯುಸಿಯಾಗಿರುತ್ತೇನೆ",
  "personality.q4.o4": "ನಾನು ಸರಿಯಾಗಿ ನಿಭಾಯಿಸಲಾರೆ",

  // Q5
  "personality.q5": "ನಿಮ್ಮ ಪ್ರಸ್ತುತ ಪರಿಸ್ಥಿತಿಯನ್ನು ಯಾವುದು ಉತ್ತಮವಾಗಿ ವರ್ಣಿಸುತ್ತದೆ?",
  "personality.q5.o1": "ಚಿಂತೆಗೊಳಗಾಗಿದ್ದೇನೆ",
  "personality.q5.o2": "ದುಃಖವಾಗುತ್ತಿದೆ",
  "personality.q5.o3": "ಒತ್ತಡದಲ್ಲಿದ್ದೇನೆ",
  "personality.q5.o4": "ಅಪ್ ಅನ್ನು ಅನ್ವೇಷಿಸುತ್ತಿದ್ದೇನೆ",

  // Q6
  "personality.q6": "MindfulSpace ನಿಂದ ನೀವು ಯಾವ ರೀತಿಯ ಬೆಂಬಲವನ್ನು ಇಷ್ಟಪಡುತ್ತೀರಿ?",
  "personality.q6.o1": "ಮೃದುವಾದ ಮತ್ತು ಸಹಾನುಭೂತಿಯುತ",
  "personality.q6.o2": "ಪ್ರೇರಣಾದಾಯಕ ಮತ್ತು ಶಕ್ತಿಯುತ",
  "personality.q6.o3": "ಶಾಂತ ಮತ್ತು ಪ್ರಾಯೋಗಿಕ",
  "personality.q6.o4": "ಯಾವುದೇ ಆದ್ಯತೆ ಇಲ್ಲ",

  // ─── Chat Page ─────────────────────────────────────────────────────
  "chat.title": "MindfulSpace ಚಾಟ್",
  "chat.subtitle": "ನಿಮ್ಮ ಸುರಕ್ಷಿತ ವೆಲ್‌ನೆಸ್ ಸ್ಥಳ.",
  "chat.newChat": "ಹೊಸ ಚಾಟ್ +",
  "chat.today": "ಇಂದು",
  "chat.yesterday": "ನಿನ್ನೆ",
  "chat.last7": "ಕಳೆದ 7 ದಿನಗಳು",
  "chat.thisMonth": "ಈ ತಿಂಗಳು",
  "chat.older": "ಹಳೆಯವು",
  "chat.placeholder": "ನೀವು ಹೇಗೆ ಅನುಭವಿಸುತ್ತಿದ್ದೀರಿ…",
  "chat.listening": "ಕೆಳುತ್ತಿದೆ",
  "chat.welcome": "ನಮಸ್ಕಾರ 👋 ನಾನು **MindfulSpace**",
  "chat.errorMsg":"ಕ್ಷಮಿಸಿ, ಉತ್ತರಿಸಲು ನನಗೆ ಕಷ್ಟವಾಗಿದೆ. ದಯವಿಟ್ಟು ಒಂದು ಕ್ಷಣದ ನಂತರ ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.",
  "chat.errorConfig": "AI ತಲುಪಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ. .env ಫೈಲ್‌ನಲ್ಲಿ VITE_GEMINI_API_KEY ಹೊಂದಿಸಿ, dev ಸರ್ವರ್ ಮರುಪ್ರಾರಂಭಿಸಿ, ಮತ್ತು ಪ್ರೊಡಕ್ಶನ್‌ಗೆ ಮರುನಿರ್ಮಿಸಿ. aistudio.google.com/apikey ನಿಂದ ಕೀ ಪಡೆಯಿರಿ.",
  "chat.errorKeyInvalid": "Gemini API ಕೀ ತಿರಸ್ಕೃತವಾಯಿತು. AI Studio ಯಲ್ಲ ಹೊಸ ಕೀ ರಚಿಸಿ, .env ನಲ್ಲಿ ನವೀಕರಿಸಿ.",
  "chat.errorNetwork": "Google ಸೇವರಿಗೆ ಸಂಪರ್ಕ ಸಾಧ್ಯವಾಗಲಿಲ್ಲ. ಅಂತರ್ಜಾಲ ಅಥವಾ VPN ಪರಿಶೀಲಿಸಿ.",
  "chat.errorQuota": "AI ದರ ಮಿತಿ ಮೀರಲಾಗಿದೆ. ಕೆಲವು ನಿಮಿಷ ಕಾಯುವ ಅಥವಾ ಕೋಟಾ ಪರಿಶೀಲಿಸಿ.",

  // ─── Dashboard Page ─────────────────────────────────────────────────
  "dash.title": "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
  "dash.sub": "ನಿಮ್ಮ ಮಾನಸಿಕ ಆರೋಗ್ಯ ಸ್ಥಿತಿಯನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ ಮತ್ತು ಪರಿಶೀಲಿಸಿ.",
  "dash.insights": "AI ಒಳನೋಟಗಳನ್ನು ರಚಿಸಿ",
  "dash.avgMood": "ಸರಾಸರಿ ಮೂಡ್ (14 ದಿನಗಳು)",
  "dash.overall": "ಒಟ್ಟು",
  "dash.depression": "ಅವಸಾದ",
  "dash.anxiety": "ಆತಂಕ",
  "dash.notTaken": "ಇನ್ನೂ ತೆಗೆದುಕೊಳ್ಳಲಾಗಿಲ್ಲ",
  "dash.moodTrend": "ಮೂಡ್ ಟ್ರೆಂಡ್",
  "dash.moodTrendSub": "ಕಳೆದ 14 ದಿನಗಳ ದೈನಂದಿನ ಮೂಡ್ ಅಂಕಗಳು",
  "dash.noLogs": "ಇನ್ನೂ ಮೂಡ್ ದಾಖಲೆಗಳಿಲ್ಲ. ಟ್ರೆಂಡ್ ನೋಡಲು ಕೆಳಗೆ ದಾಖಲಿಸಿ.",
  "dash.logMood": "ಇಂದಿನ ಮೂಡ್ ದಾಖಲಿಸಿ",
  "dash.logMoodSub": "ನೀವು ಈಗ ಹೇಗೆ ಅನುಭವಿಸುತ್ತಿದ್ದೀರಿ?",
  "dash.low": "ಕಡಿಮೆ",
  "dash.high": "ಹೆಚ್ಚು",
  "dash.notePlaceholder": "ನಿಮ್ಮ ದಿನದ ಬಗ್ಗೆ ಐಚ್ಛಿಕ ಟಿಪ್ಪಣಿ ಸೇರಿಸಿ...",
  "dash.saveEntry": "ದಾಖಲೆಯನ್ನು ಉಳಿಸಿ",
  "dash.saving": "ಉಳಿಸಲಾಗುತ್ತಿದೆ...",
  "dash.phq9History": "PHQ-9 ಇತಿಹಾಸ",
  "dash.gad7History": "GAD-7 ಇತಿಹಾಸ",

  // ─── Assessment Page ─────────────────────────────────────────────────
  "assess.title": "ಮೌಲ್ಯಮಾಪನಗಳು",
  "assess.sub": "ನಿಮ್ಮ ಸ್ಥಿತಿಯನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ವೈಜ್ಞಾನಿಕವಾಗಿ ಪರಿಶೀಲಿಸಲಾದ ಪರೀಕ್ಷೆಗಳು. ಈ ಪರೀಕ್ಷೆಗಳು ಕೆಲವೇ ನಿಮಿಷಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳುತ್ತವೆ.",
  "assess.note": "ಗಮನಿಸಿ:",
  "assess.noteText": "ಈ ಪರೀಕ್ಷೆಗಳು ಕೇವಲ ಪರಿಶೀಲನೆಗಾಗಿ ಮಾತ್ರ ಮತ್ತು ವೈದ್ಯಕೀಯ ನಿರ್ಣಯವಲ್ಲ. ದಯವಿಟ್ಟು ವೈದ್ಯರನ್ನು ಸಂಪರ್ಕಿಸಿ.",
  "assess.phq9.sub": "ಅವಸಾದ ಪರೀಕ್ಷೆ",
  "assess.phq9.desc": "ಕಳೆದ 2 ವಾರಗಳ ಬಗ್ಗೆ 9 ಪ್ರಶ್ನೆಗಳು. ~2 ನಿಮಿಷಗಳು.",
  "assess.gad7.sub": "ಆತಂಕ ಪರೀಕ್ಷೆ",
  "assess.gad7.desc": "ಕಳೆದ 2 ವಾರಗಳ ಬಗ್ಗೆ 7 ಪ್ರಶ್ನೆಗಳು. ~1 ನಿಮಿಷ.",
  "assess.over2weeks": "ಕಳೆದ 2 ವಾರಗಳಲ್ಲಿ, ನೀವು ಎಷ್ಟು ಬಾರಿ ಇದರಿಂದ ಕಂಗೆಟ್ಟಿದ್ದೀರಿ:",
  "assess.opt.never": "ಎಲ್ಲಾ ಇಲ್ಲ",
  "assess.opt.several": "ಕೆಲವು ದಿನಗಳು",
  "assess.opt.half": "ಅರ್ಧಕ್ಕಿಂತ ಹೆಚ್ಚು ದಿನಗಳು",
  "assess.opt.nearly": "ಬಹುತೇಕ ಪ್ರತಿದಿನ",
  "assess.crisis": "ನೀವು ನಿಮ್ಮನ್ನು ಹಾನಿ ಮಾಡಿಕೊಳ್ಳುವ ಆಲೋಚನೆಗಳಿದ್ದರೆ, ತಕ್ಷಣ iCall (9152987821) ಸಂಪರ್ಕಿಸಿ.",
  "assess.cancel": "ರದ್ದುಮಾಡಿ",
  "assess.submit": "ಮೌಲ್ಯಮಾಪನ ಸಲ್ಲಿಸಿ",
  "assess.takeAnother": "ಮತ್ತೊಂದು ಪರೀಕ್ಷೆ ತೆಗೆದುಕೊಳ್ಳಿ",
  "assess.analysis": "MindfulSpace ವಿಶ್ಲೇಷಣೆ",
  "assess.strategies": "ಶಿಫಾರಸು ಮಾಡಿದ ವಿಧಾನಗಳು",
  "assess.reachOut": "⚠️ ದಯವಿಟ್ಟು ಸಹಾಯಕ್ಕಾಗಿ ಸಂಪರ್ಕಿಸಿ",
  "assess.selfHarm": "ನಿಮ್ಮ ಉತ್ತರವು ಸ್ವಯಂ ಹಾನಿ ಆಲೋಚನೆಗಳನ್ನು ಸೂಚಿಸುತ್ತದೆ. ಸಹಾಯ ಲಭ್ಯವಿದೆ.",
  "assess.unanswered": "ದಯವಿಟ್ಟು ಎಲ್ಲಾ ಪ್ರಶ್ನೆಗಳಿಗೆ ಉತ್ತರಿಸಿ.",

  // ─── Fallback Coping Tips ────────────────────────────────────────────
"assess.fallback.tip1": "ನೀವು ತುಂಬಾ ಒತ್ತಡವಾಗಿರುವಂತೆ ಅನುಭವಿಸಿದಾಗ 5 ನಿಮಿಷಗಳ ಕಾಲ ನಿಧಾನವಾಗಿ ಆಳವಾದ ಉಸಿರಾಟ ಮಾಡಿ",
"assess.fallback.tip2": "ಪ್ಯಾಟರ್ನ್‌ಗಳನ್ನು ಬೇಗ ಗುರುತಿಸಲು ಒಂದು ಚಿಕ್ಕ ದೈನಂದಿನ ಮೂಡ್ ಡೈರಿಯನ್ನು ಇಟ್ಟುಕೊಳ್ಳಿ",
"assess.fallback.tip3": "ಈ ವಾರ ನಿಮ್ಮ ವಿಶ್ವಾಸಾರ್ಹ ಸ್ನೇಹಿತನೊಂದಿಗೆ ನಿಮ್ಮ ಭಾವನೆಗಳನ್ನು ಹಂಚಿಕೊಳ್ಳಿ",
"assess.fallback.tip4": "ಒಬ್ಬ ಸಲಹೆಗಾರ ಅಥವಾ ವೈದ್ಯರೊಂದಿಗೆ ಮಾತನಾಡುವುದನ್ನು ಪರಿಗಣಿಸಿ",    
"assess.fallback.interpretation": "ಈ ಮೌಲ್ಯಮಾಪನವನ್ನು ಪೂರ್ಣಗೊಳಿಸಿದಕ್ಕಾಗಿ ಧನ್ಯವಾದಗಳು. ಈ ಫಲಿತಾಂಶಗಳು ಮಾನಸಿಕ ಆರೋಗ್ಯ ತಜ್ಞರೊಂದಿಗೆ ಮಾತುಕತೆಗೆ ಒಳ್ಳೆಯ ಪ್ರಾರಂಭವಾಗಬಹುದು।",

// PHQ-9 questions
"assess.phq9.q1": "ಕಾರ್ಯಗಳಲ್ಲಿ ಆಸಕ್ತಿ ಅಥವಾ ಆನಂದ ಕಡಿಮೆಯಾಗಿದೆಯೇ?",
"assess.phq9.q2": "ದುಃಖ, ನಿರಾಶೆ ಅಥವಾ ನಿರಾಶಾವಾದಿ ಭಾವನೆ ಅನುಭವಿಸುತ್ತಿದ್ದೀರಾ?",
"assess.phq9.q3": "ನಿದ್ರೆ ಬರದಿರುವುದು ಅಥವಾ ಹೆಚ್ಚು ನಿದ್ರೆ ಮಾಡುವುದು?",
"assess.phq9.q4": "ದಣಿವು ಅಥವಾ ಶಕ್ತಿಯ ಕೊರತೆ ಅನುಭವಿಸುತ್ತಿದ್ದೀರಾ?",
"assess.phq9.q5": "ಭಕ್ಷಣಾ ಆಸಕ್ತಿ ಕಡಿಮೆಯಾಗಿದೆಯೇ ಅಥವಾ ಹೆಚ್ಚು ತಿನ್ನುತ್ತಿದ್ದೀರಾ?",
"assess.phq9.q6": "ನಿಮ್ಮ ಬಗ್ಗೆ ಕೆಟ್ಟದಾಗಿ ಭಾಸವಾಗುತ್ತಿದೆಯೇ ಅಥವಾ ನೀವು ವಿಫಲರಾಗಿದ್ದೀರಿ ಎಂದು ಭಾಸವಾಗುತ್ತಿದೆಯೇ?",
"assess.phq9.q7": "ಒಂದು ವಿಷಯದ ಮೇಲೆ ಗಮನ ಕೇಂದ್ರೀಕರಿಸಲು ಕಷ್ಟವಾಗುತ್ತಿದೆಯೇ?",
"assess.phq9.q8": "ನೀವು ನಿಧಾನವಾಗಿ ಚಲಿಸುವುದು/ಮಾತನಾಡುವುದು ಇತರರಿಗೆ ಗಮನಕ್ಕೆ ಬಂದಿದೆಯೇ ಅಥವಾ ಅಶಾಂತತೆ ಅನುಭವಿಸುತ್ತಿದ್ದೀರಾ?",
"assess.phq9.q9": "ಸಾಯುವುದು ಉತ್ತಮ ಎಂದು ಅಥವಾ ನಿಮ್ಮನ್ನು ನೀವು ಹಾನಿ ಮಾಡಿಕೊಳ್ಳುವ ಆಲೋಚನೆಗಳಿವೆಯೇ?",

// GAD-7 questions
"assess.gad7.q1": "ನರ್ವಸ್, ಆತಂಕ ಅಥವಾ ಅಶಾಂತಿ ಅನುಭವಿಸುತ್ತಿದ್ದೀರಾ?",
"assess.gad7.q2": "ಚಿಂತೆ ನಿಯಂತ್ರಿಸಲು ಕಷ್ಟವಾಗುತ್ತಿದೆಯೇ?",
"assess.gad7.q3": "ವಿವಿಧ ವಿಷಯಗಳ ಬಗ್ಗೆ ಅತಿಯಾಗಿ ಚಿಂತಿಸುತ್ತಿದ್ದೀರಾ?",
"assess.gad7.q4": "ವಿಶ್ರಾಂತಿ ಪಡೆಯಲು ಕಷ್ಟವಾಗುತ್ತಿದೆಯೇ?",
"assess.gad7.q5": "ನಿಶ್ಚಲವಾಗಿ ಕುಳಿತುಕೊಳ್ಳಲು ಕಷ್ಟವಾಗುವಷ್ಟು ಅಶಾಂತವಾಗಿದ್ದೀರಾ?",
"assess.gad7.q6": "ಸುಲಭವಾಗಿ ಕೋಪ ಅಥವಾ ಚಡಪಡಿಕೆ ಬರುತ್ತಿದೆಯೇ?",
"assess.gad7.q7": "ಯಾವುದೋ ಕೆಟ್ಟದ್ದು ಸಂಭವಿಸಬಹುದು ಎಂಬ ಭಯವಿದೆಯೇ?",

// ─── Severity Labels ──────────────────────────────────────────────────
"sev.Minimal": "ಕನಿಷ್ಠ",
"sev.Mild": "ಸ್ವಲ್ಪ",
"sev.Moderate": "ಮಧ್ಯಮ",
"sev.ModeratelySevere": "ಮಧ್ಯಮ ಗಂಭೀರ",
"sev.Severe": "ಗಂಭೀರ",
"sev.MinimalAnxiety": "ಕನಿಷ್ಠ ಆತಂಕ",
"sev.MildAnxiety": "ಸ್ವಲ್ಪ ಆತಂಕ",
"sev.ModerateAnxiety": "ಮಧ್ಯಮ ಆತಂಕ",
"sev.SevereAnxiety": "ಗಂಭೀರ ಆತಂಕ",

  // ─── Crisis Modal ────────────────────────────────────────────────────
  "crisis.title": "ನಾವು ನಿಮ್ಮ ಜೊತೆ ಇದ್ದೇವೆ",
  "crisis.sub1": "ನೀವು ಕಷ್ಟದಲ್ಲಿದ್ದೀರಿ.",
  "crisis.sub2": "ನೀವು ಒಬ್ಬರಲ್ಲ.",
  "crisis.sub3": "ದಯವಿಟ್ಟು ಸಹಾಯ ಪಡೆಯಿರಿ.",
  "crisis.continue": "ಮುಂದುವರಿಸಿ",

  // ─── Crisis Helplines ─────────────────────────────────────────────
"crisis.helplines.title": "ಸಂಕಟ ಸಹಾಯವಾಣಿಗಳು (ಭಾರತ)",
"crisis.helplines.kiran": "📞 ಕಿರಣ್ (24/7): 1800-599-0019",
"crisis.helplines.icall": "📞 iCALL (TISS - ಕಾರ್ಯ ಸಮಯ): 9152987821",
"crisis.helplines.vandrevala": "📞 ವಂದ್ರೇವಾಲಾ (24/7): 1860-2662-345",
"crisis.helplines.aasra": "📞 AASRA (24/7): 9820466627",
"crisis.helplines.note": "*ಲಭ್ಯತೆ ಬದಲಾಗಬಹುದು. ತುರ್ತು ಪರಿಸ್ಥಿತಿಯಲ್ಲಿ ಸ್ಥಳೀಯ ಸೇವೆಗಳನ್ನು ಸಂಪರ್ಕಿಸಿ.",


},
};


export default translations;
