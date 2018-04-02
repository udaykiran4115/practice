
var flag = true;

var p = new Promise(function(resolve, reject){
  if(flag){
    resolve('Success..')
  } else {
    reject('Fail..')
  }
})

p.then(function(fulfilled){
  console.log(fulfilled)
})
.catch(function(reject){
  console.log(reject)
})

