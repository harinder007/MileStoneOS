//Sort the array in descending order of sum of marks array


  const data = [
    { "name": "Mary", "marks": [72, 65, 55, 71] },
    { "name": "Anita", "marks": [66, 70, 75, 53] },
    { "name": "Edward", "marks": [44, 54, 64, 58] },
    { "name": "Thomas", "marks": [62, 55, 65, 81] },
    { "name": "Robin", "marks": [41, 44, 47, 49] },
    { "name": "Sophia", "marks": [71, 73, 67, 77] },
    { "name": "Bruce", "marks": [52, 57, 61, 64] }
  ];
  
  
  data.sort(function(a,b){
    let s1=a.marks;
    let sum=0;
    for(let i=0;i<s1.length;i++){
      sum=sum+s1[i];
      return sum;
    }
   
    let s2=a.marks;
    let sum2=0;
    for(let i=0;i<s2.length;i++){
      sum2=sum2+s2[i];
      return sum2;
    }

    if(sum>sum2){
      return -1;
  }
  else if(sum<sum2){
      return 1;
  }
  else{
      return 0;
  }
});

console.log(data)