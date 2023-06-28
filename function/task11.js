//Define a function that takes a number n as parameter and returns the number of prime numbers between 1 and n. Use the function defined in the above task

function isPrime(number) {
    if (number <= 1) {
      return false;
    }
  
    for (let i = 2; i <= number / 2; i++) {
      if (number % i ==0) {
        return false;
      }
    }
  
    return true;
  }
  
  function countPrimes(n) {
    let primeCount = 0;
  
    for (let i = 2; i <= n; i++) {
      if (isPrime(i)) {
        primeCount++;
      }
    }
  
    return primeCount;
  }
  
  console.log(countPrimes(2));   //case 1
  console.log(countPrimes(75));   //case 2
  console.log(countPrimes(1));   //case 3
  console.log(countPrimes(150));   //case 4
  
  
  