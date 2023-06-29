// Reducer
// (previusState, action) => newState

import state from './state';
import { BUY_CAKE } from './actions';

const reducer = ({ currentState = state, action }) => {
  switch (action.type) {
    case BUY_CAKE:
      console.log('reducer');
      console.log(currentState);
      return { ...currentState, numberofCake: currentState.numberofCake - 1 };
    default:
      return state;
  }
};

export default reducer;
