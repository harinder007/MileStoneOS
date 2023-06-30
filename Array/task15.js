//Given an array as input, print ALTERNATING if the first element is even, second element is odd, third element is even, fourth is odd and so on. Print NOT otherwise
function checkAlternating(array) {
    for (let i = 0; i < array.length; i++) {
      if ((i % 2 === 0 && array[i] % 2 !== 0) || (i % 2 !== 0 && array[i] % 2 === 0)) {
        console.log("NOT");
        return;
      }
    }
    console.log("ALTERNATING");
  }
  // Test cases
  let testCases = [
    [2, 3, 4, 5, 6, 7],
    [4, 9, 16, 25, 49],
    [3, 4, 5, 6],
    [4, 5, 6, 7, 8, 9, 10],
    [10],
    [7],
    [12, 25]
  ];
  
  for (let i = 0; i < testCases.length; i++) {
    let testCase = testCases[i];
   
    checkAlternating(testCase);
  }
  