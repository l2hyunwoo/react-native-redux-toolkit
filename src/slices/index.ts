import {combineReducers} from 'redux';
import auth from './auth/auth';
import todos from './todos/todos';
import posts from './posts/posts';

const rootReducer = combineReducers({
  auth,
  todos,
  posts,
});
export default rootReducer;
