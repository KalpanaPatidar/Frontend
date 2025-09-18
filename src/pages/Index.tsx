import { HeroSection } from "@/components/HeroSection";
import { InternshipDashboard } from "@/components/InternshipDashboard";
import { CoursesSection } from "@/components/CoursesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PartnersSection } from "@/components/PartnersSection";
import { UserChoicesSection } from "@/components/UserChoicesSection";
import PersonalizedSection from "@/components/PersonalizedSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <UserChoicesSection />
      <InternshipDashboard />
      <CoursesSection />
      <PersonalizedSection />
      <TestimonialsSection />
      <PartnersSection />
    </div>
  );
};

export default Index;
