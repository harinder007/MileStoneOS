//Given a number cutoff, count the number of elements in the marks array greater than cutoff. 
//Sort the JSON array in descending order of this count
const data = [
    { name: "Mary", marks: [72, 65, 55, 71] },
    { name: "Anita", marks: [66, 70, 75, 53] },
    { name: "Edward", marks: [44, 54, 64, 58] },
    { name: "Thomas", marks: [62, 55, 65, 81] },
    { name: "Robin", marks: [41, 44, 47, 49] },
    { name: "Sophia", marks: [71, 73, 67, 77] },
    { name: "Bruce", marks: [52, 57, 61, 64] },
  ];


  let num =50;
  data.sort(function(a,b){
    let s1=a.marks;
    let count1=0;
    for(let i=0;i<s1.length;i++){
      if(s1[i]>num){
        count1++;
      }
      return count1;
    }
   
    let s2=a.marks;
    let count2=0;
    for(let i=0;i<s2.length;i++){
        if(s2[i]>num){
            count2++;
          }
          return count2;
        }

    if(count1>count2){
      return -1;
  }
  else if(count1<count2){
      return 1;
  }
  else{
      return 0;
  }
});

console.log("descending order of this count=",data)