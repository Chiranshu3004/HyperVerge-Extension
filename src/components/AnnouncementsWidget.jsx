// digital-notice-board/src/components/AnnouncementsWidget.jsx
import React from 'react';
import '../App.css';

const AnnouncementsWidget = ({ announcements }) => {
  return (
    <div className="announcements-widget">
      <h2>Announcements</h2>
      <ul>
        {announcements.map((announcement, index) => (
          <li key={index}>{announcement}</li>
        ))}
      </ul>
    </div>
  );
};

export default AnnouncementsWidget;
