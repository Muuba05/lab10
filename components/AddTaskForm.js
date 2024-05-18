// components/AddTaskForm.js

import React, { useState } from 'react';

const AddTaskForm = () => {
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ description }),
    });
    if (response.ok) {
      console.log('Task added successfully');
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter task description"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTaskForm;

