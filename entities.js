// Create state
// hold state
// get state getState();
// update state dispatch()
// subscribe listener subscribe(listener)

import { reducerCake, reducerIceCreame } from './reducer';
import logger from 'redux-logger';

import { createStore, combineReducers, applyMiddleware } from 'redux';

// Dodanie tej funkcji powoduje błąd reduxa
function custLog(state) {
  return (next) => (action) => {
    console.log('aasdasd');
    return next(action);
  };
}

//combine reducers;
const rootReducer = combineReducers({
  cake: reducerCake,
  ice: reducerIceCreame,
});
const store = createStore(rootReducer, applyMiddleware(logger));
export default store;
