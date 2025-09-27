module.exports = {
  devServer: {
    port: 7102,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  configureWebpack: {
    output: {
      library: 'subApp2',
      libraryTarget: 'umd',
      jsonpFunction: 'webpackJsonp_subApp2',
    },
  },
};
