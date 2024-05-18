// components/TaskList.js

import React, { useEffect, useState } from 'react';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('/api/tasks')
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((err) => console.error('Error fetching tasks:', err));
  }, []);

  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.task_id}>
            {task.description} - Assigned to {task.staff.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

