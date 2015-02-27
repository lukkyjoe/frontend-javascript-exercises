module.exports.copy = function(theObject){
  var secondObject = {}
  for (index in theObject){
    secondObject[index] = theObject[index]
  }
  return secondObject
};

module.exports.extend = function(dest, src){
  var nowObject = dest
  for (index in src){
    nowObject[index] = src[index]
  }
  return nowObject
}

module.exports.hasElems = function(object, array){
  var status = true
  if (array.length == 0){
    return status
  }
  for (var index in array){
    console.log(index)
    if (object.hasOwnProperty(array[index]) == false){
    status = false};
    }
  
  return status 
}
  