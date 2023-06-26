//Given a string str as input, check whether str can be of the type str = str1+str1. Note that the string has to be of even length. Also, you can create two strings, thefirst half and the second half and then check whether they are the same.For e.g. dada is da+da and hence the output is Yes


function checkStringPattern(str) {
    var length = str.length;
  
    // Check if the length is even
    if (length % 2 !== 0) {
      return "No";
    }
  
    var halfLength = length / 2;
  
    for (var i = 0; i < halfLength; i++) {
      if (str[i] !== str[i + halfLength]) {
        return "No";
      }
    }
  
    return "Yes";
  }
  
  
  var str = "ABCDEABCDF";
  var result = checkStringPattern(str);
  console.log(result);
  