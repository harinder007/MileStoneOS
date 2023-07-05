//Convert the code into function

const names=['jack','Anaa','Sam','Tim'];
const ch='S';
function findName(namesArr,tofind){
    let name1=namesArr.find(function(name){
        return isStarting(name,tofind);
    });
    return name1;
}
console.log('using function = ',findName(names,ch));
function isStarting(name,start){
    return name[0]==start;
}

//find index by function
function findIndex(namesArr,tofind){
    let index=namesArr.findIndex(function(name){
        return isStarting(name,tofind);
    });
    return index;
}

console.log("index = ",findIndex(names,ch));


//find filter by function 

function filter(namesArr,tofind){
    let result=namesArr.filter(function(name){
        return isStarting(name,tofind)

    });
    return result;
}
console.log("filter = ",filter(names,ch))