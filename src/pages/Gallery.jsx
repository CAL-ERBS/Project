import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Gallery.css';

function Gallery({ onImageSelect }) {
  const navigate = useNavigate();
  const [images] = useState([
    {
      id: 1,
      title: 'Mountain View',
      url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=500&fit=crop',
      description: 'A beautiful mountain landscape'
    },
    {
      id: 2,
      title: 'Ocean Sunset',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&h=500&fit=crop',
      description: 'Stunning sunset over the ocean'
    },
    {
      id: 3,
      title: 'Forest Path',
      url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=500&fit=crop',
      description: 'A serene forest pathway'
    },
    {
      id: 4,
      title: 'City Lights',
      url: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&h=500&fit=crop',
      description: 'Urban night photography'
    },
    {
      id: 5,
      title: 'Desert Sand',
      url: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=500&h=500&fit=crop',
      description: 'Golden sand dunes'
    },
    {
      id: 6,
      title: 'Northern Lights',
      url: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=500&h=500&fit=crop',
      description: 'Aurora borealis display'
    },
  ]);

  const handleImageClick = (image) => {
    onImageSelect(image);
    navigate('/post');
  };

  return (
    <div className="gallery">
      <h1 className="gallery-title">Gallery</h1>
      <div className="gallery-grid">
        {images.map((image) => (
          <div
            key={image.id}
            className="gallery-item"
            onClick={() => handleImageClick(image)}
          >
            <img src={image.url} alt={image.title} className="gallery-image" />
            <div className="gallery-overlay">
              <h3 className="gallery-item-title">{image.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
