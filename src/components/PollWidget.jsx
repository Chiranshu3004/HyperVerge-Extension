// digital-notice-board/src/components/PollWidget.jsx
import React, { useState } from 'react';
import '../App.css';

const PollWidget = () => {
  const [options, setOptions] = useState([
    { id: 1, text: 'C++', votes: 0 },
    { id: 2, text: 'Java', votes: 0 },
    { id: 3, text: 'Python', votes: 0 },
    { id: 4, text: 'JavaScript', votes: 0 },
    { id: 5, text: 'SQL', votes: 0 },
  ]);

  const handleVote = (id) => {
    setOptions(options.map(option => 
      option.id === id ? { ...option, votes: option.votes + 1 } : option
    ));
  };

  const totalVotes = options.reduce((acc, option) => acc + option.votes, 0);

  return (
    <div className="poll-widget">
      <h2>Vote for your favorite Languages</h2>
      {options.map(option => (
        <div key={option.id} className="poll-option">
          <span>{option.text}</span>
          <button 
            className="vote-button" 
            onClick={() => handleVote(option.id)}
          >
            Vote
          </button>
        </div>
      ))}
      <div className="poll-results">
        <h3>Results:</h3>
        {options.map(option => (
          <div key={option.id} className="poll-result">
            <span>{option.text}:</span>
            <div className="poll-bar-container">
              <div 
                className="poll-bar" 
                style={{ width: `${totalVotes > 0 ? (option.votes / totalVotes) * 100 : 0}%` }}
              >
                {option.votes} votes ({totalVotes > 0 ? ((option.votes / totalVotes) * 100).toFixed(2) : 0}%)
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PollWidget;
