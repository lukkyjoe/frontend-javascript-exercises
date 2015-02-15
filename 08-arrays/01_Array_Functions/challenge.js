module.exports.reversePlusOne = function(manyNumbers){
  manyNumbers.reverse()
  manyNumbers.unshift(1)
  return manyNumbers
  
};

module.exports.plusesEverywhere = function(someNumbers){
  return someNumbers.join('+')
};

  
module.exports.arrayQuantityPlusOne = function(x){
  return x.length+1

};