import React from 'react';
import './ProductFilters.css';

const ProductFilters = ({ activeFilter, onFilterChange, onClearFilters }) => {
  const filters = [
    'All Products',
    "Bags & Backpacks",
    'Accessories',
    'Footwear',
    'Under $100',
    'Size M'
  ];

  return (
    <div className="filters-container">
      <div className="filters">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
            onClick={() => onFilterChange(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
      <button className="clear-all" onClick={onClearFilters}>
        Clear All
      </button>
    </div>
  );
};

export default ProductFilters;

