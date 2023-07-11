// Given an array of Json where each Json is the sales data with fields name ,quantity and price.
//calculate the total sales value
const data=[
    {name:'pepsi',qty:20,price:15},
    {name:'coke',qty:30,price:30},
    {name:'colgate',qty:10,price:15},
    {name:'maggie',qty:25,price:15},
];
// total sales value
let result=data.reduce(function(acc,curr){
    let v1=curr.qty*curr.price;
    return v1+acc;
    
},0)

console.log(result)