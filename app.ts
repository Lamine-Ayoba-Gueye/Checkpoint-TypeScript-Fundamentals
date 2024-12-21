// interface Véhicule
class Vehicule {
    make: string;
    model: string;
    year: number;
    start(): void {
        console.log("Car engine started");
    }
}

// Implémentation de la classe Voiture
class Voiture extends Vehicule {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        super();
        this.make = make;
        this.model = model;
        this.year = year;
    }

}

// Création d'une instance de la classe Voiture
const maVoiture = new Voiture("Toyota", "Corolla", 2020);

// Appel de la méthode start
maVoiture.start(); 