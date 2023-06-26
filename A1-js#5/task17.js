//Given a string as input, create a new string where the latter half appears first. If the string is of odd length then the middle char remains in its position
var str = "123456";
var lan = str.length;
var middleIndex = Math.floor(lan / 2);

var newString = '';

for (var i = middleIndex + (lan % 2); i < lan; i++) {
  newString += str[i];
 
}

if (lan % 2 === 1) {
  newString += str[middleIndex];
  
 
}

for (var j = 0; j < middleIndex; j++) {
  newString += str[j];
  
}
console.log(newString);

