//INTERFACE
/*avec les interfaces, on fait que les objets, c'est la différence
avec TYPE avec qui on fait les objets et les tableaux*/
interface Roket {
    reactors: number;
    vMax: number;
    takeOff: (action: string) => void
}

//on peut rajouter certaines données à notre interface si on veut
interface Rocket {
    price: number;
    carburant: number;
}

//implementer notre interface qui prendra toutes les proriétés de Rocket
//pas obligé de mettre les méthodes (comme takeOff ici)
class RocketFactory implements Rocket {
    reactors: number;
    vMax: number;
    price: number;
    carburant: number;

    //constructeur
    constructor(reactors: number, vMax: number, price: number, carburant: number) {
        this.reactors = reactors;
        this.vMax = vMax;
        this.price = price;
        this.carburant = carburant;
    }
    takeOff(action: string) {
        console.log(action);
        
    }
}

const Falcon1 = new RocketFactory(12,900,2,9000);
console.log(Falcon1);
Falcon1.takeOff("Décollage");
