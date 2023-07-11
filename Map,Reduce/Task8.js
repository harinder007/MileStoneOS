/**
 * Given an array of names, create a string using map and join as shown below.So, 
 * if the array was ["Mark","James","Martha"]the string should be 
 * <ul><li>Mark</li><li>James</li><li>Martha</li></ul>
 */
let strArr = ["Mark", "James", "Martha"];

let result = "<ul>" + strArr.map(function(n) {
  return "<li>" + n + "</li>";
}).join("") + "</ul>";

console.log(result);
