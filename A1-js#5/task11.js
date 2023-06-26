
//Given a string str, replace all uppercase alphabets by A, lowercase alphabets by a, digits by 0. Print the new string on the console
let str = 'qw23BN**45g';
let newStr = '';

for (let i = 0; i < str.length; i++) {
  let char = str[i];

  if (char >= 'A' && char <= 'Z') {
    newStr += 'A';
  } else if (char >= 'a' && char <= 'z') {
    newStr += 'a';
  } else if (char >= '0' && char <= '9') {
    newStr += '0';
  } else {
    newStr += char;
  }
}

console.log(newStr);
