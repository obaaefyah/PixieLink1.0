import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = ({setAuthenticated}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Check if email already exists
    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
      setError('Email already exists. Please choose another one.');
      return;
    }

    // Add new user to localStorage
    const newUser = { email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    // Set current user and redirect to login or another route
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    setAuthenticated(true)
    navigate('/shortener');
  };

  return (
    <div className="signup">
      <h1>Sign Up</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleSignUp}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
