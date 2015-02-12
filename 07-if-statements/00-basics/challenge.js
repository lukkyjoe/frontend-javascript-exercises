module.exports.favoriteNumber = function(fav, guess){
  if (guess > fav){
    return "Too high"
  }
  else if (guess == fav){
    return "You got it!"
  }
  else {
    return "Too low"
  }
}

module.exports.checkLock = function(first,second,third,fourth){
  if ((first == 3 || first == 5 || first == 7) && (second == 2) && (third >= 5 && third <= 100) &&(fourth < 9 || fourth >20)){
    return "correct"
  }
  else {
    return "incorrect"
  }
}

module.exports.canIGet = function(item, money){
  if (item == "MacBook Air"){
    if (money >= 999){
      return true
    }
    else {
      return false
    }}
  else if (item == "MacBook Pro"){
    if (money >= 1299){
      return true
    }
    else {
      return false
    }}
  else if (item == "Mac Pro"){
    if (money >= 2499){
      return true
    }
    else {
      return false
    }}
  else if (item == "Apple Sticker"){
    if (money >= 1){
      return true
    }
    else {
      return false
    }}
  else{
    return false
  }
  }

  ;