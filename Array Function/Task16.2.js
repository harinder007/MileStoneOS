//Sort the array in ascending order of maximum value in marks array

const data = [
    { name: "Mary", marks: [72, 65, 55, 71] },
    { name: "Anita", marks: [66, 70, 75, 53] },
    { name: "Edward", marks: [44, 54, 64, 58] },
    { name: "Thomas", marks: [62, 55, 65, 81] },
    { name: "Robin", marks: [41, 44, 47, 49] },
    { name: "Sophia", marks: [71, 73, 67, 77] },
    { name: "Bruce", marks: [52, 57, 61, 64] },
  ];
  
  data.sort(function (a, b) {
    let max1 = findMax(a.marks); 
    let max2 = findMax(b.marks); 
  
    if (max1 > max2) {
      return 1;
    } else if (max1 < max2) {
      return -1;
    } else {
      return 0;
    }
  });
  
  console.log(data);
  
  // Function to find the maximum value in an array using a for loop
  function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }
  