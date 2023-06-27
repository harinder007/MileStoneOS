//Given a string str, count the number of times the string ABCD is in it.
var str = "ABCDJS";
var searchString = "ABCD";
var count = 0;

for (var i = 0; i <= str.length - searchString.length; i++) {
  if (str.slice(i, i + searchString.length) === searchString) {
    count++;
  }
}

console.log(count);  
