//Define afunction that takes a string and char1 and char2 as parameter and returns 1 if char1 occurs more than char2 in the string, 0 if they occur the same number of times and -1 otherwise
function compareCharOccurrences(str, char1, char2) {
    let countChar1 = 0;
    let countChar2 = 0;
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] === char1) {
        countChar1++;
      } else if (str[i] === char2) {
        countChar2++;
      }
    }
  
    if (countChar1 > countChar2) {
      return 1;
    } else if (countChar1 === countChar2) {
      return 0;
    } else {
      return -1;
    }
  }
  
  console.log(compareCharOccurrences("moozoom", "m", "o"));  // case : 1
  console.log(compareCharOccurrences("abcaabca", "b", "c"));  // case : 2
  console.log(compareCharOccurrences("abcdefgh", "3", "4"));  // case :3
  console.log(compareCharOccurrences("aaacdef", "c", "x"));  // case : 4
  