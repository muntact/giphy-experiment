import React, { Component } from 'react';
import { APP_INIT } from '../actions/giphy';
import SubredditContainer from './SubredditContainer';

class HomePage extends Component {
  componentDidMount() {
    this.context.store.dispatch({ type: APP_INIT, store: this.context.store });
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
