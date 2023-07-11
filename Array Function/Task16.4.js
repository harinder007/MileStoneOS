//Define a function that takes a min Total as parameter and returns an array of JSON whose total marks is  
//greater than min Total sorted by total score in descending order
const data = [
  { name: "Mary", marks: [72, 65, 55, 71] },
  { name: "Anita", marks: [66, 70, 75, 53] },
  { name: "Edward", marks: [44, 54, 64, 58] },
  { name: "Thomas", marks: [62, 55, 65, 81] },
  { name: "Robin", marks: [41, 44, 47, 49] },
  { name: "Sophia", marks: [71, 73, 67, 77] },
  { name: "Bruce", marks: [52, 57, 61, 64] },
];

function check(minTotal) {
  let arr1 = data.filter(function (n) {
    let sum = 0;
    for (let i = 0; i < n.marks.length; i++) {
      sum = sum + n.marks[i];
    }
    return sum > minTotal;
  });

  arr1.sort(function (a, b) {
    
    if (a > b) {
      return -1;
    } else if (a < b) {
      return 1;
    } else {
      return 0;
    }
  });

  return arr1;
}

let minTotal = 250;
let result = check(minTotal);
console.log(result);





































  /*function filterAndSortByTotal(minTotal) {
    const filteredData = [];
    let index = 0;
  
    for (let i = 0; i < data.length; i++) {
      const obj = data[i];
      let total = 0;
      for (let j = 0; j < obj.marks.length; j++) {
        total += obj.marks[j];
      }
      if (total > minTotal) {
        filteredData[index] = obj;
        index++;
      }
    }
  
    for (let i = 0; i < index - 1; i++) {
      for (let j = i + 1; j < index; j++) {
        const totalI = calculateTotal(filteredData[i]);
        const totalJ = calculateTotal(filteredData[j]);
        if (totalI < totalJ) {
          const temp = filteredData[i];
          filteredData[i] = filteredData[j];
          filteredData[j] = temp;
        }
      }
    }
  
    return filteredData;
  }
  
  function calculateTotal(obj) {
    let total = 0;
    for (let i = 0; i < obj.marks.length; i++) {
      total += obj.marks[i];
    }
    return total;
  }
  
  const minTotal = 200;
  const sortedData = filterAndSortByTotal(minTotal);
  console.log(sortedData);
  */