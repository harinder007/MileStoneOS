//Filter the array for those whose names has less than 6 characters.
//Also find and findIndex the first JSON whose names has less than 6 characters.
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
    let len =n.name.length;
    return len<6;
  })
  console.log("Whose  name is less then 6 character =",country);

  // find index
  let index1=array.findIndex(function(n){
    let len =n.name.length;
    return len<6;
  })
  console.log("Index is =" ,index1);