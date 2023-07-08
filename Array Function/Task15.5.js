//Define a function that takes a country as parameter and returns an array of people in that country sorted by age in descending order.
const data = [
    {"name":"Jack","country":"USA","age":35},
    {"name":"Amit","country":"India","age":38},
    {"name":"Edward","country":"USA","age":41},
    {"name":"Vishal","country":"India","age":30},
    {"name":"Annie","country":"USA","age":27},
    {"name":"Preeti","country":"India","age":25},
    {"name":"Sophie","country":"France","age":29},
    {"name":"Harpreet","country":"India","age":48},
    {"name":"Bob","country":"USA","age":21}
  ];

let contry='India';
function check(arr,contry){
    let arr1=arr.filter(function(n){
        return (n.country)==contry;
    });
    arr1.sort(checkAge);
    return arr1;
}
function checkAge(a,b){
    let s1=a.age;
    let s2=b.age;
    if(s1>s2){
        return -1
    }
    else if(s1<s2){
        return 1;
    }
    else {
        return 0;
    }

}

//call the function
let result=check(data,contry);
console.log(result);