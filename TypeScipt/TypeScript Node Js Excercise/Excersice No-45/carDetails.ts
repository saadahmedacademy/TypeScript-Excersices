// Excersice No-45:

// Let's definde the car objects values types:
interface Car {
  manufacturer: string;
  modelName: string;
  features?: { [key: string]: any };
}

// create a function to collect the information about car:
function createCar(manufacturer: string, modelName: string, features?: { [key: string]: any }): Car {
  const car: Car = {
      manufacturer,
      modelName,
      features 
  };
  return car;
}

// Let's call the function
console.log('These are the car details:');

const myCar = createCar("Toyota", "Fortuner", {
  'color': 'Blue',
  'Features': 'Autopilot Mode',
  'Engine No': '48420'
});

console.log(myCar);
