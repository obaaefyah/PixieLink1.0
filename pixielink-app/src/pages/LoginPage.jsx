import React from 'react';

const LoginPage = ({ setAuthenticated }) => {
  const handleLogin = () => {
    // Perform login logic
    setAuthenticated(true); // Set authenticated to true upon successful login
  };

  return (
    <div className="py-5">
      <h2 className="text-center">Login</h2>
      <button className="btn btn-primary" onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
