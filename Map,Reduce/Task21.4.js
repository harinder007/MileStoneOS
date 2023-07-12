/**
 * Create an array of JSON where each JSON has 2 fields : name and totalMarks which is the sum of all the values in the array marks.
 * Use map and in the map function use reduce to create the required JSON
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
  
  let result = data.map(function(student) {
    let totalMarks = student.marks.reduce(function(sum, mark) {
      return sum + mark;
    }, 0);
    return { name: student.name, totalMarks};
  });
  
  console.log(result);
  