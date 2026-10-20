const myEmployee= {
    lastname: "Doe",
    firstname: "John",
    birthday: "1981-11-12",
    salary: 2150
}

const myTbody=document.querySelector('tbody');

function ajoutLigne(_personne){
    let prenom=_personne.values[1];
    let nom=_personne.values[0];
    console.log("nom" +nom+" "+prenom);
const myRow=myTbody.insertRow();
const myName=myRow.insertCell();
myName.textContent=nom;
myRow.appendChild(myName);


}
ajoutLigne(myEmployee);