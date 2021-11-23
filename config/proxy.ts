export default {
  '/aaa': {
    target: 'https://www.baidu.com/',
    secure: false,
    changeOrigin: true,
    pathWrite: {
      '^/aaa': '/aaa'
    },
  },
}