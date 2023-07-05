/** In a shop there are 3 products  with the code as PX101, PX102 and PX103. 
 * In the shop the stock of the 3 products are 15, 24 and 33. The price of each product is 30, 20 and 10.
 * Create 3 JSON's representing each product. 
 * The JSON should have the code, stock and price. Display the JSON's */

const product1 = {
    "code": "PX101",
    "stock": 15,
    "price": 30
  };
  
  const product2 = {
    "code": "PX102",
    "stock": 24,
    "price": 20
  };
  
  const product3 = {
    "code": "PX103",
    "stock": 33,
    "price": 10
  };
  
  console.log("Product 1:", product1);
  console.log("Product 2:", product2);
  console.log("Product 3:", product3);
  
  //6.2
  /**Create a JSON representing the shop which has a field named products having an array with the 3 product JSON's.Display it */
  const shop = {
    "products": [product1, product2, product3]
  };
  
  console.log(shop);
//6.3
  //Using the shop JSON calculate totalStockQty. Add this fieldto the shop JSON. Display it.
  
 // let totalStockQty = 0;

//or (const product of shop.products) {
  //totalStockQty += product.stock;
//}


// Add totalStockQty to the shop JSON
//shop.totalStockQty = totalStockQty;

// Display the updated shop JSON
//console.log(shop);

//Create a new product PX104 with stock as 10 and price as 40. Create a JSON and add it to the shop. Also re-compute and update totalStockQty
const product4 = {
  "code": "PX104",
  "stock": 10,
  "price": 40
};

shop.products.push(product4);

// re-compute the total stockqty

let totalStockQty=0;
for (const product of shop.products) {
  totalStockQty += product.stock;
}
shop.totalStockQty = totalStockQty;

// Display the updated shop JSON
console.log(shop);

//The prices of some products have to be increased by 10%. An array with the names of the products whose price is increased is provided. Using this array, update the JSON of the shop.
const productsToUpdate = ["PX101", "PX103"]; // Array of product codes to update

for (const product of shop.products) {
  if (productsToUpdate.includes(product.code)) {
    product.price *= 1.1; // Increase the price by 10%
  }
}

console.log(shop);