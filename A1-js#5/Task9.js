//Given a String str, create a new String with the characters at even index in the String. Note that the starting index is 0 which has been considered as even.
let str='JavaMasters'
let len=str.length;
let newstr='';
for(let i=0;i<=len;i++){
if(i%2==0){

    newstr +=str[i]
}

}
console.log(newstr)