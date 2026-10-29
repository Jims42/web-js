const myTable = document.querySelector("#cards");
const myBody = document.querySelector("body");

function insertTitleCell(_value, _hook) {
  const myTitleCell = document.createElement("th");
  myTitleCell.style.fontWeight = "bold";
  myTitleCell.textContent = _value;
  _hook.appendChild(myTitleCell);
}

// function tabHead(_data) {
//   return [...new Set(_data.flatMap((u) => Object.keys(u)))];
// }

function rempliTable(_data, tabTitre) {
  myTable.innerHTML="";
  const myThead = myTable.createTHead();
  const MyTitleRow = myThead.insertRow();

  tabTitre.forEach((key) => {
    insertTitleCell(key, MyTitleRow);
  });
  const myTbody = myTable.createTBody();


  for (let i = 0; i < _data.length; i++) {
    let tab = _data[i];
    const myRow = myTbody.insertRow();

    tabTitre.forEach((key) => {
      const myCell = myRow.insertCell();

      if (tab[key] !== undefined) {
        myCell.textContent = tab[key];
      } else {
        myCell.textContent = "null";
      }
    });
  }
}

function plusVictoire(_data) {

  const textVictory = document.createElement("p");
  let triData = [..._data].sort((a, b) => b.victory - a.victory);
  const dataTri = triData[0];
  textVictory.textContent = `Le plus grand nombre de victoire est attribué à ${dataTri.name} avec ${dataTri.victory}`;
  myTable.after(textVictory);
}
function ratio(_data, tabTitre) {
  for(let i=0;i<_data.length;i++){
  _data[i].ratio= (_data[i].victory / _data[i].defeat).toFixed(2); 
  }
  if(!tabTitre.includes("ratio")){
    tabTitre.push("ratio");
  }
  rempliTable(_data, tabTitre);
  
}

let tabDonne = [];
let tabCleDonnee = [];
fetch("https://arfp.github.io/tp/web/javascript/03-cardgame/cardgame.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    tabDonne = data;
    tabCleDonnee = [...new Set(data.flatMap((u) => Object.keys(u)))];
    // displayTable(tabDonne, tabCleDonnee);
    
    rempliTable(tabDonne, tabCleDonnee);
    plusVictoire(tabDonne);
    ratio(tabDonne, tabCleDonnee)
  })
  .catch((error) => {
    console.error("Erreur lors de la récupération ou du parsing :", error);
  });
