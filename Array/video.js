// count even no. in array
const nums=[2,4,5,6,8,9,7,15]
let len=nums.length;
let count=0;
for(let i=0;i<len;i++){
    if(nums[i]%2==0){
        count++;
    }
}
console.log("numbers of evens ",count)