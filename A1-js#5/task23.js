//Given a string as input replace 1 by @, 2 by #, 3 by &and 4-9 by $. 0 and other characters appear as it is in the new string and are not changed
var inputString = "a1b9c3d4QW";
var newString = "";

for (var i = 0; i < inputString.length; i++) {
  var currentChar = inputString[i];

  if (currentChar === "1") {
    newString += "@";
  } else if (currentChar === "2") {
    newString += "#";
  } else if (currentChar === "3") {
    newString += "&";
  } else if (currentChar >= "4" && currentChar <= "9") {
    newString += "$";
  } else {
    newString += currentChar;
  }
}

console.log(newString);
