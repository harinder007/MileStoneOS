//Filters array on mincut and sorts in descending order
const stData = [
    { name: 'jack', marks1: 33, marks2: 25 },
    { name: 'bob', marks1: 40, marks2: 32 },
    { name: 'mary', marks1: 41, marks2: 40 },
    { name: 'tom', marks1: 24, marks2: 25 }
  ];
  
  let mincut = 59;
  
  function getData(arr, cut) {
    let arr1 = arr.filter(function(st) {
      return (st.marks1 + st.marks2) > cut;
    });
  
    arr1.sort(compTotalDesc);
  
    return arr1;
  }
  
  const farr = getData(stData, mincut);
  console.log(farr);
  
  function compTotalDesc(stu1, stu2) {
    let tot1 = stu1.marks1 + stu1.marks2;
    let tot2 = stu2.marks1 + stu2.marks2;
  
    if (tot1 > tot2)
      return -1;
    else if (tot1 < tot2)
      return 1;
    else
      return 0;
  }
  