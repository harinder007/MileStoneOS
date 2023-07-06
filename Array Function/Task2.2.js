/**Given an array of numbers, filter the array
 * a) equal to 10
 * b) greater than 30
 * c) multiple of 3
 * Create suitable test cases and test properly */
let Array=[2,3,4,5,6,10,65,37,89];
// equal to 10;
let num1=Array.filter(function(n){
    return n==10;
})
console.log("Equal to 10 is = ",num1);

//greater then 30
let num2=Array.filter(function(n){
    return n>30;
})
console.log("Greater then 30 is = ",num2)

//multiple of 3

let num3=Array.filter(function(n){
    return n%3==0;
})
console.log("Multiple of 3 is = ",num3)