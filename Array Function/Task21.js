/**
 *Define a function that takes personArray, continentArray and continent as parameters and
  returns a array of personsin that continent.
  Hint: Filter the first array based on the continent provided as parameter.
 Use find in the filter function to determinethe continent of the person.
 * 
 */

  
 const personArray = [
  { "name": "Mary", "city": "London" },
  { "name": "Anita", "city": "Paris" },
  { "name": "Edward", "city": "New York" },
  { "name": "Thomas", "city": "Rome" },
  { "name": "Robin", "city": "Seattle" },
  { "name": "Sophia", "city": "Los Angeles" },
  { "name": "Bruce", "city": "Delhi" }
];

const continentArray = [
  { "city": "London", "continent": "Europe" },
  { "city": "Delhi", "continent": "Asia" },
  { "city": "Seattle", "continent": "North America" },
  { "city": "Paris", "continent": "Europe" },
  { "city": "New York", "continent": "North America" },
  { "city": "Rome", "continent": "Europe" },
  { "city": "Bengaluru", "continent": "Asia" },
  { "city": "Los Angeles", "continent": "North America" }
];

const continent = "Europe";

const personsInContinent = personArray.filter(function(person) {
  const personCity = person.city;
  const personContinent = continentArray.find(function(item) {
    return item.city === personCity;
  });
  return personContinent && personContinent.continent === continent;
});

console.log(personsInContinent);
