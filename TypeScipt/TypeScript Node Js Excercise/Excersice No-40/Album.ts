// Excersice No-40:
 

function make_album(artist:string ,title:string ,tracks?:number): Record<string
,unknown> { 
    let album: Record<string,unknown> = {
         artist,
         title,
    };

    if(tracks !== undefined){
        album.tracks = tracks;
    }

    return album;
};

// Create album
let album1 = make_album('Imran Khan','Amplifire',1 );
let album2 = make_album('Imran Khan','Satisfya');
let album3 = make_album(' Shubh Punjabi','No love',13);

// print album
console.log(`Album1 : `,album1);
console.log(`Album2 : `,album2)
console.log(`Album3 : `,album3)