module.exports = {
  configureWebpack: {
    performance: {
      hints: false
    },
    optimization: {
      splitChunks: {
        minSize: 10000, // int (in bytes),
        maxSize: 250000 // int (in bytes),
      }
    }
  },

  productionSourceMap: false,

  css: {
    extract: false
  }
};
