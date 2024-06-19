import React from 'react';
import { TextField } from '@mui/material';

const SearchBar = ({ setSearchTerm }) => {
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <TextField
      fullWidth
      label="Search"
      onChange={handleSearch}
      style={{ marginBottom: '16px' }}
    />
  );
};

export default SearchBar;
