import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import FPVPilotPage from './pages/FPVPilotPage';
import VideoPage from './pages/VideoPage';
import PhotoPage from './pages/PhotoPage';
import Footer from './components/footer';
import HomePage from './pages/homePage';

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="App">
      {!isHomePage && <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/fpv-pilot" element={<FPVPilotPage />} />
        <Route path="/video" element={<VideoPage />} />
        <Route path="/photo" element={<PhotoPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router basename="/adam-podolak">
      <AppContent />
    </Router>
  );
}

export default App;
