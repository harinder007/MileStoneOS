//create an array where each string Enclose each string in <p> and </p>

let strArr=['hi','how','are','you'];

let result=strArr.map(function(n){
    return '<p>'+n+'</p?';

})

console.log(result)