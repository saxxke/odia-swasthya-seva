import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Language {
  code: string;
  name: string;
  nativeName: string;
}

export const languages: Language[] = [
  { code: "en", name: "English", nativeName: "English" },
  { code: "od", name: "Odia", nativeName: "ଓଡ଼ିଆ" },
  { code: "hi", name: "Hindi", nativeName: "हिंदी" },
  { code: "bn", name: "Bengali", nativeName: "বাংলা" },
  { code: "kn", name: "Kannada", nativeName: "ಕನ್ನಡ" },
  { code: "mr", name: "Marathi", nativeName: "मराठी" },
  { code: "te", name: "Telugu", nativeName: "తెలుగు" },
  { code: "ta", name: "Tamil", nativeName: "তমিழ" },
];

interface LanguageContextType {
  currentLanguage: string;
  setLanguage: (language: string) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

const translations: Translations = {
  en: {
    // Header
    home: "Home",
    dashboard: "Dashboard",
    doctors: "Doctors",
    medicines: "Medicines",
    checkups: "Checkups",
    
    // Hero Section
    appName: "ODIA SWASTHYA SEVA",
    tagline: "Your Health Assistant",
    heroTitle: "AI-powered multilingual health assistant for personalized healthcare guidance, doctor consultations, and medicine delivery across India.",
    startHealthChat: "Start Health Chat",
    findDoctors: "Find Doctors",
    usersServed: "Users Served",
    availableDoctors: "Doctors",
    supportedLanguages: "Languages",
    aiSupport: "AI Support",
    
    // Chatbot
    chatbotWelcome: "Hello! I'm your health assistant. I can help you with your health-related concerns. You can chat with me in Hindi, Bengali, Odia, Kannada, Marathi, or English.",
    chatPlaceholder: "Type your health concerns here...",
    voiceRecordingStarted: "Voice recording started...",
    voiceRecordingCompleted: "Voice recording completed!",
    
    // Features
    multilingualSupport: "Multilingual Support",
    multilingualDesc: "Chat in Hindi, Bengali, Odia, Kannada, Marathi, and more Indian languages",
    expertConsultations: "Expert Consultations",
    expertConsultationsDesc: "Book appointments with qualified doctors online or offline",
    medicineDelivery: "Medicine Delivery",
    medicineDeliveryDesc: "Order authentic medicines with home delivery across India",
    healthCheckups: "Health Checkups",
    healthCheckupsDesc: "Schedule comprehensive health tests and screenings",
  },
  
  hi: {
    // Header
    home: "होम",
    dashboard: "डैशबोर्ड",
    doctors: "डॉक्टर",
    medicines: "दवाएं",
    checkups: "जांच",
    
    // Hero Section
    appName: "ଓଡିଆ ସ୍ୱାସ୍ଥ୍ୟ ସେବା",
    tagline: "आपका स्वास्थ्य सहायक",
    heroTitle: "व्यक्तिगत स्वास्थ्य मार्गदर्शन, डॉक्टर परामर्श और भारत भर में दवा वितरण के लिए AI-संचालित बहुभाषी स्वास्थ्य सहायक।",
    startHealthChat: "स्वास्थ्य चैट शुरू करें",
    findDoctors: "डॉक्टर खोजें",
    usersServed: "उपयोगकर्ता सेवित",
    availableDoctors: "डॉक्टर",
    supportedLanguages: "भाषाएं",
    aiSupport: "AI सहायता",
    
    // Chatbot
    chatbotWelcome: "नमस्ते! मैं आपका स्वास्थ्य सहायक हूँ। मैं आपकी स्वास्थ्य संबंधी समस्याओं में मदद कर सकता हूँ। आप मुझसे हिंदी, बंगाली, ओड़िआ, कन्नड़, मराठी या अंग्रेजी में बात कर सकते हैं।",
    chatPlaceholder: "अपनी स्वास्थ्य संबंधी समस्या यहाँ लिखें...",
    voiceRecordingStarted: "वॉयस रिकॉर्डिंग शुरू हो गई है...",
    voiceRecordingCompleted: "वॉयस रिकॉर्डिंग पूरी हो गई!",
    
    // Features
    multilingualSupport: "बहुभाषी समर्थन",
    multilingualDesc: "हिंदी, बंगाली, ओड़िया, कन्नड़, मराठी और अन्य भारतीय भाषाओं में चैट करें",
    expertConsultations: "विशेषज्ञ परामर्श",
    expertConsultationsDesc: "योग्य डॉक्टरों के साथ ऑनलाइन या ऑफलाइन अपॉइंटमेंट बुक करें",
    medicineDelivery: "दवा वितरण",
    medicineDeliveryDesc: "भारत भर में घर पहुंचाने के साथ प्रामाणिक दवाएं ऑर्डर करें",
    healthCheckups: "स्वास्थ्य जांच",
    healthCheckupsDesc: "व्यापक स्वास्थ्य परीक्षण और स्क्रीनिंग शेड्यूल करें",
  },
  
  bn: {
    // Header
    home: "হোম",
    dashboard: "ড্যাশবোর্ড",
    doctors: "ডাক্তার",
    medicines: "ওষুধ",
    checkups: "চেকআপ",
    
    // Hero Section
    appName: "ଓଡିଆ ସ୍ୱାସ୍ଥ୍ୟ ସେବା",
    tagline: "আপনার স্বাস্থ্য সহায়ক",
    heroTitle: "ব্যক্তিগত স্বাস্থ্যসেবা নির্দেশনা, ডাক্তার পরামর্শ এবং ভারত জুড়ে ওষুধ সরবরাহের জন্য AI-চালিত বহুভাষিক স্বাস্থ্য সহায়ক।",
    startHealthChat: "স্বাস্থ্য চ্যাট শুরু করুন",
    findDoctors: "ডাক্তার খুঁজুন",
    usersServed: "ব্যবহারকারী সেবা",
    availableDoctors: "ডাক্তার",
    supportedLanguages: "ভাষা",
    aiSupport: "AI সহায়তা",
    
    // Chatbot
    chatbotWelcome: "হ্যালো! আমি আপনার স্বাস্থ্য সহায়ক। আমি আপনার স্বাস্থ্য সংক্রান্ত উদ্বেগে সাহায্য করতে পারি। আপনি হিন্দি, বাংলা, ওড়িয়া, কন্নড়, মারাঠি বা ইংরেজিতে আমার সাথে কথা বলতে পারেন।",
    chatPlaceholder: "এখানে আপনার স্বাস্থ্য উদ্বেগ টাইপ করুন...",
    voiceRecordingStarted: "ভয়েস রেকর্ডিং শুরু হয়েছে...",
    voiceRecordingCompleted: "ভয়েস রেকর্ডিং সম্পন্ন!",
    
    // Features
    multilingualSupport: "বহুভাষিক সহায়তা",
    multilingualDesc: "হিন্দি, বাংলা, ওড়িয়া, কন্নড়, মারাঠি এবং আরও ভারতীয় ভাষায় চ্যাট করুন",
    expertConsultations: "বিশেষজ্ঞ পরামর্শ",
    expertConsultationsDesc: "যোগ্য ডাক্তারদের সাথে অনলাইন বা অফলাইন অ্যাপয়েন্টমেন্ট বুক করুন",
    medicineDelivery: "ওষুধ সরবরাহ",
    medicineDeliveryDesc: "ভারত জুড়ে হোম ডেলিভারি সহ খাঁটি ওষুধ অর্ডার করুন",
    healthCheckups: "স্বাস্থ্য পরীক্ষা",
    healthCheckupsDesc: "ব্যাপক স্বাস্থ্য পরীক্ষা এবং স্ক্রীনিং শিডিউল করুন",
  },
  
  od: {
    // Header
    home: "ଘର",
    dashboard: "ଡ୍ୟାସବୋର୍ଡ",
    doctors: "ଡାକ୍ତର",
    medicines: "ଔଷଧ",
    checkups: "ପରୀକ୍ଷା",
    
    // Hero Section
    appName: "ଓଡିଆ ସ୍ୱାସ୍ଥ୍ୟ ସେବା",
    tagline: "ଆପଣଙ୍କ ସ୍ୱାସ୍ଥ୍ୟ ସହାୟକ",
    heroTitle: "ବ୍ୟକ୍ତିଗତ ସ୍ୱାସ୍ଥ୍ୟ ନିର୍ଦ୍ଦେଶନା, ଡାକ୍ତର ପରାମର୍ଶ ଏବଂ ଭାରତରେ ଔଷଧ ବିତରଣ ପାଇଁ AI-ଚାଳିତ ବହୁଭାଷୀ ସ୍ୱାସ୍ଥ୍ୟ ସହାୟକ।",
    startHealthChat: "ସ୍ୱାସ୍ଥ୍ୟ ଚାଟ୍ ଆରମ୍ଭ କରନ୍ତୁ",
    findDoctors: "ଡାକ୍ତର ଖୋଜନ୍ତୁ",
    usersServed: "ବ୍ୟବହାରକାରୀ ସେବା",
    availableDoctors: "ଡାକ୍ତର",
    supportedLanguages: "ଭାଷା",
    aiSupport: "AI ସହାୟତା",
    
    // Chatbot
    chatbotWelcome: "ନମସ୍କାର! ମୁଁ ଆପଣଙ୍କର ସ୍ୱାସ୍ଥ୍ୟ ସହାୟକ। ମୁଁ ଆପଣଙ୍କର ସ୍ୱାସ୍ଥ୍ୟ ସମ୍ବନ୍ଧୀୟ ସମସ୍ୟାରେ ସାହାଯ୍ୟ କରିପାରିବି। ଆପଣ ହିନ୍ଦୀ, ବାଂଲା, ଓଡିଆ, କନ୍ନଡ, ମରାଠୀ କିମ୍ବା ଇଂରାଜୀରେ ମୋ ସହ କଥା ହୋଇପାରିବେ।",
    chatPlaceholder: "ଏଠାରେ ଆପଣଙ୍କର ସ୍ୱାସ୍ଥ୍ୟ ସମସ୍ୟା ଲେଖନ୍ତୁ...",
    voiceRecordingStarted: "ଭଏସ୍ ରେକର୍ଡିଂ ଆରମ୍ଭ ହୋଇଛି...",
    voiceRecordingCompleted: "ଭଏସ୍ ରେକର୍ଡିଂ ସମ୍ପୂର୍ଣ୍ଣ!",
    
    // Features
    multilingualSupport: "ବହୁଭାଷୀ ସହାୟତା",
    multilingualDesc: "ହିନ୍ଦୀ, ବାଂଲା, ଓଡିଆ, କନ୍ନଡ, ମରାଠୀ ଏବଂ ଅଧିକ ଭାରତୀୟ ଭାଷାରେ ଚାଟ୍ କରନ୍ତୁ",
    expertConsultations: "ବିଶେଷଜ୍ଞ ପରାମର୍ଶ",
    expertConsultationsDesc: "ଯୋଗ୍ୟ ଡାକ୍ତରଙ୍କ ସହ ଅନଲାଇନ କିମ୍ବା ଅଫଲାଇନ ଆପଏଣ୍ଟମେଣ୍ଟ ବୁକ୍ କରନ୍ତୁ",
    medicineDelivery: "ଔଷଧ ବିତରଣ",
    medicineDeliveryDesc: "ଭାରତ ସାରା ଘର ବିତରଣ ସହ ପ୍ରାମାଣିକ ଔଷଧ ଅର୍ଡର କରନ୍ତୁ",
    healthCheckups: "ସ୍ୱାସ୍ଥ୍ୟ ପରୀକ୍ଷା",
    healthCheckupsDesc: "ବିସ୍ତୃତ ସ୍ୱାସ୍ଥ୍ୟ ପରୀକ୍ଷା ଏବଂ ସ୍କ୍ରିନିଂ ନିର୍ଧାରଣ କରନ୍ତୁ",
  },
  
  kn: {
    // Header
    home: "ಮನೆ",
    dashboard: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
    doctors: "ವೈದ್ಯರು",
    medicines: "ಔಷಧಿಗಳು",
    checkups: "ಪರೀಕ್ಷೆಗಳು",
    
    // Hero Section
    appName: "ଓଡିଆ ସ୍ୱାସ୍ଥ୍ୟ ସେବା",
    tagline: "ನಿಮ್ಮ ಆರೋಗ್ಯ ಸಹಾಯಕ",
    heroTitle: "ವೈಯಕ್ತಿಕ ಆರೋಗ್ಯ ಮಾರ್ಗದರ್ಶನ, ವೈದ್ಯರ ಸಲಹೆ ಮತ್ತು ಭಾರತದಾದ್ಯಂತ ಔಷಧ ವಿತರಣೆಗಾಗಿ AI-ಚಾಲಿತ ಬಹುಭಾಷಾ ಆರೋಗ್ಯ ಸಹಾಯಕ।",
    startHealthChat: "ಆರೋಗ್ಯ ಚಾಟ್ ಪ್ರಾರಂಭಿಸಿ",
    findDoctors: "ವೈದ್ಯರನ್ನು ಹುಡುಕಿ",
    usersServed: "ಬಳಕೆದಾರರ ಸೇವೆ",
    availableDoctors: "ವೈದ್ಯರು",
    supportedLanguages: "ಭಾಷೆಗಳು",
    aiSupport: "AI ಬೆಂಬಲ",
    
    // Chatbot
    chatbotWelcome: "ನಮಸ್ಕಾರ! ನಾನು ನಿಮ್ಮ ಆರೋಗ್ಯ ಸಹಾಯಕ. ನಾನು ನಿಮ್ಮ ಆರೋಗ್ಯ ಸಂಬಂಧಿತ ಸಮಸ್ಯೆಗಳಲ್ಲಿ ಸಹಾಯ ಮಾಡಬಲ್ಲೆ. ನೀವು ಹಿಂದಿ, ಬಂಗಾಳಿ, ಒಡಿಯಾ, ಕನ್ನಡ, ಮರಾಠಿ ಅಥವಾ ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ ನನ್ನೊಂದಿಗೆ ಮಾತನಾಡಬಹುದು।",
    chatPlaceholder: "ಇಲ್ಲಿ ನಿಮ್ಮ ಆರೋಗ್ಯ ಸಮಸ್ಯೆಗಳನ್ನು ಟೈಪ್ ಮಾಡಿ...",
    voiceRecordingStarted: "ಧ್ವನಿ ರೆಕಾರ್ಡಿಂಗ್ ಪ್ರಾರಂಭವಾಗಿದೆ...",
    voiceRecordingCompleted: "ಧ್ವನಿ ರೆಕಾರ್ಡಿಂಗ್ ಪೂರ್ಣಗೊಂಡಿದೆ!",
    
    // Features
    multilingualSupport: "ಬಹುಭಾಷಾ ಬೆಂಬಲ",
    multilingualDesc: "ಹಿಂದಿ, ಬಂಗಾಳಿ, ಒಡಿಯಾ, ಕನ್ನಡ, ಮರಾಠಿ ಮತ್ತು ಇತರ ಭಾರತೀಯ ಭಾಷೆಗಳಲ್ಲಿ ಚಾಟ್ ಮಾಡಿ",
    expertConsultations: "ತಜ್ಞರ ಸಲಹೆ",
    expertConsultationsDesc: "ಅರ್ಹ ವೈದ್ಯರೊಂದಿಗೆ ಆನ್‌ಲೈನ್ ಅಥವಾ ಆಫ್‌ಲೈನ್ ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಬುಕ್ ಮಾಡಿ",
    medicineDelivery: "ಔಷಧ ವಿತರಣೆ",
    medicineDeliveryDesc: "ಭಾರತದಾದ್ಯಂತ ಮನೆಗೆ ತಲುಪಿಸುವಿಕೆಯೊಂದಿಗೆ ಅಧಿಕೃತ ಔಷಧಿಗಳನ್ನು ಆರ್ಡರ್ ಮಾಡಿ",
    healthCheckups: "ಆರೋಗ್ಯ ಪರೀಕ್ಷೆಗಳು",
    healthCheckupsDesc: "ಸಮಗ್ರ ಆರೋಗ್ಯ ಪರೀಕ್ಷೆಗಳು ಮತ್ತು ಸ್ಕ್ರೀನಿಂಗ್ ವೇಳಾಪಟ್ಟಿ ಮಾಡಿ",
  },
  
  mr: {
    // Header
    home: "मुख्यपृष्ठ",
    dashboard: "डॅशबोर्ड",
    doctors: "डॉक्टर",
    medicines: "औषधे",
    checkups: "तपासणी",
    
    // Hero Section
    appName: "ଓଡିଆ ସ୍ୱାସ୍ଥ୍ୟ ସେବା",
    tagline: "तुमचा आरोग्य सहाय्यक",
    heroTitle: "वैयक्तिक आरोग्य मार्गदर्शन, डॉक्टर सल्लामसलत आणि भारतभरात औषध वितरणासाठी AI-चालित बहुभाषिक आरोग्य सहाय्यक।",
    startHealthChat: "आरोग्य चॅट सुरू करा",
    findDoctors: "डॉक्टर शोधा",
    usersServed: "वापरकर्ता सेवा",
    availableDoctors: "डॉक्टर",
    supportedLanguages: "भाषा",
    aiSupport: "AI सहाय्य",
    
    // Chatbot
    chatbotWelcome: "नमस्कार! मी तुमचा आरोग्य सहाय्यक आहे. मी तुमच्या आरोग्य संबंधित समस्यांमध्ये मदत करू शकतो. तुम्ही हिंदी, बंगाली, ओडिया, कन्नड, मराठी किंवा इंग्रजीमध्ये माझ्याशी बोलू शकता।",
    chatPlaceholder: "तुमच्या आरोग्य समस्या येथे टाइप करा...",
    voiceRecordingStarted: "आवाज रेकॉर्डिंग सुरू झाले...",
    voiceRecordingCompleted: "आवाज रेकॉर्डिंग पूर्ण!",
    
    // Features
    multilingualSupport: "बहुभाषिक समर्थन",
    multilingualDesc: "हिंदी, बंगाली, ओडिया, कन्नड, मराठी आणि इतर भारतीय भाषांमध्ये चॅट करा",
    expertConsultations: "तज्ञ सल्लामसलत",
    expertConsultationsDesc: "पात्र डॉक्टरांसोबत ऑनलाइन किंवा ऑफलाइन भेटीची वेळ घ्या",
    medicineDelivery: "औषध वितरण",
    medicineDeliveryDesc: "भारतभरात घरपोच वितरणासह अधिकृत औषधे ऑर्डर करा",
    healthCheckups: "आरोग्य तपासणी",
    healthCheckupsDesc: "सर्वसमावेशक आरोग्य चाचण्या आणि स्क्रीनिंगची वेळ ठरवा",
  },
  
  te: {
    // Header
    home: "హోమ్",
    dashboard: "డాష్‌బోర్డ్",
    doctors: "వైద్యులు",
    medicines: "మందులు",
    checkups: "పరీక్షలు",
    
    // Hero Section
    appName: "ଓଡିଆ ସ୍ୱାସ୍ଥ୍ୟ ସેବା",
    tagline: "మీ ఆరోగ్య సహాయకుడు",
    heroTitle: "వ్యక్తిగత ఆరోగ్య మార్గదర్శకత్వం, వైద్య సలహాలు మరియు భారతదేశం అంతటా మందుల పంపిణీ కోసం AI-ఆధారిత బహుభాషా ఆరోగ్య సహాయకుడు।",
    startHealthChat: "ఆరోగ్య చాట్ ప్రారంభించండి",
    findDoctors: "వైద్యులను కనుగొనండి",
    usersServed: "వినియోగదారుల సేవ",
    availableDoctors: "వైద్యులు",
    supportedLanguages: "భాషలు",
    aiSupport: "AI మద్దతు",
    
    // Chatbot
    chatbotWelcome: "నమస్కారం! నేను మీ ఆరోగ్య సహాయకుడిని. నేను మీ ఆరోగ్య సంబంధిత సమస్యలలో సహాయం చేయగలను. మీరు హిందీ, బెంగాలీ, ఒడియా, కన్నడ, మరాఠీ లేదా ఇంగ్లీష్‌లో నాతో మాట్లాడవచ్చు।",
    chatPlaceholder: "మీ ఆరోగ్య సమస్యలను ఇక్కడ టైప్ చేయండి...",
    voiceRecordingStarted: "వాయిస్ రికార్డింగ్ ప్రారంభమైంది...",
    voiceRecordingCompleted: "వాయిస్ రికార్డింగ్ పూర్తి!",
    
    // Features
    multilingualSupport: "బహుభాషా మద్దతు",
    multilingualDesc: "హిందీ, బెంగాలీ, ఒడియా, కన్నడ, మరాఠీ మరియు మరిన్ని భారతీయ భాషలలో చాట్ చేయండి",
    expertConsultations: "నిపుణుల సలహాలు",
    expertConsultationsDesc: "అర్హత కలిగిన వైద్యులతో ఆన్‌లైన్ లేదా ఆఫ్‌లైన్ అపాయిన్ట్‌మెంట్‌లు బుక్ చేయండి",
    medicineDelivery: "మందుల పంపిణీ",
    medicineDeliveryDesc: "భారతదేశం అంతటా హోమ్ డెలివరీతో ప్రామాణిక మందులను ఆర్డర్ చేయండి",
    healthCheckups: "ఆరోగ్య పరీక్షలు",
    healthCheckupsDesc: "సమగ్ర ఆరోగ్య పరీక్షలు మరియు స్క్రీనింగ్‌లను షెడ్యూల్ చేయండి",
  },
  
  ta: {
    // Header
    home: "முகப்பு",
    dashboard: "டாஷ்போர்டு",
    doctors: "மருத்துவர்கள்",
    medicines: "மருந்துகள்",
    checkups: "பரிசோதனைகள்",
    
    // Hero Section
    appName: "ଓଡିଆ ସ୍ୱାସ୍ଥ୍ୟ ସେବା",
    tagline: "உங்கள் சுகாதார உதவியாளர்",
    heroTitle: "தனிப்பட்ட சுகாதார வழிகாட்டுதல், மருத்துவர் ஆலோசனைகள் மற்றும் இந்தியா முழுவதும் மருந்து விநியோகத்திற்காக AI-இயக்கப்படும் பன்மொழி சுகாதார உதவியாளர்।",
    startHealthChat: "சுகாதார அரட்டையைத் துவக்கவும்",
    findDoctors: "மருத்துவர்களைக் கண்டறியவும்",
    usersServed: "பயனர் சேவை",
    availableDoctors: "மருத்துவர்கள்",
    supportedLanguages: "மொழிகள்",
    aiSupport: "AI ஆதரவு",
    
    // Chatbot
    chatbotWelcome: "வணக்கம்! நான் உங்கள் சுகாதார உதவியாளர். நான் உங்கள் சுகாதார தொடர்பான பிரச்சினைகளில் உதவ முடியும். நீங்கள் இந்தி, வங்காளி, ஒடியா, கன்னடம், மராத்தி அல்லது ஆங்கிலத்தில் என்னுடன் பேசலாம்।",
    chatPlaceholder: "உங்கள் சுகாதார கவலைகளை இங்கே தட்டச்சு செய்யவும்...",
    voiceRecordingStarted: "குரல் பதிவு தொடங்கியது...",
    voiceRecordingCompleted: "குரல் பதிவு நிறைவடைந்தது!",
    
    // Features
    multilingualSupport: "பன்மொழி ஆதரவு",
    multilingualDesc: "இந்தி, வங்காளி, ஒடியா, கன்னடம், மராத்தி மற்றும் பிற இந்திய மொழிகளில் அரட்டையடிக்கவும்",
    expertConsultations: "நிபுணர் ஆலோசனைகள்",
    expertConsultationsDesc: "தகுதிவாய்ந்த மருத்துவர்களுடன் ஆன்லைன் அல்லது ஆஃப்லைன் சந்திப்புகளை முன்பதிவு செய்யவும்",
    medicineDelivery: "மருந்து விநியோகம்",
    medicineDeliveryDesc: "இந்தியா முழுவதும் வீடு வரை விநியோகத்துடன் உண்மையான மருந்துகளை ஆர்டர் செய்யவும்",
    healthCheckups: "சுகாதார பரிசோதனைகள்",
    healthCheckupsDesc: "விரிவான சுகாதார சோதனைகள் மற்றும் ஸ்கிரீனிங்கை திட்டமிடவும்",
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<string>('en');

  const setLanguage = (language: string) => {
    setCurrentLanguage(language);
  };

  const t = (key: string): string => {
    return translations[currentLanguage]?.[key] || translations['en'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};