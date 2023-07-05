//Given an array as input, find the largest number in the array and remove it.
function removeLargestNumber(array) {
  let max = array[0];
  let maxIndex = 0;

  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
      maxIndex = i;
    }
  }

  array.splice(maxIndex, 1);
  return array;
}

// Test cases:
let case1 = [5,18,26,30,40,6];
console.log(removeLargestNumber(case1))

let case2 = [100,10,20,50,64,200];
console.log(removeLargestNumber(case2))

let case3 = [77];
console.log(removeLargestNumber(case3))

let case4 = [25,20,14,2,7,21];
console.log(removeLargestNumber(case4))