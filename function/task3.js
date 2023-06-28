//Define a function that takes a string and char as parameter and returns a string with that char removed
function removeChar(str, char) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== char) {
        result += str[i];
      }
    }
    return result;
  }
  
  console.log(removeChar('aabcaabca', 'a')); 
  
  