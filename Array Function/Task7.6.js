//Given a string str as input,filter the array for those whose country is one specified in str.
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
  let str="France";

 function check(n,str){
    return n.country===str
 }

  let country=array.filter(function(n){
    
    return check(n,str)
  })
  console.log("Whose country is ",str ," =",country);

  // find index
  let index1=array.findIndex(function(n){
    return check(n,str)
  })
  console.log("Index is =" ,index1);
