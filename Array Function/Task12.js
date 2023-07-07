/**Given an array of numbers like [12,5,-6,10,-9,4,0,-23,34]
 * a) Sort the numbers in ascending order
 * b) sort the numbers in descending order
 * c) sort the numbers based on their absolute value in ascending order
 * Create suitable test cases and test properlyTask */
const nums=[12,5,-6,10,-9,4,0,-23,34]
nums.sort(Asscending);
function Asscending(num1,num2){
    if(num1>num2)
    return 1;  //later

    else if(num1<num2)
    return -1; //earlier

    else
    return 0;  //same

}
console.log("Asscending order ",nums)




//b) sort the numbers in descending order

const nums2=[12,5,-6,10,-9,4,0,-23,34]
nums.sort(Decending);
function Decending(num1,num2){
    if(num1>num2)
    return -1;  //later

    else if(num1<num2)
    return 1; //earlier

    else
    return 0;  //same

}
console.log("Decending order ",nums)


//c) sort the numbers based on their absolute value in ascending order
const nums3 = [12, 5, -6, 10, -9, 4, 0, -23, 34];

nums3.sort((num1, num2) => {
  const absNum1 = Math.abs(num1);
  const absNum2 = Math.abs(num2);
  
  if (absNum1 > absNum2)
    return 1;  // later
  else if (absNum1 < absNum2)
    return -1; // earlier
  else
    return 0;  // same
});

console.log("Numbers sorted by absolute value (ascending):", nums3);




const names =['jack','tim','anna','steve','ed']
// sort in ascending order of lenth
function compLengthAsc(str1,str2){
    let len1=str1.lenght;
    let len2=str2.lenght;
    if(len1>len2)
     return 1;
    else if(len1<len2)
     return -1;
    else 
        return 0;

}
console.log(names)



