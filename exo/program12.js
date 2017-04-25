var http = require('http');
var map = require('through2-map');

// declare
var port = process.argv[2];

// Create an HTTP server
var server = http.createServer(function (req, res) {
  if(req.method === 'POST'){

    req.pipe(map(function(chunk){
        return chunk.toString().toUpperCase();
    })).pipe(res);
  }
});

server.listen(port);
