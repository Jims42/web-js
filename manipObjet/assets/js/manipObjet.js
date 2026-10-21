const myEmployee= {
    lastname: "Doe",
    firstname: "John",
    birthday: "1981-11-12",
    salary: 2150
}
const mySection=document.querySelector('section');


function ajoutLigne(myEmployee){
    const myTitre=document.getElementById('titre');
    myTitre.textContent+=`${myEmployee.firstname} ${myEmployee.lastname}`;

    const myTbody=document.querySelector('tbody');
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
ajoutLigne(myEmployee);

const myFormModif=document.createElement('form');
myFormModif.setAttribute("type","submit");
mySection.appendChild(myFormModif);

for(let i=1;i<5;i++){
    const myDivForm=document.createElement('div');
    myDivForm.id="div"+i;
    myDivForm.className="block";
    myFormModif.appendChild(myDivForm);
}

const myTitreForm=document.createElement('p');
const labPrenom=document.createElement('label');
const inputPrenom=document.createElement('input');
const labNom=document.createElement('label');
const inputNom=document.createElement('input');
const labAnniv=document.createElement('label');
const inputAnniv=document.createElement('input');
const labSal=document.createElement('label');
const inputSal=document.createElement('input');

myTitreForm.textContent="Modifier le profil";
labPrenom.setAttribute("for","prenom");
labPrenom.textContent="Prénom : ";
labNom.setAttribute("for","nom");
inputPrenom.id="nom";
inputPrenom.value=myEmployee.firstname;

const myDiv1=document.getElementById('div1');
myDiv1.appendChild(labPrenom);
myDiv1.appendChild(inputPrenom);

