import shortid from 'shortid';
import types from './NoteActionsType';

const addNote = text => ({
  type: types.ADD,
  payload: {
    id: shortid.generate(),
    text,
    completed: false,
    editing : false,
  },
});

const updateNote = ({ id, data }) =>({  
  type: types.UPDATE,
  payload:{
     id,
     data
  }
})
const deleteNote = id => ({
  type: types.DELETE,
  payload: id,
});

const editNote = id => ({
  type: types.EDIT,
  payload: id,
});

const toggleNote = id => ({
  type: types.TOOGLE_COMLITED,
  payload: id,
});

const changeFilter = filter => ({
  type: types.CHANGE_FILTER,
  payload: filter,
});
export default { addNote, deleteNote, toggleNote, editNote, updateNote, changeFilter };
