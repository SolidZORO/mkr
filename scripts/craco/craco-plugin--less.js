/* eslint-disable */
const cracoPluginLess = require('next-plugin-antd-less/overrideWebpackConfig');

module.exports = {
  plugin: cracoPluginLess,
  options: {
    // modifyVars: {
    //   '@THEME--DARK': 'theme-dark',
    // },
    lessVarsFilePath: './src/styles/variables.less',
  },
};
