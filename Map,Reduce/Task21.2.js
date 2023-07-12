/**
 * Find out the number of students who scored more than 70 at least once.
 * /Use filter and in the filter function use reduce to calculate the max marks for each student
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
  
  let studentsWithMoreThan70 = data.filter(function(student) {
    let maxMarks = student.marks.reduce(function(acc,curr) {
        if(curr>acc){
            return curr;
        }
        else{
            return acc;
        }
        
    },1);
    return maxMarks > 70;
    });
    

  
  let numOfStudentsWithMoreThan70 = studentsWithMoreThan70.length;
  
  console.log(numOfStudentsWithMoreThan70);
  