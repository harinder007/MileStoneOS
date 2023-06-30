//Given an array as input,create a new array with the even numbers in the input array. Use unshift
function getevenarray(array){
    let len =array.length;
    let newarray=[];
    for(let i=0; i<len;i++){
        if(array[i]%2==0){
            newarray.unshift(array[i]);
        }
    }
    return newarray;
}
let case1=[5,18,26,30,40,6,3]
console.log(getevenarray(case1));

let case2=[6]
console.log(getevenarray(case2))

let case3=[77]
console.log(getevenarray(case3))

let case4=[20,14,2,7,18]
console.log(getevenarray(case4))

  