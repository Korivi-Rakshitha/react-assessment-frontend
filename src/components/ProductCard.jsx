import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const formatPrice = (price) => {
    return `$${price.toFixed(2)}`;
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="rating">
        {[...Array(fullStars)].map((_, i) => (
          <span key={i} className="star filled">★</span>
        ))}
        {hasHalfStar && <span className="star half">★</span>}
        {[...Array(emptyStars)].map((_, i) => (
          <span key={i} className="star">★</span>
        ))}
        <span className="rating-value">{rating.toFixed(1)}</span>
      </div>
    );
  };

  const getCategoryBadge = () => {
    if (product.category === "men's clothing" && product.id === 1) {
      return <span className="badge new">NEW</span>;
    }
    if (product.rating.rate >= 4.5 && product.rating.count > 300) {
      return <span className="badge bestseller">BEST SELLER</span>;
    }
    if (product.price < 20) {
      return <span className="badge sale">SALE</span>;
    }
    return null;
  };

  const getCategoryDisplay = () => {
    const categoryMap = {
      "men's clothing": "Men's Collection",
      "women's clothing": "Women's Collection",
      "jewelery": "Accessories",
      "electronics": "Electronics"
    };
    return categoryMap[product.category] || product.category;
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.title} className="product-image" />
        {getCategoryBadge()}
      </div>
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-category">{getCategoryDisplay()}</p>
        <div className="product-price-rating">
          <div className="price">{formatPrice(product.price)}</div>
          {renderStars(product.rating.rate)}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

