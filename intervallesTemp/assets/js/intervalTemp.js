const theDate=document.getElementById("date");
const theTime=document.getElementById("heure");
const btnValid=document.getElementById("btnDateday");

function dateJour(){

    let jourDate=theDate.value; 
    let dateJour=new Date(jourDate);
    const validDate=document.createElement("p");
    validDate.id="rep";
    validDate.className="reponse";
    const mysection=document.querySelector('section');
    mysection.appendChild(validDate);


    let jour=dateJour.getDate();
    let mois=dateJour.getMonth()+1;
    let annee=dateJour.getFullYear();

    validDate.textContent +=`Aujourd'hui nous sommes le ${jour}/${mois}/${annee}`;
}
btnValid.addEventListener("click", function(){
    dateJour();
})