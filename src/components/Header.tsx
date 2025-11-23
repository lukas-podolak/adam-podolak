import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

export default function Header(): React.ReactElement {
  const location = useLocation();

  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="logo">
          ADAM PODOLAK
        </Link>
        <ul className="nav-links">
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
    </header>
  );
}
