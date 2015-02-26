module.exports.getKeys = function(thing){
  return Object.keys(thing)
};

module.exports.getValues = function(theObject){
  var theArray = []
  for (var index in theObject){
    theArray.push(theObject[index])
  }
  return theArray
};

module.exports.objectToArray = function(theObject){
  var theArray = []
  for (var index in theObject){
    theArray.push(index + " is " + theObject[index])
  }
  return theArray
}