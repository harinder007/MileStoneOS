//Given a string as input, create a new string which is the latter half of the string . Assume that the string is of even length.

let str = "JAVA";
let length = str.length;
let lastHalf = "";

if (length % 2 === 0) {
  for (let i = length / 2; i < str.length; i++) {
    lastHalf += str[i];
  }
}

console.log(lastHalf);