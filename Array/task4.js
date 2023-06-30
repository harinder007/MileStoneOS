//Given an array, print the sum of the even and odd numbers in the array.
function EvenOdd(arr){
let len =arr.length;
let e=0;
let o=0;
for(let i=0;i<len;i++){
    if(i%2==0){
    e=e+arr[i];
    }
    else {
        o=o+arr[i];
    }
}  
console.log("odd sum ",e);
    return o; 
}

const case1 =[3,4,5,12];
const case2 =[101];
const case3 =[1,2,3,4,5,6,7,8,9,10];

console.log("even sum ",EvenOdd(case1));
console.log("even sum ",EvenOdd(case2));
console.log("even sum ",EvenOdd(case3));