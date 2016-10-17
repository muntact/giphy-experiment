import { fork, put, take, call } from 'redux-saga/effects';
import * as Actions from '../actions/subredditEntry';
import { checkStatus, subResponseToUsableData } from '../helpers/fetchHelpers';

const fetchSubreddit = (url = 'https://www.reddit.com/r/pics/hot.json') =>
  fetch(url)
    .then((response) => checkStatus(response))
    .then((response) => response.json())
    .then((response) => subResponseToUsableData(response));

function* watchGetGifs() {
  while (true) { // eslint-disable-line no-constant-condition
    try {
      yield take(Actions.GIFS_REQUESTED);
      // Load throbber now ?
      yield put({ type: Actions.GET_SUBREDDIT_PENDING });
      const payload = yield call(fetchSubreddit);
      yield put({ type: Actions.GET_SUBREDDIT_SUCCESS, payload });
    } catch (error) {
      // LOGGING IN HERE RATHER THAN IN THE REDUCTION.

      yield put({ type: Actions.GET_SUBREDDIT_FAILURE, error });
    }
  }
}

export default function* rootSaga() {
  const { store } = yield take(Actions.GIF_INIT);
  const { getState } = store;

  yield fork(watchGetGifs, getState);
  yield put({ type: Actions.GIFS_REQUESTED });
}
