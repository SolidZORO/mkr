/* eslint-disable max-len, no-param-reassign, import/no-extraneous-dependencies, @typescript-eslint/no-unused-vars, arrow-body-style, no-new */
const path = require('path');
const cracoPluginLess = require('next-plugin-antd-less/overrideWebpackConfig');

const cracoBabel = require('./scripts/craco/craco-babel');
const cracoPluginAnalyze = require('./scripts/craco/craco-plugin--analyze');

module.exports = {
  babel: cracoBabel,
  plugins: [
    cracoPluginAnalyze,
    {
      plugin: cracoPluginLess,
      options: {
        modifyVars: {
          '@THEME--DARK': 'theme-dark',
        },
        lessVarsFilePath: './src/styles/variables.less',
      },
    },
  ],
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
