const initialState = {
    filter: 'SHOW_ALL',
    tasks: [],
  };
  
  function TaskReducer(state = initialState, action) {
    switch (action.type) {
      case 'SET_FILTER': {
        return {
          ...state,
          filter: action.filter,
        };
      }
      case 'ADD_TASK': {
        return {
          ...state,
          tasks: [...state.tasks, action.task],
        };
      }
      case 'TOGGLE_TASK': {
        return {
          ...state,
          tasks: state.tasks.map((task) =>
            task.id === action.taskId ? { ...task, completed: !task.completed } : task
          ),
        };
      }
      case 'UPDATE_TASK': {
        return {
          ...state,
          tasks: state.tasks.map((task) =>
            task.id === action.taskId ? { ...task, ...action.updatedTask } : task
          ),
        };
      }
      case 'DELETE_TASK': {
        return {
          ...state,
          tasks: state.tasks.filter((task) => task.id !== action.taskId),
        };
      }
      default:
        return state;
    }
  }
  
  export default TaskReducer;
  