
const myMain=document.querySelector('main');
const myTitre=document.createElement('h1');

myTitre.id="titre";
myTitre.textContent="Résultat de l'évaluation";
myMain.appendChild(myTitre);

const myTable=document.createElement('table');
const myThead=myTable.createTHead();
const myTrHead=myThead.insertRow();

const myNomCelHead=myTrHead.insertCell();
const myPrenomCellHead=myTrHead.insertCell();
const myNoteCellHead=myTrHead.insertCell();

myNomCelHead.textContent="Nom";
myPrenomCellHead.textContent="Prenom";
myNoteCellHead.textContent="Note"
myMain.appendChild(myTable);
function triNote(_data){

}
function remplirTab(_data){

}


fetch('assets/json/eval.json')
.then(Response=>{
    return Response.json();})
.then((data)=>{

  




})
.catch((error)=>{
    console.error("error : "+error)
})
