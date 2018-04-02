var http =  require('http');
var fs = require('fs');

//console.log(__dirname)

var myReadStream = fs.createReadStream(__dirname +'/text.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname +'/text1.txt');

/*myReadStream.on('data', function(chunk){
  console.log("\n\n\n\n Chunk Recieved : ")
  //console.log(chunk);
//  myWriteStream.write(chunk)
  
})*/

myReadStream.pipe(myWriteStream)

