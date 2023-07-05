//Given an array of numbers sorted in ascending order and a number, insert the number in the right position in the array.
function insertIntoSortedArray(array, number) {
    let insertIndex = 0;
  
    for (let i = 0; i < array.length; i++) {
      if (number <= array[i]) {
        insertIndex = i;
        break;
      }
      insertIndex = i + 1;
    }
  
    array.splice(insertIndex, 0, number);
  }
  
  // test cases :
  let array = [5, 18, 26, 30, 40];
  let number = 20;
  insertIntoSortedArray(array, number);
  
  console.log( array);

  let array2 = [10,20,50,64];
  let number2 = 99;
  insertIntoSortedArray(array2, number2);
  
  console.log( array);

  let array3 = [5];
  let number3 = 7;
  insertIntoSortedArray(array3, number3);
  
  console.log( array);


  let array4 = [5];
  let number4 = 2;
  insertIntoSortedArray(array4, number4);
  
  console.log( array);
  




