import React from 'react';
import './SearchBar.css'; // Import the CSS file

const SearchBar = ({ title, onSearchChange }) => {
  return (
    <div className="search-bar-container">
      <h2>{title}</h2>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
