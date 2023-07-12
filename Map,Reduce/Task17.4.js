/**
 * Use reduce to compute the number of strings that start with a specified character ch  provided as a parameter. 
 * So, if ch="A", the output should be 0.So, if ch="J", 
 * the output should be 2.So, if ch="R", the output should be 1.
 */
const strings = ["Hello", "React", "Java", "Python", "Hibernate", "JavaScript"];
function check(strings, ch) {
    const count = strings.reduce(function(accumulator, current){
      if (current.charAt(0) === ch) {
        return accumulator + 1;
      } else {
        return accumulator;
      }
    }, 0);
  
    return count;
  }
  
  
  const ch = "R";
  const result = check(strings, ch);
  
  console.log(result); // Output: 1
  