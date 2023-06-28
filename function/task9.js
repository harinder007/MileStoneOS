//Define a function that takes a string as parameter and returns true if the string is good expression and false otherwise. 
//A string is a good expression if the number of ( is equal to the number of ) and every ) is preceded by a 
//(.Note that in the expression (a+b))+(c, though the number of  ( is equal to the number of ), the second) 
//is not preceded by a corresponding ( and hence it is not a good expression.

function isGoodExpression(str) {
    let count = 0;
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] === '(') {
        count++;
      } else if (str[i] === ')') {
        if (count === 0) {
          return false;  
        }
        count--;
      }
    }
  
    return count === 0;  
  }
  
  console.log(isGoodExpression("(a+b+(c+d*e)-(d+e*f))+3"));  // case 1
  console.log(isGoodExpression("5+(((a+b)*c)+d+e)-7"));  // case 2
  console.log(isGoodExpression("(a+b))+(c"));  // case 3
  console.log(isGoodExpression("))a+b(("));  // case 4
  console.log(isGoodExpression("4+5)+6"));  // case 5
  console.log(isGoodExpression("((a+b)*c))+(5+6"));  // case 6
  console.log(isGoodExpression("4+(5+6"));  // case 7