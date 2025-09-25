import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HealthChatbot } from "@/components/HealthChatbot";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  Heart, 
  Stethoscope, 
  Pill, 
  Calendar, 
  Shield, 
  Globe, 
  Users, 
  Clock,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-health.jpg";

const Index = () => {
  const { t } = useLanguage();
  const features = [
    {
      icon: Globe,
      title: t("multilingualSupport"),
      description: t("multilingualDesc"),
      color: "text-secondary",
    },
    {
      icon: Stethoscope,
      title: t("expertConsultations"),
      description: t("expertConsultationsDesc"),
      color: "text-primary",
    },
    {
      icon: Pill,
      title: t("medicineDelivery"),
      description: t("medicineDeliveryDesc"),
      color: "text-accent",
    },
    {
      icon: Calendar,
      title: t("healthCheckups"),
      description: t("healthCheckupsDesc"),
      color: "text-secondary",
    },
  ];

  const stats = [
    { value: "10L+", label: t("usersServed") },
    { value: "5000+", label: t("availableDoctors") },
    { value: "8", label: t("supportedLanguages") },
    { value: "24/7", label: t("aiSupport") },
  ];

  const healthServices = [
    {
      title: "Personal Health Dashboard",
      description: "Track your health metrics, medications, and appointments in one place",
      link: "/dashboard",
      icon: Heart,
    },
    {
      title: "Doctor Consultations",
      description: "Connect with certified doctors for online or in-person consultations",
      link: "/doctors",
      icon: Stethoscope,
    },
    {
      title: "Medicine Ordering",
      description: "Order prescription and over-the-counter medicines with doorstep delivery",
      link: "/medicines",
      icon: Pill,
    },
    {
      title: "Health Checkups",
      description: "Book comprehensive health packages and diagnostic tests",
      link: "/checkups",
      icon: Calendar,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-hero">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  <Shield className="h-3 w-3 mr-1" />
                  Trusted Healthcare Platform
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                  {t("appName")}
                  <span className="block text-3xl lg:text-4xl text-white/90 mt-2">
                    {t("tagline")}
                  </span>
                </h1>
                <p className="text-xl text-white/90 leading-relaxed">
                  {t("heroTitle")}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  <Heart className="h-5 w-5 mr-2" />
                  {t("startHealthChat")}
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Users className="h-5 w-5 mr-2" />
                  {t("findDoctors")}
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl lg:text-3xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-white/80">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img 
                src={heroImage} 
                alt="AI-driven healthcare for Indian families" 
                className="rounded-2xl shadow-medical w-full h-auto"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Chatbot Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div>
                <Badge variant="outline" className="mb-4">
                  <Globe className="h-3 w-3 mr-1" />
                  Multilingual AI Assistant
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Chat with AI Health Assistant
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Get instant health guidance in your preferred language. Our AI assistant 
                  understands Hindi, Bengali, Odia, Kannada, Marathi, and more Indian languages.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Available 24/7 for:</h3>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    "Symptom analysis and health advice",
                    "Medicine information and dosage",
                    "Vaccination schedules and reminders",
                    "Mental health support and guidance",
                    "Nutrition and lifestyle recommendations",
                    "Emergency health protocols"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <HealthChatbot />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Comprehensive Healthcare Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Access quality healthcare services designed specifically for Indian families
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="health-card hover:shadow-medical transition-smooth">
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 mx-auto rounded-full gradient-primary flex items-center justify-center mb-4`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Your Health, Our Priority
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our comprehensive health services designed to keep you and your family healthy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {healthServices.map((service, index) => (
              <Card key={index} className="health-card hover:shadow-medical transition-smooth group">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 gradient-secondary rounded-lg flex items-center justify-center">
                        <service.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl group-hover:text-primary transition-smooth">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="mt-2">
                          {service.description}
                        </CardDescription>
                      </div>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                    <Link to={service.link}>
                      Explore Now
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Ready to Transform Your Healthcare Experience?
            </h2>
            <p className="text-xl text-white/90">
              Join millions of Indians who trust SwasthyaAI for their health needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                <Clock className="h-5 w-5 mr-2" />
                Get Started Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Heart className="h-5 w-5 mr-2" />
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;