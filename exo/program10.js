var net = require('net');
var strftime = require('strftime');

// declare
var port = process.argv[2];

var server = net.createServer(function(socket){
  //begin
  console.log('client connected' + now());

  //end
  socket.on('end', function() {
    console.log('client disconnected');
  });

  //writing on the server
  socket.write(strftime(now(), new Date()) + '\n');
  socket.pipe(socket);

  socket.end();

});

server.listen(port, function() { //'listening' listener
  console.log('server bound');
});

function now(){
  return strftime('%F %H:%M', new Date());
}
