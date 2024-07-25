import React from 'react';
import '../App.css';
const Calendar = () => {
  return (
    <div>
      <h1>My Google Calendar</h1>
      <iframe src="https://calendar.google.com/calendar/embed?src=hbhagat4579%40gmail.com&ctz=Asia%2FKolkata" style={{ border: 0 }} width="800" height="600" frameborder="0" scrolling="no"></iframe>
    </div>
  );
};

export default Calendar;