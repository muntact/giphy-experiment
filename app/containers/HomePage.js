import React, { Component } from 'react';
import { GIF_INIT } from '../actions/subredditEntry';
import SubredditContainer from './SubredditContainer';

class HomePage extends Component {
  componentDidMount() {
    this.context.store.dispatch({ type: GIF_INIT, store: this.context.store });
  }

  render() {
    return (
      <SubredditContainer />
    );
  }
}

HomePage.contextTypes = {
  store: React.PropTypes.object.isRequired
};

export default HomePage;
