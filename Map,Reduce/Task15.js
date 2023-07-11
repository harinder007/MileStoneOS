/**  Given an array of string, use reduce to 
 * a) concatenate all the strings with :: between them
 * b) compute the sum of the length of all the strings
 * c) concatenate the first character of all the strings. */

//a
const strings = ["Hello", "World", "OpenAI", "Well"];

let result=strings.reduce(function(acc,curr){

    return acc+'::'+curr
})
console.log(result)

//b
let result2=strings.reduce(function(acc,curr){
    
    return acc+curr.length
},0)
console.log("Sum of length of all string = ",result2)

//c
let result3=strings.reduce(function(acc,curr){
    return acc + curr.charAt(0);
},'')
console.log('first character of all string',result3)