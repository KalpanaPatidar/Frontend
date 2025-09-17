import { useState, useEffect } from "react";
import { SearchBar } from "../components/SearchBar";
import { RecommendationSection } from "../components/RecommendationSection";
import { useToast } from "@/hooks/use-toast";
import { Search, Brain, MapPin, Target, TrendingUp } from "lucide-react";

// Mock data - replace with actual API calls
const mockInternships = [
  {
    id: "1",
    title: "AI/ML Intern - Computer Vision",
    description: "Work on cutting-edge computer vision projects using PyTorch and OpenCV. Develop image recognition algorithms for real-world applications.",
    company: "TechVision AI",
    location: "Delhi, India",
    duration: "3 months",
    stipend: "₹25,000/month",
    mode: "Remote" as const,
    skills: ["Python", "PyTorch", "OpenCV", "Machine Learning"],
    popularity_score: 95
  },
  {
    id: "2",
    title: "Backend Developer Intern",
    description: "Build scalable backend services using Node.js and MongoDB. Work with microservices architecture and cloud deployments.",
    company: "StartupFlow",
    location: "Delhi, India",
    duration: "6 months",
    stipend: "₹20,000/month",
    mode: "Hybrid" as const,
    skills: ["Node.js", "MongoDB", "Express", "AWS"],
    popularity_score: 88
  },
  {
    id: "3",
    title: "Data Science Intern",
    description: "Analyze large datasets and build predictive models. Work with pandas, scikit-learn, and create data visualizations.",
    company: "DataInsights Corp",
    location: "Bangalore, India",
    duration: "4 months",
    stipend: "₹30,000/month",
    mode: "In-office" as const,
    skills: ["Python", "Pandas", "Scikit-learn", "SQL"],
    popularity_score: 92
  }
];

interface Internship {
  id: string;
  title: string;
  description: string;
  company: string;
  location: string;
  duration: string;
  stipend?: string;
  mode: "Remote" | "In-office" | "Hybrid";
  skills: string[];
  popularity_score?: number;
}

const Recommendations = () => {
  const [searchResults, setSearchResults] = useState<Internship[]>([]);
  const [quizResults, setQuizResults] = useState<Internship[]>(mockInternships.slice(0, 2));
  const [locationResults, setLocationResults] = useState<Internship[]>(mockInternships.filter(i => i.location.includes("Delhi")));
  const [interestResults, setInterestResults] = useState<Internship[]>(mockInternships.filter(i => i.skills.some(skill => skill.toLowerCase().includes("python") || skill.toLowerCase().includes("ml"))));
  const [popularResults, setPopularResults] = useState<Internship[]>(mockInternships.sort((a, b) => (b.popularity_score || 0) - (a.popularity_score || 0)));
  const [isSearching, setIsSearching] = useState(false);
  
  const { toast } = useToast();

  const handleSearch = async (query: string) => {
    setIsSearching(true);
    try {
      // TODO: Replace with actual API call to /recommend/keywords
      // const response = await fetch('/api/recommend/keywords', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ query })
      // });
      // const results = await response.json();
      
      // Mock search results based on query
      const results = mockInternships.filter(internship => 
        internship.title.toLowerCase().includes(query.toLowerCase()) ||
        internship.description.toLowerCase().includes(query.toLowerCase()) ||
        internship.skills.some(skill => skill.toLowerCase().includes(query.toLowerCase()))
      );
      
      setSearchResults(results);
      
      if (results.length === 0) {
        toast({
          title: "No results found",
          description: "Try adjusting your search terms or browse our recommendations below.",
        });
      }
    } catch (error) {
      toast({
        title: "Search failed",
        description: "There was an error searching for internships. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSearching(false);
    }
  };

  const handleApply = (internshipId: string) => {
    toast({
      title: "Application submitted!",
      description: "We'll notify you about the application status soon.",
    });
  };

  const handleViewMore = (category: string) => {
    // TODO: Navigate to specific view more pages
    toast({
      title: "Coming soon",
      description: `${category} view with filters and sorting is being developed.`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-secondary">
      {/* Header Section */}
      <div className="bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              AI-Powered Internship Recommendations
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Personalized suggestions based on your profile, quiz, and search preferences
            </p>
          </div>
          
          {/* Search Section */}
          <div className="flex justify-center">
            <SearchBar onSearch={handleSearch} />
          </div>
        </div>
      </div>

      {/* Recommendations Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Search Results Section */}
        {(searchResults.length > 0 || isSearching) && (
          <RecommendationSection
            title="Based on Your Search"
            icon={<Search className="h-6 w-6 text-primary" />}
            internships={searchResults}
            onViewMore={() => handleViewMore("Search Results")}
            onApply={handleApply}
            isLoading={isSearching}
          />
        )}

        {/* Quiz Results Section */}
        <RecommendationSection
          title="Based on Your Skills (Quiz)"
          icon={<Brain className="h-6 w-6 text-accent" />}
          internships={quizResults}
          onViewMore={() => handleViewMore("Quiz Results")}
          onApply={handleApply}
        />

        {/* Location Results Section */}
        <RecommendationSection
          title="Near Your Location (Delhi)"
          icon={<MapPin className="h-6 w-6 text-success" />}
          internships={locationResults}
          onViewMore={() => handleViewMore("Location Results")}
          onApply={handleApply}
        />

        {/* Interest Results Section */}
        <RecommendationSection
          title="Based on Your Interests"
          icon={<Target className="h-6 w-6 text-warning" />}
          internships={interestResults}
          onViewMore={() => handleViewMore("Interest Results")}
          onApply={handleApply}
        />

        {/* Popular Results Section */}
        <RecommendationSection
          title="Popular Internships"
          icon={<TrendingUp className="h-6 w-6 text-destructive" />}
          internships={popularResults}
          onViewMore={() => handleViewMore("Popular Internships")}
          onApply={handleApply}
        />
      </div>
    </div>
  );
};

export default Recommendations;