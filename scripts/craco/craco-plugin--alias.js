/* eslint-disable max-len, no-param-reassign, import/no-extraneous-dependencies, @typescript-eslint/no-unused-vars */
const CracoAlias = require('craco-alias');

module.exports = {
  plugin: CracoAlias,
  options: {
    source: 'tsconfig',
    baseUrl: './',
    tsConfigPath: './tsconfig.extend.json',
  },
};
