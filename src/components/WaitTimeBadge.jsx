import React from 'react';
import { getWaitStatus } from '../data/mockData';

import './WaitTimeBadge.css';

const WaitTimeBadge = ({ waitTime }) => {
  const status = getWaitStatus(waitTime);
  
  return (
    <div className={`wait-badge status-${status}`}>
      <span className="wait-badge-min">{waitTime}</span>
      <span className="wait-badge-label">MINS</span>
    </div>
  );
};

export default WaitTimeBadge;
