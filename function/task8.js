//Define a function that takes a string as parameter and returns true if the string has Equal Bracketsand false otherwise. A string has Equal Brackets if the number of ( is equal to the number of ) in the string
function hasEqualBrackets(str) {
  let count1 = 0;
  let count2 =0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] == '(') {
      count1++;
    } else if (str[i] == ')') {
      count2++;
    }

    
  }
  
  if (count1 == count2) {
    return true;
  }
  else{
    return false;
  }
}

  console.log(hasEqualBrackets("(a+b+(c+d*e)-(d+e*f))+3"));  // case 1
  console.log(hasEqualBrackets("5+(((a+b)*c)+d+e)-7"));  // case 2
  console.log(hasEqualBrackets("(a+b))+(c"));  // case 3
  console.log(hasEqualBrackets("(a+b)+(c"));  // case 4
  console.log(hasEqualBrackets("4+5)+6"));  // case 5


  
  

  