//Array of JSON with product and value and sort the array in descending value
const data=[
    {name:'pepsi',qty:20,price:15},
    {name:'coke',qty:30,price:30},
    {name:'colgate',qty:10,price:15},
    {name:'maggie',qty:25,price:15},
];
 
// creatre a array that json should have the name and value
let result=data.map(function(n){
    let v1=n.qty*n.price;
    let json1={name:n.name,value:v1}
  return json1;
})

//console.log(result);
// sort in descending 
result.sort(function (p1, p2) {
    if (p1.value > p2.value) {
        return -1;
    } else if (p1.value < p2.value) {
        return 1;
    } else {
        return 0;
    }
});

console.log(result);