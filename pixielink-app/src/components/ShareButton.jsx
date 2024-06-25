// ShareButton.jsx

import React from 'react';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';

const ShareButton = ({ url }) => {
  return (
    <div>
      <FacebookShareButton url={url}>Share on Facebook</FacebookShareButton>
      <TwitterShareButton url={url}>Share on Twitter</TwitterShareButton>
      <WhatsappShareButton url={url}>Share on WhatsApp</WhatsappShareButton>
      {/* Add more social media share buttons as needed */}
    </div>
  );
};

export default ShareButton;
