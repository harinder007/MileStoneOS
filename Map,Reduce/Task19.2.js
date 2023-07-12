//Define a function that takes an array of JSON and a city as parameter and returns the 
//count of people in that city
let array=[
    
    {"fname":"Jack","lname":"Smith","city":"London"},
    {"fname":"Mary","lname":"Markle","city":"London"},
    {"fname":"Ed","lname":"May","city":"Paris"},
    {"fname":"Tim","lname":"Gates","city":"Rome"}]

    function check(array, ch) {
        const count = array.reduce(function(accumulator, current){
          if (current.city === ch) {
            return accumulator + 1;
          } else {
            return accumulator;
          }
        }, 0);
      
        return count;
      }
      
      
      const ch = "London";
      const result = check(array, ch);
      
      console.log(result);