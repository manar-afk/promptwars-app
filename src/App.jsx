import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import BottomNav from './components/BottomNav';
import NudgeAlert from './components/NudgeAlert';
import './index.css';

// Lazy-loaded route components for performance efficiency
const Dashboard = lazy(() => import('./pages/Dashboard'));
const VenueMap = lazy(() => import('./pages/VenueMap'));
const RoutingView = lazy(() => import('./pages/RoutingView'));
const Placeholder = lazy(() => import('./pages/Placeholder'));

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
        <Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>Loading application...</div>}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/map" element={<VenueMap />} />
            <Route path="/wallet" element={<Placeholder title="Digital Wallet" />} />
            <Route path="/profile" element={<Placeholder title="My Account" />} />
            <Route path="/route" element={<RoutingView />} />
          </Routes>
        </Suspense>
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
