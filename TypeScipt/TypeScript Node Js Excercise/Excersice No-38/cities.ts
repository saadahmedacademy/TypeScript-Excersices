// Excersice No 38:


// create a function for tell about the country and its city
function describe_city(city:string ,country : string = 'Pakistan' ):void{
 console.log(`\n ${city} is the city of ${country}. \n`);
}

// Call the function:
describe_city('Karachi');
describe_city('Lahore');
describe_city("Barcelona", "Spain");