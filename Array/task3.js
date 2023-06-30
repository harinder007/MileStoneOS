//Given an array, print the sum and count of the multiples of 3 in the array

function sum(arr){
    let len =arr.length;
    let sum=0;
    let count =0;
    
    for(let i=0; i<len; i++){
        
        if (arr[i] % 3 === 0) {
            sum=sum+arr[i];
            count++;
          }
    }
    console.log("Count:", count);
    return sum;
}

const case1=[3,4,5,12];
const case2=[11];
const case3=[1,2,3,4,5,6,7,8,9,10];
const case4=[];

console.log("sum is ",sum(case1));
console.log("sum is ",sum(case2));
console.log("sum is ",sum(case3));
console.log("sum is ",sum(case4));