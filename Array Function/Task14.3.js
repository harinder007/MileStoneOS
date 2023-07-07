//Sort the array in ascending order of total marks in 3 subjects
const Array = [
    {"name":"Jack","maths":55,"english":60,"science":62},
    {"name":"Anita","maths":62,"english":65,"science":56},
    {"name":"Thomas","maths":68,"english":58,"science":54},
    {"name":"Steve","maths":51,"english":56,"science":68},
    {"name":"Julia","maths":47,"english":77,"science":72},
    {"name":"Mary","maths":72,"english":55,"science":60}
  ];
  
  Array.sort(function(a, b) {
    let s1= a.maths+a.english+a.science
    let s2=a.maths+a.english+a.science
    if(s1<s2){
        return 1;
    }
    else if(s1>s2){
        return -1;
    }
    else {
        return 0;
    }

  });
  
  console.log("ascending order of total marks in 3 subjects ",Array);