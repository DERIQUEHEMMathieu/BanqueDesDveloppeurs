function createArray() {
    document.getElementById("valuesList").innerHTML = ""
// Objet de base pour gérer les requêtes et les réponses
httpRequest = new XMLHttpRequest();

//Code à exécuter
httpRequest.onreadystatechange = function() {
// instructions de traitement de la réponse
// tout va bien, la réponse a été reçue
if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
        // La réponse est exploitable et valide
        let data = JSON.parse(httpRequest.responseText);
        const TBODY = document.getElementById("valuesList");
        for (i=0; i<data.length; i++) {
            let tr = document.createElement("tr");
            for (const PROPERTY in data[i]) {
                const TD = document.createElement("td");
                TD.innerText = data[i][PROPERTY];
                tr.appendChild(TD);
            }
            TBODY.appendChild(tr);
        }
    }
    else {
        // il y a eu un problème avec la requête,
        // par exemple la réponse peut être un code 404 (Non trouvée)
        // ou 500 (Erreur interne au serveur)
        console.log("Une erreur est survenue");
    }
}
else {
    // Réponse pas encore prête
    console.log("Réponse en attente");
}
};

//Ouverture et envoi de la requête
httpRequest.open('GET', 'statistiques.json', true);
httpRequest.send();
}