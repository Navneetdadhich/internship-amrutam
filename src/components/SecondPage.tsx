import { useState, useEffect } from 'react';

// import Navbar from './Navbar';

import SearchSection from './SearchSection';
import FilterSection from './FilterSection';
import DoctorList from './DoctorList';
import { Doctor, Filters, ActiveFilter } from '../types';

const SecondPage = () => {
  // State management
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [filteredDoctors, setFilteredDoctors] = useState<Doctor[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState<Filters>({
    expertise: '',
    gender: '',
    fees: '',
    language: '',
  });
  const [activeFilters, setActiveFilters] = useState<ActiveFilter[]>([]);

  // Mock data - Replace with API call
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        // Simulating API call
        const mockDoctors: Doctor[] = [
          {
            id: 1,
            name: 'Dr. Prerna Narang',
            image: '/doctor-placeholder.jpg',
            rating: 4.5,
            speciality: 'Hair-Female Infertility',
            experience: 7,
            languages: ['English', 'Hindi', 'Marathi'],
            videoConsultation: { price: 500 },
            chatConsultation: { price: 'Free' },
          },
          {
            id: 2,
            name: 'Dr. Prerna Narang',
            image: '/doctor-placeholder.jpg',
            rating: 4.5,
            speciality: 'Hair-Female Infertility',
            experience: 7,
            languages: ['English', 'Hindi', 'Marathi'],
            videoConsultation: { price: 500 },
            chatConsultation: { price: 'Free' },
          },
          {
            id: 3,
            name: 'Dr. Prerna Narang',
            image: '/doctor-placeholder.jpg',
            rating: 4.5,
            speciality: 'Hair-Female Infertility',
            experience: 7,
            languages: ['English', 'Hindi', 'Marathi'],
            videoConsultation: { price: 500 },
            chatConsultation: { price: 'Free' },
          },
        ];

        setDoctors(mockDoctors);
        setFilteredDoctors(mockDoctors);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  // Search functionality
  const handleSearch = (query: string, location: string) => {
    setSearchQuery(query);
    setSelectedLocation(location);

    let filtered = [...doctors];

    if (query) {
      filtered = filtered.filter((doctor) =>
        doctor.name.toLowerCase().includes(query.toLowerCase()) ||
        doctor.speciality.toLowerCase().includes(query.toLowerCase())
      );
    }

    setFilteredDoctors(filtered);
  };

  // Filter functionality
  const handleFilterChange = (key: keyof Filters, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);

    if (value) {
      setActiveFilters((prev) => {
        const exists = prev.find((filter) => filter.key === key);
        if (exists) {
          return prev.map((filter) =>
            filter.key === key ? { ...filter, value } : filter
          );
        }
        return [...prev, { key, value }];
      });
    } else {
      setActiveFilters((prev) => prev.filter((filter) => filter.key !== key));
    }

    applyFilters(newFilters);
  };

  // Apply all filters
  const applyFilters = (currentFilters: Filters) => {
    let filtered = [...doctors];

    Object.entries(currentFilters).forEach(([key, value]) => {
      if (value) {
        switch (key) {
          case 'expertise':
            filtered = filtered.filter((doctor) =>
              doctor.speciality.toLowerCase().includes(value.toLowerCase())
            );
            break;
          case 'language':
            filtered = filtered.filter((doctor) =>
              doctor.languages.some((lang) =>
                lang.toLowerCase() === value.toLowerCase()
              )
            );
            break;
          case 'fees':
            filtered = filtered.filter((doctor) =>
              doctor.videoConsultation.price <= parseInt(value)
            );
            break;
          // Add more cases as needed
        }
      }
    });

    setFilteredDoctors(filtered);
  };

  // Remove filter
  const removeFilter = (filterToRemove: ActiveFilter) => {
    setActiveFilters((prev) =>
      prev.filter((filter) => filter.key !== filterToRemove.key)
    );
    handleFilterChange(filterToRemove.key, '');
  };

  // Clear all filters
  const clearAllFilters = () => {
    setFilters({
      expertise: '',
      gender: '',
      fees: '',
      language: '',
    });
    setActiveFilters([]);
    setFilteredDoctors(doctors);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* <Navbar /> */}
      
      <SearchSection
        onSearch={handleSearch}
        searchQuery={searchQuery}
        selectedLocation={selectedLocation}
      />
      
      <FilterSection
        filters={filters}
        activeFilters={activeFilters}
        onFilterChange={handleFilterChange}
        onRemoveFilter={removeFilter}
        onClearAll={clearAllFilters}
      />

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      ) : (
        <DoctorList
          doctors={filteredDoctors}
          isLoading={isLoading}
        />
      )}
    </div>
  );
};

export default SecondPage;