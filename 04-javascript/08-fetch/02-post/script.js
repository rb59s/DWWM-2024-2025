"use strict";

const url = "https://api.thedogapi.com/v1/images/upload";
const api_key = "live_U8C8pGOECtGkpLTkSJJ6QIBrZs0qC2gUTXObqsc40bpMn0KfQfVaPfoTgmPl9zFv";

const formulaire = document.querySelector('form');
const result = document.querySelector('.result');

formulaire.addEventListener("submit", uploadDog);

/**
 * téléverse une photo de chien
 * @param {Event} e 
 */
function uploadDog(e)
{
    e.preventDefault();
    const formData = new FormData(formulaire);
    console.log("Chargement en cours");
    result.textContent = "Chargement en cours";
    /* 
        Fetch peut prendre optionnellement un second argument, 
        celui ci permet d'ajouter des options comme :
        La méthode utilisé pour envoyer la requête
        les informations contenue dans l'entête de la requête
        et le corps de la requête.
    */
    fetch(url, {
        method: "POST",
        headers: {"x-api-key":api_key},
        body: formData
    }).then(checkResponse);
}
/**
 * Vérifie la réponse de la requête à the dog api.
 * @param {Response} response 
 */
function checkResponse(response)
{
    console.log("Chargement terminé");
    result.textContent = "Chargement terminé";
    if(response.ok)
    {
        response.json().then(data=>{
            console.log(data);  
            result.innerHTML += `<hr><img src="${data.url}" alt="image de chien" width="400">`;          
        });
    }
}