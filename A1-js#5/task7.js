//Given a String str, create a new String in which z has been replaced by x. Display the new string in the console

let str = "zoom";
let newStr = "";

for (let i = 0; i < str.length; i++) {
  if (str[i] === 'z') {
    newStr += 'x';
  } else {
    newStr += str[i];
  }
}

console.log(newStr);
