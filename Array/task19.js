//Given an array,use pop in a loop to print all the elements in the array.
function getArrayElements(array) {
    var poppedArray = [];
  
    for (var i = array.length - 1; i >= 0; i--) {
      var element = array.pop();
      poppedArray.push(element);
    }
  
    return poppedArray;
  }
  
  // test case 
  let case1 = [40,6,9];
  console.log("pops = ",getArrayElements(case1));

  let case2 = [6];
  console.log("pops = ",getArrayElements(case2));

  let case3 = [];
  console.log("pops = ",getArrayElements(case3));

  let case4 = [20,14,2,7,18];
  console.log("pops = ",getArrayElements(case4));
  