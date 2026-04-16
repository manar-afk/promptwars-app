import React from 'react';
import { NavLink } from 'react-router-dom';
import { Map, Clock, Wallet, User } from 'lucide-react';
import './BottomNav.css';

const BottomNav = () => {
  return (
    <nav className="bottom-nav" aria-label="Main Navigation">
      <NavLink className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} to="/map" aria-label="Venue Map">
        <Map size={24} aria-hidden="true" />
        <span>Map</span>
      </NavLink>
      <NavLink className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} to="/" aria-label="Wait Times Dashboard">
        <Clock size={24} aria-hidden="true" />
        <span>Wait Times</span>
      </NavLink>
      <NavLink className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} to="/wallet" aria-label="Digital Wallet">
        <Wallet size={24} aria-hidden="true" />
        <span>Wallet</span>
      </NavLink>
      <NavLink className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} to="/profile" aria-label="User Profile">
        <User size={24} aria-hidden="true" />
        <span>Profile</span>
      </NavLink>
    </nav>
  );
};

export default BottomNav;
