//Create new array of numbers not divisible by 3
function filterNumbers(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 3 !== 0) {
        result.push(array[i]);
      }
    }
    return result;
  }
  
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const filteredNumbers = filterNumbers(numbers);
  console.log(filteredNumbers);
  