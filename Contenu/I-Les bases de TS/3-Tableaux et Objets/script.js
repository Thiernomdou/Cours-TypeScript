"use strict";
//LES TABLEAUX
/*const fruits = ['fraise', 'pomme'];
// fruits.push(4); ne fonctionne pas, il faut un string
fruits.push("cerise");//fonctionne
console.log(fruits);*/
/* les tableaux mixés(plusieurs types dans le tableau) accepte tous les types specifié*/
// const mixedArray = [1, 'txt', [1,2,3]];
//mixedArray.push([1,2,3]);//fonctionne
// let nums : number[]; //attend un tableau de nombres
// nums = [1,2,3]; //fonctionne
// nums = ["1", 2, 3]; //ne fonctionne pas
// nums.push(1);//ne fonctionne pas, car j'ai juste declaré mais le tableau n'existe pas encore.
// let nums2 : number [] = [];
// nums2.push(2); //là ça fonctionne, comme j'ai instancié mon tableau de nombres à un tableau vide.
// console.log(nums2);
//un tableau qui peut tout recevoir
// let random : any [];
// random = [1, true, 10];//fonctionne
// random = [1];//fonctionne aussi
// random = [true, false];//fonctionne aussi
// random = ["1"];//fonctionne aussi etc...
//LES OBJETS
// const car = {
//     name: "Audi",
//     model: "A1",
//     km: 70000
// }
// car.name = "BMW"; //fonctionne
// car.name = 4; //ne fonctionne pas
//des variables qui vont prendre que des objets
// let profile : {
//     name: string,
//     age: number
//     hobbies: string[]
// }
// profile = {
//     name: "John",
//     age: 1
//     hobbies: [];
// } //fonctionne
// profile = {
//     name: "John",
//     age: true;//attend un nombre
//     hobbies: [];
// } //ne fonctionne pas
// profile = {
//     name: "John",
//     age: [];
//     hobbies: [];
// } //ne fonctionne pas etc...
// let obj: object;
// obj = {name: "Thierno"}; //fonctionne
// obj = 10; //ne fonctionne pas, car on attend un objet 
