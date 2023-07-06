/**Given an array of names, filter the array for 
 * a) length of name is greater than 5
 * b) starts with P
 * c) starts with the character provided as a parameter
 * Create suitable test cases and test properly */

let  names = ["Peter", "John", "Paul", "Samantha", "Emma", "Patrick", "Michael"];
let num1=names.filter((function(n){
    return n.length>5
}));
console.log("Filtered Array is =",num1)

// start with p

let ch ='P'
let num2=names.filter(function(n){
    return n[0]==ch;
})
console.log('Name start with p = ',num2)

//starts with the character provided as a parameter


function check(n, char) {
  return n.charAt(0) === char;
}

let num3 = names.filter(function(n) {
  return check(n, 'P');
});

console.log("Names starting with 'P':", num3);
