//Given a string remove all X or Ypresent together in the string
let str="AXBYCXDY";
let out = "";
let len=str.length;
for(let i=0; i<len;i++){
    let ch = str[i];
    let prech = str[i-1];
    if(ch=='X' || ch=='Y'){
        if(prech=='X'){
            //do nothing
        }
        else  if(prech=='Y'){
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