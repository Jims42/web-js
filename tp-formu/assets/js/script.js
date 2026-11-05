const tabDiffusion = [
  "Par l'un de nos client !",
  "Par relation",
  "Par support publicitaire",
  "Par moteur de recherche",
  "Par hasard",
];

let machaine =
  "un site plaquette, un site communal, un catalogue en ligne, une boutique en ligne (e-commerce), le référencement, de l'e-mailing, un intranet ou extranet, une GED (gestion électronique de document), un relookage de votre site, une formation, la réalisation d'un cahier des charges, un audit accessibilité, le dépôt d'un nom de domaine en .fr, en savoir plus sur la solution ia souveraine".split(
    ", ",
  );

const myPrenom = document.getElementById("prenom");
const myNom = document.getElementById("nom");
const myEmail = document.getElementById("email");
const myTel = document.getElementById("tel");
const mySoc = document.getElementById("civ");
const myMessage = document.getElementById("message");
const myRep1 = document.getElementById("reponse1");
const myRep2 = document.getElementById("reponse2");
const myCoche = document.getElementById("accept");
const myBtnEnv = document.getElementById("btn-env");



function manquant(_data){
  _data.placeholder="------ * Données manquantes -------";
  _data.classList.add('erreur')
  _data.style.fontSize="0.6rem"
  _data.style.backgroundColor="#fa052e23";
  _data.style.border="2px solid red";
}


// console.table(tabDiffusion);

function myListe(_data, _hook) {
  _data.forEach((element) => {
    let liste = new Option();
    liste.textContent = element;
    _hook.appendChild(liste);
  });
}
myListe(tabDiffusion, myRep1);
myListe(machaine, myRep2);

myCoche.addEventListener("click", function (event) {
  const mail = myEmail.value.trim();
  const nom = myNom.value.trim();
  const prenom = myPrenom.value.trim();
  const tel = myTel.value.trim();
  const soc = mySoc.value.trim();
  
  let question = false;
  let tabQuestion=[];
 
//--------------------------------------------------------

  document.querySelectorAll("select").forEach((select) => {
    if (select.value === "default") {
      question = true;
      tabQuestion.push(select);
    }
  });
  // const selects = document.querySelectorAll("select");
  // const test = [...selects].some((select) => select.value === "default");

// const questionInvalide = tabQuestion.length > 0;
    const allInput=[prenom,nom,mail,tel,soc,tabQuestion.map(s=>s.id)];
   console.table(allInput);
//    console.log(allInput.index);

//   const myLab=document.getElementById('labAccept');
//         const existeSpan=document.querySelectorAll('span');
//         existeSpan.forEach(span=>span.remove());
// // -----------------------------------------------------------
//   if (!nom || !prenom || !mail || !tel || !soc || questionInvalide) {
//     // event.preventDefault();
//     alert("tout les champs ne sont pas remplis !");

//    allInput.forEach((selectManquant) => {
    
//       const mySpan = document.createElement('span');
//       mySpan.textContent=`Valeur "${selectManquant} " manquante(s)`;
//       mySpan.style.color = "red";
//       mySpan.style.fontSize="0.6rem"
//       myLab.after(mySpan);
   
//       });
//     }
    if (!nom || !prenom || !mail || !tel || !soc || question) {
    // event.preventDefault();
    alert("tout les champs ne sont pas remplis !");
    manquant(myPrenom);manquant(myNom);manquant(myEmail);manquant(myTel);manquant(mySoc)
      
    event.target.checked = false;
  } 
  // else {
    // event.target.checked = event.target.checked ? false : true;
  // }
  if(!prenom){
    manquant(myNom)
  }else{

  }
  
});
