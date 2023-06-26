//Given a string as input, create a newstring where A is replaced by X, B is replaced by Yand all C and D are removed
var inputString = "I GOT A BIRTHDAY CARD";
var newString = "";

for (var i = 0; i < inputString.length; i++) {
  var currentChar = inputString[i];

  if (currentChar === "A") {
    newString += "X";
  } else if (currentChar === "B") {
    newString += "Y";
  } else if (currentChar === "C") {
    newString += "";
  } else if (currentChar === "D") {
    newString += "";
  } else {
    newString += currentChar;
  }
}

console.log(newString);