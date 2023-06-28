//Define a function that takes a string as parameter and returns the count of the maximum occurring char in that string. Use the function define in the above task
function getMaxCharCount(str) {
    let maxCount = 0;
    let charCount = {};
  
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      charCount[char] = (charCount[char] || 0) + 1;
      if (charCount[char] > maxCount) {
        maxCount = charCount[char];
      }
    }
  
    return maxCount;
  }
  
  console.log(getMaxCharCount("museum"));  // case: 1
  console.log(getMaxCharCount("abracadabra"));  // case: 2
  console.log(getMaxCharCount("90045"));  // case: 3
  console.log(getMaxCharCount("abcdefg"));  // case: 4
  console.log(getMaxCharCount("ddddd"));  // case: 5