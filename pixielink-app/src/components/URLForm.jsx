import React from 'react';

const URLForm = () => {
  // Fetch user information from localStorage or context
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  // Check if user is authenticated
  if (!currentUser) {
    // Redirect user to login page if not authenticated
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <h2>URL Form</h2>
      {/* Your URL form and QR code generation components */}
    </div>
  );
};

export default URLForm;
