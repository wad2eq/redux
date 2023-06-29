// Reducer
// (previusState, action) => newState

import { cakes, ice_scream } from './state';
import { BUY_CAKE, BUY_ICECREAM } from './actions';

export const reducerCake = (currentState = cakes, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return { ...currentState, numberofCake: currentState.numberofCake - 1 };
    default:
      return currentState;
  }
};

export const reducerIceCreame = (currentState = ice_scream, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...currentState,
        numberofIceCream: currentState.numberofIceCream - 1,
      };
    default:
      return currentState;
  }
};

export default reducerCake;
