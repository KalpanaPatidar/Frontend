import { CourseCard } from "./CourseCard";
import { courses } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { BookOpen, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useRef } from "react";

export function CoursesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      scrollToIndex(currentIndex - 1);
    }
  };

  const scrollRight = () => {
    if (currentIndex < courses.length - 1) {
      setCurrentIndex(currentIndex + 1);
      scrollToIndex(currentIndex + 1);
    }
  };

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.children[0]?.clientWidth || 0;
      const gap = 24;
      container.scrollTo({
        left: index * (cardWidth + gap),
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="courses" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <BookOpen className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">NPTEL Integration</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            Recommended Courses
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Upskill with curated courses from top institutions to enhance your internship prospects
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
            <span className="text-sm text-muted-foreground">
              Trending courses for you
            </span>
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
              {currentIndex + 1} / {courses.length}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={scrollRight}
              disabled={currentIndex === courses.length - 1}
              className="transition-smooth"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>

        {/* Course Cards */}
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
            {courses.map((course, index) => (
              <div
                key={course.id}
                className="flex-none w-80"
                style={{ scrollSnapAlign: 'start' }}
              >
                <CourseCard course={course} index={index} />
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
            Browse All Courses
          </Button>
        </motion.div>
      </div>
    </section>
  );
}