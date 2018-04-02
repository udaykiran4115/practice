var net = require('net');
var colors = require('colors');
var readlineSync = require('readline-sync')

var HOST = "127.0.0.1" 
var PORT = 9000

var client =  null;

function OpenConnection(){
	if(client){
		console.log('Already connection is open')
	}
	
	client = new net.Socket();
	
	client.on('error', function(err){
		client.destroy();
		client = null;
		console.log('There is an Error : '+err.message)
	})
	
	client.on('data', function(data){
		console.log('Data recieved : ' + data)
		client.write("")
	})
}

function menu(){
  
  var lineRead = readlineSync.question('\n Enter option (1- Open, 2-Send, 3-close, 4-Quit)')
  switch(lineRead){
    case "1":
      OpenConnection();
      break;
    case "2":
      SendData();
      break;
    case "3":
      CloseConnection();
      break;
    case "4":
      Quit();
      break;
    default:
      setTimeout(function(){
        menu()
      }, 0)
      break;

  }
}


menu()
