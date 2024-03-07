// Excersice No 30:

let username : string[] = ['jhon','shila','admin','sultan'];

for(let usernames of username){

    if(usernames === 'admin'){
        console.log("Hello admin, would you like to see the status report ?");
    }
    else{
        console.log(`Hello ${usernames}, thank you for logging in again.`);
    }
}