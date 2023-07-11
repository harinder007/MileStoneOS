//Given an array of string as input. Each string represents a number around which 
//other characters have beenput. So the string "ab4n#56b2Y" actually represents the number 4562.
// Sort the array in the ascending order of the number each string in it represents

const data = ['8','9','10','aX2'];

data.sort(function(s1, s2) {
  let num1 = +extractNumber(s1);
  let num2 = +extractNumber(s2);

  if (num1 > num2) {
    return 1;
  } else if (num1 < num2) {
    return -1;
  } else {
    return 0;
  }
});

function extractNumber(str) {
  let count='';
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= '0' && str[i] <= '9') {
     count=count+str[i];
    }
  }

  return count;
}

console.log(data);
