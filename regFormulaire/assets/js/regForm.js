const mybtnSubmit = document.getElementById("valider");
const txtName = document.querySelector("#myName");
const chaine1 = document.querySelector("#myPassword1");
const chaine2 = document.querySelector("#myPassword2");
const txtPhone = document.querySelector("#myPhone");

const errName=document.getElementById('errName');
const errPhone=document.getElementById('errPhone');
const errMdp=document.getElementById('errMdp');

mybtnSubmit.addEventListener("click", function (event) {
  event.preventDefault();
const myForm = document.querySelector("form");

const nomValid=validateName(txtName.value);
    const mdpValid=validatePassword(chaine1.value, chaine2.value);
    const telValid=validPhoneNumber(txtPhone.value);
    if(!nomValid){
        errName.textContent="SAISIE DU NOM INCORRECT !\nCommencer par une lettre majuscule";


        alert("SAISIE DU NOM INCORRECT ! -- Commencer par une lettre majuscule")
    }
    if(!mdpValid){
        errMdp.textContent="SAISIE MOT DE PASSE INCORRECT !\nLes deux saisie doivent être identiques !"
        alert("SAISIE MOT DE PASSE INCORRECT !\nLes deux saisie doivent être identiques !")
    }
    if(!telValid){
        errPhone.textContent="SAISIE DU NUMERO DE TELEPHONE INCORRECT !\n il doit conteneir 10 chiffres\nCommencer par 0 suivie de n'importe quel chiffre sauf le 8\necrit sous le format ex: 06 40 40 40 40 ou 06.40.40.40.40"
        alert("SAISIE DU NUMERO DE TELEPHONE INCORRECT !\n il doit conteneir 10 chiffres\nCommencer par 0 suivie de n'importe quel chiffre sauf le 8\necrit sous le format ex: 06 40 40 40 40 ou 06.40.40.40.40")
    }

  if (nomValid && mdpValid && telValid){
    myForm.submit();
  } 
 
});
/**
 *
 * @param {*} chaine
 */

function validateName(chaine) {
  let regexName = /^[A-Z][a-z]{3,}$/;
  console.log("nom : " + regexName.test(chaine));
  return regexName.test(chaine);
  
}

function validatePassword(chaine1, chaine2) {
  console.log("mdp : " + (chaine1 === chaine2));
  return chaine1 === chaine2 
}
/**
 * validation conformité du numero de téléphone
 * @param{}inputchaine
 * @returns
 */
function validPhoneNumber(_inputchaine) {
  let chaine = "" + _inputchaine;
  const regexDotSpace = /\.|\s/g;
//   const regexDotSpace = /\D/g;
  chaine = chaine.replaceAll(regexDotSpace, "");
  console.log("telaff :"+ chaine);
  const regexPhone = /^0[1-79][0-9]{8}$/;
  console.log("tel : " + regexPhone.test(chaine));
  return regexPhone.test(chaine); 
}
