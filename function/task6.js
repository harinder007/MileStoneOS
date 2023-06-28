//Define a function that takes a string as parameter and returns the reverse of the string
function rev(str){
 
let len=str.length;
let reverse=""
for(let i=len;i>0; i--){
 reverse=reverse+str[i-1]
}

return reverse;
}

console.log(rev("Perfect"))  // case 1
console.log(rev("Java"))  // case 2
console.log(rev("123456789"))  // case 3
