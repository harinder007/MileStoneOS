//Given an array of string. Fllter the array for strings that have at least 1 a, b or c.
const array = ['aa', 'car', 'is', 'going'];

const filteredArray = array.filter(function(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'a' || str[i] === 'b' || str[i] === 'c') {
      return true;
    }
  }
  return false;
});


//filteredArray.sort();

console.log(filteredArray);

