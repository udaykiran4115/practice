var cluster = require('cluster')

if(cluster.isMaster){
  var cpunum = require('os').cpus().length
  console.log("cluster has planned to create "  + cpunum + "workers")

  for(var i =0; i < cpunum; i++){
    cluster.fork()
  }

  cluster.on('online', function(worker){
    console.log('Worker ' + worker.process.pid + " is Online ")
  })

  cluster.on('exit', function(worker, code, signal){
    console.log('Worker ' + worker.process.pid + ' Died with code ' + code + ' and signal '+signal);
    console.log("Starting new worker...")
    cluster.fork();
  })

}else{
  var express = require('express')
  var app =  express();
  app.all('/*', function(req, res) {res.send('process ' + process.pid + ' says hello!').end();})

  var server = app.listen(8000, function() {
    console.log('Process ' + process.pid + ' is listening to all incoming requests');
  });

}
