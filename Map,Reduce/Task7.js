//Given an array of JSON, create a new array of strings as shown. Use map.
//the output array is ["Mark is 23 years old", "Steve is 28 years old", "Mary is 25 years old", "Bill is 34 years old"]
let jsonArray = [
    { "name": "Mark", "age": 23 },
    { "name": "Steve", "age": 28 },
    { "name": "Mary", "age": 25 },
    { "name": "Bill", "age": 34 }
  ];

  let result=jsonArray.map(function(n){
    return n.name+" is "+n.age+" years old "
  })
   
  console.log(result);