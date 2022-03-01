"use strict";
//implementer notre interface qui prendra toutes les proriétés de Rocket
//pas obligé de mettre les méthodes (comme takeOff ici)
class RocketFactory {
    //constructeur
    constructor(reactors, vMax, price, carburant) {
        this.reactors = reactors;
        this.vMax = vMax;
        this.price = price;
        this.carburant = carburant;
    }
    takeOff(action) {
        console.log(action);
    }
}
const Falcon1 = new RocketFactory(12, 900, 2, 9000);
console.log(Falcon1);
Falcon1.takeOff("Décollage");
