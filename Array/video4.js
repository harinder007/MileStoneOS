//Is there a prime number in array

function CheckPrime(number) {
    let len = number.length;
  
    for (let i = 0; i < len; i++) {
      if (number[i] < 2) {
        continue; 
      }
      let isPrime = true;
      for (let j = 2; j < number[i]; j++) {
        if (number[i] % j === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        return true; 
      }
    }
  
    return false; 
  }
  
  const numArray = [2, 3, 4, 5];
  console.log(CheckPrime(numArray));
  
  