import React, { Component, PropTypes } from 'react';
import styles from './GiphyComponent.css';

class GiphyComponent extends Component {
  constructor() {
    super();
    this.state = {
      isPlaying: false,
    };
  }

  togglePlay() {
    this.setState({ isPlaying: !this.state.isPlaying });
  }

  render() {
    const { embed_url, images, url } = this.props;
    const { isPlaying } = this.state;
    const { width, height } = images.original_still;
    const togglePlayer = () => { this.togglePlay(); };
    // const wrapperWidth = parseInt(width, 10) + 15;
    // const wrapperHeight = parseInt(height, 10) + 25;
    return (
      <li data-gif="true" className={styles.container} style={{ margin: '5px' }}>
        <div style={{ width: `${width}px`, height: `${parseInt(height, 10) + 30}px` }}>
          <div style={{ width: `${width}px`, height: `${height}px` }} onMouseEnter={togglePlayer} onMouseLeave={togglePlayer} >
            <img src={images.original_still.url} style={{ display: `${isPlaying ? 'none' : 'block'}` }} />
            <iframe {...{ width, height }} src={embed_url} style={{ display: `${isPlaying ? 'block' : 'none'}` }} frameBorder="0" className="giphy-embed" allowFullScreen />
          </div>
          <p style={{ margin: '0' }}>
            <button className="uk-button uk-button-primary" style={{ width: '100%' }} href={url}>via GIPHY</button>
          </p>
        </div>
      </li>
    );
  }
}

GiphyComponent.propTypes = {
  /* eslint-disable */
  url: PropTypes.string,
  embed_url: PropTypes.any,
  images: PropTypes.object,
  /* eslint-enable */
};

export default GiphyComponent;
