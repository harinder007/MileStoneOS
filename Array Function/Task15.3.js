//Sort the array in ascending order of country and name, i.e. it should be sorted by country and within country sorted by name

  const data = [
    {"name":"Jack","country":"USA","age":35},
    {"name":"Amit","country":"India","age":38},
    {"name":"Edward","country":"USA","age":41},
    {"name":"Vishal","country":"India","age":30},
    {"name":"Annie","country":"USA","age":27},
    {"name":"Preeti","country":"India","age":25},
    {"name":"Sophie","country":"France","age":29},
    {"name":"Harpreet","country":"India","age":48},
    {"name":"Bob","country":"USA","age":21}
  ];
  
  data.sort(function(a, b) {
    let s1 = a.country;
    let s2 = b.country;
    if (s1 === s2) {
      if (a.name > b.name) {
        return 1;
      } else if (a.name< b.name) {
        return -1;
      } else {
        return 0;
      }
    } else {
      if (a.country > b.country) {
        return 1;
      } else if (a.country < b.country) {
        return -1;
      } else {
        return 0;
      }
    }
  });
  
  console.log("Ascending order of country and name:", data);


  // differennt approach 
  
  