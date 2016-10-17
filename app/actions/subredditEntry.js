import { FETCH_STATES } from '../constants';

export const GIF_INIT = 'subreddit/GIF_INIT';
export const GIFS_REQUESTED = 'subreddit/GIFS_REQUESTED';

export const GET_SUBREDDIT_PENDING = 'subreddit/GET_SUBREDDIT_PENDING';
export const GET_SUBREDDIT_FAILURE = 'subreddit/GET_SUBREDDIT_FAILURE';
export const GET_SUBREDDIT_SUCCESS = 'subreddit/GET_SUBREDDIT_SUCCESS';

export const getPending = ({ meta, data }) => ({
  data,
  meta: Object.assign({}, meta, { fetchState: FETCH_STATES.PENDING }),
});

export const getError = ({ meta, data }) => ({
  data,
  meta: Object.assign({}, meta, { fetchState: FETCH_STATES.ERROR }),
});

export const getSuccess = ({ data }, { payload }) => {
  const { after, subredditEntries } = payload;
  const meta = { fetchState: FETCH_STATES.SUCCESS, after };
  const newData = data.concat([subredditEntries]);
  return { meta, data: newData };
};
