//Define a function that takes a string and char as parameter and returns the number of times the char appears in the string
function countCharOccurrences(str, char) {
    let count = 0;
  
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) === char) {
        count++;
      }
    }
  
    return count;
  }
  
  console.log(countCharOccurrences("museum", "m"));  // case 1
  console.log(countCharOccurrences("mabracadabra", "a"));  // case 2
  console.log(countCharOccurrences("90045", "2"));  // case 3

  