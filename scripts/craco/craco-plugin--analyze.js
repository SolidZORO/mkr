/* eslint-disable max-len, no-param-reassign, import/no-extraneous-dependencies, @typescript-eslint/no-unused-vars */
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  plugin: {
    overrideWebpackConfig: ({ webpackConfig }) => {
      if (process.argv.includes('--analyze')) {
        // eslint-disable-next-line no-new
        webpackConfig.plugins.push(new BundleAnalyzerPlugin());
      }

      return webpackConfig;
    },
  },
};
