/**Given a character ch, 
 * find the first string which ends in ch. 
 * Also finds its index.Also filterthe array.
 * So, for the above array if ch = 'a', 
 * the output should be Java and 2 and filter should be 
 * ['Java']If ch="b" the output should be undefined, -1 and [] */

let Array=['Hello', 'React', 'Java', 'Python', 'Hibernate', 'JavaScript'] 
let ch='a'
let firstString=Array.find((function(n){
    let len=n.length;
    
    return n[len-1]==ch;
}))
console.log("First string which end with a = ",firstString)


// index

let index1=Array.findIndex((function(n){
    let len=n.length;
    
    return n[len-1]==ch;
}))
console.log("Index which end with a = ",index1)

// filter
let filter1=Array.filter((function(n){
    let len=n.length;
    
    return n[len-1]==ch;
}))
console.log("filter which end with a = ",filter1)