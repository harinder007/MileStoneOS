//Given a string as input, print the middle charof the string and its index. Assume that the string is of odd length
var inputString = "ABCDE";
var length = inputString.length;
var middleIndex = Math.floor(length / 2);

for (var i = 0; i < length; i++) {
  if (i === middleIndex) {
    console.log("Middle Character:", inputString[i]);
    console.log("Index:", i);
    break;
  }
}
