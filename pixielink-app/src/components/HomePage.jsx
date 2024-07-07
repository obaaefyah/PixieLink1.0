import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import img1 from '../assets/img1.png'

const HomePage = () => {
  const navigate = useNavigate(); 

  const handleGetStarted = () => {
    navigate('/signup'); 
  };

  return (
    <div className="homepage">
      <Container fluid>
        <Row>
          <Col md={6}>
            <div className="jumbotron">
              <h1>Welcome to PixieLink!</h1>
              <p className="lead">
                Shorten your links easily and securely with us.
              </p>
              <hr className="my-4" />
              <p>"Short links, big results."</p>
              {/* Use onClick event handler for navigation */}
              <Button variant="primary" size="lg" onClick={handleGetStarted}>
                Get Started
              </Button>
            </div>
          </Col>
          <Col md={6}>
            <div className="image-container">
              <img 
                src={img1} 
                alt="Description of image" 
                className="img-fluid"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
