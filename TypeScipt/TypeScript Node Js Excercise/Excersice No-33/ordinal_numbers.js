"use strict";
// Excersice No 33:
// Store the numbers 1 through 9 in a array.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Loop through the array.
for (let num of numbers) {
    let ordinal;
    if (num === 1) {
        ordinal = 'st';
    }
    else if (num === 2) {
        ordinal = 'nd';
    }
    else if (num === 3) {
        ordinal = 'rd';
    }
    else {
        ordinal = 'th';
    }
    console.log(`${num}${ordinal}`);
}
