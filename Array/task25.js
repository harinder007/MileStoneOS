//Given two arrays asinput, create a new array by putting the an element from the first array and then an element from the second array. Use push to add elements to the new array

function alternateArrays(array1, array2) {
    const newArray = [];
    const maxLength = Math.max(array1.length, array2.length);
  
    for (let i = 0; i < maxLength; i++) {
      if (i < array1.length) {
        newArray.push(array1[i]);
      }
      if (i < array2.length) {
        newArray.push(array2[i]);
      }
    }
  
    return newArray;
  }
  
  // Test cases
  console.log(alternateArrays([5, 18, 26, 30], [101, 102])); 
  console.log(alternateArrays([1, 2], [20, 50, 60, 70])); 
  console.log(alternateArrays([], [1, 2, 3])); 
  console.log(alternateArrays([2, 4, 6, 8], []));  
  