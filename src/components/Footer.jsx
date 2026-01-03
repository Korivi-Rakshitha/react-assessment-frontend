import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Subscribed:', email);
    setEmail('');
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <div className="footer-logo">NEONKICKS</div>
          <p className="footer-description">
            Discover the future of fashion. Curated for the modern urban explorer with a focus on quality and sustainable design.
          </p>
          <div className="footer-icons">
            <div className="footer-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 3C2 2.44772 2.44772 2 3 2H5.15287C5.64171 2 6.0589 2.35341 6.13927 2.8356L6.87858 7.27147C6.95075 7.70451 6.73206 8.13397 6.3394 8.3303L4.79126 9.10437C5.90756 11.8783 8.12168 14.0924 10.8956 15.2087L11.6697 13.6606C11.866 13.2679 12.2955 13.0492 12.7285 13.1214L17.1644 13.8607C17.6466 13.9411 18 14.3583 18 14.8471V17C18 17.5523 17.5523 18 17 18H15C7.8203 18 2 12.1797 2 5V3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="footer-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.5 6.66667L9.0755 11.0504C9.63533 11.4236 10.3647 11.4236 10.9245 11.0504L17.5 6.66667M3.33333 15H16.6667C17.5871 15 18.3333 14.2538 18.3333 13.3333V6.66667C18.3333 5.74619 17.5871 5 16.6667 5H3.33333C2.41286 5 1.66667 5.74619 1.66667 6.66667V13.3333C1.66667 14.2538 2.41286 15 3.33333 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="footer-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 18.3333C14.6024 18.3333 18.3333 14.6024 18.3333 10C18.3333 5.39763 14.6024 1.66667 10 1.66667C5.39763 1.66667 1.66667 5.39763 1.66667 10C1.66667 14.6024 5.39763 18.3333 10 18.3333Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 6.66667V10L12.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Shop</h3>
          <ul className="footer-links">
            <li><a href="#new-arrivals">New Arrivals</a></li>
            <li><a href="#best-sellers">Best Sellers</a></li>
            <li><a href="#mens">Men's Collection</a></li>
            <li><a href="#womens">Women's Collection</a></li>
            <li><a href="#accessories">Accessories</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Help & Support</h3>
          <ul className="footer-links">
            <li><a href="#order-status">Order Status</a></li>
            <li><a href="#shipping">Shipping & Returns</a></li>
            <li><a href="#size-guide">Size Guide</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Stay in the Loop</h3>
          <p className="footer-subscribe-text">
            Subscribe for exclusive drops and 10% off your first order.
          </p>
          <form onSubmit={handleSubscribe} className="subscribe-form">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="subscribe-input"
              required
            />
            <button type="submit" className="subscribe-btn">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright">© 2023 Neonkicks Inc. All rights reserved.</p>
        <div className="footer-bottom-icons">
          <div className="footer-bottom-icon"></div>
          <div className="footer-bottom-icon"></div>
          <div className="footer-bottom-icon"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

