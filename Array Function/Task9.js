/**
 * Define a function that takes an array of JSON, a string and a boolean as parameters. 
 * If the the boolean is true, filter and return the array whose name match the given string. If the boolean is false, 
 * filter and return the array who tech match the given string
 */
let inputArray = [
  {"name":"Jack","tech":"Android"},
  {"name":"Mary","tech":"React"},
  {"name":"Bob","tech":"Angular"},
  {"name":"Steve","tech":"Spring"},
  {"name":"James","tech":"Android"},
  {"name":"Julia","tech":"Android"},
  {"name":"Michel","tech":"React"},
  {"name":"Bill","tech":"Angular"},
  {"name":"Sonny","tech":"Spring"},
  {"name":"Martins","tech":"React"},
  {"name":"Bruce","tech":"Angular"},
  {"name":"Sam","tech":"Spring"}
];

function filterArrayByBoolean(booleanValue, filterString, array) {
  return array.filter(obj => {
    if (booleanValue) {
      return obj.name === filterString;
    } else {
      return obj.tech === filterString;
    }
  });
}

let booleanValue = true;
let filterString = "Mary";
let filteredResult = filterArrayByBoolean(booleanValue, filterString, inputArray);
console.log("Filtered array:", filteredResult);

booleanValue = false;
filterString = "Angular";
filteredResult = filterArrayByBoolean(booleanValue, filterString, inputArray);
console.log("Filtered array:", filteredResult);
