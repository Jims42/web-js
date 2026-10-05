/*const zoneDate= document.getElementById("txtDate");*/
const zoneDate=document.querySelector("#txtDate");

function afficherDate () {

    let dateJour= new Date();
    let jour= (dateJour.getDate()<10)?"0"+dateJour.getDate():dateJour.getDate();
    let mois= (dateJour.getMonth()+1<10)?"0"+(dateJour.getMonth()+1): dateJour.getMonth()+1;
    let annee= dateJour.getFullYear();

    let chaineDate= annee +"-" +mois+"-"+jour;
    console.log(chaineDate);
   zoneDate.value=chaineDate;
}



const mybtnDate=document.getElementById("btnDate");
mybtnDate.addEventListener("click", function() {
afficherDate();
//console.log("test");
})

const bouton = document.getElementById('btnClock');
const inputHeure = document.getElementById('txtHeure');
bouton.addEventListener('click', () => {
    const maintenant = new Date();
    const heures = String(maintenant.getHours()).padStart(2, '0');
    const minutes = String(maintenant.getMinutes()).padStart(2, '0');
    const secondes = String(maintenant.getSeconds()).padStart(2,'0');
    const formatDateTime = `${heures}:${minutes}:${secondes}`;
    inputHeure.value = formatDateTime;
    });
