// Excersice No-36:

// Write a function called make_shirt() that accepts a size and the text of a message 

const make_shirt = (shirt_size:string , message:string): void => {
    console.log(`\nThe size of this T-shirt : ${shirt_size}.`);
    console.log(`Printed message : "${message}".\n`);
}

// Now let's call the function :
make_shirt('lage Sizs','I am an Data Scientist.')