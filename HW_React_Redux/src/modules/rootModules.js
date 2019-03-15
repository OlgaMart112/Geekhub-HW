import { combineReducers } from 'redux';
import NoteReducer from './notes/NoteReducer';

export default combineReducers({
  notes: NoteReducer,

});
