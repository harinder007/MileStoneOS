//Given two arrays asinput, createa new array using concat.

function concatArrays(array1, array2) {
    return array1.concat(array2);
  }
  
  // Test cases
  console.log(concatArrays([5, 18, 26, 30], [40, 6])); 
  console.log(concatArrays([100, 10], [20, 50, 64, 200])); 
  console.log(concatArrays([], [1, 2, 3])); 
  console.log(concatArrays([2, 7, 21], [])); 
  