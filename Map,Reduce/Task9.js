/**
 * Given an array of JSONs, create a string using map and join as shown below.So, 
 * if the array was [{"id" : 101, "name" : "Mark},{"id" : 105, "name" : "Steve},{"id" : 78, "name" : "James"}]
 * the string should be
 *  <button onClick=clicked(101)>Mark</button> 
 * <button onClick=clicked(105)>Steve</button><button onClick=clicked(78)>James</button>

 */
let jsonArray = [
    { "id": 101, "name": "Mark" },
    { "id": 105, "name": "Steve" },
    { "id": 78, "name": "James" }
  ];
  
  let result = jsonArray.map(function(obj) {
    return '<button onClick="clicked(' + obj.id + ')">' + obj.name + '</button>';
  }).join("\n");
  
  console.log(result);
  