/**Filter the above array of employees for 
 * a) age less than 35
 * b) name of the employee starts with S
*  c) name of the employee starts with the character provided as parameter */
let employees = [
    { name: "John", age: 28 },
    { name: "Emma", age: 33 },
    { name: "Michael", age: 42 },
    { name: "Samantha", age: 25 },
    { name: "Peter", age: 39 },
  ];
   
  let emp1=employees.filter(function(n){
    return n.age<35;
  })
  console.log("Filter = ",emp1)


  // b part 
  //name the employee start with S
  let ch='S'
  function CheckName(name,char){
    return name[0]==char;
  }
   
  let emp2=employees.filter(function(n){
    return CheckName(n.name,ch);
  })
  console.log("Filter Name of the employee",emp2)
  

  // c part 
  //starts with the character provided as a parameter
  
 
  function check(n, char) {
    return n.name.charAt(0) === char;
  }
  
  let num3 = employees.filter(function(n) {
    return check(n, 'P');
  });
  
  console.log("Filter Employee starting with 'P':", num3);
  
  