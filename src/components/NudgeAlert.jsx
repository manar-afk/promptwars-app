import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { AlertCircle, X } from 'lucide-react';
import { MOCK_USER_STATE, MOCK_CONGESTION } from '../data/mockData';
import './NudgeAlert.css';

const NudgeAlert = ({ customMessage }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Determine congestion
    if (customMessage) {
        setMessage(customMessage);
        setIsVisible(true);
    } else {
        const currentSection = MOCK_USER_STATE.currentSection;
        if (MOCK_CONGESTION[currentSection] === 'High') {
            setMessage(`Section ${currentSection} is very crowded. We recommend visiting the Quiet Zone near Section 104.`);
            
            // Artificial delay to simulate dynamic trigger
            const timer = setTimeout(() => setIsVisible(true), 2000);
            return () => clearTimeout(timer);
        }
    }
  }, [customMessage]);

  if (!isVisible) return null;

  return (
    <div className="nudge-alert slide-in-top">
      <div className="nudge-icon">
        <AlertCircle size={24} color="var(--bg-color)" />
      </div>
      <div className="nudge-content">
        <h4>Congestion Alert</h4>
        <p>{message}</p>
      </div>
      <button className="nudge-close" onClick={() => setIsVisible(false)}>
        <X size={20} />
      </button>
    </div>
  );
};

NudgeAlert.propTypes = {
  customMessage: PropTypes.string,
};

export default NudgeAlert;
