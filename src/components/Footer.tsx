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
  ExternalLink
} from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
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
    { label: "NPTEL Courses", href: "#courses" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" },
    { label: "Cookie Policy", href: "#cookies" },
    { label: "Accessibility", href: "#accessibility" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-muted/20 border-t border-border/60">
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
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-background border-border/60"
              />
              <Button className="bg-hero-gradient hover:opacity-90 transition-smooth shadow-soft">
                Subscribe
              </Button>
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

        {/* Government Attribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-8 border-t border-border/40"
        >
          <div className="bg-gradient-to-r from-orange-500/10 via-white/10 to-green-500/10 rounded-xl p-6 border border-border/40">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-3">
                <div className="w-6 h-6 bg-gradient-to-r from-orange-500 via-white to-green-500 rounded-full"></div>
                <span className="font-semibold text-foreground">Government of India Initiative</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                This platform is developed as part of the Prime Minister's Internship Scheme to empower 
                India's youth with AI-driven career opportunities and skill development.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
                <a href="#" className="hover:text-primary transition-smooth flex items-center">
                  Ministry of Skill Development
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
                <a href="#" className="hover:text-primary transition-smooth flex items-center">
                  Digital India
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
                <a href="#" className="hover:text-primary transition-smooth flex items-center">
                  Make in India
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

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