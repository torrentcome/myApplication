var net = require('net');

var server = net.createServer(function(socket){
  //begin
  console.log('client connected');

  //end
  c.on('end', function() {
    console.log('client disconnected');
  });

  c.write('hello\r\n');
  c.pipe(c);

});
server.listen(8000);
