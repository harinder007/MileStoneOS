//Given a string str, print all the digits in the string on the console

let strn ='qw23BN**45g';
let lenn = strn.length;

let digits = ''

for(let i=0; i<lenn;i++){

 if(strn[i]>='0'&& strn[i]<='9'){
    digits=digits +strn[i];} 

}
console.log(digits);