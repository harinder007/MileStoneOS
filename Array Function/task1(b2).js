//Sort array in descending order of sales value
const salesData =[
    {name :'pepsi', qty: 20, price:15},
    {name :'coke', qty: 2, price:105},
    {name :'maggie', qty: 8, price:100},
    {name :'limca', qty: 44, price:10}
];

//decsending order of value = qty*price
salesData.sort(compValueDesc);

function compValueDesc(pr1,pr2){
    let v1=pr1.qty*pr1.price;
    let v2=pr2.qty*pr2.price;
    if(v1>v2)
    return -1;
    else if(v1<v2)
        return 1;
    else 
        return 0;
}
console.log(salesData)