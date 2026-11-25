const myInfo = document.getElementById("info");
const myNbPart = document.getElementById("nbPart");
const myGagnant = document.getElementById("gagnant");
const mytabPart = document.getElementById("tab-part");

const myTabTH = mytabPart.createTHead();
const myTrHead = myTabTH.insertRow();
const myTabTB = mytabPart.createTBody();

const myFieldset = document.createElement("fieldset");
const myLegend = document.createElement("legend");
const myFilter = document.createElement("h2");
const myUl = document.createElement("ul");

myFilter.textContent = "Filtrer";
myLegend.className = "titre2";
myFieldset.id = "block-filtre";
myUl.id = "ulFiltre";

myLegend.appendChild(myFilter);
myFieldset.appendChild(myLegend);
myFieldset.appendChild(myUl);

mytabPart.before(myFieldset);

// ------------------------ FUNCTION ---------------------------

function triTemps(_data) {
  _data.sort((a, b) => a.temps - b.temps);
  console.log(_data);
}
function formaterCasse(_texte) {
  return _texte.charAt(0).toUpperCase() + _texte.slice(1).toLowerCase();
}
function nbParticipant(_data) {
  myNbPart.textContent = Object.keys(_data).length;
}
function gagnant(_data) {
  let tabName = _data[0].nom.split(" ");
  let myNom = formaterCasse(tabName[0]);
  let myPrenom = formaterCasse(tabName[1]);
  myGagnant.textContent = myPrenom + " " + myNom;
}

function convertirSecondes(totalSecondes) {
  const minutes = Math.floor(totalSecondes / 60);
  const secondes = (totalSecondes % 60).toString().padStart(2, "0");
  return `${minutes} min ${secondes} s`;
}

function tabTitre(_data, _hook) {
  const donneesFormatees = _data.map((item) => {
    const [nom, prenom] = item.nom.split(" ");
    return {
      pays: item.pays,
      nom: nom,
      prenom: prenom,
      "temps final": item.temps,
    };
  });
  // const ordreColonnes = ["pays", "nom", "prenom", "temps final"];

  Object.keys(donneesFormatees[0]).forEach((cle) => {
    const myCellTh = document.createElement("th");

    myCellTh.textContent = formaterCasse(cle);
    _hook.appendChild(myCellTh);
  });
}

function creationTab(_data, _hook) {
  myTabTB.querySelectorAll("tr").forEach((row) => row.remove());

  _data.forEach((element) => {
    let tabName = element.nom.split(" ");
    let myNom = formaterCasse(tabName[0]);
    let myPrenom = formaterCasse(tabName[1]);

    let myRows = myTabTB.insertRow();

    let myCellPays = myRows.insertCell();
    myCellPays.textContent = formaterCasse(element.pays);

    let myCellNom = myRows.insertCell();
    myCellNom.textContent = myNom;

    let myCellPrenom = myRows.insertCell();
    myCellPrenom.textContent = myPrenom;

    let myCellTime = myRows.insertCell();

    myCellTime.textContent = convertirSecondes(element.temps);
  });
}
function filtrePays(_data) {
  const frag = document.createDocumentFragment();
  _data.sort((a, b) => a.pays.localeCompare(b.pays));

  for (let i = 0; i < _data.length; i++) {
    let tab = _data[i].pays;
    const myInput = document.createElement("input");
    const mylabel = document.createElement("label");
    const myLi = document.createElement("li");

    myInput.id = tab;
    myInput.setAttribute("type", "checkbox");
    mylabel.setAttribute("for", tab);
    myInput.classList.add("inputCountry");
    mylabel.textContent = tab;
    mylabel.classList.add("labCountry");
    myLi.classList.add("country");

    myLi.appendChild(myInput);
    myLi.appendChild(mylabel);
    frag.appendChild(myLi);
  }
  myUl.appendChild(frag);
}

function filterTab(_data) {
  const myInputFiltre = document.querySelectorAll('input[type="checkbox"]');
  console.log("test");

  myInputFiltre.forEach((input) => {
    input.addEventListener("change", () => {
      const tabResult = Array.from(myInputFiltre)
        .filter((coureur) => coureur.checked)
        .map((courreur) => courreur.id);

      const donneesFiltrees =
        tabResult.length === 0
          ? _data
          : _data.filter((pays) => tabResult.includes(pays.pays));

      creationTab(donneesFiltrees);
    });
  });
}

// ------------------------ FIN FUNCTION -----------------------

fetch("assets/json/resultat10000metres.json")
  .then((Response) => {
    return Response.json();
  })
  .then((data) => {
    triTemps(data);
    tabTitre(data, myTrHead);
    creationTab(data, myTabTB);
    nbParticipant(data);
    gagnant(data);
    filtrePays(data);

    filterTab(data);
  })
  .catch((error) => {
    console.error("error : " + error);
  });
