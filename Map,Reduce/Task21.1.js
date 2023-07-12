/**
 * Sort the array by total marks in ascending order.Use sort and in the sort function use reduce to calculate the total marks.
 */
let data = [
    {"name": "Mary", "marks": [72, 65, 55, 71]},
    {"name": "Anita", "marks": [66, 70, 75, 53]},
    {"name": "Edward", "marks": [44, 54, 64, 58]},
    {"name": "Thomas", "marks": [62, 55, 65, 81]},
    {"name": "Robin", "marks": [41, 44, 47, 49]},
    {"name": "Sophia", "marks": [71, 73, 67, 77]},
    {"name": "Bruce", "marks": [52, 57, 61, 64]}
  ];
  
  data.sort(function(a, b) {
    let totalMarksA = a.marks.reduce(function(sum, mark) {
      return sum + mark;
    }, 0);
  
    let totalMarksB = b.marks.reduce(function(sum, mark) {
      return sum + mark;
    }, 0);
  // convert in to asscending order

     if( totalMarksA>totalMarksB){
        return 1;
     }
     else if(totalMarksA<totalMarksB){
        return -1;
     }
     else{
        return 0;
     }
  });
  
  console.log(data);
  