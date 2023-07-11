/**
 * Sort the personArray in ascending order of their continent.
 * Hint: In the sorting function, use findto determinethe continent of the person.
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
  
  function getContinent(person) {
    const personCity = person.city;
    const personContinent = continentArray.find(function(item) {
      return item.city === personCity;
    });
    if (personContinent) {
      return personContinent.continent;
    } else {
      return "";
    }
  }
  
  personArray.sort(function(a, b) {
    const continentA = getContinent(a);
    const continentB = getContinent(b);
    return continentA.localeCompare(continentB);
  });
  
  console.log(personArray);
  