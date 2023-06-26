//Given a string as input, print two strings, one of all the chars appearing at odd index and the second of all the chars appearing at even index
let str="A1B2C3";
let len=str.length;
let evenstr="";
let oddstr="";
for(let i=0; i<len; i++){
    if(i%2==0){
        evenstr+=str[i];
    }
    else{
       oddstr+=str[i];
    }
    
}
console.log("Odd : ",oddstr)
console.log("Even : ",evenstr)

