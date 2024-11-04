"use strict";

/* 
    JSON signifie JavaScript Object Notation.
    C'est un langage qui permet de transformer des données complexe comme un tableau ou un objet en string. Cela peut servir pour sauvegarder des données sous forme de string mais aussi pour transférer des données entre différents langages.
    Par exemple un tableau PHP et un tableau JS ne s'écrivant pas de la même façon, impossible de communiquer entre eux, mais avec du JSON, cela devient possible.
*/
const form = document.querySelector('form');

form.addEventListener("submit", saveData);

function saveData(e){
    // J'empêche mon formulaire de recharger la page
    e.preventDefault();
    // Je transfère les données de mon formulaire à l'objet FormData
    const data = new FormData(form);
    // Je déclare un objet vide
    let user = {};
    // je boucle sur mon FormData pour obtenir toute les valeurs et indexation.
    data.forEach((value, name)=>{
        // J'ajoute ces valeurs en tant que propriété
        user[name] = value;
    })
    // J'obtien un objet contenant toute les valeurs de mon formulaire.
    showUser(user);
    // JSON.stringify transforme des données JS en string au format JSON.
    const strUser = JSON.stringify(user);
    localStorage.setItem("user", strUser);
}

function showUser(u){
    const h1 = document.querySelector('h1');
    h1.textContent = `Je suis ${u.prenom}, ${u.age} ans!`;
}

const userString = localStorage.getItem("user");
if(userString){
    console.log(userString);
    // JSON.stringify transforme un string au format JSON en données JS.
    const user = JSON.parse(userString);
    console.log(user);
    showUser(user);
}