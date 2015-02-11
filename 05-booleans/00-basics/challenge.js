module.exports.equalStrings = function(stringOne, stringTwo) {
  var boolExp = stringOne == stringTwo
  return boolExp
};

module.exports.notEqual = function(one, two) {
  var result = one !== two;
  return result

};

module.exports.inBetween = function(lower, middle, upper) {
  var result = (lower < middle) && (middle < upper)
  return result
};

module.exports.outsideRanges = function(number) {
//not between 10 and 20, it also can't be 10 or 20
//not between 42 and 75, it also can't be 75. 42 is allowed
//not between 1 and 6. 1 and 6 are allowed
var result = (!(number >= 10 && number <= 20))&& (!(number > 42 && number <= 75)) && (!(number > 1 && number < 6))
return result

};

module.exports.nameAndPrice = function(name, price) {
  var result = (name == 'NYTimes' || name == 'LATimes')&& (price >=1)
  return result
};