//right side of landing page that contains both list and input component
import "../project.css"
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TaskList } from "./TaskList";
import TaskInput from './TaskInput';
import { addTask } from '../reducers/taskReducer';

const RightView = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks);

  useEffect(() => {
    try {
      const storedTask = JSON.parse(localStorage.getItem('tasks'));
      const storedTasks = storedTask.tasks
      if (Array.isArray(storedTasks)) {
        storedTasks.forEach(task => dispatch(addTask(task)));
      } else if (storedTasks !== null) {
        console.error('Invalid data format in localStorage for key "tasks"');
        // Handle the error or clear the localStorage data
      }
    } catch (error) {
      console.error('Error parsing localStorage data:', error);
      // Handle the error
    }
  }, [dispatch]);
  
  
  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className='box-right-view'>
      <h1>List.</h1>
      <TaskList />
      <TaskInput />
    </div>
  );
};

export default RightView;
