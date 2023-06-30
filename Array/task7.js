//Given an array, add Hello to all the elements in the array. Also, print the array
function add(array){
    
 
for (let i = 0; i < array.length; i++) {
  array[i] = 'Hello ' + array[i];
}
return array;

}

//case 1
let case1 = ['Jack', 'Mary'];
 console.log( add(case1));

 //case 2
 let case2 = ['Jack'];
 console.log( add(case2));

 //case 3
 let case3 = [];
 console.log( add(case3));