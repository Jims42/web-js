export default class Article{
    /**
     * constructeur
     * @param {*} _nom le nom de l'article 
     * @param {*} _prixHT le prix hors taxes
     * @param {*} _tva la TVA
     */
constructor(_nom, _prixHT, _tva){
    this.nom=_nom;
    this.prixHT=_prixHT;
    this.tauxTva=_tva;
}
calculPrixTTC(){
    let prixTTC=this.prixHT*(1+this.tauxTva/100);
    return prixTTC;
}

}