module.exports.createCourse = function(title, duration, students){
  var createCourse = {}
  createCourse['title'] = title
  createCourse['duration'] = duration
  createCourse['students'] = students
  return createCourse
};

module.exports.addProperty = function(object, newProp, newValue){
  if (object.hasOwnProperty(newProp) == false){
    object[newProp] = newValue
  }
  return object  
  
};

module.exports.formLetter = function(letter){
  return "Hello " + letter.recipient + ',\n\n' + letter.msg + "\n\nSincerely,\n" + letter.sender
}



module.exports.canIGet = function(item, money){
  var items = {}
  items['MacBook Air'] = 999
  items['MacBook Pro'] = 1299
  items['Mac Pro'] = 2499
  items['Apple Sticker'] = 1
  return ((money >= items[item]) && items.hasOwnProperty(item))
  
};