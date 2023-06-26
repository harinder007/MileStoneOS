let str='azazon';
let len=str.length;
let count=0;
for(let i=0;i<len;i++){
    if(str[i]=='z'){
        count++;
    }
}
console.log(count);

// double each  other
let strr='abc'
let lent=strr.length;
let newstr='';
for(let i=0;i<lent;i++){
    newstr=newstr + strr[i] + strr[i];
}
console.log(newstr);

// create 3 string alphabet digit and other
let strn ='Ab#6!8m';
let lenn = strn.length;
let alpha = ''
let digits = ''
let rest = ''
for(let i=0; i<lenn;i++){
    if(strn[i]>='a'&& strn[i]<='z'){
        alpha= alpha + strn[i];
    }
    else if(strn[i]>='A'&& strn[i]<='z'){
        alpha= alpha + strn[i];
    }
    else if(strn[i]>='0'&& strn[i]<='9'){
        digits=digits +strn[i];
    }
    else {
        rest = rest +str[i];
    }

}
console.log(alpha,rest ,digits);


