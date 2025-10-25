module.exports = {
  devServer: {
    port: 7100,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  pages: {
    index: {
      entry: 'src/main.js', // 新入口文件路径
      template: 'public/index.html', // 使用的HTML模板
      filename: 'index.html', // 构建后生成的HTML文件名
    },
  },
};
