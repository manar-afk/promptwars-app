import React from 'react';
import { NavLink } from 'react-router-dom';
import { Map, Clock, Wallet, User } from 'lucide-react';
import './BottomNav.css';

const BottomNav = () => {
  return (
    <nav className="bottom-nav">
      <NavLink className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} to="/map">
        <Map size={24} />
        <span>Map</span>
      </NavLink>
      <NavLink className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} to="/">
        <Clock size={24} />
        <span>Wait Times</span>
      </NavLink>
      <NavLink className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} to="/wallet">
        <Wallet size={24} />
        <span>Wallet</span>
      </NavLink>
      <NavLink className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} to="/profile">
        <User size={24} />
        <span>Profile</span>
      </NavLink>
    </nav>
  );
};

export default BottomNav;
