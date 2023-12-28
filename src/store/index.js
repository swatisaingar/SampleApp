import { createStore } from 'redux';
import itemReducer from './itemReducer';
// import counterReducer from './reducer';

const store = createStore(itemReducer);

export default store