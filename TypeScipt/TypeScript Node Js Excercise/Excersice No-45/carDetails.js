"use strict";
// Excersice No-45:
// create a function to collect the information about car:
function createCar(manufacturer, modelName, features) {
    const car = {
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
