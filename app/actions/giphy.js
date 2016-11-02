import { FETCH_STATES } from '../constants';

const GIPHY_REDUX_PREFIX = 'giphy';

export const APP_INIT = `${GIPHY_REDUX_PREFIX}/APP_INIT`;
export const GIFS_REQUESTED = `${GIPHY_REDUX_PREFIX}/GIFS_REQUESTED`;
export const INCREMENT_OFFSET = `${GIPHY_REDUX_PREFIX}/INCREMENT_OFFSET`;

export const GET_SEARCH_GIFS_PENDING = `${GIPHY_REDUX_PREFIX}/GET_SEARCH_GIFS_PENDING`;
export const GET_SEARCH_GIFS_FAILURE = `${GIPHY_REDUX_PREFIX}/GET_SEARCH_GIFS_FAILURE`;
export const GET_SEARCH_GIFS_SUCCESS = `${GIPHY_REDUX_PREFIX}/GET_SEARCH_GIFS_SUCCESS`;

export const getPending = ({ meta, data }) => ({
  data,
  meta: Object.assign({}, meta, { fetchState: FETCH_STATES.PENDING }),
});

export const incrementOffset = ({ meta, data }) => ({
  data,
  meta: Object.assign({}, meta, { offset: meta.offset + 25 }),
});

export const getError = ({ meta, data }) => ({
  data,
  meta: Object.assign({}, meta, { fetchState: FETCH_STATES.ERROR }),
});

export const getSuccess = ({ data, meta }, { payload }) => ({
  data: data.concat([...payload.data]),
  meta: Object.assign({}, meta, { fetchState: FETCH_STATES.SUCCESS }),
});
