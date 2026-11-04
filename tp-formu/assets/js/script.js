const tabDiffusion = [
  "Par l'un de nos client !",
  "Par relation",
  "Par support publicitaire",
  "Par moteur de recherche",
  "Par hasard",
];

let machaine =
  "un site plaquette, un site communal, un catalogue en ligne, une boutique en ligne (e-commerce), le référencement, de l'e-mailing, un intranet ou extranet, une GED (gestion électronique de document), un relookage de votre site, une formation, la réalisation d'un cahier des charges, un audit accessibilité, le dépôt d'un nom de domaine en .fr, en savoir plus sur la solution ia souveraine".split(
    ", ",
  );

const myPrenom = document.getElementById("prenom");
const myNom = document.getElementById("nom");
const myEmail = document.getElementById("email");
const myTel = document.getElementById("tel");
const mySoc = document.getElementById("civ");
const myMessage = document.getElementById("message");
const myRep1 = document.getElementById("reponse1");
const myRep2 = document.getElementById("reponse2");
const myCoche = document.getElementById("accept");
const myBtnEnv = document.getElementById("btn-env");

console.table(tabDiffusion);

function myListe(_data, _hook) {
  _data.forEach((element) => {
    let liste = new Option();
    liste.textContent = element;
    _hook.appendChild(liste);
  });
}
myListe(tabDiffusion, myRep1);
myListe(machaine, myRep2);

myCoche.addEventListener("click", function (event) {
  const mail = myEmail.value.trim();
  const nom = myNom.value.trim();
  const prenom = myPrenom.value.trim();
  const tel = myTel.value.trim();
  const soc = mySoc.value.trim();
  let bool = false;
//--------------------------------------------------------

  const question = document.querySelectorAll("select").forEach((select) => {
    if (select.value === "default") {
      bool = true;
    }
  });
  const selects = document.querySelectorAll("select");
  const test = [...selects].some((select) => select.value === "default");
  
// -----------------------------------------------------------
  if (!nom || !prenom || !mail || !tel || !soc || bool) {
    // event.preventDefault();
    alert("tout les champs ne sont pas remplis !");
    event.target.checked = false;
  } else {
    // event.target.checked = event.target.checked ? false : true;
  }
});
