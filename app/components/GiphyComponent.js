import React, { PropTypes } from 'react';
import styles from './GiphyComponent.css';

const GihpyText = ({ embed_url, images, url }) => {
  const { width, height } = images.original;
  // const wrapperWidth = parseInt(width, 10) + 15;
  // const wrapperHeight = parseInt(height, 10) + 25;
  return (
    <li data-gif="true" className={styles.container} style={{ margin: '5px' }}>
      <div style={{ width: `${width}px`, height: `${parseInt(height, 10) + 30}px` }}>
        <iframe {...{ width, height }} src={embed_url} frameBorder="0" className="giphy-embed" allowFullScreen />
        <p style={{ margin: '0' }}>
          <button className="uk-button uk-button-primary" style={{ width: '100%' }} href={url}>via GIPHY</button>
        </p>
      </div>
    </li>
  );
};

GihpyText.propTypes = {
  /* eslint-disable */
  url: PropTypes.string,
  embed_url: PropTypes.any,
  images: PropTypes.object,
  /* eslint-enable */
};

export default GihpyText;
