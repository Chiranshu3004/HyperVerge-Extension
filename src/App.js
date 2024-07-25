// digital-notice-board/src/App.js
import React from 'react';
import GoogleSlidesWidget from './components/GoogleSlidesWidget';
import PomodoroTimer from './components/PomodoroTimer';
import AnnouncementsWidget from './components/AnnouncementsWidget';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import Music from './components/Music';
import PollWidget from './components/PollWidget';
import GoogleFormWidget from './components/GoogleFormWidget';
import Calendar from './components/Calendar';
import GoogleMeetWidget from './components/GoogleMeetWidget';
import GoogleKeepWidget from './components/GoogleKeepWidget';
import ChatBoxWidget from './components/ChatBoxWidget';

function App() {
  const googleSlidesUrl = "https://docs.google.com/presentation/d/1p6me5sl66FH0YNmidoOfyjmEoa1eNiJk-ZwRCYXHfdA/edit#slide=id.gc6f80d1ff_0_5";
  const announcements = [
    "Company meeting at 10 AM",
    "New policy updates available on the intranet",
    "Lunch and learn session on Friday",
  ];

  return (
    <div className="App">
      <h1>Digital Notice Board</h1>
      <div className="main-container">
        <div className="top-container">
          <GoogleSlidesWidget embedUrl={googleSlidesUrl} />
          <PomodoroTimer />
        </div>
        <div className="middle-container">
          <div className="left-side">
            <div className="upper-left">
              <div className="left-column">
                <AnnouncementsWidget announcements={announcements} />
                <Music />
              </div>
              <div className="middle-column">
                <PollWidget />
              </div>
            </div>
            <div className="bottom-container">
              <Calendar />
            </div>
          </div>
          <div className="right-column">
            <GoogleFormWidget />
            <GoogleMeetWidget/>
          </div>
        </div>
        <div className="upper-left">
          <div className="middle-column">
            <GoogleKeepWidget />  
          </div>
          <div className="left-column">
            <ChatBoxWidget/>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
