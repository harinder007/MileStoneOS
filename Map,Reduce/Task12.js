/**
 * Given an array of JSON, use map to create an array of cities.
 * [{"fname":"Jack","lname":"Smith","city":"London"},
 * {"fname":"Mary","lname":"Markle","city":"Amsterdam"},{"fname":"Ed","lname":"May","city":"Paris"},
 * {"fname":"Tim","lname":"Gates","city":"Rome"}]
 * 
 * So, the new array should be ["London","Amsterdam","Paris","Rome"]
 */
let jsonArray = [
    {"fname":"Jack","lname":"Smith","city":"London"},
    {"fname":"Mary","lname":"Markle","city":"Amsterdam"},
    {"fname":"Ed","lname":"May","city":"Paris"},
    {"fname":"Tim","lname":"Gates","city":"Rome"}
  ];
  
  let citiesArray = jsonArray.map(function(obj) {
    return obj.city;
  });
  
  console.log(citiesArray);
  
