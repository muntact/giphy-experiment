import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment'; //eslint-disable-line
// import { Link } from 'react-router';
import styles from './SubredditEntry.css';

// This is a helper func, move it somewhere else.
const toXago = (utcValue) => {
  const now = moment();
  const then = moment.utc(moment.unix(utcValue));
  const hDiff = Math.floor(now.diff(then, 'hours', true));
  const dDiff = Math.floor(now.diff(then, 'days', true));
  const mDiff = Math.floor(now.diff(then, 'months', true));
  const yDiff = Math.floor(now.diff(then, 'years', true));

  if (yDiff > 0) {
    return `${yDiff} years ago`;
  } else if (mDiff > 0) {
    return `${mDiff} months ago`;
  } else if (dDiff > 0) {
    return `${dDiff} days ago`;
  } else { // eslint-disable-line no-else-return
    return `${hDiff} hours ago`;
  }
};

// onclick open pane 2?
const traversChildren = (comment) => {
  let commentChildren;
  if (comment.data.replies) {
    commentChildren = (
      <ol className={styles.commentContainer}>
        {comment.data.replies.data.children.map((children) =>
          traversChildren(children)
        )}
      </ol>
    );
  }

  if (comment.kind !== 'more') {
    return (
      <li className={styles.comment}>
        <div className={styles.comment}>{comment.data.body}</div>
        <div>{commentChildren}</div>
      </li>
    );
  } else { // eslint-disable-line no-else-return
    return (<li><a>load more comments</a></li>);
  }
};

const hideFrame = () => {
  const iframePanel = document.getElementById('p2frame');
  iframePanel.src = '';
  iframePanel.style.display = 'hidden';
  console.log('frame hidden');
};

const hideText = () => {
  const wrapper = document.getElementById('p2comment-div');
  wrapper.innerHTML = '';
  console.log('text hidden');
};

// for now onclick log url.

const SubredditEntry = (props) =>
  (<li
    className={`${styles.container} list-group-item`}
    onClick={() => {
      if (props.url.includes('reddit')) {
        hideFrame();
        fetch(`${props.url}.json`, { headers: new Headers({
          'Content-Type': 'application/json; charset=UTF-8',
          'access-control-allow-origin': '*',
        }) })
        .then((data) => data.json())
        .then((data) => {
          const { selfText, selfText_html, title, } = data[0].data.children[0].data;
          let text;
          if (selfText_html) { // eslint-disable-line camelcase
            text = selfText_html.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
          } else if (selfText) {
            text = selfText;
          } else {
            text = title;
          }
          const commentContent = data[1].data.children;
          const wrapper = document.getElementById('p2comment-div');
          const stuff = (
            <div>
              <div className={styles.threadHeader} dangerouslySetInnerHTML={{ __html: text }}></div>
              <ol className={styles.commentContainer}>
              {
                commentContent.map((comment) => traversChildren(comment))
              }
              </ol>
            </div>);

          ReactDOM.render(stuff, wrapper);
        });
      } else {
        const listingPane = document.getElementById('listing-pane');
        const contentPane = document.getElementById('panel-2');
        const lpHeight = listingPane.getBoundingClientRect().height;
        const iframePanel = document.getElementById('p2frame');
        iframePanel.src = `${props.url}/embed`;
        iframePanel.style.display = 'block';
        iframePanel.style.height = '480px';
        iframePanel.style.width = '480px';
        contentPane.style.height = `${lpHeight}px`;
        hideText();
      }
    }}
  >
    <div className={styles.score}>
      <span className={`${styles.scoreChildren} fa fa-arrow-up`}></span>
      <span className={styles.scoreChildren}>{props.score}</span>
      <span className={`${styles.scoreChildren} fa fa-arrow-down`}></span>
    </div>
    <div>
      <div className={styles.title}>
        <span className={`${styles.scoreChildren} text-primary`}>
          {props.title}
          <span className="text-muted">({props.domain})</span>
        </span>
      </div>
      <div className={styles.title}>
        <span>Submitted {toXago(props.created_utc)} by {props.author}</span>
      </div>
      <div className={styles.title}>
        <span>{props.num_comments} comments</span>
      </div>
    </div>
  </li>);

SubredditEntry.propTypes = {
  author: PropTypes.string.isRequired,
  clicked: PropTypes.bool.isRequired,
  created_utc: PropTypes.number.isRequired,
  domain: PropTypes.string.isRequired,
  edited: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.bool,
  ]).isRequired,
  num_comments: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default SubredditEntry;
