import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Send, 
  Mic, 
  MicOff, 
  Bot, 
  User, 
  Globe,
  Heart,
  MessageCircle,
  Loader2
} from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
  language?: string;
}

const healthTopics = [
  "Fever and common cold",
  "Diabetes management",
  "Blood pressure",
  "Vaccination schedule",
  "Mental health support",
  "Nutrition guidance",
  "Exercise recommendations",
  "Skin conditions",
];

export const HealthChatbot = () => {
  const { t } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: t("chatbotWelcome"),
      sender: "bot",
      timestamp: new Date(),
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    // Simulate AI response (replace with actual AI integration)
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateHealthResponse(inputMessage),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botResponse]);
      setIsLoading(false);
    }, 1500);
  };

  const generateHealthResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    // Fever and cold symptoms
    if (input.includes('fever') || input.includes('cold') || input.includes('cough') || input.includes('throat')) {
      return "For fever and cold symptoms: Rest well, drink warm water, consume vitamin C rich foods like oranges. If fever exceeds 101°F or persists for more than 3 days, please consult a doctor immediately.";
    }
    
    // Diabetes related
    if (input.includes('diabetes') || input.includes('sugar') || input.includes('blood sugar')) {
      return "For diabetes management: Monitor blood sugar regularly, follow a balanced diet with limited sugars, exercise daily for 30 minutes, take prescribed medications on time. Regular check-ups every 3 months are essential.";
    }
    
    // Blood pressure
    if (input.includes('pressure') || input.includes('bp') || input.includes('hypertension')) {
      return "For blood pressure management: Reduce salt intake, exercise regularly, maintain healthy weight, avoid smoking and excessive alcohol. Monitor BP daily and take medications as prescribed. Emergency: If BP >180/120, seek immediate medical help.";
    }
    
    // Vaccination
    if (input.includes('vaccine') || input.includes('vaccination') || input.includes('immunization')) {
      return "Vaccination is crucial for preventing diseases. Key vaccines for adults: COVID-19 (annual), Influenza (yearly), Hepatitis B, Tetanus booster (every 10 years). For children, follow the government's vaccination schedule strictly.";
    }
    
    // Mental health
    if (input.includes('mental') || input.includes('stress') || input.includes('anxiety') || input.includes('depression')) {
      return "For mental health: Practice daily meditation, maintain regular sleep schedule, stay connected with family/friends, exercise regularly. If experiencing persistent sadness, anxiety, or thoughts of self-harm, please contact a mental health professional immediately.";
    }
    
    // Nutrition
    if (input.includes('nutrition') || input.includes('diet') || input.includes('food') || input.includes('eating')) {
      return "For healthy nutrition: Eat balanced meals with vegetables, fruits, whole grains, and proteins. Drink 8-10 glasses of water daily. Avoid processed foods and excessive sugar. Include local foods like dal, rice, vegetables, and seasonal fruits in your diet.";
    }
    
    // Exercise
    if (input.includes('exercise') || input.includes('workout') || input.includes('physical')) {
      return "For regular exercise: Start with 30 minutes daily walking, gradually add yoga or light exercises. Avoid intense workouts if you have heart conditions. Always warm up before exercising and cool down afterward.";
    }
    
    // Skin conditions
    if (input.includes('skin') || input.includes('rash') || input.includes('itching')) {
      return "For skin conditions: Keep the affected area clean and dry, avoid scratching, use mild soaps, wear cotton clothing. For persistent rashes, itching, or unusual skin changes, consult a dermatologist.";
    }
    
    // Default responses for general queries
    const generalResponses = [
      "I understand your concern. For accurate diagnosis and treatment, please consult with a qualified doctor. In the meantime, maintain a healthy lifestyle with proper diet, exercise, and adequate rest.",
      "Your health is important. Based on your query, I recommend consulting a healthcare professional for proper guidance. You can book an appointment through our doctors section.",
      "For any persistent or serious symptoms, please visit the nearest healthcare facility immediately. For general health maintenance, follow a balanced diet, regular exercise, and adequate sleep.",
      "Thank you for your health query. While I can provide general guidance, it's always best to consult with a medical professional for personalized advice. Would you like me to help you find doctors in your area?",
    ];
    
    return generalResponses[Math.floor(Math.random() * generalResponses.length)];
  };

  const handleVoiceInput = () => {
    if (!isListening) {
      setIsListening(true);
      toast.info(t("voiceRecordingStarted"));
      // Simulate voice recording
      setTimeout(() => {
        setIsListening(false);
        toast.success(t("voiceRecordingCompleted"));
      }, 3000);
    } else {
      setIsListening(false);
    }
  };

  const handleTopicClick = (topic: string) => {
    setInputMessage(topic);
  };

  return (
    <Card className="flex flex-col h-[600px] health-card">
      <div className="flex items-center justify-between p-4 border-b border-border">
        <div className="flex items-center space-x-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full gradient-secondary">
            <Bot className="h-5 w-5 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-card-foreground">AI Health Assistant</h3>
            <p className="text-sm text-muted-foreground">Multilingual Health Support</p>
          </div>
        </div>
        <Badge variant="secondary" className="bg-secondary/20 text-secondary">
          Available 24/7
        </Badge>
      </div>

      {/* Quick Topics */}
      <div className="p-4 border-b border-border">
        <p className="text-sm text-muted-foreground mb-2">Quick topics:</p>
        <div className="flex flex-wrap gap-2">
          {healthTopics.slice(0, 4).map((topic, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              onClick={() => handleTopicClick(topic)}
              className="text-xs"
            >
              {topic}
            </Button>
          ))}
        </div>
      </div>

      {/* Messages */}
      <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  message.sender === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                <div className="flex items-start space-x-2">
                  {message.sender === "bot" && (
                    <Bot className="h-4 w-4 mt-0.5 text-secondary" />
                  )}
                  {message.sender === "user" && (
                    <User className="h-4 w-4 mt-0.5" />
                  )}
                  <div className="flex-1">
                    <p className="text-sm">{message.text}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-muted rounded-lg p-3">
                <div className="flex items-center space-x-2">
                  <Bot className="h-4 w-4 text-secondary" />
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span className="text-sm text-muted-foreground">Typing...</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>

      {/* Input */}
      <div className="p-4 border-t border-border">
        <div className="flex space-x-2">
          <Input
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder={t("chatPlaceholder")}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            className="flex-1"
          />
          <Button
            variant="outline"
            size="icon"
            onClick={handleVoiceInput}
            className={isListening ? "bg-secondary text-secondary-foreground" : ""}
          >
            {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
          </Button>
          <Button onClick={handleSendMessage} disabled={!inputMessage.trim() || isLoading}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
        <p className="text-xs text-muted-foreground mt-2 text-center">
          This is a demo. For medical emergencies, please contact healthcare professionals immediately.
        </p>
      </div>
    </Card>
  );
};