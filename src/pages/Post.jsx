import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css';

function Post({ image }) {
  const navigate = useNavigate();

  if (!image) {
    return (
      <div className="post">
        <div className="post-empty">
          <p>No image selected. Please choose an image from the gallery.</p>
          <Link to="/gallery" className="back-button">
            Back to Gallery
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="post">
      <Link to="/gallery" className="back-button">
        ← Back to Gallery
      </Link>
      <div className="post-container">
        <div className="post-image-wrapper">
          <img src={image.url} alt={image.title} className="post-image" />
        </div>
        <div className="post-content">
          <h1 className="post-title">{image.title}</h1>
          <p className="post-description">{image.description}</p>
          <div className="post-details">
            <p>
              <strong>Image Details:</strong> This is a beautiful photograph that captures the essence of nature and beauty.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
