let compteC = document.getElementById("compteCourant"); // Targeting <span> card current account
let LivretA = document.getElementById("livretA");
let epargneLogement = document.getElementById("PEL");
let developpementDurable = document.getElementById("pdd");

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

// Create layer
let main = document.getElementById("main");
let layer = document.createElement("div");

layer.setAttribute("id","layer");
main.appendChild(layer);

let closeIcon = document.createElement("button");
main.appendChild(closeIcon);


// Layer's style
layer.style.width = "60%";
layer.style.height = "330px";
layer.style.backgroundColor = "red";
layer.style.position = "absolute";
layer.style.top = "8em"
layer.style.left = "10em";
layer.style.opacity = "90%";
layer.style.textAlign = "center";
layer.style.color = "yellow";
layer.style.fontSize = "2rem";

// Button's style
closeIcon.style.width = "10em";
closeIcon.style.height = "4em";
closeIcon.style.backgroundColor = "yellow";
closeIcon.innerText = "J'ai compris";
closeIcon.style.fontWeight = "bold";
closeIcon.style.position = "relative";
closeIcon.style.bottom = "880px";
closeIcon.style.left = "30em";

// Layer's display with AJAX
let httpRequest = new XMLHttpRequest();

httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState === XMLHttpRequest.DONE){
        if(httpRequest.status === 200){
            layer.innerText = httpRequest.responseText;
        }
        else {
            alert("Il y a eu un problème avec la requête.");
        }
    }
}

httpRequest.open("GET", "layerSecurity.txt", true);
httpRequest.send();

// Button's function

closeIcon.addEventListener("click", function(){
    layer.style.display = "none";
    this.style.display = "none";
});