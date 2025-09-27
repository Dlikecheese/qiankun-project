module.exports = {
  webpack: (config) => {
    config.output.library = 'subApp3';
    config.output.libraryTarget = 'umd';
    config.output.publicPath = 'auto';
    return config;
  },
};