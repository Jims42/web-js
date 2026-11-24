myCoche.addEventListener("click", function (event) {
  // 1. Réinitialisation à chaque clic
  let question = false;
  let tabQuestion = [];

  // 2. Vérification des selects
  document.querySelectorAll("select").forEach((select) => {
    if (select.value === "default") {
      question = true;
      tabQuestion.push(select);
      select.classList.add('erreur'); // Ajoute le rouge
    } else {
      select.classList.remove('erreur'); // Enlève le rouge si corrigé !
    }
  });

  // 3. Votre condition corrigée
  if (nomVide || prenomVide || mailVide || telVide || socVide || question) {
    alert("Tous les champs ne sont pas remplis !"); 
    event.target.checked = false;
  }
});
