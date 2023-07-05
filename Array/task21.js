//Given an array of names and a name, find and remove the name from the array
function removeNameFromArray(names, nameToRemove) {
    for (var i = 0; i < names.length; i++) {
      if (names[i] === nameToRemove) {
        names.splice(i, 1);
        break; 
      }
    }
    return names;
  }
  
  // test cases 

  var case1 = ['Jack', 'Bob', 'Ed', 'Steve'];
  var case11 = 'Bob';
  console.log(removeNameFromArray(case1,case11))
  
  var case2 = ['Jack', 'Bob', 'Ed', 'Steve'];
  var case22 = 'Jack';
  console.log(removeNameFromArray(case2,case22))

  var case3 = ['Jack', 'Bob', 'Ed', 'Steve'];
  var case33 = 'Steve';
  console.log(removeNameFromArray(case3,case33))


  var case4 = ['Jack', 'Bob', 'Ed', 'Steve'];
  var case44 = 'Bill';
  console.log(removeNameFromArray(case4,case44))

  var case5 = ['Jack'];
  var case55 = 'Jack';
  console.log(removeNameFromArray(case5,case55))
  