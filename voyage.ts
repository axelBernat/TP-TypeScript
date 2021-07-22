class Sejour {
    constructor(public nom: string,public prix: number){

    }
    
}

class SejourService {
    constructor(private tabSejour:Sejour[]) {
        
        this.tabSejour =  [paris,marseille];
    }

    /**
     * rechercheSejourParSonNom
     */
    public rechercheSejourParSonNom(nom: string): Sejour | void {
        this.tabSejour.forEach(sejour => {
            if (nom == sejour.nom) {
                return console.log(sejour.nom);
            }
        })
        return console.log("aucun séjour trouvé avec " + nom);
        
    }
}
const paris = new Sejour("paris", 18);
const marseille = new Sejour("marseille", 28);
const first = new SejourService([paris,marseille]);

first.rechercheSejourParSonNom('lille');