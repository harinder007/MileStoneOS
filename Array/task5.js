//Given an array, print the count and the numbers greater than 21 in the array
function greatest(arr){
    let len =arr.length;
    let count=0;
    let value=[];
    for(let i=0;i<len;i++){
        if(arr[i]>21){
            count++;
            value.push(arr[i]);
        }
    }
    console.log("count=",count);
    return value;
}

const case1=[5,18,26,30,40,6];
const case2=[100,200,10,20,50,64];
const case3=[77];
const case4=[];

console.log("No. greater then 21 ",greatest(case1));
console.log("No. greater then 21 ",greatest(case2));
console.log("No. greater then 21 ",greatest(case3));
console.log("No. greater then 21 ",greatest(case4));