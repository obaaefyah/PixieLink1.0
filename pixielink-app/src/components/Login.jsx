import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({setAuthenticated}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); 

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find((user) => user.email === email && user.password === password);
    
    if (!existingUser) {
      setError('Invalid email or password'); 
    } else {
      localStorage.setItem('currentUser', JSON.stringify(existingUser));
      setAuthenticated(true)
      navigate('/shortener');
    }
  };

  return (
    <div className="login">
      <h1>Login</h1>
      {error && <p>{error}</p>} {/* Display error message if there is an error */}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
