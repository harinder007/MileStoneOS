//Given an array of string, create a string as shown. Use join.

function JoinMethod(array){
    let newArray=array.join('#');
    return newArray;
}


// test case
let case1=["Hi","Hello","Bye"];
console.log(JoinMethod(case1))

//case 2
let case2=["A","B","C","X","Y"]
console.log(JoinMethod(case2))

//case 3
let case3=["AB","12","EF"]
console.log(JoinMethod(case3))