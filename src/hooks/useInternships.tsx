import { useState, useEffect, useMemo } from 'react';
import internshipsData from '@/data/internships.json';

export interface Internship {
  id: string;
  title: string;
  company: string;
  location: string;
  duration: string;
  stipend: string;
  sector: string;
  skills: string[];
  description: string;
  applicants: number;
  postedDate: string;
}

interface Filters {
  sectors: string[];
  locations: string[];
  stipendRange: string;
  duration: string[];
  popularity: string;
}

export const useInternships = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<Filters>({
    sectors: [],
    locations: [],
    stipendRange: '',
    duration: [],
    popularity: '',
  });
  const [sortBy, setSortBy] = useState('best-match');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  
  const itemsPerPage = 16;

  // Generate expanded dataset (simulating 1500 records)
  const expandedInternships = useMemo(() => {
    const baseData = internshipsData as Internship[];
    const expanded: Internship[] = [];
    
    const companies = [
      'TechCorp Solutions', 'Creative Agency', 'DataTech Labs', 'Design Studio Pro',
      'Investment Partners', 'Media House', 'StartupTech', 'People First HR',
      'Creative Solutions', 'Growth Partners', 'Innovation Hub', 'Future Labs',
      'Digital Dynamics', 'Skill Studio', 'Talent Tree', 'Brand Builders',
      'Code Craft', 'Analytics Pro', 'Design Depot', 'Marketing Mavens'
    ];
    
    const locations = [
      'Bangalore', 'Mumbai', 'Delhi', 'Hyderabad', 'Chennai', 'Pune', 
      'Gurgaon', 'Kolkata', 'Ahmedabad', 'Noida', 'Kochi', 'Jaipur',
      'Indore', 'Chandigarh', 'Bhopal', 'Remote'
    ];

    for (let i = 0; i < 1500; i++) {
      const baseIndex = i % baseData.length;
      const baseInternship = baseData[baseIndex];
      
      // Create variations
      const variation: Internship = {
        ...baseInternship,
        id: `${i + 1}`,
        company: companies[Math.floor(Math.random() * companies.length)],
        location: locations[Math.floor(Math.random() * locations.length)],
        applicants: Math.floor(Math.random() * 500) + 50,
        postedDate: new Date(Date.now() - Math.random() * 90 * 24 * 60 * 60 * 1000)
          .toISOString().split('T')[0],
        stipend: i % 10 === 0 ? 'Unpaid' : `₹${Math.floor(Math.random() * 25000) + 5000}/month`
      };
      
      expanded.push(variation);
    }
    
    return expanded;
  }, []);

  // Debounced search and filtering
  const filteredAndSortedInternships = useMemo(() => {
    let result = expandedInternships;

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(internship =>
        internship.title.toLowerCase().includes(query) ||
        internship.company.toLowerCase().includes(query) ||
        internship.sector.toLowerCase().includes(query) ||
        internship.skills.some(skill => skill.toLowerCase().includes(query))
      );
    }

    // Apply filters
    if (filters.sectors.length > 0) {
      result = result.filter(internship => filters.sectors.includes(internship.sector));
    }

    if (filters.locations.length > 0) {
      result = result.filter(internship =>
        filters.locations.some(loc =>
          internship.location.toLowerCase().includes(loc.toLowerCase()) ||
          (loc === 'Remote' && internship.location === 'Remote')
        )
      );
    }

    if (filters.stipendRange) {
      result = result.filter(internship => {
        const stipend = internship.stipend;
        if (filters.stipendRange === 'unpaid' && stipend === 'Unpaid') return true;
        if (filters.stipendRange === '0-5k' && stipend !== 'Unpaid') {
          const amount = parseInt(stipend.replace(/[^\d]/g, ''));
          return amount <= 5000;
        }
        if (filters.stipendRange === '5k-10k' && stipend !== 'Unpaid') {
          const amount = parseInt(stipend.replace(/[^\d]/g, ''));
          return amount > 5000 && amount <= 10000;
        }
        if (filters.stipendRange === '10k+' && stipend !== 'Unpaid') {
          const amount = parseInt(stipend.replace(/[^\d]/g, ''));
          return amount > 10000;
        }
        return false;
      });
    }

    if (filters.duration.length > 0) {
      result = result.filter(internship =>
        filters.duration.some(dur =>
          internship.duration.includes(dur.replace('+', ''))
        )
      );
    }

    // Apply sorting
    result.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime();
        case 'highest-stipend':
          const aStipend = a.stipend === 'Unpaid' ? 0 : parseInt(a.stipend.replace(/[^\d]/g, ''));
          const bStipend = b.stipend === 'Unpaid' ? 0 : parseInt(b.stipend.replace(/[^\d]/g, ''));
          return bStipend - aStipend;
        case 'most-popular':
          return b.applicants - a.applicants;
        default: // best-match
          if (searchQuery.trim()) {
            // Score based on relevance to search query
            const getRelevanceScore = (internship: Internship) => {
              const query = searchQuery.toLowerCase();
              let score = 0;
              if (internship.title.toLowerCase().includes(query)) score += 10;
              if (internship.company.toLowerCase().includes(query)) score += 8;
              if (internship.sector.toLowerCase().includes(query)) score += 6;
              if (internship.skills.some(skill => skill.toLowerCase().includes(query))) score += 4;
              return score;
            };
            return getRelevanceScore(b) - getRelevanceScore(a);
          }
          return 0;
      }
    });

    return result;
  }, [expandedInternships, searchQuery, filters, sortBy]);

  // Pagination
  const totalItems = filteredAndSortedInternships.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedInternships = filteredAndSortedInternships.slice(startIndex, startIndex + itemsPerPage);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, filters, sortBy]);

  const loadMore = () => {
    if (currentPage < totalPages) {
      setIsLoading(true);
      setTimeout(() => {
        setCurrentPage(prev => prev + 1);
        setIsLoading(false);
      }, 500);
    }
  };

  return {
    searchQuery,
    setSearchQuery,
    filters,
    setFilters,
    sortBy,
    setSortBy,
    currentPage,
    setCurrentPage,
    isLoading,
    internships: paginatedInternships,
    totalItems,
    totalPages,
    startIndex,
    itemsPerPage,
    loadMore,
    hasMore: currentPage < totalPages
  };
};