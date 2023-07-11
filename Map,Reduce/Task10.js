/**Given an array of JSONs, create a string using map and join as shown below.So, 
 * if the array was [{"id" : 101, "name" : "Mark"},
 * {"id" : 105, "name" : "Steve"},
 * {"id" : 78, "name" : "James"}]
 * the string should be <p class='id101'>Mark</p> <p class='id105'>Steve</p> <p class='id78'>James</p>
 * Google and read about how to use escape character and put a quote */
let jsonArray = [
    { "id": 101, "name": "Mark" },
    { "id": 105, "name": "Steve" },
    { "id": 78, "name": "James" }
  ];

  let result = jsonArray.map(function(obj) {
    return '<p class= \'id'+obj.id+ "\'"  + '>'+obj.name+'</p>'  // use escape character and put a quote
  }).join("\n");
  
  console.log(result);