//Create a new array of JSON with the fields name, avgMarks and maxMarks. avgMarks is the average maks of the student. maxMarks isthe maximum marks obtained by the student in any subject.
let students = [
    {
      name: "Mark",
      Maths: 80,
      English: 75,
      Science: 63,
    },
    {
      name: "Bob",
      Maths: 90,
      English: 81,
      Science: 88,
    },
    {
      name: "Julia",
      Maths: 88,
      English: 87,
      Science: 89,
    },
    {
      name: "Anthony",
      Maths: 60,
      English: 64,
      Science: 61,
    }
  ];
  
  let newStudents = [];
  
  for (let i = 0; i < students.length; i++) {
    let student = students[i];
    let totalMarks = student.Maths + student.English + student.Science;
    let maxMarks = student.Maths;
  
    if (student.English > maxMarks) {
      maxMarks = student.English;
    }
    
    if (student.Science > maxMarks) {
      maxMarks = student.Science;
    }
  
    let avgMarks = totalMarks / 3;
  
    let newStudent = {
      name: student.name,
      avgMarks: avgMarks,
      maxMarks: maxMarks
    };
  
    newStudents.push(newStudent);
  }
  
  console.log(newStudents);
  