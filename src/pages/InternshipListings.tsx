import { useState } from "react";
import { SearchBar } from "../components/SearchBar2";
import { FilterSidebar } from "../components/FilterSidebar";
import { SortDropdown } from "../components/SortDropdown";
import { InternshipCard } from "../components/InternshipCard2";
import { Button } from "@/components/ui/button";
import { Filter, X, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useInternships } from "@/hooks/useInternships";

export default function InternshipListings() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const {
    searchQuery,
    setSearchQuery,
    filters,
    setFilters,
    sortBy,
    setSortBy,
    currentPage,
    setCurrentPage,
    isLoading,
    internships,
    totalItems,
    totalPages,
    startIndex,
    itemsPerPage,
    loadMore,
    hasMore
  } = useInternships();


  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <div className="bg-background border-b border-border">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Find Your Perfect Internship
            </h1>
            <p className="text-muted-foreground text-lg mb-6">
              Discover opportunities that match your skills and interests
            </p>
            <SearchBar
              value={searchQuery} 
              onChange={setSearchQuery}
              placeholder="Search internships by title, skill, or sector"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden">
            <Button
              variant="outline"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="mb-4"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>

          {/* Filter Sidebar */}
          <div className={`
            ${isFilterOpen ? 'block' : 'hidden'} lg:block
            fixed lg:sticky top-0 left-0 z-50 lg:z-auto
            w-full lg:w-80 h-full lg:h-fit
            bg-background lg:bg-transparent
            lg:shrink-0
          `}>
            {isFilterOpen && (
              <div className="lg:hidden flex justify-between items-center p-4 border-b">
                <h3 className="font-semibold">Filters</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsFilterOpen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            )}
            <FilterSidebar filters={filters} onFiltersChange={setFilters} />
          </div>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Results Header */}
            <div className="flex justify-between items-center mb-6">
              <div className="text-sm text-muted-foreground">
                Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, totalItems)} of {totalItems} internships
              </div>
              <SortDropdown value={sortBy} onChange={setSortBy} />
            </div>

            {/* Results Grid */}
            <AnimatePresence mode="wait">
              {internships.length > 0 ? (
                <motion.div 
                  key="results"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 mb-8"
                >
                  {internships.map((internship, index) => (
                    <InternshipCard 
                      key={internship.id} 
                      internship={internship} 
                      index={index}
                    />
                  ))}
                </motion.div>
              ) : (
                <motion.div 
                  key="no-results"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="text-center py-12"
                >
                  <div className="text-muted-foreground">
                    <Filter className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <h3 className="text-lg font-semibold mb-2">No internships found</h3>
                    <p>Try adjusting your search criteria or filters</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Load More / Pagination */}
            {totalPages > 1 && (
              <div className="flex flex-col items-center gap-4">
                {hasMore && (
                  <Button 
                    onClick={loadMore}
                    disabled={isLoading}
                    variant="outline"
                    size="lg"
                    className="min-w-[200px]"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Loading...
                      </>
                    ) : (
                      `Load More (${totalItems - startIndex - itemsPerPage} remaining)`
                    )}
                  </Button>
                )}
                
                {/* Page indicator */}
                <div className="text-sm text-muted-foreground">
                  Page {currentPage} of {totalPages}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Overlay */}
      {isFilterOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsFilterOpen(false)}
        />
      )}
    </div>
  );
}