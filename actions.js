export const FETCH_PLAYERS_REQUESTS = 'FETCH_PLAYERS_REQUESTS';
export const FETCH_PLAYERS_SUCCESS = 'FETCH_PLAYERS_SUCCESS';
export const FETCH_PLAYERS_FAILURE = 'FETCH_PLAYERS_FAILURE';

export const fetchPlayerRequest = () => ({
  type: FETCH_PLAYERS_REQUESTS,
});

export const fetchPlayerSuccess = () => ({
  type: FETCH_PLAYERS_FAILURE,
  payload: users,
});
export const fetchPlayerfailure = () => ({
  type: FETCH_PLAYERS_FAILURE,
  payload: 'No players were find',
});

export default {
  fetchPlayerRequest,
  fetchPlayerSuccess,
  fetchPlayerfailure,
  FETCH_PLAYERS_REQUESTS,
  FETCH_PLAYERS_SUCCESS,
  FETCH_PLAYERS_FAILURE,
};
