import React from 'react';
import './Hero.css';

export default function Hero(): React.ReactElement {
  return (
    <div className="hero-container">
      <img src={require('../assets/images/IMG_6387.jpg')} alt="Logo" className="hero-image"/>
      <h1 className="hero-title">
        {'ADAM PODOLAK'.split('').map((letter, index) => (
          <span
            key={index}
            className="hero-letter"
            style={{
              animationDelay: `${index * 0.1}s`
            }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </span>
        ))}
      </h1>
    </div>
  );
}
