import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Navigation, Star } from 'lucide-react';
import { MOCK_POIS, POI_TYPES } from '../data/mockData';
import './RoutingView.css';

const RoutingView = () => {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState(POI_TYPES.RESTROOM);

  // Generate 3 comparable options based on the selected type
  const routeOptions = useMemo(() => {
    const options = MOCK_POIS.filter(poi => poi.type === selectedType).slice(0, 3);
    
    // Add fake travel times for the mock
    const withTravel = options.map((opt, index) => {
      const travel = (index + 1) * 3; // e.g., 3m, 6m, 9m
      return {
        ...opt,
        travel_time: travel,
        total_time: opt.wait_time + travel
      };
    }).sort((a, b) => a.total_time - b.total_time);

    return withTravel;
  }, [selectedType]);

  return (
    <div className="routing-container">
      <header className="routing-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <ArrowLeft size={24} />
        </button>
        <h2>Find Shortest Line</h2>
        <div style={{ width: 24 }} /> {/* Spacer */}
      </header>

      <div className="routing-content">
        <p className="routing-subtitle">What are you looking for?</p>
        <div className="route-type-selector">
          <button 
            className={`type-btn ${selectedType === POI_TYPES.RESTROOM ? 'active' : ''}`}
            onClick={() => setSelectedType(POI_TYPES.RESTROOM)}
          >
            Restrooms
          </button>
          <button 
            className={`type-btn ${selectedType === POI_TYPES.FOOD ? 'active' : ''}`}
            onClick={() => setSelectedType(POI_TYPES.FOOD)}
          >
            Food & Drink
          </button>
        </div>

        <div className="options-list">
          <h3>Nearest Options from Section 102</h3>
          
          {routeOptions.map((opt, index) => {
            const isBest = index === 0;
            return (
              <div key={opt.id} className={`route-card ${isBest ? 'best-option' : ''}`}>
                {isBest && (
                  <div className="best-badge">
                    <Star size={12} fill="#000" />
                    Fastest Overall
                  </div>
                )}
                
                <div className="route-info-row">
                  <div className="route-name">
                    <h4>{opt.name}</h4>
                    <span className="route-desc">Section {opt.section}</span>
                  </div>
                  <div className="total-time">
                    <span className="time-val">{opt.total_time}</span>
                    <span className="time-unit">MIN TOTAL</span>
                  </div>
                </div>

                <div className="time-breakdown">
                  <div className="breakdown-item">
                    <span>Travel</span>
                    <strong>{opt.travel_time}m</strong>
                  </div>
                  <span className="math-op">+</span>
                  <div className="breakdown-item">
                    <span>Wait</span>
                    <strong className={opt.wait_time > 10 ? 'text-red' : 'text-green'}>
                      {opt.wait_time}m
                    </strong>
                  </div>
                </div>

                <button className={`btn ${isBest ? 'btn-primary' : 'btn-surface'} route-action-btn`}>
                  <Navigation size={18} />
                  Start Route
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RoutingView;
