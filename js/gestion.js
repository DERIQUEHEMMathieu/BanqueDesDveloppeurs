// Fonction pout récupérer l'élément
let textValidation = document.getElementById("validation");
let accountInput = document.getElementById("bankAccount");

function addProject() {
    let userInput = accountInput.value;
    textValidation.innerText = 'Votre demande de création de compte bancaire intitulé ' + userInput + " " + 'est bien prise en compte.';
}