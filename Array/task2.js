//Given an array, print the sum of the numbers in the array.
function add(arr){
let len =arr.length;
let sum=0;
for(let i=0;i<len; i++){
    sum=sum+arr[i]
    
}
return sum;
}

const case1 = [2, 3, 4, 5];
const case2= [11];
const case3=[-1,2,-3,4,-5,6,-7];
const case4=[];
console.log('sum of array is ',add(case1));
console.log('sum of array is ',add(case2));
console.log('sum of array is ',add(case3));
console.log('sum of array is ',add(case4));