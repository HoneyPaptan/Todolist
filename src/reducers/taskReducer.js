import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
};

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    updateTask: (state, action) => {
      const { id, updatedTask } = action.payload;
      const taskIndex = state.tasks.findIndex(task => task.id === id);
      if (taskIndex !== -1) {
        state.tasks[taskIndex] = updatedTask;
      }
    },
    toggleTask: (state, action) => {
      const { id } = action.payload;
      const task = state.tasks.find(task => task.id === id);
      if (task) {
        task.completed = !task.completed;
      }
    },
  },
});

export const { addTask, deleteTask, updateTask , toggleTask} = taskSlice.actions;

export default taskSlice.reducer;
