//Given an array of string as input. Filter the array for strings that have at least 1 uppercase alphabet
const array = ["Hello", "how", "are", "you"];

const filteredArray = array.filter(function(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "A" && str[i] <= "Z") {
      return true;
    }
  }
  return false;
});

console.log(filteredArray);
