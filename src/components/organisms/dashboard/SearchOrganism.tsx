import React, { useState } from 'react';
import { Box } from '@mui/material';
import SearchContainer from '../../molecules/dashboard/SearchContainer';

const SearchOrganism: React.FC = () => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    console.log('Searching for:', query);
  };

  const handleClear = () => {
    console.log('Cleared');
    setQuery('');
  };


  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={1} px={2}>
      <Box width="100%" maxWidth={500} >
        <SearchContainer
          value={query}
          onChange={setQuery}
          onSearch={handleSearch}
          onClear={handleClear}
        />
      </Box>
    </Box>
  );
};

export default SearchOrganism;
