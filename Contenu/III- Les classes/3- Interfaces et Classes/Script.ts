interface Pays {
    nom: string;
    population: number,
    langues: string[]
}

//création d'un pays
class France implements Pays {
    constructor(
        public nom: string,
        public population: number,
        public langues: string[],
        public capital: string
    ) {}
}
const FranceData = new France('France', 70,["Français"], "Paris");
console.log(FranceData);


//création d'un autre pays
class Guinee implements Pays {
    constructor(
        public nom: string,
        public population: number,
        public langues: string[]
    ) {}
}
const GuineeData = new Guinee('Guinee', 10,["Peulh", "Malinké", "Soussou", "Forestier"]);
console.log(GuineeData);


//étendre ma classe Guinée (Par exple pour les régions de la Guinée)
class Kamsar extends Guinee{}

const KamsarData = new Kamsar("Kamsar", 5, ["Peulh", "Malinké", "Soussou", "Forestier", "Bagga", "Guerzé", "Landouma"]);
console.log(KamsarData);
