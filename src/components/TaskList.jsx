import React, { useEffect, useState } from 'react';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { useDispatch, useSelector } from 'react-redux';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { addTask, deleteTask, toggleTask, updateTask } from '../reducers/taskReducer';
import TaskModal from './TaskModal';

export  const  TaskList =  () =>{
  //this is used to render the list
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks.tasks);
 
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  const [truncatedTitles, setTruncatedTitles] = useState({});
  const [expandedTasks, setExpandedTasks] = useState([]);

  const handleDeleteTask = id => {
    dispatch(deleteTask(id));
  };

  const handleUpdateTask = (id, updatedTask) => {
    dispatch(updateTask({ id, updatedTask }));
  };

  const handleToggleTask = id => {
    dispatch(toggleTask({ id }));
  };

  const handleExpandTask = id => {
    if (expandedTasks.includes(id)) {
      setExpandedTasks(expandedTasks.filter(taskId => taskId !== id));
    } else {
      setExpandedTasks([...expandedTasks, id]);
    }
  };

  useEffect(() => {
    // Truncate task titles when component mounts
    const truncated = {};
    tasks.forEach(task => {
      if (task.title.length > 20) {
        truncated[task.id] = task.title.slice(0, 20) + '...';
      } else {
        truncated[task.id] = task.title;
      }
    });
    setTruncatedTitles(truncated);
  }, [tasks]);

  return (
    <div className='container'>
      <div className='list'>
        {tasks && tasks.length > 0 && tasks.map((task, idx) => (
          <>
         

          <div className={`task-items ${task.completed ? 'completed' : ''}`} key={task.id}>
            <h3 title={task.title}>{truncatedTitles[task.id]}</h3>
            <div className='utils'>
              <button onClick={() => handleDeleteTask(task.id)}><DeleteIcon /></button>
              <button onClick={() => handleToggleTask(task.id)}>
                {task.completed ? (
                  <CheckBoxIcon />
                ) : (
                  <CheckBoxOutlineBlankIcon />
                )}
              </button>

             
            </div>
           
          </div>
           <div className='expand-container'>
           {task.title.length > 20 && (
               <button className='icon' onClick={() => handleExpandTask(task.id)}>
                 {expandedTasks.includes(task.id) ? <VisibilityOffIcon /> : <VisibilityIcon />}
               </button>
             )}
           {expandedTasks.includes(task.id) && (
             <p className='expandedtext'>{task.title}</p>
           )}

           </div>
           </>
        ))}
      </div>
      {tasks.length > 0 && (
  <button onClick={() => setIsModalOpen(true)} className='view-all'>
    <span>
      View All
    </span>
  </button>
)}
<TaskModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} tasks={tasks} />
      
    </div>
  );
};




