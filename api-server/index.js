var express = require('express');
var cote = require('cote');
var app = express();

var timeRequester = new cote.Requester({
    name: 'Time Requester'
});

app.get('/', function(req, res) {
    res.send('Hello World!');
});

app.get('/time', function(req, res) {
    timeRequester.send({type: 'time'}, function(time) {
        res.send(time);
    });
});

app.listen(3000, function() {
    console.log('API server listening on port 3000!');
});
