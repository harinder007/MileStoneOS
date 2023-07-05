//Bob has left the school. Find the JSON corresponding to Bob and use splice to remove it from the array.
let students = [
    {
      "name": "Mark",
      "Maths": 80,
      "English": 75,
      "Science": 63,
    },
    {
      "name": "Bob",
      "Maths": 90,
      "English": 81,
      "Science": 88,
    },
    {
      "name": "Julia",
      "Maths": 88,
      "English": 87,
      "Science": 89,
    },
    {
      "name": "Anthony",
      "Maths": 60,
      "English": 64,
      "Science": 61,
    }
  ];
  
  let index = -1;
  
  for (let i = 0; i < students.length; i++) {
    if (students[i].name === "Bob") {
      index = i;
      break;
    }
  }
  
  if (index !== -1) {
    students.splice(index, 1);
  }
  
  console.log(students);
  