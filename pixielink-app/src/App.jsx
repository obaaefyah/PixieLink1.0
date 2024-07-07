import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import URLDisplay from './components/URLDisplay';
import SignUp from './components/SignUp';
import Login from './components/Login';
import './App.css';
import './components/NavBar.css'; 
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Shortener from './components/Shortener';
import Logout from './components/Logout';

const brandStyle = {
  color: 'orange',
  fontSize: '1.5rem',
  fontWeight: 700,
  fontFamily: "'Poppins', sans-serif",
  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
};

const App = () => {
  const [authenticated, setAuthenticated] = useState(!!localStorage.getItem('currentUser'));

  return (
    <div className='App'>
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
            {authenticated && <Logout setAuthenticated={setAuthenticated} />}
          </ul>
        </div>
      </nav>
      <div className='container'>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/urls" element={<URLDisplay />} />
        <Route path="/signup" element={<SignUp setAuthenticated={setAuthenticated} />} />
        <Route path="/login" element={<Login setAuthenticated={setAuthenticated} />} />
        <Route path="/shortener" element={<Shortener />} />
      </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;