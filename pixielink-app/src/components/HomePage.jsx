import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import img1 from '../assets/img1.png';

const HomePage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/signup');
  };

  return (
    <div className="homepage">
      <div className="text-content">
        <h1>Welcome to PixieLink!</h1>
        <p className="lead">
          Shorten your links easily and securely with us.
        </p>
        <hr className="my-4" />
        <p>"Short links, big results."</p>
        <button className="btn btn-primary btn-lg" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
      <div className="image-content">
        <img 
          src={img1} 
          alt="Description of image" 
          className="img-fluid"
        />
      </div>
    </div>
  );
};

export default HomePage;
