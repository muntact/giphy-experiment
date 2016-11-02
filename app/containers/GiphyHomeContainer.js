import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { GIFS_REQUESTED, INCREMENT_OFFSET } from '../actions/giphy';
import Home from '../components/Home';
import { FETCH_STATES } from '../constants';

const GiphyHomeContents = ({ fetchState, data, getMoreEntries }) => (
  <div>
    {fetchState === FETCH_STATES.PENDING && data.length === 0 &&
      'loading'
    }
    {fetchState === FETCH_STATES.ERROR &&
      'error'
    }
    {data.length > 0 &&
      <Home { ...{ data, getMoreEntries }} />
    }
  </div>
);

GiphyHomeContents.propTypes = {
  data: PropTypes.array.isRequired, // eslint-disable-line
  fetchState: PropTypes.string.isRequired,
  getMoreEntries: PropTypes.func.isRequired,
};

const mapStateToProps = ({ giphy }) => ({
  fetchState: giphy.meta.fetchState || FETCH_STATES.PENDING,
  data: giphy.data,
});

const mapDispatchToProps = (dispatch) => ({
  getMoreEntries: () => {
    debugger;
    dispatch({ type: INCREMENT_OFFSET });
    dispatch({ type: GIFS_REQUESTED });
  },
});

const GiphyHomeContainer = connect(mapStateToProps, mapDispatchToProps)(GiphyHomeContents);
export default GiphyHomeContainer;
