import { createStore, combineReducers } from 'redux';
import TaskReducer from './reducers/TaskReducer';

const rootReducer = combineReducers({
  tasks: TaskReducer,
});

const store = createStore(rootReducer);

export default store;
