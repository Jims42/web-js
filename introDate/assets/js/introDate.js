const txtbirth=document.getElementById("dateBirth");
const btnAge=document.getElementById("btnCalcul");
const txtZone=document.getElementById("txt");

txtZone.textContent+="traitement";


function calculateAge(){
    let chaineBirthday=txtbirth.value;
    let delay=Date.parse(chaineBirthday);
    const birthDate=new Date(delay);
    const today=new Date();

 const validationSumarize=document.createElement("p");
        validationSumarize.id="test";
        validationSumarize.className="sumarize";
        const mysection=document.querySelector('section');
        mysection.appendChild(validationSumarize);

    if(birthDate>today){
        // alert("Erreur la date doit être dans la passé");
       
        validationSumarize.textContent+="Erreur la date doit être dans la passé ! ";
        validationSumarize.style.color="red";

    }
    else{
    let userDate=birthDate.toLocaleDateString("Fr-FR");
    let userTime=birthDate.toLocaleTimeString();
    validationSumarize.textContent=`Vous êtes né le ${userDate} à ${userTime}`;
    let dateDiff=today-birthDate;
    let nbyear=today.getFullYear()-birthDate.getFullYear();
    let nbyearV2=Math.floor(dateDiff/1000/6/6/24/365.25);
    validationSumarize.innerHTML +=`<br> il s'est écoulé ${nbyear} depuis votre naissance`;

}
}
btnAge.addEventListener("click", function(){
    calculateAge();
    console.log("test");
})