//Given an array of number , find the largest number in the array.
const nums=[2,3,4,5];
// assume all number are>0
let largestNumber=nums.reduce(function(acc,curr){
    //console.log(acc,curr)
    if(curr>acc){
        return curr;
    }
    else 
    return acc;

},0)
console.log(largestNumber)