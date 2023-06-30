//Given an array as input, print ALL SAME if all the numbers in the array are the same otherwise print DIFFERENT

function checkArrayElements(array) {
    let firstElement = array[0];
  
    for (let i = 1; i < array.length; i++) {
      if (array[i] !== firstElement) {
        console.log("DIFFERENT");
        return;
      }
    }
  
    console.log("ALL SAME");
  }
  
  // Test cases
  let case1 = [12,13,12,12,12];
  let case2 = [14,14,14,14];
  let case3 = [3,3,3,6];
  let case4 = [18,18];
  let case5 = [6];
  
  checkArrayElements(case1); 
  checkArrayElements(case2); 
  checkArrayElements(case3); 
  checkArrayElements(case4); 
  checkArrayElements(case5);