import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import VideoPortfolio from '../components/VideoPortfolio';
import Drones from '../components/Drones';
import '../components/Header.css';

export default function HomePage(): React.ReactElement {
  const location = useLocation();

  return (
    <>
      <Hero />
      <nav className="nav home-nav" style={{ padding: '2rem', background: 'rgba(0, 0, 0, 0.9)', justifyContent: 'center', position: 'sticky', top: 0, zIndex: 1000 }}>
        <ul className="nav-links" style={{ justifyContent: 'center', gap: '4rem' }}>
          <li>
            <Link 
              to="/" 
              className={location.pathname === '/' ? 'active' : ''}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/fpv-pilot" 
              className={location.pathname === '/fpv-pilot' ? 'active' : ''}
            >
              FPV Pilot
            </Link>
          </li>
          <li>
            <Link 
              to="/video" 
              className={location.pathname === '/video' ? 'active' : ''}
            >
              Video
            </Link>
          </li>
          <li>
            <Link 
              to="/photo" 
              className={location.pathname === '/photo' ? 'active' : ''}
            >
              Photo
            </Link>
          </li>
        </ul>
      </nav>
      <Gallery />
      <VideoPortfolio />
      <Drones />
    </>
  );
}
