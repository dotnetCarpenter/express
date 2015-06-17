
var express = require('../')
  , request = require('supertest');

describe('res', function(){
  describe('.setHeader("<field>", "<value>")', function(){
    it('should set the header', function(done){
      var app = express();

      app.use(function(req, res){
        res.header('Expires', 'Thu, 01 Dec 1994 16:00:00 GMT').end();
      });

      request(app)
      .get('/')
      .end(function(err, res){
        res.headers.should.have.property('Expires', 'Thu, 01 Dec 1994 16:00:00 GMT');
        done();
      })
    });
    it('should remove the header', function(done){
      var app = express();

      app.use(function(req, res){
        res.removeHeader('Cache-Control');
      });

      request(app)
      .get('/')
      .end(function(err, res){
        res.headers.should.not.have.property('Cache-Control');
        done();
      })
    });
  })
})
