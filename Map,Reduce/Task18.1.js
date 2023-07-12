//Use reduce to calculate the total marks received in maths by all the students
const students = [
    {"name":"Jack","maths":55,"english":60,"science":62},
    {"name":"Anita","maths":62,"english":65,"science":56},
    {"name":"Thomas","maths":68,"english":72,"science":75},
    {"name":"Steve","maths":51,"english":56,"science":68},
    {"name":"Julia","maths":47,"english":77,"science":72},
    {"name":"Mary","maths":72,"english":55,"science":81}
  ];
  
  const totalMathsMarks = students.reduce(function(total, student){
    return total + student.maths;
  }, 0);
  
  console.log(totalMathsMarks); 
  