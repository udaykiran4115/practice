sampleCallback = function(sum){
  console.log('Sum of Two numbers : ' + sum)
}

otherCallback = function(a, b){
  var diff = b-a;
  console.log('Difference of two numbers are : '+ diff)
}

function add(a, b, callback, otherCallback){
  console.log('Performing addition...')
  sum = a + b;
  otherCallback(a,b)
  callback(sum)
}

add(3,5,sampleCallback, otherCallback)
