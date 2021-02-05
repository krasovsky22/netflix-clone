/* eslint-disable @typescript-eslint/no-var-requires */
const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    '@': path.resolve(__dirname, './src'),
    '@lib': path.resolve(__dirname, './src/lib'),
    '@pages': path.resolve(__dirname, './src/pages'),
    '@context': path.resolve(__dirname, './src/context'),
    '@fixtures': path.resolve(__dirname, './src/fixtures'),
    '@constants': path.resolve(__dirname, './src/constants'),
    '@containers': path.resolve(__dirname, './src/containers'),
    '@components': path.resolve(__dirname, './src/components')
  })
);
