//Filter the array for those who have scored 2 or more marks greater than 70
let students = [
    {"name":"Mary","marks":[72,65,55,71]},
    {"name":"Anita","marks":[66,70,75,53]},
    {"name":"Edward","marks":[44,54,64,58]},
    {"name":"Thomas","marks":[62,55,65,81]},
    {"name":"Robin","marks":[41,44,47,49]},
    {"name":"Sophia","marks":[71,73,67,77]},
    {"name":"Bruce","marks":[52,57,61,64]}
  ];
  
  let filteredStudents = students.filter(function(n) {
    let count = 0;
  
    for (let i = 0; i < n.marks.length; i++) {
      if (n.marks[i] > 70) {
        count++;
      }
    }
  
    return count >= 2;
  });
  
  console.log("Students with 2 or more marks greater than 70:", filteredStudents);
  