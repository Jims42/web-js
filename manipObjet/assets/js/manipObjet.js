const myEmployee= {
    lastname: "Doe",
    firstname: "John",
    birthday: "1981-11-12",
    salary: 2150
}

const myTitre=document.getElementById('titre');
    myTitre.textContent+=`${myEmployee.firstname} ${myEmployee.lastname}`;

function ajoutLigne(myEmployee){

    const myTbody=document.querySelector('tbody');
    const Email=`${myEmployee.firstname.toLowerCase()}.${myEmployee.lastname.toLowerCase()}@example.com`;
    const myRow=myTbody.insertRow(-1);

    const myNom=myRow.insertCell(-1);
    const myPrenom=myRow.insertCell(-1);
    const myAnniv=myRow.insertCell(-1);
    const myEmail=myRow.insertCell(-1);
    const mySalaire=myRow.insertCell(-1);

    myNom.textContent=myEmployee.lastname;
    myPrenom.textContent=myEmployee.firstname;
    myAnniv.textContent=myEmployee.birthday;
    myEmail.textContent=Email;
    mySalaire.textContent=`${myEmployee.salary} €`;



}
ajoutLigne(myEmployee);
