import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { InternshipCard } from "./InternshipCard";
import { internships } from "@/lib/data";
import { ChevronLeft, ChevronRight, Briefcase, Filter } from "lucide-react";
import { motion } from "framer-motion";

export function InternshipDashboard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      scrollToIndex(currentIndex - 1);
    }
  };

  const scrollRight = () => {
    if (currentIndex < internships.length - 1) {
      setCurrentIndex(currentIndex + 1);
      scrollToIndex(currentIndex + 1);
    }
  };

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.children[0]?.clientWidth || 0;
      const gap = 24; // Gap between cards
      container.scrollTo({
        left: index * (cardWidth + gap),
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="internships" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Briefcase className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">AI-Powered Recommendations</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            Popular Internships
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our AI analyzes your profile and preferences to find the most suitable internship opportunities
          </p>
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-8"
        >
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" className="transition-smooth">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>

          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={scrollLeft}
              disabled={currentIndex === 0}
              className="transition-smooth"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <span className="text-sm text-muted-foreground px-3">
              {currentIndex + 1} / {internships.length}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={scrollRight}
              disabled={currentIndex === internships.length - 1}
              className="transition-smooth"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>

        {/* Internship Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div
            ref={scrollContainerRef}
            className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {internships.map((internship, index) => (
              <div
                key={internship.id}
                className="flex-none w-80"
                style={{ scrollSnapAlign: 'start' }}
              >
                <InternshipCard internship={internship} index={index} />
              </div>
            ))}
          </div>
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button size="lg" variant="outline" className="bg-background hover:bg-muted transition-smooth">
            View All Recommendations
          </Button>
        </motion.div>
      </div>
    </section>
  );
}