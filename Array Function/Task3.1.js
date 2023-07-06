/**Given an array of names, find the name and its index for 
 * a) length of name is greater than 5
 * b) starts with P
 * c) starts with the character provided as a parameter
 * Create suitable test cases and test properl */
let  names = ["Peter", "John", "Paul", "Samantha", "Emma", "Patrick", "Michael"];
let num1=names.find(function(n){
    //console.log(n)
    return n.length>5;
});
console.log("Name greater then 5 is = ",num1)

let num2 =names.findIndex(function(n){

    return n.length>5;
})

console.log("Index number is = ",num2)

// b) start with p
let ch='P';
let num3=names.find(function(n){
    return n[0]==ch;
})
console.log("Name start with p is = "+num3);

// by function we find out the index 

function check(name,character){
    return name[0]==character;
}
// call the function
let num4=names.findIndex(function(n){
    return check(n,ch)
})

console.log("index is = ",num4)

// c) starts with the character provided as a parameter

  function start(arr,char){
    return arr[0]==char;
  }

  let Value=names.find(function(n){
    //call function
    return start(n,'S');  //pass the character as parameter
  })
 
  console.log("Name  = ",Value);

  //find index
  let Value2=names.findIndex(function(n){
    return start(n,'S')
  })
  console.log("Index is = ",Value2)