//Given a string str, replace ABCD with XYZ
var str = "ABCDJS";
var substring = "ABCD";
var replacement = "XYZ";
var newStr = "";

for (var i = 0; i < str.length; i++) {
  
  if (str.substring(i, i + substring.length) === substring) {
    newStr += replacement;  
    i += substring.length - 1;  
  } else {
    newStr += str[i];  
  }
}

console.log(newStr);
