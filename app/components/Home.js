import React, { PropTypes } from 'react';
// import SubredditEntry from './SubredditEntry';
import ApiHeader from './ApiHeader';
import GiphyComponent from './GiphyComponent';
// import styles from './Home.css';

const Home = ({ data, getMoreEntries }) => {
  let gifs = [];
  if (data.length > 0) {
    debugger;
    gifs = data.map((giphyEntry, index) => {
      console.log(index, giphyEntry);
      return <GiphyComponent {...giphyEntry} key={index} />;
    });
  }

  return (
    <div style={{ backgroundColor: 'black' }}>
      <h1 style={{ color: 'white', textAlign: 'center' }}> WUBBA LUBBA DUB DUB - GIPHY EXPERUMENT</h1>
      <h2 style={{ color: 'white', textAlign: 'center' }}>(Powered By Giphy - of course )</h2>
      <div style={{ textAlign: 'center' }}>
        <ApiHeader />
      </div>
      {/*  TODO: PUT A SEARCH BOX IN. */}
      <ol className="uk-flex uk-flex-wrap uk-flex-middle uk-flex-wrap-space-around">{gifs}</ol>
      <button
        onClick={getMoreEntries}
        className="btn-primary"
        style={{ width: '100%', textAlign: 'center' }}
      >Next page</button>
    </div>
  );
};

Home.propTypes = {
  data: PropTypes.array.isRequired,
  getMoreEntries: PropTypes.func.isRequired,
};

export default Home;
