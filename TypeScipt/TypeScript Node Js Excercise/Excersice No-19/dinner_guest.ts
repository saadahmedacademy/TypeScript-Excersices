
// Excersice No; 15

import { copyFileSync } from "fs";

let Guest_List1: string[] = ['Elon Must', 'Robert Altman', 'Bill Gates'];

// Absent guest:
let Absent_Guest: string = 'Elon Musk';

// New guest:
Guest_List1[0] = 'Kamran Khan Tesori';

// Welcome all the guests
 // Guest_List1.forEach(guest => {
//     console.log(`Welcome ${guest} to our event!
//     I'm very grateful to you for bringing wonderful advancements to the techno world.\n`);
// });

// console.log(`${Absent_Guest} could not come to our event because he is a very busy person.`);


// Exercise No 16:


// console.log('Good news! We are now conducting a big table party, so we are inviting more guests.');

// Insert new guests at the beginning, at index 2, and at the end
// Guest_List1.unshift('Sir Qasim');
// Guest_List1.splice(2, 0, 'Sir Subhan');
// Guest_List1.push('Mr. Danyal Nagori');

// Welcome all the new guests
// Guest_List1.forEach(guest => {
//     console.log(`Welcome ${guest} to our event!
//     I'm very grateful to you for bringing wonderful advancements to the techno world.\n`);
// });

// Excersice No 17:

// Inform guest about the limited geust 
// console.log(`Attention:\n
// Due to the unseen situation My my dinner tanle would not arrive at time \n
// that's why I can invite just two guests`);

// remove guest untill remain two guest
while(Guest_List1.length > 2){
 let remove_Guest = Guest_List1.pop();
//  console.log(`Sorry,${remove_Guest} I can't invite you for dinner \n.`);
}

// Print the invitation still two remain guest
// console.log(`Dear 4${Guest_List1[0]} You still come to our dinner party `);
// console.log(`Dear 4${Guest_List1[1]} You still come to our dinner party `);

// Empty list 
Guest_List1.length = 0;

//Verify the guest list
// console.log('After removing the all guest from list'+ ' Guest_List1 \n'); 

// Excersice No 19:

// Print a message to indicate the number of people you are inviting to dinner:


console.log(`The total number of guest are ${Guest_List1.length}`);

