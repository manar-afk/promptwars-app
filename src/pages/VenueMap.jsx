import React, { useState } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { Layers } from 'lucide-react';
import { MOCK_POIS, getWaitStatus } from '../data/mockData';
import './VenueMap.css';

const VenueMap = () => {
  const [floor, setFloor] = useState(1);

  return (
    <div className="venue-map-container">
      {/* Map Header Overlay */}
      <div className="map-overlay-header">
        <h2>Interactive Map</h2>
        <div className="floor-selector">
          <Layers size={18} />
          <button className={`floor-btn ${floor === 1 ? 'active' : ''}`} onClick={() => setFloor(1)}>L1</button>
          <button className={`floor-btn ${floor === 2 ? 'active' : ''}`} onClick={() => setFloor(2)}>L2</button>
        </div>
      </div>

      <div className="map-wrapper">
        <TransformWrapper
          initialScale={1}
          minScale={0.5}
          maxScale={4}
          centerOnInit={true}
        >
          {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
            <>
              <div className="zoom-controls">
                <button onClick={() => zoomIn()}>+</button>
                <button onClick={() => zoomOut()}>-</button>
                <button onClick={() => resetTransform()}>Reset</button>
              </div>
              <TransformComponent wrapperClass="transform-wrapper" contentClass="transform-content">
                <div className="svg-map-container">
                  {/* A stylized stadium background */}
                  <svg width="800" height="600" viewBox="0 0 800 600" style={{ backgroundColor: '#111', borderRadius: '20px' }}>
                    {/* Stadium Outer Ring */}
                    <ellipse cx="400" cy="300" rx="380" ry="280" fill="#1a1a1a" stroke="#333" strokeWidth="4" />
                    {/* Pitch / Court */}
                    <rect x="250" y="150" width="300" height="300" rx="20" fill="#1a1a1a" stroke="var(--accent-primary-dim)" strokeWidth="4" />
                    {/* Sections */}
                    <path d="M 400 20 L 780 300 L 400 580 L 20 300 Z" fill="none" stroke="#222" strokeWidth="2" strokeDasharray="10 10"/>
                    <text x="400" y="310" fill="var(--text-secondary)" fontSize="24" textAnchor="middle" opacity="0.3">FIELD</text>
                  </svg>

                  {/* Draw POIs as floating markers */}
                  {MOCK_POIS.map((poi) => {
                    const status = getWaitStatus(poi.wait_time);
                    // On floor 2, only show some POIs (mock logic)
                    if (floor === 2 && parseInt(poi.section) < 200) return null;
                    if (floor === 1 && parseInt(poi.section) >= 200) return null;

                    return (
                      <div 
                        key={poi.id} 
                        className={`map-marker status-${status}`}
                        style={{ left: poi.coords.x, top: poi.coords.y }}
                      >
                        <div className="marker-dot"></div>
                        <div className="marker-label">
                          <span className="marker-name">{poi.name}</span>
                          <span className="marker-time">{poi.wait_time}m</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </TransformComponent>
            </>
          )}
        </TransformWrapper>
      </div>
    </div>
  );
};

export default VenueMap;
