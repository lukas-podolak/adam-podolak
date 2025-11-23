import React from 'react';
import './FPVPilotPage.css';

export default function FPVPilotPage(): React.ReactElement {
  return (
    <div className="page-container">
      <div className="page-hero">
        <h1 className="page-title">
          {'FPV PILOT'.split('').map((letter, index) => (
            <span
              key={index}
              className="page-title-letter"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </span>
          ))}
        </h1>
      </div>

      <div className="page-content">
        <section className="intro-section">
          <h2>Professional FPV Drone Pilot</h2>
          <p>
            Specializing in high-speed cinematic shots and immersive aerial perspectives. 
            With years of experience in FPV drone piloting, I deliver stunning footage 
            that brings your vision to life.
          </p>
        </section>

        <section className="skills-section">
          <h2>Skills & Expertise</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <h3>Cinematic Flying</h3>
              <p>Smooth, controlled movements for film and commercial productions</p>
            </div>
            <div className="skill-card">
              <h3>Racing Experience</h3>
              <p>High-speed precision flying in challenging environments</p>
            </div>
            <div className="skill-card">
              <h3>Custom Builds</h3>
              <p>Building and maintaining high-performance FPV drones</p>
            </div>
            <div className="skill-card">
              <h3>Safety First</h3>
              <p>Certified and insured with focus on operational safety</p>
            </div>
          </div>
        </section>

        <section className="equipment-section">
          <h2>Equipment</h2>
          <ul className="equipment-list">
            <li>5" Cinematic FPV Drone - For smooth professional footage</li>
            <li>3.5" Compact Drone - Perfect for tight spaces and indoor shots</li>
            <li>DJI FPV System - Crystal-clear video transmission</li>
            <li>GoPro Hero 11 - 5.3K recording capabilities</li>
            <li>Multiple battery systems for extended shooting sessions</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
