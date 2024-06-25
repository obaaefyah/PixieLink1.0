// URLDisplay.jsx

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ShareButton from './ShareButton'; // Adjust path as necessary

const URLDisplay = () => {
  const { shortUrl } = useParams();

  // Simulated data or logic to map short URL to long URL
  const urlMappings = {
    // Example mapping: replace with your actual logic
    'abc123': 'https://example.com/long-url-1',
    'def456': 'https://example.com/long-url-2',
  };

  useEffect(() => {
    const longUrl = urlMappings[shortUrl];
    if (longUrl) {
      window.location.href = longUrl; // Redirect to long URL
    } else {
      console.error('Shortened URL not found');
    }
  }, [shortUrl]);

  return (
    <div>
      <p>Redirecting...</p>
      <ShareButton url={urlMappings[shortUrl]} />
    </div>
  );
};

export default URLDisplay;
