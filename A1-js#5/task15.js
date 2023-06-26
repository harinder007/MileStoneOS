//Given a string str, print the first half of the string on the console. Assume that the length of the string is even.
let str = "ABCDABCD";
let length = str.length;
let firstHalf = "";

if (length % 2 === 0) {
  for (let i = 0; i < length / 2; i++) {
    firstHalf += str[i];
  }
}

console.log(firstHalf);
