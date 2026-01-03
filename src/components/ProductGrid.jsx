import React from 'react';
import ProductCard from './ProductCard';
import './ProductGrid.css';

const ProductGrid = ({ products, totalCount, activeFilter, onLoadMore, hasMore }) => {
  return (
    <div className="products-section">
      <div className="products-header">
        <h1>Discover Our Products</h1>
        <p className="results-count">Showing {totalCount} results for '{activeFilter}'</p>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {hasMore && (
        <div className="load-more-container">
          <button className="load-more-btn" onClick={onLoadMore}>
            Load More Products
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;

