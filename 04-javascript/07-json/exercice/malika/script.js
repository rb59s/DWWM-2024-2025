"use strict";
/**
 * 1. Créer une todo list. à chaque appui sur le bouton ajout,
 * créer un nouvel élément dans la liste.
 * cet élément doit contenir la valeur de l'input et une croix.
 * On en profitera pour vider l'input.
 * 2. le clique sur un élément de la liste lui ajoutera une classe qui aura pour 
 * effet de barrer l'élément.
 * 3. le clique sur la croix supprimera l'élément concerné.
 * 4. sauvegarder la liste en localstorage.
 * 5. afficher la liste sauvegardé au chargement de la page.
 * 6. éditer la liste lorsque l'on coche ou supprime un élément.
 * Bonus : Utiliser le drag and drop pour déplacer nos éléments dans la liste. il faudra penser à sauvegarder les éléments déplacé.
 */

const form = document.querySelector('#form');
const champ = document.querySelector('#champ');
const ol = document.querySelector('#ol');

ol.innerHTML = localStorage.getItem('list');
const lis = document.querySelectorAll('li');

for (let i = 0; i < lis.length; i++) {
    // Suppression au chargement
    const element = lis[i].querySelector('span');
    
    element.onclick = ()=> suppression(lis[i])
}

form.onsubmit = (e)=> {
    e.preventDefault();

    const li = document.createElement("li");
    const spanDelete = document.createElement('span');
    spanDelete.textContent = "x";

    // Suppression à la création
    spanDelete.onclick = ()=> suppression (li);

    li.textContent = champ.value;     
    li.appendChild(spanDelete);
    ol.appendChild(li);

    champ.value = "";


    localStorage.setItem("list", ol.innerHTML);

}

function suppression(e) {
   
    e.remove();
    localStorage.setItem("list", ol.innerHTML);
}