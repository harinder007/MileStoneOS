//Filter the array for those whose country is India. Also find and findIndex the first JSON whose country is India.

let array=[   {"name":"Jack","country":"USA","age":35},
    {"name":"Amit","country":"India","age":38},
    {"name":"Edward","country":"USA","age":41},
    {"name":"Vishal","country":"India","age":30},
    {"name":"Annie","country":"USA","age":27},
    {"name":"Nick","country":"France","age":32},
    {"name":"Francis","country":"France","age":44},
    {"name":"Preeti","country":"India","age":25},
    {"name":"Sophie","country":"France","age":29},
    {"name":"Harpreet","country":"India","age":48},
    {"name":"Bob","country":"USA","age":21}
  ]
  
  let country=array.filter(function(n){
    return n.country=='India'
  })
  console.log("Whose country is India=",country);

  // find index
  let index1=array.findIndex(function(n){
    return n.country=='India'
  })
  console.log("Whose index is India=" ,index1);