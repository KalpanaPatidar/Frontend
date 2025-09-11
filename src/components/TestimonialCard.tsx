import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

interface TestimonialCardProps {
  testimonial: {
    id: number;
    name: string;
    role: string;
    content: string;
    rating: number;
  };
  index: number;
}

export function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300 border border-border/60 group">
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-4">
            <Quote className="w-8 h-8 text-primary/20 flex-shrink-0" />
            <div className="flex items-center space-x-1 ml-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < testimonial.rating
                      ? "text-warning fill-current"
                      : "text-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
          </div>

          <blockquote className="text-foreground mb-6 leading-relaxed italic">
            "{testimonial.content}"
          </blockquote>

          <div className="flex items-center space-x-3">
            <Avatar className="w-12 h-12 bg-hero-gradient">
              <AvatarFallback className="text-white font-semibold">
                {testimonial.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
              <p className="text-sm text-muted-foreground">{testimonial.role}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}