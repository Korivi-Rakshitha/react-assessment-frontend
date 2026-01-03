import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import ProductFilters from './components/ProductFilters';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import { products } from './data/products';
import './App.css';

function App() {
  const [activeFilter, setActiveFilter] = useState('All Products');
  const [displayedCount, setDisplayedCount] = useState(8);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Filter by category/type
    if (activeFilter !== 'All Products') {
      if (activeFilter === 'Bags & Backpacks') {
        filtered = filtered.filter(p => 
          p.title.toLowerCase().includes('backpack') || 
          p.title.toLowerCase().includes('bag')
        );
      } else if (activeFilter === 'Accessories') {
        filtered = filtered.filter(p => 
          p.category === 'jewelery' || 
          p.title.toLowerCase().includes('watch') ||
          p.title.toLowerCase().includes('wallet')
        );
      } else if (activeFilter === 'Footwear') {
        filtered = filtered.filter(p => 
          p.title.toLowerCase().includes('shoe') || 
          p.title.toLowerCase().includes('boot')
        );
      } else if (activeFilter === 'Under $100') {
        filtered = filtered.filter(p => p.price < 100);
      } else if (activeFilter === 'Size M') {
        // For demo purposes, we'll just return all products
        filtered = filtered;
      }
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(p =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered;
  }, [activeFilter, searchQuery]);

  const displayedProducts = filteredProducts.slice(0, displayedCount);
  const hasMore = displayedCount < filteredProducts.length;

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setDisplayedCount(8);
  };

  const handleClearFilters = () => {
    setActiveFilter('All Products');
    setSearchQuery('');
    setDisplayedCount(8);
  };

  const handleLoadMore = () => {
    setDisplayedCount(prev => Math.min(prev + 8, filteredProducts.length));
  };

  return (
    <div className="App">
      <Header 
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <ProductFilters
        activeFilter={activeFilter}
        onFilterChange={handleFilterChange}
        onClearFilters={handleClearFilters}
      />
      <ProductGrid
        products={displayedProducts}
        totalCount={filteredProducts.length}
        activeFilter={activeFilter}
        onLoadMore={handleLoadMore}
        hasMore={hasMore}
      />
      <Footer />
    </div>
  );
}

export default App;

