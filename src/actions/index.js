export const SET_FILTER = 'SET_FILTER';
export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const DELETE_TASK = 'DELETE_TASK';

export const setFilter = (filter) => ({
  type: SET_FILTER,
  filter,
});

export const addTask = (task) => ({
  type: ADD_TASK,
  task,
});

export const toggleTask = (taskId) => ({
  type: TOGGLE_TASK,
  taskId,
});

export const updateTask = (taskId, updatedTask) => ({
  type: UPDATE_TASK,
  taskId,
  updatedTask,
});

export const deleteTask = (taskId) => ({
  type: DELETE_TASK,
  taskId,
});
