import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QRCode from 'qrcode.react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import './Shortener.css';

const Shortener = () => {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showQRCode, setShowQRCode] = useState(false);
  const [copySuccess, setCopySuccess] = useState('');
  const [shareError, setShareError] = useState('');

  useEffect(() => {
    setShowQRCode(false);
    setCopySuccess('');
    setShareError('');
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

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortenedUrl).then(() => {
      setCopySuccess('Copied to clipboard!');
      setTimeout(() => setCopySuccess(''), 3000); 
    }, (err) => {
      setCopySuccess('Failed to copy!');
    });
  };

  const shareUrl = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'Shortened URL',
          url: shortenedUrl
        });
      } else {
        setShareError('Web Share API is not supported in your browser.');
      }
    } catch (error) {
      setShareError('Failed to share URL.');
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
            <div className="d-flex align-items-center">
              <p className="mb-0">
                Shortened URL: <a href={shortenedUrl} target="_blank" rel="noopener noreferrer">{shortenedUrl}</a>
              </p>
              <button className="btn btn-secondary ms-3" onClick={copyToClipboard}>
                <FontAwesomeIcon icon={faCopy} /> Copy
              </button>
              {copySuccess && <span className="text-success ms-2">{copySuccess}</span>}
              <button className="btn btn-secondary ms-2" onClick={shareUrl}>
                <FontAwesomeIcon icon={faShareAlt} /> Share
              </button>
              {shareError && <span className="text-danger ms-2">{shareError}</span>}
            </div>
          )}
          {showQRCode && shortenedUrl && (
            <div className="card mt-3">
              <div className="card-body">
                <QRCode value={shortenedUrl} />
              </div>
            </div>
          )}
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
