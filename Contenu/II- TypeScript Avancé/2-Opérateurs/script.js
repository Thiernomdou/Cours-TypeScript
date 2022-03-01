"use strict";
//L'oprateur ! (spécifier que ça ne retournera jamais null)
// const container = document.querySelector(".container")!; //ça ne sera jamais null
// console.log(container.children);
const employe1 = {
    title: "Dev Front-End",
    description: "Développeur de sites internet",
    salary: 30000
};
// console.log(employe1?.description);
//Paramètre optionnel
function message(msg) {
    if (msg) {
        // console.log(msg);
    }
    else {
        // console.log("Aucun message fourni");
    }
}
message("Hello world");
const house1 = {
    room: 4,
    price: 300000
};
