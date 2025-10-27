import React, { useState } from "react";

export default function Gallery() {
  const [images, setImages] = useState([
    "/gallery1.png",
    "/gallery2.png",
    "/gallery3.png",
  ]);
  const addImage = () => {
    setImages(prev => [...prev, "/gallery1.png"]);
  };
  return (
    <div className="gallery-card-inner">
      <div className="card-left-column small-only">
        <img src="/question-icon.png" alt="help" className="small-icon" />
        <img src="/dashboard-icon.png" alt="dash" className="mini-grid-icon" />
      </div>
      <div className="gallery-main">
        <div className="gallery-top">
          <div className="gallery-title-pill">Gallery</div>
          <div className="gallery-actions">
            <button className="add-pill" onClick={addImage}>
              + ADD IMAGE
            </button>
            <button className="round-btn">←</button>
            <button className="round-btn">→</button>
          </div>
        </div>
        <div className="gallery-underline" />
        <div className="gallery-grid">
          {images.map((src, i) => (
            <div className="gallery-item" key={i}>
              <img src={src} alt={`Gallery ${i + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
