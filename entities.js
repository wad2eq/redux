import {
  fetchPlayerRequest,
  fetchPlayerSuccess,
  fetchPlayerfailure,
  FETCH_PLAYERS_REQUESTS,
  FETCH_PLAYERS_SUCCESS,
  FETCH_PLAYERS_FAILURE,
} from './actions.js';

import { reducerCake, reducerIceCreame } from './reducer';
import logger from 'redux-logger';

import { createStore, combineReducers, applyMiddleware } from 'redux';

const inistialState = {
  loading: false,
  data: [],
  error: '',
};

const player_reducer = (state = inistialState, action) => {
  switch (action) {
    case FETCH_PLAYERS_REQUESTS:
      return {
        ...state,
        loading: true,
      };
      break;
    case FETCH_PLAYERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: '',
      };
      break;
    case FETCH_PLAYERS_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
      break;
    default:
      return state;
  }
};

export const storePlayer = createStore(player_reducer, applyMiddleware(logger));
