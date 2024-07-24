// LandingPage.js
import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div>
            <header>
                <div className="header-container">
                    <div className="logo">PixieLink</div>
                    <nav>
                        <a href="#features">Features</a>
                        <a href="#pricing">Pricing</a>
                        <a href="#about">About</a>
                        <a href="#contact">Contact</a>
                    </nav>
                </div>
            </header>
            <main className="main-section">
                <div className="content">
                    <h1>Short Links, Big Results</h1>
                    <p>Create, share, and track your links effortlessly.</p>
                    <button className="btn">Get Started</button>
                </div>
            </main>
            <footer>
                <p>&copy; 2024 PixieLink. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default LandingPage;
