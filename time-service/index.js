var cote = require('cote');

var timeResponder = new cote.Responder({
    name: 'Time Responder'
});

timeResponder.on('time', function(req, cb) {
    cb(new Date());
});
