var events = require('events');

var myEmitter = new events.EventEmitter();


myEmitter.once('data', function(msg){
  console.log('Message Emitter is : ')
  console.log(msg)
  myEmitter.on('data', function(msg1){
    console.log("---------------------")
    console.log(msg1)
  })
})

myEmitter.on('error', function(err){
  console.log('Error Occured : '+ err)
})

myEmitter.emit('data', 'This is the message which will be emitted once');
myEmitter.emit('data', 'This is the message which was emitted');
myEmitter.emit('error', 'Something Went worng');






