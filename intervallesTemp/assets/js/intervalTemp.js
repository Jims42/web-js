const theDate=document.getElementById("date");
const theTime=document.getElementById("heure");
const btnValid=document.getElementById("btnDateday");

function dateJour(){

    let chaineDate=theDate.value; 
    let dateJour=new Date(jourDate);
    const validDate=document.createElement("p");
    validDate.id="rep";
    validDate.className="reponse";

    let jour=dateJour.getDate()
}