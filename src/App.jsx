import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import BottomNav from './components/BottomNav';
import NudgeAlert from './components/NudgeAlert';
import Dashboard from './pages/Dashboard';
import VenueMap from './pages/VenueMap';
import RoutingView from './pages/RoutingView';
import Placeholder from './pages/Placeholder';
import './index.css';

// Wrapper to decide whether to show bottom nav
const AppContent = () => {
  const location = useLocation();
  // Don't show bottom nav on route planning screen to maximize space
  const showNav = location.pathname !== '/route';

  return (
    <div className="app-container">
      {/* Global Congestion Alert */}
      <NudgeAlert />

      <main className="main-content" style={{ paddingBottom: showNav ? 'var(--bottom-nav-height)' : '0' }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/map" element={<VenueMap />} />
          <Route path="/wallet" element={<Placeholder title="Digital Wallet" />} />
          <Route path="/profile" element={<Placeholder title="My Account" />} />
          <Route path="/route" element={<RoutingView />} />
        </Routes>
      </main>

      {showNav && <BottomNav />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
