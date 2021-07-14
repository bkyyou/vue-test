const path = require('path');
const resolve = (filePath) => path.resolve(__dirname, filePath);

module.exports = {
  lintOnSave: false,
  // resolve: {
  //   extensions: ['.vue', '.js'],
  //   alias: {
  //     '@': resolve('src'),
  //   },
  // }
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      // .set("assets", resolve("src/assets"))
      // .set("components", resolve("src/components"))
      // .set("base", resolve("baseConfig"))
      // .set("public", resolve("public"));
  },
}