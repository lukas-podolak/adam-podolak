import React from 'react';
import './PhotoPage.css';

export default function PhotoPage(): React.ReactElement {
  return (
    <div className="photo-page-container">
      <div className="photo-page-hero">
        <h1 className="photo-page-title">
          {'PHOTOGRAPHY'.split('').map((letter, index) => (
            <span
              key={index}
              className="photo-page-title-letter"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {letter}
            </span>
          ))}
        </h1>
      </div>

      <div className="photo-page-content">
        <section className="photo-intro">
          <h2>Aerial & Ground Photography</h2>
          <p>
            Capturing stunning perspectives from above and on the ground. 
            Specializing in landscape, aerial, and commercial photography 
            with a focus on unique angles and dramatic compositions.
          </p>
        </section>

        <section className="photo-gallery-section">
          <h2>Photo Gallery</h2>
          <div className="photo-grid">
            <div className="photo-item">
              <img 
                src={require('../assets/images/LukasImage_1530_20250725.jpg')} 
                alt="Aerial landscape" 
              />
              <div className="photo-overlay">
                <span>Aerial Landscape</span>
              </div>
            </div>
            <div className="photo-item">
              <img 
                src={require('../assets/images/LukasImage_1530_20250725.jpg')} 
                alt="Drone perspective" 
              />
              <div className="photo-overlay">
                <span>Unique Perspective</span>
              </div>
            </div>
            <div className="photo-item">
              <img 
                src={require('../assets/images/LukasImage_1530_20250725.jpg')} 
                alt="Action shot" 
              />
              <div className="photo-overlay">
                <span>Action Photography</span>
              </div>
            </div>
            <div className="photo-item">
              <img 
                src={require('../assets/images/LukasImage_1530_20250725.jpg')} 
                alt="Commercial work" 
              />
              <div className="photo-overlay">
                <span>Commercial</span>
              </div>
            </div>
            <div className="photo-item">
              <img 
                src={require('../assets/images/LukasImage_1530_20250725.jpg')} 
                alt="Nature photography" 
              />
              <div className="photo-overlay">
                <span>Nature</span>
              </div>
            </div>
            <div className="photo-item">
              <img 
                src={require('../assets/images/LukasImage_1530_20250725.jpg')} 
                alt="Urban exploration" 
              />
              <div className="photo-overlay">
                <span>Urban</span>
              </div>
            </div>
          </div>
        </section>

        <section className="photo-services">
          <h2>Photography Services</h2>
          <div className="photo-services-grid">
            <div className="photo-service-card">
              <h3>Aerial Photography</h3>
              <p>Stunning aerial shots using professional drones and equipment</p>
            </div>
            <div className="photo-service-card">
              <h3>Landscape Photography</h3>
              <p>Capturing the beauty of natural and urban landscapes</p>
            </div>
            <div className="photo-service-card">
              <h3>Commercial Photography</h3>
              <p>Professional images for businesses and marketing materials</p>
            </div>
            <div className="photo-service-card">
              <h3>Event Photography</h3>
              <p>Comprehensive coverage of your special moments</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
