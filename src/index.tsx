import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

console.log(`
%c
██████╗  ██████╗ ██████╗  ██████╗ ██╗      █████╗ ██╗  ██╗
██╔══██╗██╔═══██╗██╔══██╗██╔═══██╗██║     ██╔══██╗██║ ██╔╝
██████╔╝██║   ██║██║  ██║██║   ██║██║     ███████║█████╔╝ 
██╔═══╝ ██║   ██║██║  ██║██║   ██║██║     ██╔══██║██╔═██╗ 
██║     ╚██████╔╝██████╔╝╚██████╔╝███████╗██║  ██║██║  ██╗
╚═╝      ╚═════╝ ╚═════╝  ╚═════╝ ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝
`, 'font-family: monospace; color: #990000; font-size: 12px; font-weight: bold;');

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
