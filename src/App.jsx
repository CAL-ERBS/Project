import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation.jsx';
import Home from './pages/Home.jsx';
import Gallery from './pages/Gallery.jsx';
import Post from './pages/Post.jsx';

function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <Router>
      <div className="app">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery onImageSelect={setSelectedImage} />} />
            <Route path="/post" element={<Post image={selectedImage} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
