let compteC = document.getElementById("compteCourant"); // Targeting <span> card current account
let LivretA = document.getElementById("livretA");
let epargneLogement = document.getElementById("PEL");
let developpementDurable = document.getElementById("pdd");
let button = document.getElementsByTagName("button");
console.log(button);

// Creation of the balance object
let solde = {
    valeurs : [236, 1358, 3042, 8039]
};

// Display of the balance by recovering in the balance object
function compteCourant() {
    compteC.innerHTML = 'Solde : ' + solde['valeurs'][0] + " " + ("€");
}

function livretA() {
    LivretA.innerHTML = 'Solde : ' + solde['valeurs'][1] + " " + ("€");
}

function PEL() {
    epargneLogement.innerHTML = 'Solde : ' + solde['valeurs'][2] + " " + ("€");
}

function pdd() {
    developpementDurable.innerHTML = 'Solde : ' + solde['valeurs'][3] + " " + ("€");
}