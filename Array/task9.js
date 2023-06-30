//Given an array of numbers as input, find out which of the first or last element is larger. If the first is larger print FIRST, if the last is larger print LAST. If they are equal print EQUAL. Also print the value
function check(array){
let len = array.length;
let i = 0; // Index of the first element
let j = len - 1; // Index of the last element

if (array[i] > array[j]) {
  console.log('FIRST',array[i]);
} else if (array[i] === array[j]) {
  console.log('EQUAL',array[i]);
} else {
  console.log('LAST',array[j]);
}
}

let case1=[4,8,12,20,6];
check(case1);

let case2=[10,8,6,4,2,0];
check(case2);

let case3=[15,15]
check(case3);

let case4=[40]
check(case4)

let case5=[2,4,6,8,6,4,2]
check(case5)
    


