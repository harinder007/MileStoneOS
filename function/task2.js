//Define a function that a number n as parameter and returns the sum of the numbers from 1 to n

function sum(num1){
    let total=0;
    for(let i=1; i<=num1;i++){
        total=total+i
    }
    return total;
}
console.log(sum(20))