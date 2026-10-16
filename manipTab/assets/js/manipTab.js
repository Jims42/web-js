const people=['Mike Dev', 'John Makenzie', 'léa Grande'];
const nameTab=document.getElementById('nameTab');
nameTab.setAttribute("style","list-style: none");
const myBody=document.querySelector('body');
myBody.style.backgroundColor="#536B78";
myBody.style.color="#ACCBE1";
const myDiv=document.getElementById('wrap');
myDiv.style.border="2px solid #ACCBE1";
myDiv.style.borderRadius="12px";
let prenom;
let nom;



const myTab=document.querySelector("table");
const myThead=myTab.createTHead();
const titleRow=myThead.insertRow();



let tabTitle=["nom", "prénom", "mail"];
tabTitle.push("Supprimmer");

for(let j=0;j<tabTitle.length;j++){
    let myCell=document.createElement('th');
    myCell.textContent=tabTitle[j];
    titleRow.appendChild(myCell);
}
const myTbody=myTab.createTBody();
const titleD=myTbody.insertRow();

for (let i=0;i<people.length;i++){
    let tabpeople=people[i];
    prenom=tabpeople.split(" ")[0];
    nom=tabpeople.split(" ")[1];

const myRowBody=myTbody.insertRow();

const myCellNom=myRowBody.insertCell();
myCellNom.textContent=nom;

const myCellPrenom=myRowBody.insertCell();
myCellPrenom.textContent=prenom;

const myCellMail=myRowBody.insertCell();
let prenomMail=prenom.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, '');
let nomMail=nom.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, '');
myCellMail.textContent=`${prenomMail}.${nomMail}@example.com`
let myCellSupp=myRowBody.insertCell();
let btnSupp=document.createElement('button');
btnSupp.className="btnSupp";
btnSupp.textContent="X";
btnSupp.id="btnSuppr";
btnSupp.type="button";
myCellSupp.appendChild(btnSupp);



    const li=document.createElement('li');
li.className="litab";
li.textContent=tabpeople;
nameTab.appendChild(li);
}
const suppBtn=document.querySelectorAll('.btnSupp');
suppBtn.forEach((btnsup) => {
    btnsup.addEventListener("click",(del)=>{

  const parentCard = closest('titleD');
    if (parentCard) {
    parentCard.remove();
    }
        console.log("testsup");
    })
});

