import { handleActions } from 'redux-actions';

import {
  INCREMENT_OFFSET,
  GET_SEARCH_GIFS_PENDING,
  GET_SEARCH_GIFS_FAILURE,
  GET_SEARCH_GIFS_SUCCESS,
  getPending, getError, getSuccess, incrementOffset
} from '../actions/giphy';

const actionMap = {
  [INCREMENT_OFFSET]: incrementOffset,
  [GET_SEARCH_GIFS_PENDING]: getPending,
  [GET_SEARCH_GIFS_FAILURE]: getError,
  [GET_SEARCH_GIFS_SUCCESS]: getSuccess,
};

const initialGiphyStore = {
  data: [],
  meta: { offset: 0 },
};

export const giphy = handleActions(actionMap, initialGiphyStore);
export default giphy;
