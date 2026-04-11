import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Zap } from 'lucide-react';
import { MOCK_POIS } from '../data/mockData';
import WaitTimeBadge from '../components/WaitTimeBadge';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('All');

  // Group POIs
  const categories = ['All', 'Food & Beverage', 'Restroom', 'Gate'];
  
  const filteredPOIs = useMemo(() => {
    let pois = [...MOCK_POIS];
    if (activeTab !== 'All') {
      pois = pois.filter(poi => poi.type === activeTab);
    }
    // Sort by shortest wait time
    return pois.sort((a, b) => a.wait_time - b.wait_time);
  }, [activeTab]);

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Live Wait Times</h1>
      </header>

      <div className="dashboard-content">
        {/* Priority Feature Action Call */}
        <div className="quick-action-card">
          <div className="quick-action-text">
            <h2>Skip the Wait</h2>
            <p>Find the fastest route to food or restrooms close to you right now.</p>
          </div>
          <button 
            className="btn btn-primary"
            onClick={() => navigate('/route')}
          >
            <Zap size={20} />
            Find Shortest Line Near Me
          </button>
        </div>

        {/* Filters */}
        <div className="filter-scroll">
          {categories.map(cat => (
            <button 
              key={cat}
              className={`filter-chip ${activeTab === cat ? 'active' : ''}`}
              onClick={() => setActiveTab(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* POI List View */}
        <div className="poi-list">
          {filteredPOIs.map(poi => (
            <div key={poi.id} className="poi-card">
              <div className="poi-info">
                <h3>{poi.name}</h3>
                <span className="poi-section">Section {poi.section}</span>
              </div>
              <div className="poi-status">
                <WaitTimeBadge waitTime={poi.wait_time} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
