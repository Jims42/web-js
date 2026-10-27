const myTable = document.querySelector("#cards");
const myBody=document.querySelector("body");

function insertTitleCell(_value, _hook) {
  const myTitleCell = document.createElement("th");
  myTitleCell.style.fontWeight = "bold";
  myTitleCell.textContent = _value;
  _hook.appendChild(myTitleCell);
}

function displayTable(_data) {
  const myThead = myTable.createTHead();
  const MyTitleRow = myThead.insertRow();
  for (const key in _data[0]) {
    insertTitleCell(key, MyTitleRow);
  }
}
function rempliTable(_data) {
    const myTbody=myTable.createTBody();
    
  for (let i = 0; i < _data.length; i++) {
    let tab = _data[i];
    const myRow = myTbody.insertRow();
    if (i == 0) {
      for (const key in tab) {
        const myCell = myRow.insertCell();
        myCell.textContent = tab[key];
      }
    } else {
      for (const key in tab) {
        if (key == "name") {
          const myCell = myRow.insertCell();
          myCell.textContent = tab[key];
          const myCellVide = myRow.insertCell();
          myCellVide.textContent="null"
        } else {
          const myCell = myRow.insertCell();
          myCell.textContent = tab[key];
        }
      }
    }
  }
}
function plusVictoire(_data){
  const textVictory=document.createElement("p");
let triData=_data.sort((a,b)=>b.victory-a.victory);
  const dataTri=_data[0];
 
  textVictory.textContent=`Le plus grand nombre de victoire est attribué à ${dataTri.name} avec ${dataTri.victory}`;
  rempliTable(triData);
  myBody.appendChild(textVictory);
}


fetch("https://arfp.github.io/tp/web/javascript/03-cardgame/cardgame.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
 
    displayTable(data);
    console.log(data);
    rempliTable(data);
  plusVictoire(data);
     console.log(data);
  })
  .catch((error) => {
    console.error("Erreur lors de la récupération ou du parsing :", error);
  });
