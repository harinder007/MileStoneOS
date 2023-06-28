//Define a function that takes a number as parameter. If the number is a prime number,it returns true otherwise false
function isPrime(number) {
  let counter = 0;

  for (let i = 1; i <= number; i++) {
    if (number % i == 0) {
      counter++;
    }
  }

  if (counter === 2) {
    return true;
  } else {
    return false;
  }
}


  console.log(isPrime(5));  // case 1
  console.log(isPrime(49));  // case 2
  console.log(isPrime(1));  // case 3
  console.log(isPrime(97));  // case 4
  