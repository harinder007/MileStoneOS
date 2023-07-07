//Define a function takes an array and separator as parameters and 
//returns a string with the array elements in a string separated by the separator.Use join.

function JoinMethod(array,separator){
    let newArray=array.join(separator);
    return newArray;
}


// test case
let case1=["Hi","Hello","Bye"];
console.log(JoinMethod(case1,'**'))

//case 2
let case2=["A","B","C"]
console.log(JoinMethod(case2,'Level:'))

//case 3
let case3=["AB","12","EF"]
console.log(JoinMethod(case3,'#'))