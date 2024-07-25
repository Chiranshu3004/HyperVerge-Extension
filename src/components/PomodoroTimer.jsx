// digital-notice-board/src/components/PomodoroTimer.jsx
import React, { useState, useEffect } from 'react';
import '../App.css';

const PomodoroTimer = () => {
  const [time, setTime] = useState(1500); // Default to 25 minutes
  const [isActive, setIsActive] = useState(false);
  const [sessionType, setSessionType] = useState("Pomodoro");
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  useEffect(() => {
    let interval = null;
    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime(time - 1);
      }, 1000);
    } else if (time === 0) {
      setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  const handleSessionChange = (type) => {
    setSessionType(type);
    switch (type) {
      case "Pomodoro":
        setTime(1500); // 25 minutes
        break;
      case "Short Break":
        setTime(300); // 5 minutes
        break;
      case "Long Break":
        setTime(900); // 15 minutes
        break;
      default:
        setTime(1500);
    }
    setIsActive(false);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const handleStartPause = () => {
    setIsActive(!isActive);
  };

  const handleReset = () => {
    setIsActive(false);
    handleSessionChange(sessionType);
  };

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask("");
    }
  };

  const clearTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = tasks.map((t, i) => {
      if (i === index) {
        return { ...t, completed: !t.completed };
      }
      return t;
    });
    setTasks(newTasks);
  };

  return (
    <div className="pomodoro-timer-container">
      <div className="pomodoro-timer">
        <h2>{sessionType}</h2>
        <div className="session-buttons">
          <button onClick={() => handleSessionChange("Pomodoro")} className="red-button">Pomodoro</button>
          <button onClick={() => handleSessionChange("Short Break")} className="red-button">Short Break</button>
          <button onClick={() => handleSessionChange("Long Break")} className="red-button">Long Break</button>
        </div>
        <div className="timer red-background">{formatTime(time)}</div>
        <div className="controls">
          <button onClick={handleStartPause} className="red-button">
            {isActive ? 'Pause' : 'Start'}
          </button>
          <button onClick={handleReset} className="red-button">Reset</button>
        </div>
      </div>
      <div className="tasks">
        <h3>Tasks</h3>
        <input 
          type="text" 
          value={task} 
          onChange={(e) => setTask(e.target.value)} 
          placeholder="Add new task" 
        />
        <button className="add-task-btn" onClick={addTask}>+ Add Task</button>
        <ul>
          {tasks.map((t, index) => (
            <li key={index} className={t.completed ? 'completed-task' : ''}>
              <input 
                type="checkbox" 
                checked={t.completed} 
                onChange={() => toggleTaskCompletion(index)} 
              />
              {t.text}
              <button className="delete-task-btn" onClick={() => clearTask(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PomodoroTimer;
