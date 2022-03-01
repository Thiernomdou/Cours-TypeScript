"use strict";
//création d'un pays
class France {
    constructor(nom, population, langues, capital) {
        this.nom = nom;
        this.population = population;
        this.langues = langues;
        this.capital = capital;
    }
}
const FranceData = new France('France', 70, ["Français"], "Paris");
console.log(FranceData);
//création d'un autre pays
class Guinee {
    constructor(nom, population, langues) {
        this.nom = nom;
        this.population = population;
        this.langues = langues;
    }
}
const GuineeData = new Guinee('Guinee', 10, ["Peulh", "Malinké", "Soussou", "Forestier"]);
console.log(GuineeData);
//étendre ma classe Guinée (Par exple pour les régions de la Guinée)
class Kamsar extends Guinee {
}
const KamsarData = new Kamsar("Kamsar", 5, ["Peulh", "Malinké", "Soussou", "Forestier", "Bagga", "Guerzé", "Landouma"]);
console.log(KamsarData);
