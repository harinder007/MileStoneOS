//Given a color, find out all the car models that have a car of the same color. Use filter and in the filter function use find

let cars = [
    {model: "Swift Dzire VXi", make: "Maruti", fuel: "Diesel", colors: ["White", "Silver", "Blue", "Red"]},
    {model: "Etios SMi", make: "Toyota", fuel: "Diesel", colors: ["White", "Grey", "Black"]},
    {model: "City AXi", make: "Honda", fuel: "Petrol", colors: ["Grey", "Blue", "Black"]},
    {model: "Swift DXi", make: "Maruti", fuel: "Diesel", colors: ["White", "Red", "Black"]},
    {model: "Etios VXi", make: "Toyota", fuel: "Diesel", colors: ["White", "Silver", "Black", "Yellow"]},
    {model: "City ZXi", make: "Honda", fuel: "Petrol", colors: ["Silver", "Blue", "Red"]},
    {model: "Alto SXi", make: "Maruti", fuel: "Petrol", colors: ["White", "Red", "Blue", "Yellow"]},
    {model: "Alto VXi", make: "Maruti", fuel: "Petrol", colors: ["White", "Silver", "Yellow", "Black"]}
  ];
  
  let colorToFind = "White";
  
  let sameColorModels = cars.filter(function(car) {
    return car.colors.find(function(color) {
      return color === colorToFind;
    });
  }).map(function(car) {
    return car.model;
  });
  
  console.log(sameColorModels);
  