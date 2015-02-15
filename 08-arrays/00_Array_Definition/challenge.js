module.exports.newArray = function(one,two,three,four){
  return [one,two,three,four]
};

var originalArray = ['one',3,'cool',4]
module.exports.firstAndLast = function(originalArray){
  var lastElementIndex = originalArray.length - 1    
  x = [originalArray[0],originalArray[lastElementIndex]]
  return x
};