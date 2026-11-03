const myInput=document.getElementById('input-rech');
const myBtn=document.getElementById('btn-valider');
var mesData=[];
function lister(_data){
    mesData=_data;
    for(let i=0;i<_data.length;i++){
        let maCommune=_data[i];
        let monOption=new Option();
        monOption.value=maCommune.codePostal;
        monOption.innerText=maCommune.nomCommune +" CP : "+maCommune.codePostal;
        document.getElementById("codePostal").appendChild(monOption);
    }
}

fetch('./assets/json/data.json')
.then(response=>{return response.json()})
.then(communes=>{
console.log(communes[590].codePostal);
lister(communes)
})
.catch(error => console.error("Erreur de chargement :", error));


myBtn.addEventListener("click", function () {

 let myInput=document.getElementById('input-rech').value;
console.log(myInput);

let objrecherche= mesData.filter(item =>{
return item.codePostal== myInput;
    });
  
    let resultat=objrecherche.map(item=>item.libelleAcheminement).join(" // ");
document.querySelector(".villes").innerText= resultat;

})

