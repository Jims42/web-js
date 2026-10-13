const txtbirth = document.getElementById("dateBirth");
const btnAge = document.getElementById("btnCalcul");
const txtZone = document.getElementById("txt");

txtZone.textContent += "traitement";
// const validationSumarize = document.createElement("p");
// validationSumarize.id = "test";
// validationSumarize.className = "sumarize";
// const mysection = document.querySelector("section");
// mysection.childNodes.forEach((el) => {
//   el.remove();
// });
// mysection.appendChild(validationSumarize);

const mysection = document.querySelector("section");

function calculateAge() {
  let chaineBirthday = txtbirth.value;
  let delay = Date.parse(chaineBirthday);
  const birthDate = new Date(delay);
  const today = new Date();

  //   mysection.childNodes.forEach((el) => {
  //     el.remove();
  //   });

  for (let i = mysection.childNodes.length - 1; i >= 0; i--) {
    mysection.removeChild(mysection.childNodes[i]);
  }

  console.log(mysection.childNodes);
  const validationSumarize = document.createElement("p");
  validationSumarize.id = "test";
  validationSumarize.className = "sumarize";
  mysection.appendChild(validationSumarize);

  if (birthDate > today || isNaN(birthDate) ) {
    // alert("Erreur la date doit être dans la passé");

    validationSumarize.textContent +=
      "Erreur la date doit être dans la passé ! ";
    validationSumarize.style.color = "red";
  } else {
    let userDate = birthDate.toLocaleDateString("Fr-FR");
    let userTime = birthDate.toLocaleTimeString();
    validationSumarize.textContent = `Vous êtes né le ${userDate} à ${userTime}`;
    let dateDiff = today - birthDate;
    let nbyear = today.getFullYear() - birthDate.getFullYear();
    let nbyearV2 = Math.floor(dateDiff / 1000 / 6 / 6 / 24 / 365.25);
    validationSumarize.innerHTML += `<br> il s'est écoulé ${nbyear} années depuis votre naissance`;

    let mois = birthDate.toLocaleString("fr-FR", { month: "long" });
    let jourSemaine = birthDate.toLocaleString("fr-FR", { weekday: "long" });
    let jour = birthDate.getDate();
    let years = birthDate.getFullYear();
    validationSumarize.innerHTML += `<br> vous etes né(e) le ${jourSemaine} ${jour} ${mois} ${years}`;

    const signe = signeAstro(birthDate);
    validationSumarize.innerHTML += `<br> votre signe astrologique est ${signe} `;
    createImg(signe);
  }
}
function signeAstro(birthDate) {
  let signe;
  let mois = birthDate.toLocaleString("fr-FR", { month: "long" });
  let jour = birthDate.getDate();
  switch (mois) {
    case "janvier":
      if (jour > 19) {
        signe = "Verseau ♒";
      } else {
        signe = "Capricorne ♑";
      }
      break;
    case "février":
      if (jour > 18) {
        signe = "Poissons ♓";
      } else {
        signe = "Verseau ♒";
      }
      break;
    case "mars":
      if (jour > 20) {
        signe = "Bélier ♈";
      } else {
        signe = "Poissons ♓";
      }
      break;
    case "avril":
      if (jour > 19) {
        signe = "Taureau ♉";
      } else {
        signe = "bélier ♈";
      }
      break;
    case "mai":
      if (jour > 20) {
        signe = "Gémeaux ♊";
      } else {
        signe = "Taureau ♉";
      }
      break;
    case "juin":
      if (jour > 20) {
        signe = "Cancer ♋";
      } else {
        signe = "Gémeaux ♊";
      }
      break;
    case "juillet":
      if (jour > 22) {
        signe = "Lion ♌";
      } else {
        signe = "Cancer ♋";
      }
      break;
    case "août":
      if (jour > 22) {
        signe = "Vierge ♍";
      } else {
        signe = "Lion ♌";
      }
      break;
    case "septembre":
      if (jour > 22) {
        signe = "Balance ♎";
      } else {
        signe = "Vierge ♍";
      }
      break;
    case "octobre":
      if (jour > 22) {
        signe = "Scorpion ♏";
      } else {
        signe = "Balance ♎";
      }
      break;
    case "novembre":
      if (jour > 20) {
        signe = "Sagittaire ♐";
      } else {
        signe = "Scorpion ♏";
      }
      break;
    case "décembre":
      if (jour > 20) {
        signe = "Capricorne ♑";
      } else {
        signe = "Sagittaire ♐";
      }
      break;
    default:
      signe = "Mois invalide";
  }

  return signe;
}
function creteImg(_urlimg, _nameImg) {
  const myImg = document.createElement("img");
  // myImg.src=_urlimg;
  myImg.setAttribute("src", _urlimg);
  myImg.id = _nameImg;
  myImg.setAttribute("alt", _nameImg);
  myImg.setAttribute("style", "width:200px;height:auto");
  mysection.appendChild(myImg);
}
function createImg(_signe) {
  const myImg = document.createElement("img");
  const nom = _signe.split(" ")[0];

  // myImg.src=_urlimg;
  myImg.setAttribute("src", "assets/img/" + nom.toLowerCase() + ".png");
  myImg.id = nom;
  myImg.setAttribute("alt", nom);
  myImg.setAttribute("style", "width:100px;height:auto");
  mysection.appendChild(myImg);
}

btnAge.addEventListener("click", function () {
  calculateAge();
  console.log("test");
});
