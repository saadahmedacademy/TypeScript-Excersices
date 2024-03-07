"use strict";
// Excersice No-43:
// Define an arry of magicians names:
let magicians_Names = ['zahid', 'Ashfaq', 'Firdoos', 'Nisha'];
// To Greet of each magician's name:
function Make_greet(names) {
    return names.map((name) => `The Greet ${name} \n`);
}
// Create a copy of original arry magicians name
let copiedMagiciansNames = [...magicians_Names];
//Modify the copy of magicians_Names by using make_greet
let greet_magicians_names = Make_greet(copiedMagiciansNames);
// To show the magicians names:
function show_Magicians(names) {
    console.log("[", names.join(", "), "]");
}
// Display Original magicians Names arry
console.log('\nDisplay Original magicians Names arry');
show_Magicians(magicians_Names);
// Display arry magicians names with greeting
console.log('\nDisplay arry with greeting to magicians');
show_Magicians(greet_magicians_names);
