//Array of absolute values
const num=[3,10,-4,0,-33,6];
// absolute value n>=0 it is n
// otherwise it is -1*n
const result=num.map(function(n){
    if(n>=0){
        return n;}

        else 
        return -1*n
})
console.log('Absolute value',result)