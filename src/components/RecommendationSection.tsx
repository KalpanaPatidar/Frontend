import { InternshipCard } from "./InternshipCard";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Internship } from "./types";

interface InternshipCardProps {
    internship: Internship;
    index: number;
}

interface RecommendationSectionProps {
    title: string;
    icon: React.ReactNode;
    internships: Internship[];
    onViewMore: () => void;
    onApply?: (internshipId: string) => void;
    isLoading?: boolean;
}

export const RecommendationSection = ({
    title,
    icon,
    internships,
    onViewMore,
    onApply,
    isLoading = false
}: RecommendationSectionProps) => {
    if (isLoading) {
        return (
            <section className="mb-8">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-semibold text-foreground flex items-center gap-3">
                        {icon}
                        {title}
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {[...Array(3)].map((_, index) => (
                        <div key={index} className="h-80 bg-muted animate-pulse rounded-lg" />
                    ))}
                </div>
            </section>
        );
    }

    if (!internships?.length) {
        return (
            <section className="mb-8">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-semibold text-foreground flex items-center gap-3">
                        {icon}
                        {title}
                    </h2>
                </div>
                <div className="bg-muted/30 border-2 border-dashed border-border rounded-lg p-8 text-center">
                    <p className="text-muted-foreground">No internships found for this category.</p>
                </div>
            </section>
        );
    }

    return (
        <section className="mb-8">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-foreground flex items-center gap-3">
                    {icon}
                    {title}
                </h2>
                <Button
                    variant="outline"
                    onClick={onViewMore}
                    className="flex items-center gap-2 hover:bg-secondary-hover transition-colors"
                >
                    View More
                    <ChevronRight className="h-4 w-4" />
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {internships.map((internship, index) => (
                    <InternshipCard
                        key={internship.id}
                        internship={internship}
                        index={index}   // ⬅️ added
                        onApply={onApply}
                    />
                ))}
            </div>
        </section>
    );
};