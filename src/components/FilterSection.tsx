import { Filters, ActiveFilter } from '../types';

interface FilterSectionProps {
  filters: Filters;
  activeFilters: ActiveFilter[];
  onFilterChange: (key: keyof Filters, value: string) => void;
  onRemoveFilter: (filter: ActiveFilter) => void;
  onClearAll: () => void;
}

const FilterSection = ({
  filters,
  activeFilters,
  onFilterChange,
  onRemoveFilter,
  onClearAll,
}: FilterSectionProps) => {
  return (
    <div className="p-8">
      {/* Filters Section */}
      <div className="flex gap-4 mb-4">
        <select
          value={filters.expertise}
          onChange={(e) => onFilterChange('expertise', e.target.value)}
          className="p-2 border rounded"
        >
          <option value="">Expertise</option>
          <option value="hair">Hair Care</option>
          <option value="skin">Skin Care</option>
          <option value="nutrition">Nutrition</option>
        </select>

        <select
          value={filters.gender}
          onChange={(e) => onFilterChange('gender', e.target.value)}
          className="p-2 border rounded"
        >
          <option value="">Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <select
          value={filters.fees}
          onChange={(e) => onFilterChange('fees', e.target.value)}
          className="p-2 border rounded"
        >
          <option value="">Fees</option>
          <option value="500">Under ₹500</option>
          <option value="1000">Under ₹1000</option>
          <option value="1500">Under ₹1500</option>
        </select>

        <select
          value={filters.language}
          onChange={(e) => onFilterChange('language', e.target.value)}
          className="p-2 border rounded"
        >
          <option value="">Language</option>
          <option value="english">English</option>
          <option value="hindi">Hindi</option>
          <option value="marathi">Marathi</option>
        </select>

        <button
          onClick={onClearAll}
          className="px-4 py-2 border rounded hover:bg-gray-100"
        >
          Clear All
        </button>
      </div>

      {/* Active Filters Section */}
      <div className="flex flex-wrap gap-2">
        {activeFilters.map((filter) => (
          <span
            key={`${filter.key}-${filter.value}`}
            className="px-3 py-1 bg-green-50 rounded-full text-sm cursor-pointer hover:bg-gray-200 flex items-center gap-1 border-2 border-primary "
            onClick={() => onRemoveFilter(filter)}
          >
            {filter.value}
            <span className="text-gray-500">×</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default FilterSection;
