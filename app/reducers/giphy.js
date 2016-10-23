import { handleActions } from 'redux-actions';

import {
  GET_SEARCH_GIFS_PENDING,
  GET_SEARCH_GIFS_FAILURE,
  GET_SEARCH_GIFS_SUCCESS,
  getPending, getError, getSuccess,
} from '../actions/giphy';

const actionMap = {
  [GET_SEARCH_GIFS_PENDING]: getPending,
  [GET_SEARCH_GIFS_FAILURE]: getError,
  [GET_SEARCH_GIFS_SUCCESS]: getSuccess,
};

const initialGiphyStore = {
  data: [],
  meta: { after: null },
};

export const giphyReducer = handleActions(actionMap, initialGiphyStore);
export default giphyReducer;
