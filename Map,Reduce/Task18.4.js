//Use reduce to create an array of students who scored more than 60 in maths.
const students = [
    {"name":"Jack","maths":55,"english":60,"science":62},
    {"name":"Anita","maths":62,"english":65,"science":56},
    {"name":"Thomas","maths":68,"english":72,"science":75},
    {"name":"Steve","maths":51,"english":56,"science":68},
    {"name":"Julia","maths":47,"english":77,"science":72},
    {"name":"Mary","maths":72,"english":55,"science":81}
  ];
  
  const studentsAbove60Maths = students.reduce((result, student) => {
    if (student.maths > 60) {
      result.push(student);
    }
    return result;
  }, []);
  
  console.log(studentsAbove60Maths);
  