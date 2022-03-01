"use strict";
//les types typescript
let str = "str"; //ça attend un string obligatoirement
let num = 5; //ça attend un number obligatoirement
let array = []; //attend n'importe quel type dans le tableau
let obj = {}; //attend n'importe quel type dans l'objet
let toggle = true; //ça attend un boolean obligatoirement
//d'autres types possibles avec typescript
let anything; //on peut mettre tout type qu'on veut
anything = 10; //fonctionne
anything = "t"; //fonction;
anything = {}; //fonctionne etc...
let ramdomNumber; //seulement accepter des nombres
ramdomNumber = 99; //fonctionne
// ramdomNumber = "99"; //ne fonctionne pas
//typer les paramètres d'une fonction
//par exple convertir les degré celsius en degré farenheit
//il faut forcement donner un type aux paramètres (:number pour celsius)
const conversion = (celsius) => {
    return (celsius * 9 / 5) + 32;
};
//conversion prendra qu'un nombre obligatoirement
console.log(conversion(10));
