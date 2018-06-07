import { combineReducers } from 'redux'
import input from './input';
import suggestions from './suggestions';

export default combineReducers({
  input,
  suggestions
});