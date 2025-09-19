import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  BrainCircuit,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ExternalLink,
  HelpCircle
} from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  // Subscription handler
  const handleSubscribe = async () => {
    if (!email) return alert("Please enter your email");

    try {
      const res = await fetch("http://localhost:5000/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (res.ok) {
        setSubscribed(true);
      } else {
        alert(data.error);
      }
    } catch (err) {
      console.error(err);
      alert("Server error. Please try again.");
    }
  };

  const quickLinks = [
    { label: "About PM Scheme", href: "#about" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Success Stories", href: "#testimonials" },
    { label: "Partner Companies", href: "#partners" },
    { label: "Help Center", href: "#help" },
  ];

  const resources = [
    { label: "Career Guidance", href: "#guidance" },
    { label: "Skill Assessment", href: "#assessment" },
    { label: "Interview Prep", href: "#interview" },
    { label: "Resume Builder", href: "#resume" },
    { label: "NPTEL Courses", href: "https://onlinecourses.nptel.ac.in/", external: true },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" },
    { label: "Cookie Policy", href: "#cookies" },
    { label: "Accessibility", href: "#accessibility" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  ];

  return (
    <footer className="bg-muted/20 border-t border-border/60" id="footer">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-12 border-b border-border/40"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-display font-bold text-foreground mb-4">
              Stay Updated with New Opportunities
            </h3>
            <p className="text-muted-foreground mb-6">
              Get the latest internship recommendations and career guidance delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              {!subscribed ? (
                <>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 bg-background border-border/60"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Button
                    className="bg-hero-gradient hover:opacity-90 transition-smooth shadow-soft"
                    onClick={handleSubscribe}
                  >
                    Subscribe
                  </Button>
                </>
              ) : (
                <p className="text-green-500 font-semibold text-center w-full">
                  Subscribed! ✅
                </p>
              )}
            </div>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="flex items-center justify-center w-10 h-10 bg-hero-gradient rounded-xl shadow-glow">
                  <BrainCircuit className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-display font-bold text-foreground">
                    AI Career Navigator
                  </h2>
                  <p className="text-xs text-muted-foreground font-medium">
                    PM Internship Scheme
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Empowering India's youth through AI-driven internship recommendations 
                and skill development under the Prime Minister's Internship Scheme.
              </p>
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Mail className="w-4 h-4 mr-3 text-primary" />
                  <span>support@pmscheme.gov.in</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Phone className="w-4 h-4 mr-3 text-primary" />
                  <span>1800-XXX-XXXX (Toll Free)</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-3 text-primary" />
                  <span>New Delhi, India</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Resources</h3>
              <ul className="space-y-2">
                {resources.map((resource) => (
                  <li key={resource.label}>
                    <a
                      href={resource.href}
                      target={resource.external ? "_blank" : "_self"}
                      rel={resource.external ? "noopener noreferrer" : ""}
                      className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                    >
                      {resource.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal & Social */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Legal</h3>
              <ul className="space-y-2 mb-6">
                {legalLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Social Media */}
              <div>
                <h4 className="font-semibold text-foreground mb-3 text-sm">Follow Us</h4>
                <div className="flex space-x-2">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth group"
                      aria-label={social.label}
                    >
                      <social.icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border/40">
          <div className="flex flex-col sm:flex-row items-center justify-between text-sm text-muted-foreground">
            <p>© 2024 Government of India. All rights reserved.</p>
            <p className="mt-2 sm:mt-0">
              Powered by AI Technology • Built for India's Future
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
