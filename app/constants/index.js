export const FETCH_STATES = {
  ERROR: 'ERROR',
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
};

export const GIPHY_API_ROOT = 'http://api.giphy.com';
export const GIPHY_API_KEY = 'dc6zaTOxFJmzC';

export const GIPHY_SEARCH_ROOT = `${GIPHY_API_ROOT}/v1/gifs/search`;
export const GIPHY_RQ_SUFFIX = `&api_key=${GIPHY_API_KEY}`;
// public beta key.

export default FETCH_STATES;
