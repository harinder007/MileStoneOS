//Use reduce to compute the longest string in the array
const strings = ["Hello", "React", "Java", "Python", "Hibernate", "JavaScript"];

const longestString = strings.reduce(function(longest, current) {
  if (current.length > longest.length) {
    return current;
  } else {
    return longest;
  }
}, "");

console.log(longestString); 
