//Given an array of numbers, create a new array whose has the string Even if the number is even, and Odd if the number is Odd. Use map
let strArr=[7,2,25,10];

let result=strArr.map(function(element){
    if(element%2==0){
        return 'Even';
    }
    else{
        return 'Odd';
    }

})
console.log(result);


