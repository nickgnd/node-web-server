// basic middleware
var middleware = {
  requireAuthentication: function (req, res, next) {
    console.log("private route hit!");
    next();
  },
  logger: function (req, res, next) {
    console.log('request: ' + new Date().toString() + ' ' + req.originalUrl + ' - ' + req.method);
    next();
  }
};

module.exports = middleware;