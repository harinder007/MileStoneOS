//Use reduce to count the number of people whose city is London.


let array=[
    
{"fname":"Jack","lname":"Smith","city":"London"},
{"fname":"Mary","lname":"Markle","city":"London"},
{"fname":"Ed","lname":"May","city":"Paris"},
{"fname":"Tim","lname":"Gates","city":"Rome"}]

let city=array.reduce(function(acc,curr){

    if(curr.city==='London'){
        return acc + 1;
    }
    else {
        return acc;
    }
},0);
console.log(city)
