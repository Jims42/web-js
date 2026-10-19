const people = ["Mike Dev", "John Makenzie", "léa Grande"];
const nameTab = document.getElementById("nameTab");
nameTab.setAttribute("style", "list-style: none");
const myBody = document.querySelector("body");
myBody.style.backgroundColor = "#536B78";
myBody.style.color = "#ACCBE1";

const myDivs = document.querySelectorAll(".block");
myDivs.forEach((myDiv) => {
  myDiv.style.border = "2px solid #ACCBE1";
  myDiv.style.borderRadius = "12px";
  myDiv.style.margin = "10px";
  myDiv.style.padding = "10px";
});
const myDivAdd = document.getElementById("addLigne");
myDivAdd.style.border = "1px dotted #ACCBE1";
myDivAdd.style.paddingTop = "0";
let prenom;
let nom;

const myTab = document.querySelector("table");
const myThead = myTab.createTHead();
const titleRow = myThead.insertRow();

let tabTitle = ["nom", "prénom", "mail"];
tabTitle.push("Supprimmer");

for (let j = 0; j < tabTitle.length; j++) {
  let myCell = document.createElement("th");
  myCell.textContent = tabTitle[j];
  titleRow.appendChild(myCell);
}
const myTbody = myTab.createTBody();
//const titleD = myTbody.insertRow();

for (let i = 0; i < people.length; i++) {
  ajoutClient(people[i]);
}

function ajoutClient(_client) {
  //SEPARATION NOM PRENOM
  prenom = _client.split(" ")[0];
  nom = _client.split(" ")[1];
  //INSERTION LIGNE TR
  const myRowBody = myTbody.insertRow();
  // myRowBody.id = "ligne" + (i + 1);
  //INSERTION CASE NOM
  const myCellNom = myRowBody.insertCell();
  myCellNom.textContent = nom;
  //INSERTION CASE PRENOM
  const myCellPrenom = myRowBody.insertCell();
  myCellPrenom.textContent = prenom;
  //INSERTION CASE EMAIL
  const myCellMail = myRowBody.insertCell();
  let prenomMail = prenom
    .toLowerCase() //MINUSCULE
    .normalize("NFD") //ENLEVE ACCENT
    .replace(/[\u0300-\u036f]/g, "");
  let nomMail = nom
    .toLowerCase() //MINUSCULE
    .normalize("NFD") //ENLEVE ACCENT
    .replace(/[\u0300-\u036f]/g, "");
  myCellMail.textContent = `${prenomMail}.${nomMail}@example.com`;
  //INSERTION CASE SUPP
  let myCellSupp = myRowBody.insertCell();
  let btnSupp = document.createElement("button");
  btnSupp.className = "btnSupp";
  btnSupp.textContent = "X";
  // btnSupp.id = "btnSuppr" + (i + 1);
  btnSupp.type = "button";
  //SUPPRESSION AU CLICK DIRECT DANS LA BOUCLE
  btnSupp.addEventListener("click", () => {
    myRowBody.remove();
    li.remove();
  });

  myCellSupp.appendChild(btnSupp);

  const li = document.createElement("li");
  li.className = "litab";
  li.textContent = _client;
  nameTab.appendChild(li);
}

//SUPPRESSION HORS BOUCLE
// const suppBtn = document.querySelectorAll(".btnSupp");
// suppBtn.forEach((btnsup) => {
//   btnsup.addEventListener("click", (event) => {
//     const ligne = event.target.closest("tr");
//     console.log("ID supp :", ligne.id);
//     ligne.remove();
//   });
// });
//ZONE AJOUTER PERSONNE
const titre = document.createElement("h2");
titre.style.marginTop = "0";
titre.textContent = "Ajouter une personne";
myDivAdd.appendChild(titre);
//CREATIONLABEL ET INPUT PRENOM
const labPrenom = document.createElement("label");
labPrenom.setAttribute("for", "addPrenom");
labPrenom.textContent = "Prénom : ";
const myPrenomAdd = document.createElement("input");
myPrenomAdd.id = "addPrenom";
myPrenomAdd.setAttribute("type", "texte");
myPrenomAdd.className = "deco";
//CREATION LABEL ET INPUT NOM
const labNom = document.createElement("label");
labNom.setAttribute("for", "addNom");
labNom.textContent = "Nom : ";
const myNomAdd = document.createElement("input");
myNomAdd.id = "addNom";
myNomAdd.setAttribute("type", "texte");
myNomAdd.className = "deco";
//CREATION BOUTTON
const myBoutonAdd = document.createElement("button");
myBoutonAdd.id = "addButon";
myBoutonAdd.textContent = "Ajouter";
myBoutonAdd.setAttribute("type", "button");
myBoutonAdd.className = "deco";
const myTxtValid = document.createElement("p");
//INSERTION DES CREATIONS
myDivAdd.appendChild(labPrenom);
myDivAdd.appendChild(myPrenomAdd);
myDivAdd.appendChild(labNom);
myDivAdd.appendChild(myNomAdd);
myDivAdd.appendChild(myBoutonAdd);
//MISE EN FORME
const myDeco = document.querySelectorAll(".deco");
myDeco.forEach((deco) => {
  deco.style.backgroundColor = "#536B78";
  deco.style.border = "2px solid #ACCBE1";
  deco.style.color = "#ACCBE1";
  deco.style.margin = "0 10px";
  deco.style.padding = "5px 10px";
});
const btnDeco=document.getElementById('addButon');
btnDeco.style.margin="0";
btnDeco.style.width="120px";

myBoutonAdd.addEventListener("click", () => {
  ajoutClient(myPrenomAdd.value + " " + myNomAdd.value);
  myTxtValid.textContent = `${myPrenomAdd.value} ${myNomAdd.value} ajouté !`;
  myDivAdd.appendChild(myTxtValid);
 
});
