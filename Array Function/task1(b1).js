//Sort array in ascending order of length of strings
const nums=[2,10,24,5,6];
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


// 
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