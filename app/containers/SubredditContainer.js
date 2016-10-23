import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Home from '../components/Home';
import { FETCH_STATES } from '../constants';
// import { fetchSubreddit } from '../reducers/subreddit';

const SubredditContents = ({ fetchState, data, getMoreEntries }) => (
  <div>
    {fetchState === FETCH_STATES.PENDING && data.length === 0 &&
      'loading'
    }
    {fetchState === FETCH_STATES.ERROR &&
      'error'
    }
    {data.length > 0 &&
      <Home data={data} getMoreEntries={getMoreEntries} />
    }
  </div>
);

SubredditContents.propTypes = {
  data: PropTypes.array.isRequired, // eslint-disable-line
  fetchState: PropTypes.string.isRequired,
  getMoreEntries: PropTypes.func.isRequired,
};

const mapStateToProps = ({ giphy }) => ({
  fetchState: giphy.meta.fetchState || FETCH_STATES.PENDING,
  data: giphy.data,
});

const mapDispatchToProps = () => ({
  getMoreEntries: () => {
    // TODO
  },
});

const SubredditContainer = connect(mapStateToProps, mapDispatchToProps)(SubredditContents);
export default SubredditContainer;
