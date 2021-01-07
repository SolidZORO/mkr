/* eslint-disable max-len, no-param-reassign, import/no-extraneous-dependencies, @typescript-eslint/no-unused-vars */
const fs = require('fs');
const path = require('path');
const CracoLessPlugin = require('craco-less');
const lessVarsToJS = require('less-vars-to-js');

const ROOT_DIR = path.join(__dirname, '../..');

const lessVarsPath = path.join(ROOT_DIR, 'src/styles/variables.less');
const lessModifyVars = fs.existsSync(lessVarsPath)
  ? lessVarsToJS(fs.readFileSync(lessVarsPath, 'utf8'))
  : '';

module.exports = {
  plugin: CracoLessPlugin,
  options: {
    modifyLessRule(lessRule) {
      // eslint-disable-next-line no-param-reassign
      lessRule.exclude = [];

      const findLoaderIndex = (name) =>
        lessRule.use.findIndex((item) => `${item.loader}`.includes(name));

      // copy and mod
      const cssModuleIndex = findLoaderIndex('css-loader');
      const cssModule = lessRule.use[cssModuleIndex];

      cssModule.options.sourceMap = false;
      cssModule.options.modules = {
        auto: true,
        localIdentName: '[local]_[hash:4]',
      };

      const lessModuleIndex = findLoaderIndex('less-loader');
      const lessModule = lessRule.use[lessModuleIndex];

      lessModule.options.lessOptions = {
        javascriptEnabled: true,
        modifyVars: lessModifyVars,
      };

      // replace
      lessRule.use.splice(cssModuleIndex, 1, cssModule);
      lessRule.use.splice(lessModuleIndex, 1, lessModule);
      // console.log(cssModule, lessModule); process.exit(0);

      return lessRule;
    },
  },
};
