import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { subredditReducer as subreddit } from './subreddit';

const rootReducer = combineReducers({
  routing,
  subreddit,
});

export default rootReducer;
