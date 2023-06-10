const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/consultant/v1/api',
      createProxyMiddleware({
        target: 'http://localhost:9999',
        changeOrigin: true,
      })
    );
  };
  