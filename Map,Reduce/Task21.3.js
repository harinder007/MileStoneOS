/**
 * Find out the name of the student who scored the highest total marks.
 * Use reduce and in the reduce function use reduce again to calculate the total marks for each student
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
  
  let studentWithHighestMarks = data.reduce(function(maxStudent, currentStudent) {
    let totalMarksMax = maxStudent.marks.reduce(function(sum, mark) {
      return sum + mark;
    }, 0);
      //console.log(totalMarksMax)
    let totalMarksCurrent = currentStudent.marks.reduce(function(sum, mark) {
      return sum + mark;
    }, 0);

    //console.log(totalMarksCurrent)
  
    // check maximum marks of student
    if (totalMarksCurrent > totalMarksMax) {
      return currentStudent;
    } else {
      return maxStudent;
    }
  });
  
  let nameOfStudentWithHighestMarks = studentWithHighestMarks.name;
  
  console.log(nameOfStudentWithHighestMarks);
  