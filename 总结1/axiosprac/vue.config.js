const path = require("path");

module.exports = {
  // webpack配置 - 简单配置方式
  configureWebpack: {
    resolve: {
      alias: {
        // 别名
        vue$: "vue/dist/vue.esm.js", //加上这一句
        "@api": path.resolve(__dirname, "./src/api"),
        "@utils": path.resolve(__dirname, "./src/utils")
      }
    }
  },
  // chainWebpack: config => {
  //   // GraphQL Loader
  //   config.module
  //     .rule('html')
  //     .test(/\.html$/)
  //     .use('html-loader')
  //     .loader('html-loader')
  //     .tap(options => {
  //       return options;
  //     });
  // }
}
