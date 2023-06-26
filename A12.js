//Write a Javascript code that adds two numbers and prints the output on the console.
let num1=12;
let num2=2;
let sum=num1+num2;
console.log(sum);

//Write a Javascript code that concatenates two stringsand prints the output on the console.

let firstName='Harinder';
let lastName='yadav';
let age=22;
console.log(firstName+lastName);
console.log("My name is "+firstName+" "+"and my age is "+age);

//variable are those whose value can change
let name='j'
console.log(name);
name='k';
console.log(name);

//task 2
//let a= 1;
//let b=3;
//let c= a+b;
//console.log("sum of "+a+" and "+b+" is "+c);

//task 3
//Write a Javascript code where 3 numbers a,b, and c are given. Write appropriate code to create a string similar to the one shown below and print it on the consolea + b +  c = d Note that a, b, c and d should be replaced by their appropriate values
//a *(b +  c) -(b*c)= d 
const a=3;
const b=4;
const c=5;
const d=a *(b +  c) -(b*c)
console.log(a+" * "+"("+b+" + "+c+")"+" - "+"("+b+" * "+c+")"+" = "+d)

//js-A1#3
//Task 1 a

/*str='';
let n=3;
for(let i=1;i<=n;i++){
    str=str+"A"+i
    console.log(str)
}
*/
let n=3;
let s='';
let summ='';
for(let i=1;i<=n;i++){
s=s+"M";
summ=summ+s+"+";
     
}
console.log(summ)

// print table
let n1=3;
let t="";
for( i=n1;i>=1;i--){

 t+=i+""
    
}
console.log(t)


