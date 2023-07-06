//Find, findIndex and filterquestions solved in the videoi.Element greater than x
const numbers=[2,5,10,12,18,22];
let x=11;
let num1= numbers.find(function(n){
    return n>x;
 });  
 console.log("find = ",num1); 
 let num2=numbers.findIndex(function(n){
    return n>x;
 })
console.log('findIndex = ',num2);


let num3=numbers.filter(function(n){
    return n>x;
})
console.log('filter = ',num3);
