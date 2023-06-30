//Given an array as input, print SEQUENCEif the numbers in the array are ordered consecutive numbers otherwise print NOT
function checkConsecutive(array) {
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] + 1 !== array[i + 1]) {
        console.log("NOT");
        return;
      }
    }
  
    console.log("SEQUENCE");
  }
  
  // Test cases
  let testCases = [
    [12, 13, 14, 15, 16, 17],
    [4, 3, 2, 5],
    [3, 4, 5, 6],
    [12, 11, 10],
    [6],
    [34, 35],
    [1, 1, 2, 3]
  ];
  
  for (let i = 0; i < testCases.length; i++) {
    let testCase = testCases[i];
    checkConsecutive(testCase);
  }
  
  