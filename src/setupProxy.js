const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://picsum.photos/v2',
      changeOrigin: true,
      pathRewrite: {
        [`^/api`]: '',
      },
    })
  );
};
