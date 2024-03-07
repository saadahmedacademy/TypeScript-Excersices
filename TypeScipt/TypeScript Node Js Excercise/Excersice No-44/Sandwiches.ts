// Excersice No-44:

// Create a function to summarize sandwiches Ingredientes:

function SandwitchIngredeints(...Ingredients :string[]):void {
    console.log("\nSandwitch Ingredients:")
    for(let items of Ingredients){
        console.log(`-${items}`);
    }
    console.log("Enjoy Your Sandwiches!")

}

// Call the function :
SandwitchIngredeints('Chees','Mashroom','Garlic Souce');
SandwitchIngredeints('Extra Chees','Olive','Onion');
SandwitchIngredeints('Katchup','Chili Souce','Black Peper');