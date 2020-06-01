const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function(app){
  console.log(111)
  app.use(
    createProxyMiddleware('/api' ,{
      target: 'https://www.fastmock.site/mock/6545014898bc71f3533cfd4bc1df14bc',
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    })
  )
}