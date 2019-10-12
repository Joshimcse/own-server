const express = require('express'),
  server = express();

module.exports = (opts) => {
  require('../config/static.config')(server);

  if (opts.isSPA) {
    server.use(require('../routes/spa.routes'))
  } else {
    server.use(require('../routes/mpa.routes'))
  }

  return server;
}