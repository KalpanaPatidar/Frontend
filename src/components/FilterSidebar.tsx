import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { RotateCcw } from "lucide-react";

interface Filters {
  sectors: string[];
  locations: string[];
  stipendRange: string;
  duration: string[];
  popularity: string;
}

interface FilterSidebarProps {
  filters: Filters;
  onFiltersChange: (filters: Filters) => void;
}

const filterOptions = {
  sectors: [
    "Information Technology",
    "Marketing & Communications",
    "Finance & Accounting",
    "Design & Creative",
    "Sales & Business Development",
    "Human Resources",
    "Engineering",
    "Healthcare",
    "Education",
    "Research & Development"
  ],
  locations: [
    "Remote",
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Hyderabad",
    "Chennai",
    "Pune",
    "Kolkata",
    "Ahmedabad",
    "Gurgaon"
  ],
  stipendRanges: [
    { value: "unpaid", label: "Unpaid" },
    { value: "0-5k", label: "₹0 - ₹5,000" },
    { value: "5k-10k", label: "₹5,000 - ₹10,000" },
    { value: "10k+", label: "₹10,000+" }
  ],
  durations: ["1 month", "2 months", "3 months", "6 months", "6+ months"],
  popularityOptions: [
    { value: "most-applied", label: "Most Applied" },
    { value: "recently-added", label: "Recently Added" },
    { value: "high-rated", label: "High Rated" }
  ]
};

export function FilterSidebar({ filters, onFiltersChange }: FilterSidebarProps) {
  const updateFilters = (key: keyof Filters, value: any) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  const toggleArrayFilter = (key: 'sectors' | 'locations' | 'duration', value: string) => {
    const currentArray = filters[key];
    const newArray = currentArray.includes(value)
      ? currentArray.filter(item => item !== value)
      : [...currentArray, value];
    updateFilters(key, newArray);
  };

  const clearAllFilters = () => {
    onFiltersChange({
      sectors: [],
      locations: [],
      stipendRange: "",
      duration: [],
      popularity: "",
    });
  };

  const hasActiveFilters = 
    filters.sectors.length > 0 ||
    filters.locations.length > 0 ||
    filters.stipendRange ||
    filters.duration.length > 0 ||
    filters.popularity;

  return (
    <Card className="p-6 lg:sticky lg:top-4">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Filters</h3>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearAllFilters}
            className="text-primary hover:text-primary-hover"
          >
            <RotateCcw className="h-4 w-4 mr-1" />
            Clear All
          </Button>
        )}
      </div>

      <div className="space-y-6">
        {/* Sector Filter */}
        <div>
          <Label className="text-base font-medium mb-3 block">Sector/Domain</Label>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {filterOptions.sectors.map((sector) => (
              <div key={sector} className="flex items-center space-x-2">
                <Checkbox
                  id={sector}
                  checked={filters.sectors.includes(sector)}
                  onCheckedChange={() => toggleArrayFilter('sectors', sector)}
                />
                <Label 
                  htmlFor={sector} 
                  className="text-sm font-normal cursor-pointer flex-1"
                >
                  {sector}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Location Filter */}
        <div>
          <Label className="text-base font-medium mb-3 block">Location</Label>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {filterOptions.locations.map((location) => (
              <div key={location} className="flex items-center space-x-2">
                <Checkbox
                  id={location}
                  checked={filters.locations.includes(location)}
                  onCheckedChange={() => toggleArrayFilter('locations', location)}
                />
                <Label 
                  htmlFor={location} 
                  className="text-sm font-normal cursor-pointer flex-1"
                >
                  {location}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Stipend Range */}
        <div>
          <Label className="text-base font-medium mb-3 block">Stipend Range</Label>
          <RadioGroup
            value={filters.stipendRange}
            onValueChange={(value) => updateFilters('stipendRange', value)}
          >
            {filterOptions.stipendRanges.map((range) => (
              <div key={range.value} className="flex items-center space-x-2">
                <RadioGroupItem value={range.value} id={range.value} />
                <Label 
                  htmlFor={range.value} 
                  className="text-sm font-normal cursor-pointer"
                >
                  {range.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <Separator />

        {/* Duration Filter */}
        <div>
          <Label className="text-base font-medium mb-3 block">Duration</Label>
          <div className="space-y-2">
            {filterOptions.durations.map((duration) => (
              <div key={duration} className="flex items-center space-x-2">
                <Checkbox
                  id={duration}
                  checked={filters.duration.includes(duration)}
                  onCheckedChange={() => toggleArrayFilter('duration', duration)}
                />
                <Label 
                  htmlFor={duration} 
                  className="text-sm font-normal cursor-pointer flex-1"
                >
                  {duration}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Popularity Filter */}
        <div>
          <Label className="text-base font-medium mb-3 block">Popularity</Label>
          <RadioGroup
            value={filters.popularity}
            onValueChange={(value) => updateFilters('popularity', value)}
          >
            {filterOptions.popularityOptions.map((option) => (
              <div key={option.value} className="flex items-center space-x-2">
                <RadioGroupItem value={option.value} id={option.value} />
                <Label 
                  htmlFor={option.value} 
                  className="text-sm font-normal cursor-pointer"
                >
                  {option.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      </div>
    </Card>
  );
}