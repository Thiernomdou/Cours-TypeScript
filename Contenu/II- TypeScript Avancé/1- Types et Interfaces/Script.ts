//Les Intersections (quand on va mélanger deux types personnalisés)

//premier type personnalisé
type Fish = {
    fin: number;
    element: "water";
    gills: true;
}

//second type personnalisé
type shark = {
    weight: number;
    length: number;
}

//si on a envie de créer une intersection(qui va mélanger les deux)
type HammerheadShark = Fish & shark ;

//créer le mélange des deux
const shark1: HammerheadShark = {
    //entrer tous les éléments des deux objets avec les bons types
    fin: 3,
    element: "water",
    gills: true,
    weight: 500,
    length: 200
}




//Lier des interfaces

interface Flower {
    pollen: true;
    type: "vegetal"
}
interface Rose extends Flower {
    color: string;
    thorn: boolean;
}

const RedRose: Rose = {
    pollen: true,
    type: "vegetal",
    color: "Rose",
    thorn: true
}


