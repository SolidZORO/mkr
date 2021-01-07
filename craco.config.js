/* eslint-disable max-len, no-param-reassign, import/no-extraneous-dependencies, @typescript-eslint/no-unused-vars, arrow-body-style, no-new */
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const cracoBabel = require('./scripts/craco/craco-babel');
const cracoPluginLess = require('./scripts/craco/craco-plugin--less');
const cracoPluginAlias = require('./scripts/craco/craco-plugin--alias');

module.exports = {
  babel: cracoBabel,
  plugins: [
    cracoPluginAlias,
    cracoPluginLess,
    {
      plugin: {
        overrideWebpackConfig: ({ webpackConfig }) => {
          if (process.argv.includes('--analyze')) {
            // eslint-disable-next-line no-new
            webpackConfig.plugins.push(new BundleAnalyzerPlugin());
          }

          return webpackConfig;
        },
      },
    },
  ],
};
