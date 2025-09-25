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
    const responses = [
      "Based on your symptoms, I suggest you consult with a doctor. Meanwhile, get adequate rest and stay hydrated.",
      "For a healthy lifestyle, regular exercise, balanced diet, and adequate sleep are very important.",
      "If you're experiencing any serious symptoms, please visit the nearest hospital immediately.",
      "Regular health checkups are very important. Would you like to know more about our health checkup booking service?",
    ];
    return responses[Math.floor(Math.random() * responses.length)];
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