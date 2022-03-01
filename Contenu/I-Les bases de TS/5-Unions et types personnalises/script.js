"use strict";
//UNIONS
// let code : string | number | Function | boolean | Object;
// code = 5; //fonctionne
// code = "5"; //fonctionne aussi
// code = true; //fonctionne
//  code = {}; //fonctionne
// code = []; //ne fonctionne pas etc...
// let arr : (boolean | number) [];
// arr = [true, false];//fonctionne
// arr = [true, false, 999];//fonctionne
//utiliser les unions dans les paramètres de fonction
// const foo = (param: number | string) => {
//     console.log(param);
// }
// foo('Test'); //fonctionne
// foo(1);//fonctionne
// foo({});//fonctionne pas
// foo([]);//ne fonctionne pas
//Types personnalisés ou types Aliases
// type mixedNumStr = number | string;
// type mixedBoolObj = boolean | Object;
// const baz = (param: mixedNumStr | mixedBoolObj) => {
//     console.log(param);
// }
// //accepte tous les 4 types 
// baz(1);//fonctionne
// baz('Test');//fonctionne
// baz(false);//fonctionne
// baz({});//fonctionne
// type element = {
//     x: number;
//     y: number | string;
//     id: number;
//     visible: boolean;
// }
// const button : element = {
//     x: 99,
//     y: 50,
//     id: 999,
//     visible: true
// }
