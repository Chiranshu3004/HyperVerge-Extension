// digital-notice-board/src/components/GoogleSlidesWidget.jsx
import React from 'react';
import '../App.css';

const GoogleSlidesWidget = ({ embedUrl }) => {
  return (
    <div className="google-slides-widget">
      {/* <h2>Google Slides</h2> */}
      <iframe
        src={embedUrl}
        width="480"
        height="389"
        frameBorder="0"
        allowFullScreen = "true"
        title="Google Slides"
      ></iframe>
    </div>
  );
};

export default GoogleSlidesWidget;
