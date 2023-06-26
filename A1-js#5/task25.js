//Given a string remove all + present together in the string.
let str="a+++b++c+";
let out = "";
let len=str.length;
for(let i=0; i<len;i++){
    let ch = str[i];
    let prech = str[i-1];
    if(ch=='+'){
        if(prech=='+'){
            //do nothing
        }
        else{
            out = out + ch;
        }
    }
    else{
        out=out+ch;
    }
}
console.log(out);
