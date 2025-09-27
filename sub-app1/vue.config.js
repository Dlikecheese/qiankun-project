module.exports = {
  devServer: {
    port: 7101,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  configureWebpack: {
    output: {
      library: 'subApp1',
      libraryTarget: 'umd',
      jsonpFunction: 'webpackJsonp_subApp1',
    },
  },
};
