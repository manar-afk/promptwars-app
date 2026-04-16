import React from 'react';
import PropTypes from 'prop-types';
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

WaitTimeBadge.propTypes = {
  waitTime: PropTypes.number.isRequired,
};

export default WaitTimeBadge;
