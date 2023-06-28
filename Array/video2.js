//sum of no. divisible by 5
let num=[2,20,,6,8,10,15,5,7,25,30];
let len=num.length;
let count=0;
let sum =0
for(let i=0;i<=len;i++){
    if(num[i]%5==0){
        sum=sum+num[i]
        count++;
    }
}
console.log("sum of no. divisible bt 5 is ",sum)