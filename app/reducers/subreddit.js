import { handleActions } from 'redux-actions';

import {
  GET_SUBREDDIT_PENDING,
  GET_SUBREDDIT_FAILURE,
  GET_SUBREDDIT_SUCCESS,
  getPending, getError, getSuccess,
} from '../actions/subredditEntry';
import { FETCH_STATES } from '../constants';
import { checkStatus, subResponseToUsableData } from '../helpers/fetchHelpers';


const actionMap = {
  [GET_SUBREDDIT_PENDING]: getPending,
  [GET_SUBREDDIT_FAILURE]: getError,
  [GET_SUBREDDIT_SUCCESS]: getSuccess,
};

export const fetchSubreddit = () =>
  (dispatch, getState) => {
    const { after } = getState().subreddit.meta;
    const url = `https://www.reddit.com/r/pics/hot.json${after ? `?after=${after}` : ''}`;
    return fetch(url)
      .then((response) => checkStatus(response))
      .then((response) => response.json())
      .then((response) => subResponseToUsableData(response))
      .then((payload) => { dispatch({ type: GET_SUBREDDIT_SUCCESS, payload }); })
      .catch((payload) => { dispatch({ type: GET_SUBREDDIT_FAILURE, payload }); });
  };

const shouldFetchSubreddit = ({ subreddit }) => {
  if (subreddit.meta.fetchState === FETCH_STATES.PENDING) {
    // don't interrupt a load.
    return false;
  } else if (subreddit.data.length === 0) {
    // If this is request 0
    return true;
  }
  return false;
};

export const fetchSubredditIfNeeded = () =>
  (dispatch, getState) => {
    const state = getState();
    if (shouldFetchSubreddit(state)) {
      return dispatch(fetchSubreddit(state));
    }
    return undefined;
  };

const initialSubredditStore = {
  data: [],
  meta: { after: null },
};

export const subredditReducer = handleActions(actionMap, initialSubredditStore);
