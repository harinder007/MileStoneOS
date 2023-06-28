//Remove Hello from array
const array = ["Hi", "Hello", "Hey", "Hola"];
const index = array.indexOf("Hello");
if (index !== -1) {
  array.splice(index, 1);
}
console.log(array);
