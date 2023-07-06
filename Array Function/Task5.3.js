/**Given a character ch, find the first string has the ch in it. 
 * Also finds its index and filter the array.So, for the above array if ch = 'y', 
 * the output should be Python, 3 and ['Python']
 * If ch='a'the output should be React, 1 and ['React', 'Java', 'Hibernate', 'JavaScript'].*/

let Array = ['Hello', 'React', 'Java', 'Python', 'Hibernate', 'JavaScript'];
let ch = 'a';

   let firstString = Array.find(function (n) {
   let len = n.length;

  for (let i = 0; i < len; i++) {
    if (n[i] === ch) {
      return true;
    }
  }

  return false;
});

console.log("First string that contains", ch, "=", firstString);

// find index
let index = Array.findIndex(function (n) {
    let len = n.length;
 
   for (let i = 0; i < len; i++) {
     if (n[i] === ch) {
       return true;
     }
   }
 
   return false;
 });
 console.log('index is = ',index)

 // find filter
 let filter = Array.filter(function (n) {
    let len = n.length;
 
   for (let i = 0; i < len; i++) {
     if (n[i] === ch) {
       return true;
     }
   }
 
   return false;
 });
 console.log('filter is = ',filter)