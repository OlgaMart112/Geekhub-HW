import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootModules from '../modules/rootModules';

const enhancer = composeWithDevTools();

const store = createStore(rootModules, enhancer);

export default store;
