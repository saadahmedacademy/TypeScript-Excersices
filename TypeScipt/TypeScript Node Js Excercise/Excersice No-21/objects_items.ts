// Excersice No 21 :

interface Items {
    item1: string,
    item2 : string,
    item3:string
}
let vagitables :Items = {
    item1: "Cucumber",
    item2: "Tomato",
    item3:"Onion"}

let fruits :Items = {
    item1: "Apple",
    item2: "Banana",
    item3:"Pinapple"
}

let favourite_deshies :Items = {
    item1: "Biryani",
    item2: "Quarma",
    item3:"Nihari"
}

let favourite_sweets :Items = {
    item1: "Custard",
    item2: "Poding",
    item3:"Ice-creame"
}

console.log(`These are my favourite items :\n
${vagitables.item1}\n
${vagitables.item2}\n
${vagitables.item3}\n

${fruits.item1}\n
${fruits.item2}\n
${fruits.item3}\n

${favourite_deshies.item1}\n
${favourite_deshies.item2}\n
${favourite_deshies.item3}\n


${favourite_sweets.item1}\n
${favourite_sweets.item2}\n
${favourite_sweets.item3}\n`)