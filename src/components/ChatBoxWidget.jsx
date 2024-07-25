import React from 'react';
import '../App.css';

const ChatBoxWidget = () => {
  return (
    <div className="widget chat-box-widget p-4">
      <iframe 
        src="https://docs.google.com/spreadsheets/d/149sMO4tz86TdkY2hU5oLB4VfCXzfG_jCCPvAEygoQp8/edit?usp=sharing" 
        className="chat-box-iframe"
        title="Google Sheets"
      ></iframe>
    </div>
  );
}

export default ChatBoxWidget;
