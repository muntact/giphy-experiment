import React, { PropTypes } from 'react';
import SubredditEntry from './SubredditEntry';
import ApiHeader from './ApiHeader';

const Home = ({ subredditEntries, getMoreEntries }) => {
  let subredditPosts = [];
  if (subredditEntries.length > 0) {
    subredditPosts = subredditEntries.map((page, pageIndex) =>
      (<div key={`subreddit-page-${pageIndex}`}>
        {pageIndex !== 0 &&
          <h3 style={{ width: '100%', textAlign: 'center' }} >Page {pageIndex + 1}</h3>
        }
        {page.map((post, postIndex) =>
          <SubredditEntry key={`${pageIndex}-${postIndex}`} {...post} />)
        }
      </div>)
    );
  }

  let maxHeight = 0;
  let display = 'none';

  if (document.getElementById('listing-pane')) {
    maxHeight = document.getElementById('listing-pane').getClientRects()[0].height;
  }

  display = 'block';

  const style = {
    display,
    flex: '1 0 50%',
    maxHeight,
  };
  return (
    <div style={{ display: 'flex' }}>
      <div id="listing-pane" style={{ flex: '1 0 50%' }}>
        <h1 style={{ color: 'black', textAlign: 'center' }}> WUBBA LUBBA DUB DUB - GIPHY EXPERUMENT</h1>
        <h2 style={{ color: 'black', textAlign: 'center' }}>(Powered By Giphy - of course )</h2>
        <ApiHeader />
        <ol className="list-group">{subredditPosts}</ol>
        <button
          onClick={getMoreEntries}
          className="btn-primary"
          style={{ width: '100%', textAlign: 'center' }}
        >Next page</button>
      </div>
      <div id="panel-2">
        <iframe id="p2frame" src="" style={{ display: 'none' }} />
        <div id="p2comment-div" className="list-group" style={style} />
      </div>
    </div>
  );
};

Home.propTypes = {
  subredditEntries: PropTypes.array.isRequired,
  getMoreEntries: PropTypes.func.isRequired,
};

export default Home;
