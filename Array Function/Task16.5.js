/**
 * Define a function that takesa minScoreas parameter and returns an array of JSON in 
 * which all the entries in marks array is greater than minScoresorted by namein ascending order
 * 
 */

const data = [
    { name: "Mary", marks: [72, 65, 55, 71] },
    { name: "Anita", marks: [66, 70, 75, 53] },
    { name: "Edward", marks: [44, 54, 64, 58] },
    { name: "Thomas", marks: [62, 55, 65, 81] },
    { name: "Robin", marks: [41, 44, 47, 49] },
    { name: "Sophia", marks: [71, 73, 67, 77] },
    { name: "Bruce", marks: [52, 57, 61, 64] },
  ];
  
  function check(minScore) {
    let arr1 = data.filter(function (n) {
      let sum = 0;
      let allElement;
      for (let i = 0; i < n.marks.length; i++) {
        if(n.marks[i]>minScore){
            allElement=true;
        } 
        else{
            allElement=false;
            break;
        }
      }
      if(allElement==true){
           return n;
      }
    });
  
    arr1.sort(function (a, b) {
      
      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      } else {
        return 0;
      }
    });
  
    return arr1;
  }
  
  let minScore = 52;
  let result = check(minScore);
  console.log(result);
  
  
  
  
  
  
  
  
  
  