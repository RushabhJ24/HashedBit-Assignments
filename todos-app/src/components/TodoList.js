import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TodoList.css';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleEditTask = (id, newText) => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        return { ...task, text: newText };
      }
      return task;
    }));
  };

  const handleToggleComplete = (id) => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    }));
  };

  return (
    <div className="container py-4 border rounded shadow bg-light mt-3">
      <h1 className="text-center mb-4 todo">TODO LIST APP</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add new task"
        />
        <button className="btn btn-primary" onClick={handleAddTask}>Add</button>
      </div>
      <ul className="list-group">
        {/* {tasks.sort((a, b) => a.text.localeCompare(b.text)).map(task => (
          <li key={task.id} className={`list-group-item ${task.completed ? 'completed' : ''}`}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleComplete(task.id)}
              className="form-check-input me-2"
            />
            <span className="task-text">{task.text}</span>
            <button className="btn btn-secondary btn-sm ms-2" onClick={() => handleEditTask(task.id, prompt('Edit task:', task.text))}>Edit</button>
            <button className="btn btn-danger btn-sm ms-2" onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))} */}
        {/* {tasks.sort((a, b) => a.text.localeCompare(b.text)).map(task => ( */}
          {tasks.map(task => (
          <li key={task.id} className={`list-group-item ${task.completed ? 'completed' : ''}`}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleComplete(task.id)}
              className="form-check-input me-2"
            />
            <span className="task-text">{task.text}</span>
            <button className="btn btn-secondary btn-sm ms-2" onClick={() => handleEditTask(task.id, prompt('Edit task:', task.text))}>Edit</button>
            <button className="btn btn-danger btn-sm ms-2" onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
