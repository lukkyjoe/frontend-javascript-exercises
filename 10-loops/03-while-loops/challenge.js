module.exports.stream = function(conditionFn, actionFn){
  while (conditionFn()){
    actionFn()
  }
}

module.exports.sumNumbers = function(thisArray){
  var counter = 0
  var holdNumber = 0
  while (counter < thisArray.length){
    holdNumber = holdNumber + thisArray[counter]
    counter++
  }
  return holdNumber
}

