import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "./ThemeToggle";
import { AuthModal } from "./AuthModal";
import { InternshipRegisterModal } from "./InternshipRegisterModal";

import {
  Search,
  Menu,
  X,
  BrainCircuit,
  Home,
  Briefcase,
  BookOpen,
  MessageSquare,
  Users,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";


export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(true); // Signup opens first
  const [isInternshipOpen, setIsInternshipOpen] = useState(false);
  const [loggedUser, setLoggedUser] = useState<string | null>(null);
  const navigate = useNavigate();

  const navItems = [
    { label: "Home", href: "/", icon: Home },
    { label: "Internships", href: "#internships", icon: Briefcase },
    { label: "Courses", href: "#courses", icon: BookOpen },
    { label: "Testimonials", href: "#testimonials", icon: MessageSquare },
    { label: "Partners", href: "#partners", icon: Users },
  ];

  const handleLoginSuccess = (userId: string) => {
    setLoggedUser(userId);
    setIsAuthOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border/40 shadow-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 bg-hero-gradient rounded-xl shadow-glow">
              <BrainCircuit className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-display font-bold text-foreground">InternSetu</h1>
              <p className="text-xs text-muted-foreground font-medium">PM Internship Scheme</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-smooth relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Search & Actions */}
          <div className="flex items-center space-x-4">
            {/* Search Bar - Hidden on mobile */}
            <div className="hidden md:flex items-center relative">
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  navigate("/internships")
                }}
                className="hidden md:flex items-center relative"
              >
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search internships..."
                  className="pl-10 pr-4 w-64 bg-muted/30 border-border/60 focus:border-primary/60 transition-smooth"
                />
              </form>
            </div>
            <ThemeToggle />

            <div className="hidden sm:flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                className="transition-smooth hover:bg-accent/60"
                onClick={() => {
                  if (!loggedUser) setIsAuthOpen(true);
                  else alert("Already logged in");
                }}
              >
                Login
              </Button>
              <Button
                size="sm"
                className="bg-hero-gradient hover:opacity-90 transition-smooth shadow-soft"
                onClick={() => {
                  if (!loggedUser) alert("Please login first");
                  else setIsInternshipOpen(true);
                }}
              >
                Register
              </Button>
            </div>

            {/* Mobile Menu */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-background/95 backdrop-blur-md border-b border-border/40"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="mb-4 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search internships..."
                  className="pl-10 pr-4 bg-muted/30 border-border/60"
                />
              </div>

              <div className="space-y-2 mb-4">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-muted/50 transition-smooth text-sm font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </a>
                ))}
              </div>

              <div className="flex space-x-2 pt-2 border-t border-border/40">
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex-1"
                  onClick={() => {
                    if (!loggedUser) setIsAuthOpen(true);
                    else alert("Already logged in!");
                  }}
                >
                  Login
                </Button>
                <Button
                  size="sm"
                  className="flex-1 bg-hero-gradient hover:opacity-90 transition-smooth"
                  onClick={() => {
                    if (!loggedUser) alert("Please login first");
                    else setIsInternshipOpen(true);
                  }}
                >
                  Register
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modals */}
      <AuthModal open={isAuthOpen} onClose={() => setIsAuthOpen(false)} setLoggedUser={handleLoginSuccess} />
      <InternshipRegisterModal open={isInternshipOpen} onClose={() => setIsInternshipOpen(false)} userId={loggedUser} />
    </header>
  );
}
