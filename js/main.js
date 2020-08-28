let compteC = document.getElementById("compteCourant"); // Ciblage <span> card compte courant
let LivretA = document.getElementById("livretA");
let epargneLogement = document.getElementById("PEL");
let developpementDurable = document.getElementById("pdd");

// Création de l'objet solde
let solde = {
    valeurs : [236, 1358, 3042, 8039]
};

// Affichage du solde en récupérant dans l'objet solde
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
