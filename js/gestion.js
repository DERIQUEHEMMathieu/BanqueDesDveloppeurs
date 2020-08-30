// Fonction pout récupérer l'élément
let textValidation = document.getElementById("validation");
let accountInput = document.getElementById("bankAccount");

function addProject() {
    let userInput = accountInput.value;
    let text = document.createElement("p");
    text.appendChild(form);
    text.innerText = userInput;

    textValidation.innerHTML = 'Votre demande de création de compte bancaire intitulé ' + (userInput) + 'est bien prise en compte';
}



// // On cible l'élément à récupérer
// let projetInput = document.getElementById("projet");
// let projectsContainer = document.getElementById("projectsContainer");

// // Fonction pout récupérer l'élément
// function addProject() {
//     //On récupére la valeur de l'élément
//     let userInput = projetInput.value;

//     //Création du titre
//     let title = document.createElement("h2");
//     title.innerText = userInput;

//     // Création de l'article
//     let article = document.createElement("article");

//     // Ajouter le titre à l'article
//     article.appendChild(title);
//     article.classList.add("article");
//     article.classList.add("bg-light");

//     // Ajouter l'article à la session
//     projectsContainer.appendChild(article);
// }