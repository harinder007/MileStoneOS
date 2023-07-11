//Given an array of string, create a new array whose strings are double the string in the array. Use map.
let strArr=["Hi","Hello","Bye"];


function check(strArr){
let result=strArr.map(function(element){
    return element+element; 
})
console.log(result)
}


check(strArr)
// case 2
let case2=["A","B","C","X","Y"];
check(case2);

//case 3

let case3=["AB","+#","EF"];
check(case3);