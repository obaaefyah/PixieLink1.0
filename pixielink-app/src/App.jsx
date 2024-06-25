import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import URLDisplay from './components/URLDisplay';
import SignUp from './components/SignUp';
import Login from './components/Login';
import './App.css';
import './components/Footer'
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  return (
    <div className="container">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/urls" element={<URLDisplay />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
     <Footer />
     </div>
  );
};

export default App;
