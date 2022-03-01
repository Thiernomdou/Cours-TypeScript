"use strict";
//fonction avec même type de paramètre
//une fonction qui multiplie deux nombres
// const multiply = (num1: number, num2 : number) =>  {
//     return num1 * num2;
// } //fonctionne
// console.log(multiply(2,2));
//fonction avec paramètres différents
// const multiply2 = (num1: number, num2 : number, action: string) =>  {
//     return num1 * num2;
// } //fonctionne
// console.log(multiply2(2,2,"Delete"));
//fonction avec paramètre facultatif
// const multiply3 = (num1: number, num2 : number, action?: string) =>  {
//     if(action) console.log(action);
//     return num1 * num2;
// } //fonctionne
// console.log(multiply3(2,2,"create"));
//fonction qui ne retourne rien, qui n'a pas de return (retourne void)
// const multiply4 = (num1: number, num2 : number, action?: string) =>  {
//     if(action) console.log(action);
// } //fonctionne
// console.log(multiply4(2,2,"create"));
//si on a une variable qui va recevoir une fonction
// let foo: Function;
// foo = () => {}; //fonctionne
// //Fonctions signatures
// let baz: (a: number, b: number) => number;
// baz = (a,b) => a + b;//fonctionne, pas besoin de typer mes variables, je l'ai déjà fait dans la signature
//Fonctions Callback
// function greetings(fn: (a:string) => void) {
//     fn("Hello world");
// }
// function printToConsole(msg: string) {
//     console.log(msg);
// }
// greetings(printToConsole);
