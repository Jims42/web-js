import  Article  from "./Article.js";

const myFormulaire = document.querySelector("#formulaire");
const nomArt = document.querySelector("#nom");
const prixArt_HT = document.getElementById("prix");
const taux_TVA = document.getElementById("tva");
const liste = document.getElementById("articles");
const btnValider = document.querySelector("#valider");





btnValider.addEventListener("click", function (event) {
  event.preventDefault();

  let nom = nomArt.value;
let prixHT = parseFloat(prixArt_HT.value);
let tva = parseFloat(taux_TVA.value);
const monArticle = new Article(nom, prixHT, tva);

  let monLi =document.createElement("li");
  monLi.textContent =
    "article ayant pour nom :" +
    monArticle.nom +
    " de prix TTC : " +
    monArticle.calculPrixTTC()+" Euros";
  liste.appendChild(monLi);
});
