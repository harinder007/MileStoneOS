//Given a string str, check whether the string starts with ABCD
var str = "ABfCDJS";
var prefix = "ABCD";
var startsWithABCD = "Start with ABCD";

for (var i = 0; i < prefix.length; i++) {
  if (str[i] !== prefix[i]) {
    startsWithABCD = "Does not start with ABCD";
    break;
  }
}

console.log(startsWithABCD);  
