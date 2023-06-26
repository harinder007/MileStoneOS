//Given a string as input replace 1 by @, 2 by #.Other characters appear as it is in the new string and are not changed.
var inputString = "12ab1128d";
var newString = "";

for (var i = 0; i < inputString.length; i++) {
  var currentChar = inputString[i];

  if (currentChar === "1") {
    newString += "@";
  } else if (currentChar === "2") {
    newString += "#";
  } else {
    newString += currentChar;
  }
}

console.log(newString);
