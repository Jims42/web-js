const txtSize=document.querySelector("#valeur");
const btnIncrease=document.querySelector("#btnIncrease");
const btnDecrease=document.getElementById("btnDecrease");
const zoneTxt=document.querySelector("#txtZone")

function sizing (event){

    const getEventId=event.target.id;
    

    if(parseInt(txtSize.value)==undefined){
        console.error("la taille du texte n'est pas un nombre !");
}
let sizeZone=parseInt(txtSize.value);

if(sizeZone>=8 && sizeZone<=48 && getEventId==="valeur"){

}
else if(sizeZone>8 && sizeZone<48 && getEventId==="btnIncrease"){
    sizeZone++;
}
else if (sizeZone>8 && sizeZone<48 && getEventId==="btnDecrease"){
    sizeZone--;
}
else{
    sizeZone=16;
}
zoneTxt.style.fontSize=sizeZone+"px";
txtSize.value=sizeZone;

}
btnIncrease.addEventListener("click",sizing);
btnDecrease.addEventListener("click",sizing);
txtSize.addEventListener("blur",sizing);