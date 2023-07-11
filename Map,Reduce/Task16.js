/**
 *a) compute the sum of ages
 b) Count the number of persons who are more than 27 years of age
 c) Compute the youngest person
 d) Compute the oldest person
 e) Count the number of people whose name starts with 'M
 * 
 */
const persons = [
    {"name": "Mark", "age": 23},
    {"name": "Steve", "age": 28},
    {"name": "Mary", "age": 25},
    {"name": "Bill", "age": 34}
  ];

  let sum=persons.reduce(function(acc,curr){
   // console.log(acc,curr.age)
    return acc+curr.age

  },0)
  console.log("sum of ages = ",sum);


  //b
  let result=persons.reduce(function(acc,curr){

    if (curr.age > 27) {
        return acc + 1;
    }
    return acc;

  },0)
console.log("Age more then 27 is = ",result)

//c  Compute the youngest person

let young=persons.reduce(function(acc,curr){

    if(curr.age<acc){
        return curr.age;
    }
    else{
        return acc;
    }
    
})
console.log("Youngest person",young)

//d oldest person

let oldest = persons.reduce(function(acc, curr) {
    if (curr.age > acc.age) {
      return curr;
    } else {
      return acc;
    }
  });
console.log("oldest person",oldest)

//e) Count the number of people whose name starts with 'M
let result2 =persons.reduce(function(acc,curr){
    if (curr.name.charAt(0) === 'M') {
        return acc + 1;
      } else {
        return acc;
      }
    }, 0);
    
console.log("Name Start with \'M\'= ",result2)