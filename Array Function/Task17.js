
/**
 * 
 * Given an array of string as input.
 *  Count the number of a,b or c in the string. 
 * Sort the array in the ascending order of this count. If the count is the same, the string with smaller length appears earlier
 */

const data = ['bear', 'bell', 'cab', 'hello'];

data.sort(function(s1, s2) {
  let count1 = check(s1);
  let count2 = check(s2);

  if (count1 > count2) {
    return 1;
  } else if (count1 < count2) {
    return -1;
  } else {
    return 0;
  }
});

function check(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'a' || str[i] === 'b' || str[i] === 'c') {
      count++;
    }
  }
  return count;
}

console.log(data);






















/*

function countAndSortStrings(arr) {
    const countArray = arr.map((str) => {
      let count = 0;
      for (let i = 0; i < str.length; i++) {
        const char = str.charAt(i);
        if (char === 'a' || char === 'b' || char === 'c') {
          count++;
        }
      }
      return { str, count };
    });
  
    countArray.sort((count1, count2)=>{
      if(count1>count2){
        return 1;
    }
    else if(count1<count2){
        return -1;
    }
    else{
        return 0;
    }
    });
  
    return countArray.map((obj) => obj.str);
  }
  
  const input = ['bear','bell','cab','hello'];
  const sortedArray = countAndSortStrings(input);
  console.log(sortedArray);
  */