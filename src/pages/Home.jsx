import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <h1 className="hero-title">Welcome to Our Gallery</h1>
        <p className="hero-subtitle">Explore beautiful moments captured in time</p>
        <Link to="/gallery" className="cta-button">
          View Gallery
        </Link>
      </div>
    </div>
  );
}

export default Home;
