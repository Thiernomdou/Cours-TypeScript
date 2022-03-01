"use strict";
//Type Assertion (reçoit que le type specifié)
// let txt:string;
// txt = "str";
//Assertion: mettre ! pour dire que le form ne peut pas retourner null, mais seulement un fomulaire
// const form : HTMLFormElement =  document.querySelector('form')!;
// console.log(form.children);
//Type Casting (qui donne pareil que l'assertion)
const form = document.querySelector('form'); //fonctionne
// // const form1 = document.querySelector('input') as HTMLFormElement;//fonctionne pas vu que je lui ai precisé FormElement et que je rentre un input
// console.log(form.children);
const input = document.querySelector('input'); //fonctionne
// console.log(input);
form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    console.log("SUBMITTED");
}
window.addEventListener('click', handleClick);
//on utilise MouseEvent pour obtenir clientX(position sur X) et clientY(Position sur Y)
//MouseEvent est lié à la souris
function handleClick(event) {
    console.log(event.clientX, event.clientY);
}
//querySelectorAll renvoie forcement une NodeList
const paragraphList = document.querySelectorAll('p');
console.log(paragraphList);
