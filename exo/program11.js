var http = require('http');
var fs = require('fs');

// declare
var port = process.argv[2];
var text = process.argv[3];

var server = http.createServer(function callback(request, response){
  //begin
  console.log('client connected');
  response.writeHead(200, {'Content-Type': 'text/plain'});
  fs.createReadStream(text).pipe(response);
});

server.listen(port);
