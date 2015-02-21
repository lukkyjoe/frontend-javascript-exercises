module.exports.sumNumbers = function(array){
var number = 0
for (var counter in array){
  number += array[counter]
}
  return number
}

module.exports.splitAndLowerCaseString = function(inputString){
  var lowString = inputString.toLowerCase()
  return lowString.split(',')
};

module.exports.addIndex = function(inputArray){
  var workArray = inputArray
  for (var index in workArray){
    workArray[index] = index + " is " + workArray[index]
  }
  return workArray
};
