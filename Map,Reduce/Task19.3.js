/**
 * Define a function that takes an array of JSON and a firstNameas parameter and returns the city that person is in. Note : use find
 */
let array=[
    
    {"fname":"Jack","lname":"Smith","city":"London"},
    {"fname":"Mary","lname":"Markle","city":"London"},
    {"fname":"Ed","lname":"May","city":"Paris"},
    {"fname":"Tim","lname":"Gates","city":"Rome"}]

    function check(array, firstName) {
       const person=array.find(function(n){
        return n.fname===firstName
       });
          
      
       if(person){
        return person.city;
       }
       else{
        return "Person not found"
       }
    }
      
      const firstName = "Jack";
      const city = check(array, firstName);
      
      console.log(city);