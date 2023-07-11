//Given an array of strings, find the smallest string in the array by length
let strArr=['hii','Hello','bye','Good']

let smallest =strArr.reduce(function(acc,curr){
    if(curr.length<acc.length){
        return curr;
    }
    else  
    return acc;

})//not initialize the acc by default it is initialize to first value
console.log(smallest)