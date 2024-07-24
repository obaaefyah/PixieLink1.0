import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = ({ authenticated }) => {
  const brandStyle = {
    color: '#333',
    fontSize: '1.5rem',
    fontWeight: 700,
    fontFamily: 'Poppins',
    textDecoration: 'none',
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand" style={brandStyle}>PixieLink</Link>
        <div className="navbar-links">
          <Link className="navbar-link" to="/">Home</Link>
          {!authenticated && <Link className="navbar-link" to="/signup">Sign Up</Link>}
          {!authenticated && <Link className="navbar-link" to="/login">Login</Link>}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
