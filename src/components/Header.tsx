import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Heart, User, Menu, X, Globe } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage, languages } from "@/contexts/LanguageContext";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentLanguage, setLanguage, t } = useLanguage();
  const location = useLocation();

  const navItems = [
    { path: "/", label: t("home"), icon: Heart },
    { path: "/dashboard", label: t("dashboard"), icon: User },
    { path: "/doctors", label: t("doctors"), icon: User },
    { path: "/medicines", label: t("medicines"), icon: Heart },
    { path: "/checkups", label: t("checkups"), icon: Heart },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-primary">
            <Heart className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold text-foreground">SwasthyaAI</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Button
              key={item.path}
              variant={location.pathname === item.path ? "default" : "ghost"}
              asChild
              size="sm"
            >
              <Link to={item.path} className="flex items-center space-x-2">
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </Link>
            </Button>
          ))}
        </nav>

        {/* Language Selector & Mobile Menu */}
        <div className="flex items-center space-x-2">
          <Select value={currentLanguage} onValueChange={setLanguage}>
            <SelectTrigger className="w-auto border-border bg-card">
              <Globe className="h-4 w-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {languages.map((lang) => (
                <SelectItem key={lang.code} value={lang.code}>
                  <span className="font-medium">{lang.nativeName}</span>
                  <span className="ml-2 text-muted-foreground">({lang.name})</span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <Card className="md:hidden m-4 p-4 shadow-medical">
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <Button
                key={item.path}
                variant={location.pathname === item.path ? "default" : "ghost"}
                asChild
                className="justify-start"
                onClick={() => setIsMenuOpen(false)}
              >
                <Link to={item.path} className="flex items-center space-x-2">
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              </Button>
            ))}
          </nav>
        </Card>
      )}
    </header>
  );
};