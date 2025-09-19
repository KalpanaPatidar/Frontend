import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { MapPin, Clock, DollarSign, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { Internship } from "./types";

interface InternshipCardProps {
  internship: Internship;
  index: number;
  onApply?: (internshipId: string | number) => void;
}

export function InternshipCard({ internship, index }: InternshipCardProps) {
  const getMatchColor = (match: number) => {
    if (match >= 90) return "text-success";
    if (match >= 80) return "text-warning";
    return "text-muted-foreground";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300 border border-border/60 group">
        <CardHeader className="pb-4">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-smooth line-clamp-2">
                {internship.title}
              </h3>
              <p className="text-muted-foreground font-medium mt-1">
                {internship.company}
              </p>
            </div>
            <div className="text-right ml-4">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse-soft" />
                <span className={`text-sm font-bold ${getMatchColor(internship.skillsMatch)}`}>
                  {internship.skillsMatch}% Match
                </span>
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent className="pb-4">
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {internship.description}
          </p>

          <div className="space-y-3">
            <div className="flex items-center text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
              <span>{internship.location}</span>
            </div>

            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="w-4 h-4 mr-2 flex-shrink-0" />
              <span>{internship.duration}</span>
            </div>

            <div className="flex items-center text-sm text-muted-foreground">
              <DollarSign className="w-4 h-4 mr-2 flex-shrink-0" />
              <span className="font-semibold text-foreground">{internship.stipend}</span>
            </div>

            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
              <span>Apply by {new Date(internship.deadline).toLocaleDateString()}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {internship.tags?.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </CardContent>

     <CardFooter className="pt-0">
  <Button
    className="w-full bg-hero-gradient hover:opacity-90 transition-smooth shadow-soft"
    onClick={() => window.open("https://pminternship.mca.gov.in/login/", "_blank")}
  >
    Apply Now
  </Button>
</CardFooter>

      </Card>
    </motion.div>
  );
}