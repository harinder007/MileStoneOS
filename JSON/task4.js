/**
 * Define 2 JSONs as {"billid":401, "amount":200} and {"billid":402, "amount":500}
 * Use the JSONs to  calculate and display the sum of the amount of the bills.
 */
let jsonData1={
    billid:401,
    amount:200,

}
let jsonData2={
    billid:402,
    amount:500,

}

let sum=jsonData1.amount+jsonData2.amount;
console.log("sum of two json = ",sum)