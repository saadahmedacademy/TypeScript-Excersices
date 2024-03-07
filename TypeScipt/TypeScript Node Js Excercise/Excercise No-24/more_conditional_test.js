"use strict";
// Excersice No 24 :
Object.defineProperty(exports, "__esModule", { value: true });
// Tests for equality and inequality with strings
let str1 = "Hello";
let str2 = 'World';
// It will return true
console.log("Is str1 == 'Hello ? I predict True.");
console.log(str1 == 'Hello');
// It will return true
console.log("Is str2  != 'Hello ? I predict True.");
console.log(str2 != 'Hello');
// Tests using the lower case function
// It will return true
console.log("Is str1.toLowerCase() == 'hello ? I predict True.");
console.log(str1.toLowerCase() == 'hello');
// It will return true
console.log("Is str2.toLowerCase() == 'world ? I predict True.");
console.log(str2.toLowerCase() == 'world');
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num1 = 10;
let num2 = 20;
// It will return true
console.log("Is num1 < num2 ? I predict True.");
console.log(num1 < num2);
// It will return Fales
console.log("Is num1 > num2 ? I predict Fales.");
console.log(num1 > num2);
// It will return true
console.log("Is num1 <= 10 ? I predict True.");
console.log(num1 <= 10);
// It will return fales
console.log("Is num2 >= 30 ? I predict True.");
console.log(num2 >= 30);
// Tests using "and" and "or" operators
console.log("Is num1 > 5 and num2 < 30 ? I predict True.");
console.log(num1 > 5 && num2 > 30);
// It will return fales
console.log("Is num1 < 5 and num2 > 30 ? I predict True.");
console.log(num1 > 5 && num2 > 30);
//it will return fales
console.log("Is num1 < 5 or num2 > 30? I predict False.");
console.log(num1 < 5 || num2 > 30);
// Test wether an item in an arry
let arr = [1, 2, 3, 4, 5];
console.log("Is 3 is in arr ? I predict True.");
console.log(arr.includes(3));
// It will return fales
console.log("Is 7 is in arr ? I predict True.");
console.log(arr.includes(7));
