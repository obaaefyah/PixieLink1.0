import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './HomePage.css'; // Import your custom CSS file for styling

const HomePage = () => {
  return (
    <div className="home-page">
      <Container className="py-5">
        <div className="jumbotron">
          <h1>Welcome to PixieLink!</h1>
          <p className="lead">
            Shorten your links easily and securely with us.
          </p>
          <hr className="my-4" />
          <p>
            "Short links, big results."
          </p>
          {/* Use Link component from react-router-dom for navigation */}
          <Link to="/signup">
            <Button variant="primary" size="lg">
              Get Started
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
