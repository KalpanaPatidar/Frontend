import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Clock, Users, Star, Award } from "lucide-react";
import { motion } from "framer-motion";

interface CourseCardProps {
  course: {
    id: number;
    title: string;
    provider: string;
    duration: string;
    level: string;
    rating: number;
    students: string;
    category: string;
  };
  index: number;
}

export function CourseCard({ course, index }: CourseCardProps) {
  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'beginner':
        return 'bg-success/10 text-success';
      case 'intermediate':
        return 'bg-warning/10 text-warning';
      case 'advanced':
        return 'bg-destructive/10 text-destructive';
      default:
        return 'bg-muted/50 text-muted-foreground';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300 border border-border/60 group">
        <CardHeader className="pb-4">
          <div className="flex items-start justify-between mb-2">
            <Badge variant="secondary" className="bg-primary/10 text-primary text-xs">
              {course.category}
            </Badge>
            <Badge variant="outline" className={`text-xs ${getLevelColor(course.level)}`}>
              {course.level}
            </Badge>
          </div>
          
          <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-smooth line-clamp-2 mb-2 w-[90%]">
            {course.title}
          </h3>
          
          <p className="text-muted-foreground font-medium text-sm">
            {course.provider}
          </p>
        </CardHeader>

        <CardContent className="pb-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center text-muted-foreground">
                <Clock className="w-4 h-4 mr-2" />
                <span>{course.duration}</span>
              </div>
              
              <div className="flex items-center text-muted-foreground">
                <Users className="w-4 h-4 mr-2" />
                <span>{course.students}</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Star className="w-4 h-4 text-warning mr-1" fill="currentColor" />
                <span className="font-semibold text-sm text-foreground">{course.rating}</span>
              </div>
              
              <div className="flex items-center text-primary">
                <Award className="w-4 h-4 mr-1" />
                <span className="text-xs font-medium">Certificate</span>
              </div>
            </div>
          </div>
        </CardContent>

        <CardFooter className="pt-0">
          <Button className="w-full bg-hero-gradient hover:opacity-90 transition-smooth shadow-soft">
            Enroll Now
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
