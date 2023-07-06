/**
 * Given an array of employees where each employee is a JSON with name and age, findthe employee and its index for 
 * a) age less than 35
 * b) name of the employee starts with S
 * c) name of the employee starts with the character provided as parameter 
 * Create suitable test cases and test properly
 */
let employees = [
    { name: "John", age: 28 },
    { name: "Emma", age: 33 },
    { name: "Michael", age: 42 },
    { name: "Samantha", age: 25 },
    { name: "Peter", age: 39 },
  ];
   
  let emp1=employees.find(function(n){
    return n.age<35;
  })
  console.log("Name of the employee",emp1)
   //index 

   let index1=employees.findIndex(function(n){
        return n.age<35;
  })
  console.log("Index is = ",index1)

  // b part 
  //name the employee start with S
  let ch='S'
  function CheckName(name,char){
    return name[0]==char;
  }
   
  let emp2=employees.find(function(n){
    return CheckName(n.name,ch);
  })
  console.log("Name of the employee",emp2)
  // index
  let index2=employees.findIndex(function(n){
    return CheckName(n.name,ch);
  })

  console.log('Index is = ',index2)

  // c part 
  //starts with the character provided as a parameter
  
  
  function check(n, char) {
    return n.name.charAt(0) === char;
  }
  
  let num3 = employees.find(function(n) {
    return check(n, 'P');
  });
  
  console.log("Employee starting with 'P':", num3);
  
  let index3 = employees.findIndex(function(n) {
    return check(n, 'P');
  });
  
  console.log("Index:", index3);
  