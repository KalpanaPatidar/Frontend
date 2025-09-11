import { userChoices } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { 
  BookOpen, 
  Compass, 
  Briefcase, 
  HelpCircle,
  ArrowRight 
} from "lucide-react";
import { motion } from "framer-motion";

const iconMap = {
  BookOpen,
  Compass,
  Briefcase,
  HelpCircle,
};

export function UserChoicesSection() {
  return (
    <section className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            What Would You Like To Do?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose your path and let our AI guide you to the perfect opportunities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {userChoices.map((choice, index) => {
            const IconComponent = iconMap[choice.icon as keyof typeof iconMap];
            
            return (
              <motion.div
                key={choice.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <Card className="h-full bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300 border border-border/60 group cursor-pointer">
                  <CardContent className="p-6 flex flex-col items-center text-center h-full">
                    <div className={`w-16 h-16 bg-hero-gradient rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-soft`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="font-display font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-smooth">
                      {choice.title}
                    </h3>
                    
                    <p className="text-sm font-medium text-muted-foreground mb-3">
                      {choice.subtitle}
                    </p>
                    
                    <p className="text-xs text-muted-foreground mb-6 flex-grow">
                      {choice.description}
                    </p>
                    
                    <div className="flex items-center text-primary text-sm font-semibold group-hover:translate-x-1 transition-transform duration-300">
                      <span>Get Started</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Additional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Still unsure? Take our quick assessment to find your perfect path
          </p>
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-3 cursor-pointer hover:bg-primary/20 transition-smooth">
            <HelpCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Start Career Assessment</span>
            <ArrowRight className="w-4 h-4 text-primary" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}