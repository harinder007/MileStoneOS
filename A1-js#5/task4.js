//Task 4
let str='str=x+y+xy+4x=7';
let len=str.length;
let count=0;
let count2=0;
for(let i=0;i<len;i++){
    if(str[i]=='x'){
        count++;
    }
    else if(str[i]=='y'){
        count2++
    }
}
console.log("x =",count);
console.log("y =",count2);