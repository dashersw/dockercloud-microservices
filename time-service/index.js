var cote = require('cote');

var hostname = require('os').hostname();
var source = `time-service@${hostname}`;

var timeResponder = new cote.Responder({
    name: 'Time Responder'
});

timeResponder.on('time', function(req, cb) {
    var time = new Date();
    var reply = {source, time};

    console.log(reply);
    cb(reply);
});
