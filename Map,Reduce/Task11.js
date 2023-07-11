/**Given an array of JSONs like
 * [{"name":"Mary","marks":72},
 * {"name":"Anita","marks":75},
 * {"name":"Thomas", "marks":81},
 * {"name":"Bruce", "marks":64}]
 * Use map and join to create a string as shown below. Study the output very carefully.
 * <tr><td>Mary</td><td>72</td><td><button onClick=show('Mary')>Show More</button><tr><td>Anita</td><td>75</td><td><button onClick=show('Anita')>Show More</button><tr><td>Thomas</td><td>81</td><td><button onClick=show('Thomas')>Show More</button><tr><td>Bruce</td><td>64</td><td><button onClick=show('Bruce')>Show More</button> */


 //<tr><td>Mary</td><td>72</td><td><button onClick=show('Mary')>Show More</button><tr><td></td>

 let jsonArray = [
    { "name": "Mary", "marks": 72 },
    { "name": "Anita", "marks": 75 },
    { "name": "Thomas", "marks": 81 },
    { "name": "Bruce", "marks": 64 }
  ];
  
  let result = jsonArray.map(function(obj) {
    return '<tr><td>'+obj.name+'</td><td>'+obj.marks+'</td><td><button onClick="show('+obj.name+')">Show More</button></td></tr>'
  }).join("\n");
  
  console.log(result);
  