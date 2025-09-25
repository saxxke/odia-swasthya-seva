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