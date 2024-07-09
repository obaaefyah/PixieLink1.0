import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; 


const NavBar = ({ authenticated}) => {
  const brandStyle = {
    color: 'orange',
    fontSize: '1.5rem',
    fontWeight: 700,
    fontFamily: 'Poppins',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <span className="navbar-brand" style={brandStyle}>PixieLink</span> 
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          {!authenticated && (
          <li className="nav-item">
            <Link className="nav-link" to="/signup">Sign Up</Link>
          </li>
          )}
          {!authenticated && (
          <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
          </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
