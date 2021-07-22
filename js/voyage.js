"use strict";
var Sejour = /** @class */ (function () {
    function Sejour(nom, prix) {
        this.nom = nom;
        this.prix = prix;
    }
    return Sejour;
}());
var SejourService = /** @class */ (function () {
    function SejourService(tabSejour) {
        this.tabSejour = tabSejour;
        this.tabSejour = [paris, marseille];
    }
    /**
     * rechercheSejourParSonNom
     */
    SejourService.prototype.rechercheSejourParSonNom = function (nom) {
        this.tabSejour.forEach(function (sejour) {
            if (nom == sejour.nom) {
                return console.log(sejour.nom);
            }
        });
        return console.log("aucun séjour trouvé avec " + nom);
    };
    return SejourService;
}());
var paris = new Sejour("paris", 18);
var marseille = new Sejour("marseille", 28);
var first = new SejourService([paris, marseille]);
first.rechercheSejourParSonNom('lille');
