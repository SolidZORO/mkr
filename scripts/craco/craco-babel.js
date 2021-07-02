module.exports = {
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['import', { libraryName: 'antd', style: true }],
    ['add-react-displayname'],
  ],
};
