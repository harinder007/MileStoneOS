//Given a string str, move the lower case characters to the start of the string, digits in the middle and uppercase characters at the end of the string
let str = "qw2B**5g";
let lowerCaseStr = "";
let digitStr = "";
let upperCaseStr = "";

for (let i = 0; i < str.length; i++) {
  let char = str[i];

  if (char >= 'a' && char <= 'z') {
    lowerCaseStr += char;
  } else if (char >= 'A' && char <= 'Z') {
    upperCaseStr += char;
  } else if (char >= '0' && char <= '9') {
    digitStr += char;
  }
}

let newStr = lowerCaseStr + digitStr + upperCaseStr;
console.log(newStr);
