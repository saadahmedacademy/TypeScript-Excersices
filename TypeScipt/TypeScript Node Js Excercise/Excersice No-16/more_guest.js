"use strict";
// Excersice No; 15
let Guest_List = ['Elon Must', 'Robert Altman', 'Bill Gates'];
// Absent guest:
let Absent_guest = 'Elon Musk';
// New guest:
Guest_List[0] = 'Kamran Khan Tesori';
// Welcome all the guests
Guest_List.forEach(guest => {
    console.log(`Welcome ${guest} to our event!
    I'm very grateful to you for bringing wonderful advancements to the techno world.\n`);
});
console.log(`${Absent_guest} could not come to our event because he is a very busy person.`);
// Exercise No 16:
console.log('Good news! We are now conducting a big table party, so we are inviting more guests.');
// Insert new guests at the beginning, at index 2, and at the end
Guest_List.unshift('Sir Qasim');
Guest_List.splice(2, 0, 'Sir Subhan');
Guest_List.push('Mr. Danyal Nagori');
// Welcome all the new guests
Guest_List.forEach(guest => {
    console.log(`Welcome ${guest} to our event!
    I'm very grateful to you for bringing wonderful advancements to the techno world.\n`);
});
