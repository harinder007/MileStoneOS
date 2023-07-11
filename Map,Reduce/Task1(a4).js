//First maxlen chars of string
let strArr=['hii','Hello','bye','Good']
let maxLen=3;
let result=strArr.map(function(n){
    if(n.length<=maxLen){
        return n
    }
    else
    return n.substring(0,maxLen)
})

console.log(result)