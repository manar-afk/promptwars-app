import React from 'react';
import { Construction } from 'lucide-react';

const Placeholder = ({ title }) => {
  return (
    <div style={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      textAlign: 'center',
      color: 'var(--text-secondary)'
    }}>
      <Construction size={48} style={{ marginBottom: '16px', opacity: 0.5 }} />
      <h2>{title}</h2>
      <p style={{ marginTop: '8px' }}>This section is currently under construction for the prototype.</p>
    </div>
  );
};

export default Placeholder;
