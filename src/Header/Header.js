import React from 'react';
import image from "../images/logo.png";
import './Header.css'; // Import the CSS file

const Header = ({ onParentFilterChange }) => {
  return (
    <div className="header-container">
      <div className="logo">
        <img alt="logo" src={image} />
      </div>
      {/* Parent Filters */}
      <div className="filter-buttons">
        <button onClick={() => onParentFilterChange('Filter1')}>Rent</button>
        <button onClick={() => onParentFilterChange('Filter2')}>Buy</button>
        <button>Sell</button>
        <select>
          <option>Manage property</option>
        </select>
        <select>
          <option>Resources</option>
        </select>
      </div>
      <div className="btn">
        <button>Login</button>
        <button>Sign up</button>
      </div>
    </div>
  );
};

export default Header;
