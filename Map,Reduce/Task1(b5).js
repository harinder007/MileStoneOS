//find the product whose sales value is the maximum

const data= [
    {name:'pepsi',qty:20,price:15},
    {name:'coke',qty:30,price:30},
    {name:'colgate',qty:10,price:15},
    {name:'maggie',qty:25,price:15},
];

let result=data.reduce(function(acc,curr){
    //acc has the json for the maximum sale
    let v1=curr.qty*curr.price;
    let accValue=acc.qty*acc.price;
    if(v1>accValue)
    return curr;
    else 
    return acc;
})

console.log(result)