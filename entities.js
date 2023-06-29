// Create state
// hold state
// get state getState();
// update state dispatch()
// subscribe listener subscribe(listener)

import { reducerCake, reducerIceCreame } from './reducer';

import { createStore, combineReducers } from 'redux';

//combine reducers;
const rootReducer = combineReducers({
  cake: reducerCake,
  ice: reducerIceCreame,
});
const store = createStore(rootReducer);
export default store;
