import React, { useState } from 'react';
import './App.css';

function App() {
  // State to manage the list of tasks
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  // Function to handle task addition
  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask(""); // Clear input field after adding task
    }
  };

  // Function to handle task removal
  const handleRemoveTask = (index) => {
    setTasks(tasks.filter((_, idx) => idx !== index));
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      
      {/* Input field to add task */}
      <input 
        type="text" 
        placeholder="Add a task" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
      />
      
      <button onClick={handleAddTask}>Add Task</button>

      {/* Render tasks */}
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task} <button onClick={() => handleRemoveTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
