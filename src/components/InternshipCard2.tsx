import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, IndianRupee, Users } from "lucide-react";
import { motion } from "framer-motion";
import type { Internship } from "../hooks/useInternships";

interface InternshipCardProps {
  internship: Internship;
  index: number;
}

export function InternshipCard({ internship, index }: InternshipCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.3, 
        delay: index * 0.05,
        ease: "easeOut" 
      }}
      whileHover={{ y: -2 }}
      className="h-full"
    >
      <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/30 h-full">
        <CardContent className="p-6 flex flex-col h-full">
          <div className="space-y-4 flex-1">
            {/* Header */}
            <div>
              <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-1">
                {internship.title}
              </h3>
              <p className="text-muted-foreground font-medium">
                {internship.company}
              </p>
            </div>

            {/* Details */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>{internship.location}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="h-4 w-4 flex-shrink-0" />
                <span>{internship.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <IndianRupee className="h-4 w-4 flex-shrink-0" />
                <span className="font-medium text-primary">{internship.stipend}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users className="h-4 w-4 flex-shrink-0" />
                <span>{internship.applicants} applicants</span>
              </div>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {internship.skills.slice(0, 3).map((skill) => (
                <Badge key={skill} variant="secondary" className="text-xs hover:bg-primary/10 transition-colors">
                  {skill}
                </Badge>
              ))}
              {internship.skills.length > 3 && (
                <Badge variant="outline" className="text-xs hover:bg-muted/50 transition-colors">
                  +{internship.skills.length - 3} more
                </Badge>
              )}
            </div>
          </div>

          {/* Apply Button */}
          <Button className="w-full mt-4 group-hover:bg-primary/90 transition-colors">
            Apply Now
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}