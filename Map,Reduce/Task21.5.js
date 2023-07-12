/**
 * Use mapand in the map function use reduce to calculate maxmarks.
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
    let maxMarks = student.marks.reduce(function(max, mark) {
        if(mark>max){
            return mark;
        }
        else{
            return max;
        }
        
    });
    return { name: student.name, maxmarks: maxMarks };
  });
  
  console.log(result);
  