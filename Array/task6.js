//Given an array, add 10 to all the elements in the array.

function add(arr){
let len= arr.length;
let newArr=[];
for(let i=0;i<len; i++){
    newArr.push(10+arr[i])
}
return newArr;
}
// case 1
const case1=[2,3,5,7];
console.log(add(case1));

// case 2
const case2=[23,25];
console.log(add(case2));
// case 1
const case3=[6];
console.log(add(case3));
