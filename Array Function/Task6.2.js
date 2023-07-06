//Find the first student whose total marks in more than 200. Also find its index.

let student=[
    {"name": "Jack", "maths": 55, "english": 60, "science": 62},
    {"name": "Anita", "maths": 62, "english": 65, "science": 56},
    {"name": "Thomas", "maths": 68, "english": 72, "science": 75},
    {"name": "Steve", "maths": 51, "english": 56, "science": 68},
    {"name": "Julia", "maths": 47, "english": 77, "science": 72},
    {"name": "Mary", "maths": 72, "english": 55, "science": 81}
  ]
  
  let student1=student.find(function(n){
  
    let total=n.maths+n.english+n.science
    return total>200;
  })
  console.log("Name of student = ",student1);

  // find index

  let studentIndex=student.findIndex(function(n){
  
    let total=n.maths+n.english+n.science
    return total>200;
  })
  console.log("Index is = ",studentIndex);