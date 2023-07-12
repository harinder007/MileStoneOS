//Use reduce to count the number of times the character "a" appears in the array
const courses = ["Hello", "React", "Java", "Python", "Hibernate", "JavaScript"];

const result = courses.reduce(function(acc, curr){
  for (let i = 0; i < curr.length; i++) {
    if (curr.charAt(i) === 'a') {
      acc++;
    }
  }
  return acc;
}, 0);

console.log("Count of 'a':", result);
