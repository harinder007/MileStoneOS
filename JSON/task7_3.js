//Update the array to add a field totalMarks to each JSON in the array.
let student1 = {
    "name": "Mark",
    "Maths": 80,
    "English": 75,
    "Science": 63,
  };
  
  let student2 = {
    "name": "Bob",
    "Maths": 90,
    "English": 81,
    "Science": 88,
  };
  
  let student3 = {
    "name": "Julia",
    "Maths": 88,
    "English": 87,
    "Science": 89,
  };
  
  let student4 = {
    "name": "Anthony",
    "Maths": 60,
    "English": 64,
    "Science": 61,
  };
  
  let students = [student1, student2, student3, student4];
  
  for (let i = 0; i < students.length; i++) {
    let student = students[i];
    let totalMarks = student.Maths + student.English + student.Science;
    student.totalMarks = totalMarks;
  }
  
  console.log(students);
  