//Filter the array for those whose total marks is less than 250.
let students=[
    {"name":"Mary","marks":[72,65,55,71]},
    {"name":"Anita","marks":[66,70,75,53]},
    {"name":"Edward","marks":[44,54,64,58]},
    {"name":"Thomas","marks":[62,55,65,81]},
    {"name":"Robin","marks":[41,44,47,49]},
    {"name":"Sophia","marks":[71,73,67,77]},
    {"name":"Bruce","marks":[52,57,61,64]}
  ]

  let total=students.filter(function(n){
    let sum=0;
    for(let i=0;i<n.marks.length;i++){
        sum=sum+n.marks[i]

    }
    //console.log(sum)
    return sum<250;;
  })
  console.log("Whose makrs is less then 250 = ",total)