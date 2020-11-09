import { resolve } from "path";

function pathResolve(dir: string) {
  return resolve(__dirname, ".", dir);
}

module.exports = {
  // 引入第三方的配置
  // optimizeDeps: {
  //   include: ["moment", "echarts", "axios", "mockjs"]
  // },
  // 配置别名
  alias: {
    // 键必须以斜线开始和结束
    "/@/": pathResolve("src"),
    // '/@components/': path.resolve(__dirname, './src/components')
  },
  // proxy: {
  //   // 如果是 /lsbdb 打头，则访问地址如下
  //   '/lsbdb': 'http://10.192.195.96:8087',
  //   // 如果是 /lsbdb 打头，则访问地址如下
  //   // '/lsbdb': {
  //   //   target: 'http://10.192.195.96:8087/',
  //   //   changeOrigin: true,
  //   //   // rewrite: path => path.replace(/^\/lsbdb/, '')
  //   // }
  // }
};