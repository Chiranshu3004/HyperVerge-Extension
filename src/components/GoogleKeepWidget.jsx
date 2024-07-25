import React, {useState} from 'react';
import '../App.css';

const GoogleKeepPage = () => {
    const [notes, setNotes] = useState([
        "मेरी आँखों में\nउदासी कभी देख सकत नहीं\nतुझे खुश मैं रहूँगा सदा ये वादा है",
        "Kisi ne kya khub kaha h ki\nPani peena h to \nGlass se piyo\nbisleri bottle m kya rakha h (×2)\nOr sarva karni h to \nMaa baap ki Karo\nInn Ladkiyo m kya rakha h ",
        "Problem yeh hai ki woh ladki hai. aur kya problem hai\nProblem yeh hai ki main chahta hoon ki meri life mein koi problem na ho\nLekin agar meri life mein koi problem na ho toh yeh uski life ki sabse badi problem h"
      ]);
    
      const [newNote, setNewNote] = useState('');
    
      const handleAddNote = () => {
        if (newNote.trim()) {
          setNotes([...notes, newNote.trim()]);
          setNewNote('');
        }
      };

  return (
    <div className="google-keep-container">
      <div className="google-keep-page">
        <div className="sidebar">
          <ul>
            <li>Notes</li>
            <li>Reminders</li>
            <li>Edit labels</li>
            <li>Archive</li>
            <li>Bin</li>
          </ul>
        </div>
        <div className="main-content">
          <div className="header">
            <img src="https://www.google.com/images/icons/product/keep-512.png" alt="Google Keep" className="logo" />
            <h2>Google Keep</h2>
          </div>
          <div className="note-input">
            <input type="text" placeholder="Take a note..." className="note-input-field" value={newNote}
              onChange={(e) => setNewNote(e.target.value)} />
            <button className="add-note-button" onClick={handleAddNote}>Add Note</button>
          </div>
          <div className="notes-grid">
            {notes.map((note, index) => (
              <div key={index} className="note-card">
                {note.split('\n').map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleKeepPage;