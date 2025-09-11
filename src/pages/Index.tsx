import { HeroSection } from "@/components/HeroSection";
import { InternshipDashboard } from "@/components/InternshipDashboard";
import { CoursesSection } from "@/components/CoursesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PartnersSection } from "@/components/PartnersSection";
import { UserChoicesSection } from "@/components/UserChoicesSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <UserChoicesSection />
      <InternshipDashboard />
      <CoursesSection />
      <TestimonialsSection />
      <PartnersSection />
    </div>
  );
};

export default Index;
