 
//Add 1 to odd number
let n=3;
if(n%2==1){
console.log(n+1)
}
else {
    console.log("even no")
}

// check divisiblity
num=27;
if(num%6==0){
    console.log("Divisble by 6")
}
else if(num%3==0){
    console.log("Divisble by 3")
}
else if(num%2==0){
    console.log("Divisble by 2")
}
else{
    console.log("not divisble by 2,3 & 6")
}

// print the pattern
let size=7;
let str='';
for(let i=1;i<=size;i++){
    if(i%2==1){
        str=str+'j';
    }
    else{
        str=str+'k';
    }
}
console.log(str);

// prime or composite
let n1=21;
let count =0;
for(let i=2;i<n; i++){
    if(n1%i==0){
        count++;
    }
}
if(count==0){
    console.log('prime')
}
else{
    console.log('composite');
}

// task 2
// positive negative no.
let s=0;
if(s>0){
    console.log("Positive number")
}
else if(s==0){
console.log("neither positive or negative");
}
else{
    console.log("Negative no.")
}

// check multiple of 10 or not
let num2=10;
if(num2%10==0){
    console.log("Multiple of 10")
}
else{
    console.log("not a multiple of 10")
}

// task 4
let m=15;
let p=12;
if(m>p){
    console.log("m is larger")
}
 else if(m=p){
    console.log(Equal)
 }
else{
    console.log("m is smaller");

}

//Using a for loop, printnumbers from 1 to 15 in the console. If the number is divisible by 5, printHello instead of the number.
for (var num = 1; num <= 15; num++) {
    if (num % 5 === 0) {
      console.log("Hello");
    } else {
      console.log(num);
    }
  }
  

  //Task 7
  let  a=6;
  for(let i=1;i<=a;i++){
    if(a%i==0){
        console.log(i+":: odd")
    }
    else{
        console.log(i+":: Even ")
    }
  }

  //task 5 
  let b=15;
  for(let i=2;i<=5;i++){
    if(b%i==1){
        console.log(i+": no")
        
    }
    else{
       
        console.log(i+": yes")
    }
  }

  //Task 8
  let t=10;
  for(let i=1;i<=t;i++){
    if(t%i==0){
        console.log(i)
    }
  }

  //Task 9
  let  d=6;
  for(let i=2;i<=d;i++){
    if(d%i==0){
        console.log("Square of "+i+" is "+i*i+"::Even")
    }
    else{
        console.log("Square of "+i+" is "+i*i+"::odd")
    }
  }

// task 10;
let o=85;
  if (o >= 75) {
    console.log('Good');
  } else if (o >= 50) {
    console.log('Average');
  } else {
    console.log('Poor');
  }

  //task 11
  let c=56;
  if (c >= 90 && c <= 100) {
    console.log('Grade A');
  } else if (c >= 75 && c < 90) {
    console.log('Grade B');
  } else if (c >= 50 && c < 75) {
    console.log('Grade C');
  } else {
    console.log('Grade D');
  }

  //task 12
  let pattern = '';
let n11=3;
  for (let i = 1; i <= n11; i++) {
    for (let j = 1; j <= i; j++) {
      if (j % 2 === 0) {
        pattern += 'Y';
      } else {
        pattern += 'X';
      }
    }
    pattern += '\n';
  }

  console.log(pattern);

//Task 20;
  let n0 = 2456; 
  let sum = 0;
  
  for (let i = 1; i <= 4; i++) {
    let lastDigit = n0 % 10; 
    sum += lastDigit; 
    n0 = Math.floor(n0 / 10); 
  }
  
  console.log("Sum of digits:", sum);

  //Task 18
  let nn = 7; 

for (let i = nn; i >= 1; i--) {
  let row = "";
  for (let j = nn; j >= 1; j--) {
    if (i % 3 === 0 && j % 3 === 0) {
      row += "x";
    } else {
      row += j;
    }
  }
  console.log(row);
}

//Task 17
let no = 6; 

let pt = "";
let summ = 0;

for (let i = 1; i <= no; i++) {
  if (i % 2 === 0) {
    pt += "+";
    summ += i;
  } else {
    pt += "-";
    summ -= i;
  }
  pt += i;
}

console.log(pt + "=" + summ);

//Task 16

let x = 6; 

let pp = "";

for (let i = 1; i <= x; i++) {
  if (i % 2 === 0) {
    pp += "+";
  } else {
    pp += "-";
  }
  pp += i;
}

console.log(pp);

//task 15
let z = 4; 

let p11 = "";

for (let i = 1; i <= z; i++) {
  if (i % 2 !== 0) {
    p11 += i;
  } else {
    p11 += "#";
  }
}

console.log(p11);

//task 13
let w=4;
for(let i=1;i<=w; i++){
  if(i%3==0){
    console.log("C")
  }
  else if(i%3==2){
    console.log("B")
  }
  else if(i%3==1){
    console.log("A")
  }
}


//Task 14
let z1 = 4; 

let P = "";

for (let i = 1; i <= z1; i++) {
  P += "P" + i;
  if (i < z1) {
    P += "Q" + (i + 1);
  }
}

console.log(P);

//task 18
let q=7;
let st='';
for(let i=q;i>0;i--){
  if(i%3==0){
    st +='x';
    //console.log(str)
  }
  else{
    st += i;
    
  }
  
}
console.log(st);


