//Names of people and ch
const names=['jack','Anaa','Sam','Tim'];
const ch='A';
let name1=names.find(function(names){
    return names[0]==ch;
})
console.log('find = ',name1)

let name2=names.findIndex(function(names){
    return names[0]==ch;
})
console.log('Index = ',name2)

// lets do with the function
function isStarting(name,start){
    return name[0]==start;
}

//call the function
let name3= names.filter(function(name){
    return isStarting(name,ch);

})
console.log("filter = ",name3)