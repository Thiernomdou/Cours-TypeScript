
//SYNTAXE SANS RACOURCI



// //Une classe sert à créer des objets
// class Book {
//     //Les futurs propriétés
//      title: string;
//      price: number;
//      dateOfParution: string;
//      author: string;
//      theme?: string[];
//      //private
//      private bookID = 88;
//      //readonly(seulement pouvoir lire)
//      readonly libraryName = "The Book Shelf"

//     //fonction constructeur (qui va servir à intégrer ces propriétés quand on va créer un nouvel objet)
//     constructor(t: string, p: number, dop: string, a: string, th?: string[]) {
//         this.title = t;
//         this.price = p;
//         this.dateOfParution = dop;
//         this.author = a;
//         this.theme = th
//     }

//     promo() {

//         console.log("ID", this.bookID);
        
//         console.log("NAME : ", this.libraryName);
        
//         console.log(book1.libraryName);//Lire, cela fonctionne, car type readonly
//         // this.libraryName =500;//marche pas, car on ne peut pas modifier le type readonly

//         return this.price * 0.5;
//     }
// }


// //nouveau livre
// const book1 = new Book("The Great Gatsby", 20, "11/04/1955", "Tom Joe");
// // console.log(book1);
// // console.log(book1.promo());

// console.log(book1.promo());

// //inaccessible, car propriété private
// // console.log(book1.bookID);




// //ajouter à l'étagère
// // const addToShelter = (obj: Book) => {
// //     console.log("ADDED TO SHELTER", obj);
    
// // }
// // addToShelter(new Book("Enfant noir", 15, "12/07/1995","Camara Laye", ["Roman Historique", "Roman"]))


// //Un tableau avec des objets venant de Book avec ces caractéristiques à l'intérieur de cet tableau
// // let onlyBook : Book[] = [];
// // onlyBook.push(new Book("Enfant noir", 15, "12/07/1995","Camara Laye", ["Roman Historique", "Roman"]))
// // console.log(onlyBook);





//SYNTAXE AVEC  RACOURCI


//Une classe sert à créer des objets
class Book {
     //private
     private bookID = 88;
     //readonly(seulement pouvoir lire)
     readonly libraryName = "The Book Shelf"

    //fonction constructeur (qui va servir à intégrer ces propriétés quand on va créer un nouvel objet)
    constructor(
                //on peut definir ici directement les futurs propriétés en les rajoutant public, au lieu de les réecrire deux fois
                public title: string,
                public price: number,
                public dateOfParution: string,
                public author: string,
                public theme?: string[]
    ) {}

    promo() {

        console.log("ID", this.bookID);
        
        console.log("NAME : ", this.libraryName);
        
        console.log(book1.libraryName);//Lire, cela fonctionne, car type readonly
        // this.libraryName =500;//marche pas, car on ne peut pas modifier le type readonly

        return this.price * 0.5;
    }
}


//nouveau livre
const book1 = new Book("The Great Gatsby", 20, "11/04/1955", "Tom Joe");
// console.log(book1);
// console.log(book1.promo());

console.log(book1.promo());

//inaccessible, car propriété private
// console.log(book1.bookID);




//ajouter à l'étagère
// const addToShelter = (obj: Book) => {
//     console.log("ADDED TO SHELTER", obj);
    
// }
// addToShelter(new Book("Enfant noir", 15, "12/07/1995","Camara Laye", ["Roman Historique", "Roman"]))


//Un tableau avec des objets venant de Book avec ces caractéristiques à l'intérieur de cet tableau
let onlyBook : Book[] = [];
onlyBook.push(new Book("Enfant noir", 15, "12/07/1995","Camara Laye", ["Roman Historique", "Roman"]))
// console.log(onlyBook);


