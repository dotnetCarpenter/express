
var express = require('./')
  , request = require('supertest');

var app = express();

app.use(function(req, res){
  res.header('Expires', 'Thu, 01 Dec 1994 16:00:00 GMT').end();
});

request(app)
.get('/')
.end(function(err, res){
  console.dir(res.headers)
})
