import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import '../project.css';

const TaskModal = ({ isOpen, onClose, tasks }) => {
  //this is the custom modal for displaying list
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="modalContainer">
        <Typography className="modalTitle" variant="h6" component="h2">
          All Tasks
        </Typography>
        <Button onClick={onClose}>Close</Button>
        <Box className="taskContainer">
          {tasks.map((task, index) => (
            <div className="task" key={task.id}>
              <p className="taskNumber">{index + 1}.</p>
              <div className="taskContent">
                <p className="taskTitle">{task.title}</p>
                <p className="taskTime">{task.time}</p>
              </div>
            </div>
          ))}
        </Box>
       
      </Box>
    </Modal>
  );
};

export default TaskModal;
