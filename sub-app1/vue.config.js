const packageName = require('./package.json').name;
module.exports = {
  // webpack支持运行时的publicPath，因此不需要如下指定（比较麻烦）
  // publicPath: 'http://localhost:7101/',
  devServer: {
    port: 7101,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  configureWebpack: {
    output: {
      library: `${packageName}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: 'webpackJsonp_subApp1',
    },
  },
  pages: {
    index: {
      entry: 'src/main.js', // 你的新入口文件路径
      template: 'public/index.html', // 使用的HTML模板
      filename: 'index.html', // 构建后生成的HTML文件名
    },
  },
};
