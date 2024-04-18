import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../reducers/taskReducer';
import AddIcon from '@mui/icons-material/Add';

const TaskInput = () => {
  //this component is used to add task in the list
  const [taskTitle, setTaskTitle] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskTitle.trim() !== '') {
      const newTask = { id: Date.now(), title: taskTitle };
      dispatch(addTask(newTask));
      setTaskTitle('');
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent form submission
      handleAddTask();
    }
  };

  return (
    <div>
      <form>
        <div className='flexbox'>
          <input
            className='additem'
            type="text"
            placeholder="Enter task title"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button type="button" onClick={handleAddTask}>
            <AddIcon color='white' />
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskInput;
