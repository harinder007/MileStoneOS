//Given an array as input, convert all odd numbers in the array to the nearest even number greater than it. Also, print the array

function odd(array){
let len=array.length;
let newarr=[];
for(let i=0;i<len;i++){
    if(array[i]%2==1){
       
        newarr.push(1+array[i])
    }
    else{
        newarr.push(array[i])
    }
}
console.log(newarr);
}


//case 1
let case1=[5,18,23,30];
odd(case1);
//case2
let case2=[5,7,9];
odd(case2);
//case3
let case3=[72];
odd(case3);