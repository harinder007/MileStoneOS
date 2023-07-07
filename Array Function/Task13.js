/**
 Given an array of stringslike ["JavaScript","Hello","React","Java","Python","C","Node"]
 a) Sort the arrayin ascending orderas in dictionary
 b) Sort the arrayin descending orderas in dictionary
 c) Sort the array in ascending orderof their length
 d) Sort the array in ascending orderof the number of 'a' in them
 Create suitable test cases and test properly
 */
const names=["JavaScript","Hello","React","Java","Python","C","Node"];
let dictionary=names.sort();
console.log('Sorted name = ',dictionary)

//b) sort the array in descending order

let names2=["JavaScript","Hello","React","Java","Python","C","Node"];
names2.sort(function(a,b){
    
    if(a<b){
        return 1;
    }
    else if(a>b){
        return -1;
    }
    else {
        return 0;
    }
})

console.log('sort the array in descending order',names2)

//Sort the array in ascending orderof their length
const names3 = ["JavaScript","Hello","React","Java","Python","C","Node"];
function compLengthAsc(str1, str2) {
  let len1 = str1.length;
  let len2 = str2.length;
  
  if (len1 > len2)
    return 1;
  else if (len1 < len2)
    return -1;
  else 
    return 0;
}

names3.sort(compLengthAsc);
console.log('ascending order of their length',names3);


//d) Sort the array in ascending order of the number of 'a' in them
const names = ['jack', 'tim', 'anna', 'steve', 'ed'];

function compAAsc(str1, str2) {
  let count1 = 0;
  let count2 = 0;

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] === 'a') {
      count1++;
    }
  }

  for (let i = 0; i < str2.length; i++) {
    if (str2[i] === 'a') {
      count2++;
    }
  }

  if (count1 > count2)
    return 1;
  else if (count1 < count2)
    return -1;
  else
    return 0;
}

names.sort(compAAsc);
console.log(names);
