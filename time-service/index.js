var restify = require('restify');

var hostname = require('os').hostname();
var source = `time-service@${hostname}`;

var server = restify.createServer();
server.get('/', function respond(req, res, next) {
    var time = new Date();
    var reply = {source, time};

    console.log(reply);
    res.send(reply);

    next();
});

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});
