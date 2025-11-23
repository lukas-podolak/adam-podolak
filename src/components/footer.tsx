import React from 'react';
import './footer.css';

export default function Footer(): React.ReactElement {
  return (
    <div className="footer-container">
      <span style={{ letterSpacing: '1.5px' }}>© 2025 Adam Podolak. All rights reserved.</span>
      <i className="footer-credit">Created by <a href="https://lukaspodolak.cz/" target='_blank' rel="noreferrer">Lukáš Podolák</a></i>
    </div>
  );
}
