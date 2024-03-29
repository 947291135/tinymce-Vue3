// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");
const resolve = dir => path.join(__dirname, dir);

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      //set第一个参数：设置的别名，第二个参数：设置的路径
      .set("@", resolve("./src"))
  }
};
