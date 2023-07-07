//Given a number avg, filter the array for those Given a number avg, filter the array for those whose average marks is greater than avg
let students=[
    {"name":"Mary","marks":[72,65,55,71]},
    {"name":"Anita","marks":[66,70,75,53]},
    {"name":"Edward","marks":[44,54,64,58]},
    {"name":"Thomas","marks":[62,55,65,81]},
    {"name":"Robin","marks":[41,44,47,49]},
    {"name":"Sophia","marks":[71,73,67,77]},
    {"name":"Bruce","marks":[52,57,61,64]}
  ]

  function check(n,GivenAvg){
    let sum=0;
    let avg;
    for(let i=0;i<n.marks.length;i++){
        sum=sum+n.marks[i]
        avg=sum/n.marks.length;

    }
    //console.log(avg)
    return avg>GivenAvg;;
  }

let GivenAvg =65;
let total=students.filter(function(n){

    return check(n,GivenAvg);

})
  console.log("whose average marks is greater than avg = ",total)
