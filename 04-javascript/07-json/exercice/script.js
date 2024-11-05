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

// 1
// const create = document.querySelector(".Liste input")
// const newAdd = document.querySelector("#button")

// newAdd.addEventListener("click", ajouter)

// function ajouter(){
//     // 2 
//     const text = document.querySelector("label")
//     const flexText = document.querySelector(".Chose")


//         flexText.style.display = "flex"
//         text.textContent = create.toString();
//         // text = create.toString();
//         console.log(text);
        
// }

// // function modifierTexte() {
// //     // Sélectionner l'élément .para qui se trouve dans .chose
// //     var paraElement = document.querySelector('.chose .para');
    
// //     // Modifier le texte de l'élément .para
// //     paraElement.textContent = "Nouveau texte de para";
// //   }

const create = document.querySelector(".Liste input");  
const newAdd = document.querySelector("#button"); 

create.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        ajouter();
    }
});

newAdd.addEventListener("click", ajouter);

function ajouter() {
    const text = create.value.trim();  


    if (text == "") {
        return;
    }

    const création = document.createElement("div");
    création.classList.add("Chose"); 
    
    const séparation = document.createElement("div");
    séparation.classList.add("CLC");

    const imega = document.createElement("img")
    imega.src = "./check.png"
    imega.classList.add("imgy")

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("input");
    checkbox.name = text; 
    checkbox.id = text; 

    const label = document.createElement("label");
    label.setAttribute("for", text);  
    label.textContent = text;  
    label.addEventListener("click", barre)
    let V_F = false
    function barre(){
        if(V_F){
            label.style.textDecoration = "none"
            label.style.color = "black"
            création.style.backgroundColor = "rgb(219, 217, 217)"
            imega.style.opacity = "0"
        }
        else {
            label.style.textDecoration = "line-through"
            label.style.color = "white"
            création.style.backgroundColor = "grey"
            imega.style.opacity = "1"
        }
        V_F = !V_F
    }

    const bouttonX = document.createElement("button");
    bouttonX.textContent = "X";
    bouttonX.classList.add("button2");  
    bouttonX.addEventListener("click", function() {
        création.remove();  
    });

   
    création.appendChild(séparation)
    séparation.appendChild(imega)
    séparation.appendChild(checkbox);
    séparation.appendChild(label);
    création.appendChild(bouttonX);

    
    const liste = document.querySelector(".bidule");
    liste.appendChild(création);

    
    create.value = "";
}


