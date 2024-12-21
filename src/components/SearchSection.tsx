interface SearchSectionProps {
  onSearch: (query: string, location: string) => void;
  searchQuery: string;
  selectedLocation: string;
}

const SearchSection = ({
  onSearch,
  searchQuery,
  selectedLocation,
}: SearchSectionProps) => {
  return (
    <div className="bg-emerald-50 py-8 px-4 text-center">
      <h1 className="text-2xl font-bold mb-6">
        Find Expert Doctors For An In-Clinic Session Here
      </h1>

      <div className="max-w-4xl mx-auto flex bg-white rounded-full overflow-hidden outline-none">
        <select
          className="p-4 flex-1 border-r mr-6"
          value={selectedLocation}
          onChange={(e) => onSearch(searchQuery, e.target.value)}
        >
          <option value="">Select Location</option>
          <option value="mumbai">Mumbai</option>
          <option value="delhi">Delhi</option>
          {/* Add more locations */}
        </select>

        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearch(e.target.value, selectedLocation)}
          placeholder="e.g., Doctor, specialisation, clinic name"
          className="p-4 flex-1 "
        />

        <button
          className="px-10  bg-primary text-white rounded-lg"
          onClick={() => onSearch(searchQuery, selectedLocation)}
        >
          →
        </button>
      </div>
    </div>
  );
};

export default SearchSection;
