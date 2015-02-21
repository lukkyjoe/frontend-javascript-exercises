module.exports.addItem = function(itemToAdd, array){
  if (array.indexOf(itemToAdd)>-1){
      return array
  } 
  else{
      array.push(itemToAdd)
      return array
  }
};

module.exports.reverseSortedList = function(thing){
  return thing.sort().reverse()
};