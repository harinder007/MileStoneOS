//Given an array of numbers, 
//find the number and its index for 
//a) equal to 10  b) greater than 30    c) multiple of 3 .     Create suitable test cases and test properly

// find number equal to 10;
let Array=[2,3,4,5,6,10,65,37,89];
let a=10;

let num1=Array.find(function(n){
    return n==a;
});
console.log(num1)

//find index no. equal to 10
let num2=Array.findIndex((function(n){
    return n==a;
})
);
console.log("Index no. is = ",num2)


// b) Greater then 30
let b=30;
let num3=Array.find(function(n){
    return n>b;
})
console.log("Greater then 30 = ",num3)

// find the index no. greater then 30
let num4=Array.findIndex(function(n){
    return n>b;
});
console.log("Index no. is = ",num4);

// c) Multiple of 3 find number
let num5=Array.find((function(n){
    return n%3==0;
}))
console.log("multiple of 3 is = ",num5)

// find index of multiple of 3
let num6=Array.findIndex(function(t){
    return t%3==0;
})
console.log("Index no. is = ",num6);