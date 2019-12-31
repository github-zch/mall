const path = require("path");
const resolve = function(dir) {
  return path.join(__dirname, dir);
};
module.exports = {
  productionSourceMap: false, // 是否在构建生产包时生成sourcdeMap
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@v", resolve("src/views"))
      .set("@c", resolve("src/components"))
      .set("@a", resolve("src/assets"))
      .set("common", resolve("src/components/common"))
      .set("@n", resolve("src/network"))
      .set("content", resolve("src/components/content")); /* 别名配置 */
    config.optimization.runtimeChunk("single");
  }
}

