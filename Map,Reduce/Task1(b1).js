// Given an array of number calculate sum  of their cube
const nums=[2,3,4,5];
let sum=nums.reduce(function(acc,curr){
    let cube=curr*curr*curr;
    return acc+cube;
},0);

console.log("cube of number is" ,sum)
