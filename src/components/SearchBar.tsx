import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";


interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

export const SearchBar = ({ 
  onSearch, 
  placeholder = "Search internships (e.g., Python internship in Delhi for 2 months remote)" 
}: SearchBarProps) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 w-full max-w-4xl">
      <div className="relative flex-1">
        <Input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-12 pr-4 py-3 text-base bg-card border-2 focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
      </div>
      <Button 
        type="submit"
        size="lg"
        className="px-8 bg-primary hover:bg-primary-hover text-primary-foreground transition-colors shadow-md hover:shadow-lg"
      >
        Search
      </Button>
    </form>
  );
};