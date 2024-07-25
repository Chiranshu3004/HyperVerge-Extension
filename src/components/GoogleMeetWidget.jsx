import React, { useState } from 'react';
import '../App.css';

const GoogleMeetPage = () => {
  const [meetingCode, setMeetingCode] = useState('');

  const handleJoin = () => {
    if (meetingCode.trim()) {
      let meetUrl = meetingCode.trim();
      // If the user enters only the code, prepend the Google Meet base URL
      if (!meetUrl.startsWith('http')) {
        meetUrl = `https://meet.google.com/${meetUrl}`;
      }
      window.location.href = meetUrl;
    } else {
      alert('Please enter a meeting code or link.');
    }
  };

  return (
    <div className="google-meet-page">
      <div className="header">
        <img src="https://play-lh.googleusercontent.com/6wvcwcC_v4bBwA7K1eDoKw_PDtvdpHwhKAisZftnoY_Jn94Rjh7u7YSV0IEn9uZM2A=w600-h300-pc0xffffff-pd" alt="Google Meet" className="logo" />
        <h2>Google Meet</h2>
      </div>
      <div className="content">
        <h1>Video calls and meetings for everyone</h1>
        <p>Connect, collaborate and celebrate from anywhere with Google Meet</p>
        <div className="meeting-options">
          <button className="new-meeting-button">New meeting</button>
          <input
            type="text"
            placeholder="Enter a code or link"
            className="meeting-code-input"
            value={meetingCode}
            onChange={(e) => setMeetingCode(e.target.value)}
          />
          <button className="join-button" onClick={handleJoin}>Join</button>
        </div>
        <p className="learn-more">
          <a href="https://support.google.com/meet/?hl=en#topic=7306097" target="_blank" rel="noopener noreferrer">Learn more</a> about Google Meet
        </p>
      </div>
    </div>
  );
};

export default GoogleMeetPage;
