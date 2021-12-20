/* eslint-disable max-len, no-param-reassign, import/no-extraneous-dependencies, @typescript-eslint/no-unused-vars */
module.exports = {
  plugin: {
    overrideWebpackConfig: ({ webpackConfig }) => {
      // webpackConfig.optimization.splitChunks.name = true;

      const __PROD__ = process.env.NODE_ENV === 'production';

      // if (__PROD__) {
      //   webpackConfig.devtool = false;
      // }

      // speed up compilation
      if (process.argv.includes('--debug')) {
        webpackConfig.plugins = webpackConfig.plugins.filter(
          (p) =>
            !['ESLintWebpackPlugin', 'ForkTsCheckerWebpackPlugin'].includes(
              p.constructor.name,
            ),
        );

        webpackConfig.devtool = false;
        webpackConfig.optimization.minimize = false;
        webpackConfig.optimization.minimizer = [];

        console.log(webpackConfig);
        // process.exit(0);
      }

      return webpackConfig;
    },
  },
};
