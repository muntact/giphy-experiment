import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Home from '../components/Home';
import { FETCH_STATES } from '../constants';
import { fetchSubreddit } from '../reducers/subreddit';

const SubredditContents = ({ fetchState, subredditEntries, getMoreEntries }) => (
  <div>
    {fetchState === FETCH_STATES.PENDING && subredditEntries.length === 0 &&
      'loading'
    }
    {fetchState === FETCH_STATES.ERROR &&
      'error'
    }
    {subredditEntries.length > 0 &&
      <Home subredditEntries={subredditEntries} getMoreEntries={getMoreEntries} />
    }
  </div>
);

SubredditContents.propTypes = {
  fetchState: PropTypes.string.isRequired,
  subredditEntries: PropTypes.array.isRequired,
  getMoreEntries: PropTypes.func.isRequired,
};

const mapStateToProps = ({ subreddit }) => ({
  fetchState: subreddit.meta.fetchState || FETCH_STATES.PENDING,
  subredditEntries: subreddit.data,
});

const mapDispatchToProps = (dispatch) => ({
  getMoreEntries: () => {
    dispatch(fetchSubreddit());
  },
});

const SubredditContainer = connect(mapStateToProps, mapDispatchToProps)(SubredditContents);
export default SubredditContainer;
