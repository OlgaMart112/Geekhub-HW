import { combineReducers } from 'redux';
import types from './NoteActionsType';

function itemsReducer(state = [], { type, payload }) {
  switch (type) {
    case types.ADD:
      return [...state, payload];

      case types.EDIT:
     return state.map(item => item.id === payload ? {...item, editing: !item.editing} :item)
     
    case types.DELETE:
      return state.filter(item => item.id !== payload);

    case types.UPDATE:
      return state.map(item => item.id === payload.id ? { ...item, editing: !item.editing, text : payload.data} : item)

    case types.TOOGLE_COMLITED:
      return state.map(item =>
        item.id === payload ? { ...item, completed: !item.completed } : item
      )
    
    default:
      return state;
  }
}


function filterReducer(state = '', { type, payload }) {
  switch (type) {
    case types.CHANGE_FILTER:
      return payload;

    default:
      return state;
  }
}

export default combineReducers({
  items : itemsReducer,
  filter: filterReducer,
});
