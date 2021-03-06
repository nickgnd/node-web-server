var express = require('express');

var app = express();
var PORT = process.env.PORT || 3000;

var middleware = require('./middleware.js');

// the order is important
// app.use(middleware.requireAuthentication);
app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function(req, res) {
  res.send('About');
});

app.get('/about', function(req, res) {
  res.send('About');
});

app.listen(PORT, function () {
  console.log("express web server start on PORT " + PORT);
});


app.use(express.static(__dirname + '/public'));
// console.log(__dirname)
