//L'oprateur ! (spécifier que ça ne retournera jamais null)
// const container = document.querySelector(".container")!; //ça ne sera jamais null
// console.log(container.children);


//L'opérateur ?
type Job = {
    title: string;
    description: string;
    salary: number;
}
const employe1: Job = {
    title: "Dev Front-End",
    description: "Développeur de sites internet",//on peut enlever la description et on aura pas d'erreur, comme c'est facultatif
    salary: 30000
}
// console.log(employe1?.description);


//Paramètre optionnel
function message(msg?: string) {
    if(msg) {
        // console.log(msg);
    } else {
        // console.log("Aucun message fourni");
        
    }
}

message("Hello world");


//paramètre optionnel avec les interfaces
interface House {
    room: number;
    price: number;
    garage?: number;
}
const house1 : House = {
    room: 4,
    price: 300000
}




