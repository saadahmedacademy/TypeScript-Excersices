//Excersice No 15 :


let Guest_list :string[] = ['Elon Must','Robert Altman', 'Bill Gates'];

for(let i=0; i < Guest_list.length; i++ ){
   console.log(`Welcome ` + Guest_list[i] + ` to our event! \n 
   and I'm very grateful to you \n
    to bring wonderful advantages in techno world.\n\n
     `);
}

// absencent guest:
let absencent_guest : string = `Elon Musk` ;

// new guest:
Guest_list[0] =  `Kamran Khan Tesori`;

for(let i=0; i < Guest_list.length; i++ ){
    console.log(`Welcome ` + Guest_list[i] + ` to our event! \n 
    and I'm very grateful to you \n
     to bring wonderful advantages in techno world.\n\n
      `);
 }

 console.log(`${absencent_guest} could not come in our event! because He is very busy person. `)