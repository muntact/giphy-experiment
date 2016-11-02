import { fork, put, take, call } from 'redux-saga/effects';
import * as Actions from '../actions/giphy';
import { GIPHY_SEARCH_ROOT, GIPHY_RQ_SUFFIX } from '../constants';
import { checkStatus } from '../helpers/fetchHelpers';

const searchForGifs = (query = 'funny+cat', offset = 0) => {
  debugger;
  const url = `${GIPHY_SEARCH_ROOT}?q=${query}&offset=${offset}${GIPHY_RQ_SUFFIX}`;
  return fetch(url)
    .then((response) => checkStatus(response))
    .then((response) => response.json());
};

function* watchGetGifs(getState) {
  while (true) { // eslint-disable-line no-constant-condition
    try {
      // listen for gif requests.
      yield take(Actions.GIFS_REQUESTED);
      yield put({ type: Actions.GET_SEARCH_GIFS_PENDING });
      const payload = yield call(searchForGifs, undefined, getState().giphy.meta.offset);
      console.log(payload);
      yield put({ type: Actions.GET_SEARCH_GIFS_SUCCESS, payload });
    } catch (error) {
      // LOGGING IN HERE RATHER THAN IN THE REDUCTION.
      yield put({ type: Actions.GET_SEARCH_GIFS_FAILURE, error });
    }
  }
}

export default function* rootSaga() {
  const { store } = yield take(Actions.APP_INIT);
  const { getState } = store;

  yield fork(watchGetGifs, getState);
  yield put({ type: Actions.GIFS_REQUESTED });
}
