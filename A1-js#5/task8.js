//Given a String str, create a new String in which all m have been removed. Display the new string in the console
let str = "my#mother";
let newStr = "";

for (let i = 0; i < str.length; i++) {
  if (str[i] !== 'm') {
    newStr += str[i];
  }
}

console.log(newStr);
