//Use reduce to create an array of students whose total marks is less than 200.
const students = [
    {"name":"Jack","maths":55,"english":60,"science":62},
    {"name":"Anita","maths":62,"english":65,"science":56},
    {"name":"Thomas","maths":68,"english":72,"science":75},
    {"name":"Steve","maths":51,"english":56,"science":68},
    {"name":"Julia","maths":47,"english":77,"science":72},
    {"name":"Mary","maths":72,"english":55,"science":81}
  ];
  
  const result = students.reduce(function(result, student) {
    if (student.maths+student.english+student.science< 200) {
      result.push(student);
    }
    return result;
  }, []);
  
  console.log(result);
  