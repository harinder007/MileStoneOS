//Given an array as input, find the largest number in the array
function findLargestNumber(array) {
    let largest = array[0]; // Assume the first element is the largest
  
    for (let i = 1; i < array.length; i++) {
      if (array[i] > largest) {
        largest = array[i];   // Update largest if a larger element is found
      }
    }
  
    return largest;
  }
  
  // Test case
  let case1= [5,18,26,30,40,6];
  console.log("MAX = ",findLargestNumber(case1));
  
  let case2= [100,200,10,20,50,64];
  console.log("MAX = ",findLargestNumber(case2));

  let case3= [77];
  console.log("MAX = ",findLargestNumber(case3));

  let case4= [25,20,14,2,7,21];
  console.log("MAX = ",findLargestNumber(case4));