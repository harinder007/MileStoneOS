//Create array of 1 to n
function createArray(n) {
    let result = [];
    for (let i = 1; i <= n; i++) {
      result.push(i);
    }
    return result;
  }
  
  const n = 10; 
  const numbers = createArray(n);
  console.log(numbers);
  