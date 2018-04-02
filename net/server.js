var net = require('net');
var colors = require('colors');

var server = net.createServer();

// this is the function when server is connected when a client wants to connect..
server.on('connection', function(socket){
  remoteAddress = socket.remoteAddress +":"+ socket.remotePort;
  console.log('server connected...'.green + remoteAddress);
  //get data from client from socket
  socket.on('data', function(data){
    console.log('Got the data from client %s: %s '.yellow, remoteAddress, data)
    
    //send data to client      
    socket.write('Writing data to client')
  })

  //
  socket.once('close', function(){
    console.log('Connection got disconnnected from client %s '.cyan, remoteAddress);
  })

  //
  socket.on('error', function(err){
    console.log('Error in connnection %s'.red, err);
  })
})

// defining port on which it is connnected. 
server.listen(9000, function(){
  console.log('Server listening to %j', server.address());
})
