/* eslint-disable max-len, no-param-reassign, import/no-extraneous-dependencies, @typescript-eslint/no-unused-vars, arrow-body-style, no-new */
const path = require('path');

const cracoBabel = require('./scripts/craco/craco-babel');
const cracoPluginAnalyze = require('./scripts/craco/craco-plugin--analyze');
const cracoPluginLess = require('./scripts/craco/craco-plugin--less');
const cracoModule = require('./scripts/craco/craco-module');

module.exports = {
  babel: cracoBabel,
  plugins: [cracoPluginAnalyze, cracoPluginLess, cracoModule],
  webpack: {
    alias: { '@': path.resolve(__dirname, 'src/') },
    experiments: {
      asset: true,
    },
    output: {
      assetModuleFilename: 'assets/[name][ext]',
    },
  },
  jest: {
    configure: { moduleNameMapper: { '^@(.*)$': '<rootDir>/src$1' } },
  },
  reactScriptsVersion: 'react-scripts',
  style: {
    css: {
      loaderOptions: () => {
        return { url: false };
      },
    },
  },
};
