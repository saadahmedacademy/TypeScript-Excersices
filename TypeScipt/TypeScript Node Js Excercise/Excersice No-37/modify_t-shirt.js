"use strict";
// Excersice No-36:
// Write a function called make_shirt() that accepts a size and the text of a message 
let Make_shirt = (shirt_size = "Large", message = "I love TypeScript.") => {
    console.log(`\nThe size of this T-shirt : ${shirt_size}.`);
    console.log(`Printed message : "${message}".\n`);
};
// Now let's call the function :
// It will return by default values:
Make_shirt();
// It will return by default medium:
Make_shirt('medium');
//It will return according to your input:
Make_shirt('lage Sizs', 'I am an Data Scientist.');
