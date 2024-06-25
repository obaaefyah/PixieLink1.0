import React from 'react';
import QRCode from 'qrcode.react'; // Correct import statement

const QRCodeGenerator = ({ url }) => {
  return (
    <div>
      <h3>QR Code:</h3>
      <QRCode value={url} />
    </div>
  );
};

export default QRCodeGenerator;
