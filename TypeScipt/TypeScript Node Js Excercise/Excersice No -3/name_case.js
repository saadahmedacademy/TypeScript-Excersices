"use strict";
// Exercise No 2: Name Case changer
let personName = '';
personName = prompt("What is your name: ") || '';
if (personName !== '') {
    // Lowercase
    let lowercaseName = personName.toLowerCase();
    // Uppercase
    let uppercaseName = personName.toUpperCase();
    // Titlecase (using first letter capitalization)
    let titlecaseName = personName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
    alert(`${personName}, Here is your name in :
    LowerCase : ${lowercaseName}
    UpperCase : ${uppercaseName}
    TitleCase : ${titlecaseName}`);
}
else {
    alert(`Please Enter Your Name : `);
}
