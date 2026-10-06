const prenom = document.getElementById("name");
const date = document.getElementById("age");
const btnValidation = document.getElementById("btnVal");
const btnVidange = document.getElementById("btnVider");
const txtResult = document.getElementById("resultat");

btnValidation.addEventListener("click", function () {
  let nomsaisi = prenom.value.trim();
  let dateSaisie = parseInt(date.value);

  if (nomsaisi === "" || dateSaisie ==undefined ) {
    txtResult.textContent = "Veuillez remplir tous les champs.";
    txtResult.style.color = "red";
    return;
  }
let chaine=`Bonjour ${nomsaisi}, votre age est de: ${dateSaisie} ans. `;
  txtResult.style.color = "green";
 txtResult.textContent =chaine; 

 let retraite=0;
//  ----------------- VERSION IF ELSE --------------------

if(dateSaisie>=18 && (dateSaisie<64)){ 
    retraite=64-dateSaisie;
    txtResult.innerHTML+= `<br> vous etes majeur.<br> Il vous reste ${retraite} année(s) avant la retraite.`;
}else if(dateSaisie>=18 && (dateSaisie>64)){
    retraite=dateSaisie-64;
    txtResult.innerHTML+= `<br> vous etes majeur.<br> Vous etes à la retraite depuis  ${retraite} année(s).`;
}else if(dateSaisie>=18 && (dateSaisie===64)){
    txtResult.innerHTML+= `<br> vous etes majeur.<br>Vous prenez votre retraite cette année !.`;
}
    
else{
    txtResult.innerHTML+= "<br> vous etes mineur.";

}
//  ---------------- VERSION TURNER -------------------
/*
(dateSaisie>=18)? txtResult.textContent+=" vous etes majeur":txtResult.textContent+=" vous etes mineur"*/
  
});

btnVidange.addEventListener("click", function () {
  prenom.value = "";
  date.value = "";
  txtResult.textContent = reslutat;
  
});
