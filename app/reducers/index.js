import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import giphy from './giphy';

const rootReducer = combineReducers({
  giphy,
  routing,
});

export default rootReducer;
