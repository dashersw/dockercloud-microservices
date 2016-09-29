var express = require('express');
var restify = require('restify');
var app = express();

var client = restify.createJsonClient({
  url: 'http://time-service:8080',
  version: '*'
});

app.get('/', function(req, res) {
    res.send('Hello World!');
});

app.get('/time', function(req, res) {
    client.get('/', function(err, cliReq, cliRes, obj) {
        res.send(obj);
    })
});

app.listen(3000, function() {
    console.log('API server listening on port 3000!');
});
