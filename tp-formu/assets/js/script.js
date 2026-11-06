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

// ------------------ FONCTION  -----------------------------

function manquant(_data){
  _data.placeholder="------ * Données manquantes -------";
  _data.classList.add('erreur')
  // _data.style.fontSize="0.6rem"
  // _data.style.backgroundColor="#fa052e23";
  // _data.style.border="2px solid red";
}
function retireErreur(_data, _origine){
  _data.placeholder=_origine;
  _data.classList.remove('erreur');
}



// console.table(tabDiffusion);

function myListe(_data, _hook) {
  let compteur=1;
  _data.forEach((element) => {
    let liste = new Option();
    liste.textContent = element;
    liste.value=compteur;
     // _hook.appendChild(liste);
    _hook.add(liste);
    compteur++;
  });
}

function maListOption(_data,_hook){
  const ajoutOption=_data.map((tab,index)=>{
    let liste = new Option();
    liste.textContent = tab;
    liste.value=index+1;
    return liste;
  })
  _hook.append(...ajoutOption);
}
//-------------------------- FIN FONCTION -------------------------

// myListe(tabDiffusion, myRep1);
// myListe(machaine, myRep2);
maListOption(tabDiffusion,myRep1);
maListOption(machaine,myRep2);

myCoche.addEventListener("click", function (event) {
   let err=false;
  const mailVide = myEmail.value.trim()==="";
  const nomVide = myNom.value.trim()==="";
  const prenomVide = myPrenom.value.trim()==="";
  const telVide = myTel.value.trim()==="";
  const socVide = mySoc.value.trim()==="";
  
  let question = false;
  let tabQuestion=[];
 

  document.querySelectorAll("select").forEach((select) => {
    if (select.value === "default") {
      question = true;
      tabQuestion.push(select);
      select.classList.add('erreur');
    }else{
      select.classList.remove('erreur');
    }
  });
  //   VERSION PLU RECENTE
  // const selects = document.querySelectorAll("select");
  // const test = [...selects].some((select) => select.value === "default");
if (prenomVide) {
    manquant(myPrenom);
  } else {
    retireErreur(myPrenom, "Prénom*");
  }
if (nomVide) {
    manquant(myNom);
  } else {
    retireErreur(myNom, "Nom*");
  }
  if (mailVide) {
    manquant(myEmail);
  } else {
    retireErreur(myEmail, "Email*");
  }
  if (telVide) {
    manquant(myTel);
  } else {
    retireErreur(myTel, "Tel*");
  }
  if (socVide) {
    manquant(mySoc);
  } else {
    retireErreur(mySoc, "Société/Collectivité*");
  }

    const allInput=[prenomVide,nomVide,mailVide,telVide,socVide,tabQuestion.map(s=>s.id)];
   console.table(allInput);
//    console.log(allInput.index);

    if (nomVide || prenomVide || mailVide || telVide || socVide || tabQuestion.length) {
    alert("tout les champs ne sont pas remplis !"); 
    event.target.checked = false;
  } 
  // else {
    // event.target.checked = event.target.checked ? false : true;
  // }
  
});
