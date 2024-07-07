import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QRCode from 'qrcode.react'; 
import './Shortener.css'

const Shortener = () => {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showQRCode, setShowQRCode] = useState(false);

  useEffect(() => {
    setShowQRCode(false);
  }, [shortenedUrl]); 

  const shortenUrl = async () => {
    try {
      const response = await axios.get(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(originalUrl)}`);
      setShortenedUrl(response.data);
      setErrorMessage('');
    } catch (error) {
      setShortenedUrl('');
      setErrorMessage('Failed to shorten URL. Please try again later.');
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">URL Shortener</h1>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter URL to shorten"
              value={originalUrl}
              onChange={(e) => setOriginalUrl(e.target.value)}
            />
            <button className="btn btn-primary" type="button" onClick={shortenUrl}>Shorten</button>
          </div>
          {errorMessage && <p className="text-danger">{errorMessage}</p>}
          {shortenedUrl && (
            <div>
              <p>
                Shortened URL: <a href={shortenedUrl} target="_blank" rel="noopener noreferrer">{shortenedUrl}</a>
              </p>
            </div>
          )}
          {showQRCode && shortenedUrl &&
            <div className="card mt-3">
              <div className="card-body">
                <QRCode value={shortenedUrl} />
              </div>
            </div>
          }
          {shortenedUrl && (
            <button className="btn btn-info mt-3" onClick={() => setShowQRCode(!showQRCode)}>
              {showQRCode ? 'Hide QR Code' : 'Show QR Code'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shortener;
