import { defineConfig } from 'umi';
import proxy from './proxy';

const basePath =
  process.env.NODE_ENV === 'production' && process.env.rundev !== 'plaftfrom'
    ? '/dmp/'
    : '/';

console.log(process.env.rundev, '------process.env.rundev-------------');

export default defineConfig({
  devServer: {
    port: 4200,
  },
  title: 'google map',
  nodeModulesTransform: {
    type: 'none',
  },
  layout: {},
//   mfsu: {}, // 开启mfsu，加速构建热更速度
//   theme: {
//     '@primary-color': '#00B259',
//   },
//   dva: {
//     hmr: true,
//   },
//   favicon:
//     process.env.NODE_ENV === 'production' && process.env.rundev !== 'plaftfrom'
//       ? `${basePath}/static/favicon.ico`
//       : '/static/favicon.ico',
//   publicPath: basePath,
//   base: basePath,
//   outputPath: `dist${basePath}`,
//   headScripts: [{ src: `${basePath}static/appConfig.js` }],
//   define: {
//     // basePath: `${basePath.substring(0, basePath.length - 1)}`,
//     // baseDomain: 'https://bamboo.rootcloudapp.com',
//   },
//   fastRefresh: {},
//   dynamicImport: {
//     loading: '@/components/Loading',
//   },
// //   antd: {},
//   history: {
//     type: 'browser',
//   },
//   locale: {
//     baseNavigator: true,
//     baseSeparator: '-',
//   },
//   hash: true,
//   ignoreMomentLocale: true,
  proxy,
});
