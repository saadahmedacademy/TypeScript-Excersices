"use strict";
// Excersice No 18:
// Create a list of favourite places
let favourite_places = ['Dubai', 'Japan', 'China', 'Turkye', 'Saudia', 'Iran'];
//print the original arry
console.log('Original Order');
console.log(favourite_places, '\n');
// Print your array in alphabetical order using the sort() method.
console.log('Alphabetical Order');
console.log([...favourite_places].sort(), '\n');
// Show that the arry is stil in its original order
console.log('Original Order');
console.log(favourite_places, '\n');
//  Print your array in reverse alphabetical order without changing the order of the original list.
console.log('Reverse order:');
console.log([...favourite_places].reverse(), '\n');
//Show that your array is still in its original order by printing it again.
console.log(favourite_places, '\n');
//Again in the reverse order
console.log('Original arry  order has changed:');
console.log(favourite_places.reverse(), '\n');
//Reverse the order of your list again. 
console.log(favourite_places.reverse(), '\n');
//Print the list to show it’s back to its original order.
console.log(favourite_places, '\n');
//Sort your array so it’s stored in alphabetical order
console.log(favourite_places.sort(), '\n');
//Print the array to show that its order has been changed
console.log(favourite_places, '\n');
// Sort the array in reverse alphabetical order
favourite_places.sort((a, b) => b.localeCompare(a));
console.log("\n Sorted in Reverse Alphabetical Order (changed):");
console.log(favourite_places);
