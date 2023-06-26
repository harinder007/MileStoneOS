//Given a string remove all X or Ypresent together in the string
var str = "AAXXXBBYYYCXXDYY";
    var result = "";
    var len = str.length;
  
    for (var i = 0; i < len; i++) {
      if ((str[i] === "X" && str[i + 1] === "Y") || (str[i] === "Y" && str[i + 1] === "X")) {
        // Skip the next character as well
        i++;
      } else {
        // Append the current character to the result
        result += str[i];
      }
    }
  
  
  console.log(result);
  