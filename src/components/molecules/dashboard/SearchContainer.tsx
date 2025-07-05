import React from 'react';
import SearchBar from '../../atoms/dashboard/searchBar';

interface SearchContainerProps {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
  onClear: () => void;
}

const SearchContainer: React.FC<SearchContainerProps> = ({ value, onChange, onSearch, onClear }) => {

  return (
    <div style={{ maxWidth: 400, margin: '18px auto', justifyContent: 'center', display: 'flex' }}>
      <SearchBar
        value={value}
        onChange={onChange}
        onSearch={onSearch}
        onClear={onClear}
        placeholder="Search for rooms or bookings"
      />
    </div>
  );
};

export default SearchContainer;
