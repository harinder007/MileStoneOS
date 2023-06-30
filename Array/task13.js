//Given an array as input, count the elements that are divisible by at least one of 2, 3, 5 and 7
function countDivisibleElements(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
      let element = array[i];
  
      if (element % 2 === 0 || element % 3 === 0 || element % 5 === 0 || element % 7 === 0) {
        count++;
      }
    }
  
    return count;
  }
  
  // passe all Test cases in loop
  let testCases = [
    [10, 12, 14],
    [210],
    [3, 4, 5, 6],
    [11, 17, 8, 10, 21],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    [11, 13, 17, 19, 23, 121, 169]
  ];
  
  for (let i = 0; i < testCases.length; i++) {
    let testCase = testCases[i];
    console.log("count = ",countDivisibleElements(testCase))
    
  }
  