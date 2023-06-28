//Define a function that takes 3 numbers as parameters. If the three numbers can form a triangle, it returns true otherwise false
function isTriangle(n1, n2, n3) {
    if (n1 + n2 > n3 && n2 + n3 > n1 && n3 + n1 > n2) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(isTriangle(5, 6, 7));  // Case 1 
  console.log(isTriangle(7, 2, ));  // Case 2
  console.log(isTriangle(6, 10, 3));  // Case 3
  console.log(isTriangle(8, 14, 24));  // Case 4
  