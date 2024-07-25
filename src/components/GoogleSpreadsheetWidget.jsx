// digital-notice-board/src/components/GoogleSpreadsheetWidget.jsx
import React from 'react';
import '../App.css';

const GoogleSpreadsheetWidget = ({ embedUrl }) => {
  return (
    <div className="google-spreadsheet-widget">
      <h2>Google Spreadsheet</h2>
      <iframe
        src={embedUrl}
        width="600"
        height="400"
        frameBorder="0"
        allowFullScreen
        title="Google Spreadsheet"
      ></iframe>
    </div>
  );
};

export default GoogleSpreadsheetWidget;
