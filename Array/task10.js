//Given two array of integers, print Big1if the sum of the numbers of first array is more, print Big2if the sum of the numbers of the second array is more, print Equal if it is the same.
function check(array1, array2) {
    let len1 = array1.length;
    let len2 = array2.length;
  
    let sum1 = 0;
    let sum2 = 0;
  
    for (let i = 0; i < len1; i++) {
      sum1 = sum1 + array1[i];
    }
    for (let i = 0; i < len2; i++) {
      sum2 = sum2 + array2[i];
    }
  
    // Now compare the results
    if (sum1 > sum2) {
      console.log("Big1");
    } else if (sum2 > sum1) {
      console.log("Big2");
    } else {
      console.log("Equal");
    }
  }
  
  // Test case
  let case1 = [1, 2, 3];
  let case11 = [10, 20, 30];
  check(case1, case11);

  
let case2=[1,3,5,7,9];
let case22=[2,4,19];
check(case2,case22)

let case3=[50,100];        
let case33=[1,2,3,4,5,6];
check(case3,case33)

let case4=[2,4,6,8];
let case44=[20];
check(case4,case44)
  