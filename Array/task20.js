//Given an array,use shift in a loop to print all the elements in the array.
function printArrayElements(array) {
  while (array.length > 0) {
    var element = array.shift();
    console.log(element);
  }
}

// test cases
let case1 = [40, 6, 9];
console.log("shift = ");
printArrayElements(case1);

let case2 = [6];
console.log("shift = ");
printArrayElements(case2);

let case3 = [];
console.log("shift = ");
printArrayElements(case3);

let case4 = [20, 14, 2, 7, 18];
console.log("shift = ");
printArrayElements(case4);
