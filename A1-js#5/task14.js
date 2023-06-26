//Given a string str, create a string consisting of all the non-alphabets and non-digits.
let str = "q#w2@B**5g";
let nonAlphaNumericStr = "";

for (let i = 0; i < str.length; i++) {
  let char = str[i];

  if (!(/[a-zA-Z0-9]/.test(char))) {
    nonAlphaNumericStr += char;
  }
}

console.log(nonAlphaNumericStr);
