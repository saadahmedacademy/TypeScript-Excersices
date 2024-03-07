"use strict";
// Excersice No 32:
// Existing usernames
let current_users = ['jhon', 'saad', 'imran', 'nisha', 'ashraf', 'wasif'];
// New usernames to check
let new_users = ['shazia', 'ashfaq', 'nina', 'jhon', 'nisha', 'saad', 'noman'];
for (let new_user of new_users) {
    if (current_users.includes(new_user)) {
        console.log(` ${new_user} is already exist Pleace choose another Username. \n`);
    }
    else {
        console.log(`Username ${new_user} is available !\n `);
    }
}
