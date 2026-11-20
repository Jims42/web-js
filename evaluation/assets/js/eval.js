
const myMain=document.querySelector('main');
const myTitre=document.createElement('h1');

myTitre.id="titre";
myTitre.textContent="Résultat de l'évaluation";
myMain.appendChild(myTitre);

const myTable=document.createElement('table');
const myThead=myTable.createTHead();
const myTrHead=myThead.insertRow();

const myNomCelHead=document.createElement('th');
const myPrenomCellHead=document.createElement('th');
const myNoteCellHead=document.createElement('th');

const myTbody=myTable.createTBody();


myTrHead.append(myNomCelHead,myPrenomCellHead,myNoteCellHead);
myNomCelHead.textContent="Nom";
myPrenomCellHead.textContent="Prenom";
myNoteCellHead.textContent="Note"

myMain.appendChild(myTable);

const myUl=document.createElement('ul');
const myLiNbEtutudiant=document.createElement('li');
const mySpanNb=document.createElement('span');
const myLiMoyenne=document.createElement('li');
const mySpanMoy=document.createElement('span');
const myLiSupMoyenne=document.createElement('li');
const mySpanSup=document.createElement('span')

myLiNbEtutudiant.textContent="Nombre d'étudiants : ";
myLiMoyenne.textContent="Moyenne de la classe : ";
myLiSupMoyenne.textContent="Nombre d'étudiants au dessus de la moyenne : ";

myLiNbEtutudiant.appendChild(mySpanNb);
myLiMoyenne.appendChild(mySpanMoy);
myLiSupMoyenne.appendChild(mySpanSup);
myMain.appendChild(myUl);
myUl.append(myLiNbEtutudiant,myLiMoyenne,myLiSupMoyenne);

const myForm=document.createElement('form');
const myTitreH2=document.createElement('h2');
const myLabel1=document.createElement('label');
const myInputName=document.createElement('input');
const myLabel2=document.createElement('label');
const myInputNote=document.createElement('input');
const myBtn=document.createElement('button');

myForm.id="form";
myForm.setAttribute("method", "get");

myTitreH2.textContent="Ajouter une note"

myLabel1.textContent="Nom Prenom :"
myLabel1.setAttribute("for","name");

myInputName.id="name";
myInputName.className="input ";
myInputName.classList.add("affichage");

myLabel2.textContent="Note :"
myLabel2.setAttribute("for","note");

myInputNote.id="note";
myInputNote.className="input";
myInputNote.classList.add("affichage");

myBtn.textContent="Ajouter";
myBtn.setAttribute("type","button")
myBtn.id="btn-add"
myBtn.classList.add("affichage");

myTitre.after(myForm);
myForm.append(myTitreH2,myLabel1,myInputName,myLabel2,myInputNote,myBtn)



// --------------------------- FUNCTION --------------------------
function triNote(_data){
_data.sort((a,b)=>b.grade - a.grade);
console.log(_data);
}
function remplirTab(_data){
    myTbody.querySelectorAll("tr").forEach(row => row.remove());
_data.forEach(element => {
    let tabName=element.fullname.split(" ");
    let myNom=tabName[0];
    let myPrenom=tabName[1];

    const myRrow=myTbody.insertRow();
    const myCellNom=myRrow.insertCell();
    myCellNom.textContent=myNom;
    const myCellPrenom=myRrow.insertCell();
    myCellPrenom.textContent=myPrenom;
    const myCellNote=myRrow.insertCell();
    myCellNote.textContent=element.grade;
    myCellNote.style.textAlign="right";
    myCellNote.style.paddingRight="2px"    
});
}
function nbEtudiant(_data,_hook){
    let nb=_data.length;
    _hook.textContent=nb;   
}

function moyenne(_data,_hook){
const somme=_data.reduce((accumulator,currentValue)=>accumulator+currentValue.grade,0);
let result =somme/_data.length;
_hook.textContent=result.toFixed(2);

}
function noteSupp(_data,_hook){
    let nbEtudiant=0;
    const somme=_data.reduce((accumulator,currentValue)=>accumulator+currentValue.grade,0);
let result =somme/_data.length;
console.log(result);

    for (let i = 0; i < _data.length; i++) {
        if (_data[i].grade>result) {
        nbEtudiant++
      }  
    }    
    _hook.textContent= nbEtudiant;
}
function addColObtention(_data,_hookTH,_hookTB){

const myObtenuCellTH=document.createElement('th');
_hookTH.appendChild(myObtenuCellTH);
myObtenuCellTH.textContent="Obtenu";

for(let i=0;i<_data.length;i++){
    const myCellObtenu=_hookTB[i].insertCell();
    if(_data[i].grade>=12){
myCellObtenu.textContent="Oui"
    }else{
        myCellObtenu.textContent="Non"
    }
}
}
function AjouterEtudiant(_data){

    let ajoutNom =myInputName.value;
    let ajoutNote =myInputNote.value;
 _data.push({fullname:ajoutNom,grade:ajoutNote})
triNote(_data)
remplirTab(_data)
nbEtudiant(_data,mySpanNb);
moyenne(_data,mySpanMoy)
noteSupp(_data,mySpanSup);
}

// ------------------------------------ FIN FONCTION ----------------------------

fetch('assets/json/eval.json')
.then(Response=>{
    return Response.json();})
.then((data)=>{


triNote(data)
  remplirTab(data);  
nbEtudiant(data,mySpanNb);
moyenne(data,mySpanMoy)
noteSupp(data,mySpanSup);

 const mesLignes = document.querySelectorAll("tbody tr");
addColObtention(data,myTrHead,mesLignes)

const btn=document.getElementById('btn-add');
btn.addEventListener('click',()=>{
    AjouterEtudiant(data)
   

 const mesLignes = document.querySelectorAll("tbody tr");
addColObtention(data,myTrHead,mesLignes)


});


})
.catch((error)=>{
    console.error("error : "+error)
})
