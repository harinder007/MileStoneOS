//count string with b or B
function hasB(str){
let lenstr=str.length;
for(let i=0;i<lenstr;i++){
    if(str[i]=='b' || str[i]=='B'){
        return true;
    }
}
return false;
}
const strings=['hii','ball','CAB'];
let len=strings.length;
let count =0;
for(let i=0;i<len;i++){
    if (hasB(strings[i])){
        count++;
    }
}
console.log('number of string with b or B is ',count) 