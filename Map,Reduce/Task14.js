/**
 * Given an array of numbers, use reduce to 
 * a) compute the sum of the numbers
 * b) product of numbers
 * c) max number
 * d) min number
 * e) count the numbers greater than 10

 */
const nums=[2,3,4,5,45,23,54];
let sum=nums.reduce(function(acc,curr){
    //console.log(acc,curr)
    
    return acc+curr;
},0);

console.log("sum of number is" ,sum)



// product of no.
let product=nums.reduce(function(acc,curr){
    //console.log(acc,curr)
    
    return acc*curr;
},1);
console.log("product of number is" ,product)

// max number
let max=nums.reduce(function(acc,curr){
     
    if(curr>acc){
        return curr;
    }
    else{
        return acc;
    }
    
},1);
console.log("max of number is" ,max)




//min number

let min=nums.reduce(function(acc,curr){
    
    if(curr<acc){
        return curr;
    }
    else{
        return acc;
    }
    
}); ////not initialize the acc by default it is initialize to first value
console.log("min of number is" ,min)



//count the numbers greater than 10

let count = nums.reduce(function (acc, curr) {
    if (curr > 10) {
        return acc + 1;
    }
    return acc;
}, 0);

console.log("Count of numbers greater than 10:", count);





