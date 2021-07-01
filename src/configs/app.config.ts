/* eslint-disable max-len */

import { __env__ } from './env';

export const app = {
  __DEV__: process.env.NODE_ENV !== 'production',
  //
  NAME: __env__.REACT_APP_NAME,
};
