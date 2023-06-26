//Given a string str, double all the alphabets, triple the digits and remove all the other characters. Print the new string on the console.
let str = "qw2B**5g";
let newStr = "";

for (let i = 0; i < str.length; i++) {
  let char = str[i];

  if (char >= 'a' && char <= 'z') {
    newStr += char + char;
  } else if (char >= 'A' && char <= 'Z') {
    newStr += char + char;
  } else if (char >= '0' && char <= '9') {
    newStr += char + char + char;
  }
}

console.log(newStr);
