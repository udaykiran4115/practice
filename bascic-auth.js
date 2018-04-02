var http = require('http');

var server = http.createServer(function(req, res){
  
  var auth = req.header['Authorization']

  if(!auth){
    res.send(400)
    console.log('UnAuthorizated..')
  } else {
    console.log('Valid Authorization..')
  }

})
