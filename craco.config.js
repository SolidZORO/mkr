/* eslint-disable max-len, no-param-reassign, import/no-extraneous-dependencies, @typescript-eslint/no-unused-vars, arrow-body-style, no-new */
const path = require('path');

const cracoBabel = require('./scripts/craco/craco-babel');
const cracoPluginAnalyze = require('./scripts/craco/craco-plugin--analyze');
const cracoPluginLess = require('./scripts/craco/craco-plugin--less');

module.exports = {
  babel: cracoBabel,
  plugins: [cracoPluginAnalyze, cracoPluginLess],
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
  },
  jest: {
    configure: {
      moduleNameMapper: {
        '^@(.*)$': '<rootDir>/src$1',
      },
    },
  },
};
