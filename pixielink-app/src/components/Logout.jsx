import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = ({setAuthenticated}) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setAuthenticated(false)
    navigate('/login');
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
};

export default Logout;