"use strict";
// Excersice No-42:
// Define an arry of magicians names:
let magiciansNames = ['zahid', 'Ashfaq', 'Firdoos', 'Nisha'];
// To Greet of each magician's name:
function make_greet(names) {
    return names.map((name) => `The Greet ${name} \n`);
}
// To Print the name of each magician:
function show_magicians(names) {
    console.log("[", names.join(", "), "]");
}
// Modify the magician names through make_greet
let greet_magiciansNames = make_greet(magiciansNames);
// Display to modified list
show_magicians(greet_magiciansNames);
