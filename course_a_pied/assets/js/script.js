const myInfo=document.getElementById('info');
const myNbPart=document.getElementById('nbPart');
const myGagnant=document.getElementById('gagnant');
const mytabPart=document.getElementById('tab-part');

const myTabTH=mytabPart.createTHead();
const myTrHead=myTabTH.insertRow();
const myTabTB=mytabPart.createTBody();


// ------------------------ FUNCTION ---------------------------

function triNote(_data){
_data.sort((a,b)=>a.temps - b.temps);
console.log(_data);
}
function formaterCasse(_texte) {
    return _texte.charAt(0).toUpperCase() + _texte.slice(1).toLowerCase();
}

function convertirSecondes(totalSecondes) {
  const minutes = Math.floor(totalSecondes / 60);
  const secondes = totalSecondes % 60;
  return { minutes, secondes };
}

function tabTitre(_data,_hook){
    const donneesFormatees = _data.map(item => {
  const [nom, prenom] = item.nom.split(" "); 
  return {
    "pays": item.pays,
    "nom": nom,
    "prenom": prenom,
    "temps final": item.temps
  };
});
const ordreColonnes = ["pays", "nom", "prenom", "temps final"];

ordreColonnes.forEach(cle => {
  const myCellTh = document.createElement("th");

  myCellTh.textContent = formaterCasse(cle); 
  _hook.appendChild(myCellTh);
});
}

function creationTab(_data,_hook){
    _data.forEach(element => {

        let tabName=element.nom.split(" ");
        let myNom=formaterCasse(tabName[0]);
        let myPrenom=formaterCasse(tabName[1]);

        let myRows=myTabTB.insertRow();

        let myCellNom=myRows.insertCell();
        myCellNom.textContent=myNom;

        let myCellPrenom=myRows.insertCell();
        myCellPrenom.textContent=myPrenom;

        let myCellPays=myRows.insertCell();
        myCellPays.textContent=formaterCasse(element.pays);

        let myCellTime=myRows.insertCell();
        myCellTime.textContent=element.temps;

        
    });

}

// ------------------------ FIN FUNCTION -----------------------

fetch('assets/json/resultat10000metres.json')
.then(Response=>{return Response.json();})
.then((data)=>{

    tabTitre(data,myTrHead);
    creationTab(data,myTabTB);


})
.catch((error)=>{
    console.error("error : "+error)
})