//Define a function that takes a number n and returns the sum of its digits. Remember, for a number a a%10 gives its last digit, whereas a/10 removes the last digit. In an infinite for loop, use break to come out of the loop when the number becomes zero

function sumOfDigits(n) {
  let sum = 0;

  for (let num = n; num !== 0; num = Math.floor(num / 10)) {
    sum += num % 10;
  }

  return sum;
}



  
  console.log(sumOfDigits(24681));  // case 1 
  console.log(sumOfDigits(1002));  // case 2 
  console.log(sumOfDigits(789));  // case 3 
  console.log(sumOfDigits(15));  // case 4
  console.log(sumOfDigits(7));  // case 5  

  