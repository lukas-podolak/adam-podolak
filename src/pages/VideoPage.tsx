import React from 'react';
import './VideoPage.css';

interface VideoProject {
  title: string;
  description: string;
  videoSrc: string;
  category: string;
}

const projects: VideoProject[] = [
  {
    title: 'Commercial Project',
    description: 'Dynamic FPV footage for product showcase',
    videoSrc: require('../assets/video/holkybeh.mp4'),
    category: 'Commercial'
  },
  {
    title: 'Event Coverage',
    description: 'Immersive perspective of live events',
    videoSrc: require('../assets/video/kuci.mp4'),
    category: 'Events'
  },
  {
    title: 'Cinematic Reel',
    description: 'Artistic aerial cinematography',
    videoSrc: require('../assets/video/holkybeh.mp4'),
    category: 'Cinematic'
  },
  {
    title: 'Action Sports',
    description: 'High-speed drone tracking',
    videoSrc: require('../assets/video/kuci.mp4'),
    category: 'Sports'
  }
];

export default function VideoPage(): React.ReactElement {
  return (
    <div className="video-page-container">
      <div className="video-page-hero">
        <h1 className="video-page-title">
          {'VIDEO PORTFOLIO'.split('').map((letter, index) => (
            <span
              key={index}
              className="video-page-title-letter"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </span>
          ))}
        </h1>
      </div>

      <div className="video-page-content">
        <section className="video-intro">
          <h2>Professional Video Production</h2>
          <p>
            From concept to final delivery, I create compelling video content that tells your story. 
            Specializing in FPV drone cinematography, promotional videos, and event coverage.
          </p>
        </section>

        <section className="video-projects-section">
          <h2>Recent Projects</h2>
          <div className="video-projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="video-project-card">
                <div className="video-project-player">
                  <video 
                    className="project-video"
                    loop
                    muted
                    playsInline
                    controls
                  >
                    <source src={project.videoSrc} type="video/mp4" />
                  </video>
                </div>
                <div className="video-project-info">
                  <span className="video-category">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="services-section">
          <h2>Video Services</h2>
          <div className="services-grid">
            <div className="service-item">
              <h3>FPV Cinematography</h3>
              <p>Unique aerial perspectives with cinematic FPV drones</p>
            </div>
            <div className="service-item">
              <h3>Event Videography</h3>
              <p>Comprehensive coverage of your special events</p>
            </div>
            <div className="service-item">
              <h3>Commercial Videos</h3>
              <p>Promotional content for businesses and brands</p>
            </div>
            <div className="service-item">
              <h3>Post-Production</h3>
              <p>Professional editing, color grading, and sound design</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
