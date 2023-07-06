/**
 * Given an array of string, find the first string which ends in t. 
 * Also find its index.Also filter the array.For e.g. if the array was 
 * ['Hello', 'React', 'Java', 'Python', 'Hibernate', 'JavaScript'] 
 * the output should be React and index should be 1 and 
 * the output of filter should be ['React','JavaScript']
 */
let Array=['Hello', 'React', 'Java', 'Python', 'Hibernate', 'JavaScript'] 
let firstString=Array.find((function(n){
    let len=n.length;
    
    return n[len-1]=='t'
}))
console.log("First string which end with t = ",firstString)

// index

let index1=Array.findIndex((function(n){
    let len=n.length;
    
    return n[len-1]=='t'
}))
console.log("Index which end with t = ",index1)

// filter
let filter1=Array.filter((function(n){
    let len=n.length;
    
    return n[len-1]=='t'
}))
console.log("filter which end with t = ",filter1)