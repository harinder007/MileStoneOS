//compute the factorial
 function factorial(num){

let fact=1;
for(let i=1; i<=num;i++){
    fact=fact*i
}
return fact;
}

function printfact(num2){
    for(let i=1;i<=num2;i++){
        let allfact = factorial(i);
        console.log("Factorial of ",i," of "," is ",allfact);
    }
}
printfact(7);
