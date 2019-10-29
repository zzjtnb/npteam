module.exports = {
  //build文件大小分块
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
  // 配置pwa
  pwa: {
    name: "夜猫子中队",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "blue",
    themeColor: "#50E3C2",
    msTileColor: "#4A90E2"
  },
  // 配置css模块
  css: {
    extract: false
  },
  productionSourceMap: false
};
