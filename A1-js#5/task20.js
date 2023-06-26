//Given a two strings representing names of people, check whether they are the same person. Note that the case of alphabets can be different. So before comparing, convert them into either uppercase or lowercase

let text1 = "james";
let text2  = "jaMES";
let result1 = text1.toUpperCase();
let result2 = text2.toUpperCase();

if(result1==result2){
    console.log("Same")
}
else{
    console.log("Different")
}