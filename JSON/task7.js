/**Create an array of JSON's having the performance of students in the exams. 
 * Mark scored 80, 75 and 63 in Maths, English and Science.Bob scored 90, 81 and 88 in Maths, 
 * English and Science.Julia scored 88, 87 and 89 in Maths, 
 * English and Science.Anthony scored 60, 64 and 61 in Maths, English and Science. */
let students = [
  {
    name: 'Mark',
    Maths: 80,
    English: 75,
    Science: 63
  },
  {
    name: 'Bob',
    Maths: 90,
    English: 81,
    Science: 88
  },
  {
    name: 'Julia',
    Maths: 88,
    English: 87,
    Science: 89
  },
  {
    name: 'Anthony',
    Maths: 60,
    English: 64,
    Science: 61
  }
];

let computerMarks = [
  { name: 'Mark', Computers: 90 },
  { name: 'Anthony', Computers: 70 },
  { name: 'Julia', Computers: 88 },
  { name: 'Bob', Computers: 81 }
];

function updateStudentComputerMarks(computerMarks, students) {
  for (let i = 0; i < students.length; i++) {
    for (let j = 0; j < computerMarks.length; j++) {
      if (students[i].name === computerMarks[j].name) {
        students[i].Computers = computerMarks[j].Computers;
        break;
      }
    }
    const { Maths, English, Science, Computers } = students[i];
    const totalMarks = Maths + English + Science + Computers;
    const averageMarks = totalMarks / 4;
    let maximumMarks = Maths;
    if (English > maximumMarks) maximumMarks = English;
    if (Science > maximumMarks) maximumMarks = Science;
    if (Computers > maximumMarks) maximumMarks = Computers;
    students[i].AverageMarks = averageMarks;
    students[i].MaximumMarks = maximumMarks;
  }
}

updateStudentComputerMarks(computerMarks, students);
console.log(students);
