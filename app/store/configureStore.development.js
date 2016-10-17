import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { hashHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

const logger = createLogger({
  level: 'info',
  collapsed: true
});

const router = routerMiddleware(hashHistory);

const sagaMiddleware = createSagaMiddleware();

const enhancer = compose(
  applyMiddleware(thunk, router, logger, sagaMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : noop => noop
);

const configureStore = initialState => {
  const store = createStore(rootReducer, initialState, enhancer);

  sagaMiddleware.run(rootSaga);

  if (window.devToolsExtension) {
    window.devToolsExtension.updateStore(store);
  }

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers')) // eslint-disable-line global-require
    );
  }

  return store;
};

export default configureStore;
