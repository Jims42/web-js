const myInput=document.getElementById('input-rech');
const myBtn=document.getElementById('btn-valider');

function lister(_data){
    for(let i=0;i<_data.length;i++){
        let maCommune=_data[i];
        let monOption=new Option();
        monOption.value=maCommune.codePostal;
        monOption.innerText=maCommune.nomCommune +" CP : "+maCommune.codePostal;
        document.getElementById("codePostal").appendChild(monOption);
    }
}










fetch('assets/json/data.json')
.then(response=>{return git statusresponse.json()})
.then(communes=>{
console.log(communes[20].codeCommune);
lister(communes)
})
.catch(error => console.error("Erreur de chargement :", error));