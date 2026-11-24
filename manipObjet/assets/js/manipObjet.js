const myEmployee= {
    lastname: "Doe",
    firstname: "John",
    birthday: "1981-11-12",
    salary: 2150
}
const mySection=document.querySelector('section');
const myTbody=document.querySelector('tbody');

    const myTitre=document.getElementById('titre');
function reset(){
    myTbody.replaceChildren();
    myTitre.textContent="Profil de "
}

function ajoutLigne(){
   
    myTitre.textContent+=`${myEmployee.firstname} ${myEmployee.lastname}`;

    const Email=`${myEmployee.firstname.toLowerCase()}.${myEmployee.lastname.toLowerCase()}@example.com`;
    const myRow=myTbody.insertRow();

    const myNom=myRow.insertCell();
    const myPrenom=myRow.insertCell();
    const myAnniv=myRow.insertCell();
    const myEmail=myRow.insertCell();
    const mySalaire=myRow.insertCell();

    myNom.textContent=myEmployee.lastname;
    myPrenom.textContent=myEmployee.firstname;
    myAnniv.textContent=myEmployee.birthday;
    myEmail.textContent=Email;
    mySalaire.textContent=`${myEmployee.salary} €`;
    myTbody.appendChild(myRow);
    
}
ajoutLigne();

const myFormModif=document.createElement('form');
myFormModif.setAttribute("type","submit");
mySection.appendChild(myFormModif);
const myTitreForm=document.createElement('p');
myFormModif.appendChild(myTitreForm);

for(let i=1;i<6;i++){
    const myDivForm=document.createElement('div');
    myDivForm.id="div"+i;
    myDivForm.className="block";
    myFormModif.appendChild(myDivForm);
}



// const labPrenom=document.createElement('label');
const labPrenom = Object.assign(document.createElement("label"),{
    textContent : "Prénom",
    htmlFor : "prenom"
})
const inputPrenom = Object.assign(document.createElement("input"),{

    id : "prenom",
    className : "deco",
    value : myEmployee.firstname
})
// const inputPrenom=document.createElement('input');
const labNom=document.createElement('label');
const inputNom=document.createElement('input');
const labAnniv=document.createElement('label');
const inputAnniv=document.createElement('input');
const labSal=document.createElement('label');
const inputSal=document.createElement('input');
const space=document.createElement('label');
const btnEnrgistre=document.createElement('button');

myTitreForm.textContent="Modifier le profil";


// labPrenom.setAttribute("for","prenom");
// labPrenom.textContent="Prénom : ";
// inputPrenom.id="prenom";
// inputPrenom.value=myEmployee.firstname;
// inputPrenom.className="deco";

labNom.setAttribute("for","nom");
labNom.textContent="Nom : ";
inputNom.id="nom";
inputNom.value=myEmployee.lastname;
inputNom.className="deco";

labAnniv.setAttribute("for","anniv");
labAnniv.textContent="Date de naissance : ";
inputAnniv.id="anniv";
inputAnniv.value=myEmployee.birthday;
inputAnniv.className="deco";

labSal.setAttribute("for","salaire");
labSal.textContent="Salaire : ";
inputSal.id="salaire";
inputSal.value=myEmployee.salary;
inputSal.className="deco";

btnEnrgistre.setAttribute("type","button");
btnEnrgistre.textContent="Enregistrer";
btnEnrgistre.id="btnEnr";
btnEnrgistre.className="deco";



const myDiv1=document.getElementById('div1');
myDiv1.append(labPrenom, inputPrenom);
const myDiv2=document.getElementById('div2');
myDiv2.append(labNom, inputNom);
const myDiv3=document.getElementById('div3');
myDiv3.append(labAnniv, inputAnniv);
const myDiv4=document.getElementById('div4');
myDiv4.append(labSal, inputSal);
const myDiv5=document.getElementById('div5');
myDiv5.append(space, btnEnrgistre);

const myDeco=document.querySelectorAll('.deco');
myDeco.forEach((deco)=>{
    deco.style.width="200px";
    deco.style.backgroundColor="#98fb98";
    deco.style.color="#1e7b1e";
});
const myBtn=document.getElementById('btnEnr');
myBtn.style.width="100px"
const myLab=document.querySelectorAll('label');
myLab.forEach((deco)=>{
    deco.style.display="inline-block";
    deco.style.width="200px";
});
myFormModif.style.display="flex";
myFormModif.style.flexDirection="column";
myFormModif.style.gap="10px";

btnEnrgistre.addEventListener('click',()=>{
    reset()
if ( myEmployee.firstname != inputPrenom.value) {
        myEmployee.firstname=inputPrenom.value; 
        console.log(myEmployee);  
    
    }
    if ( myEmployee.lastname != inputNom.value) {
        myEmployee.lastname=inputNom.value;
       
    }
    if ( myEmployee.birthday != inputAnniv.value) {
        myEmployee.birthday=inputAnniv.value;   
    }
    if ( myEmployee.salary < inputSal.value) {
      
        myEmployee.salary=inputSal.value;   
    }
 
    ajoutLigne();
    
});

    

    

