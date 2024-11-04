"use strict";
/* 
    1. Ajouter un menu de selection qui permettra de choisir entre 3 thèmes.
    2. Appliquer le thème selectionné grâce à JS (pas besoin de thème compliqué)
    3. Faire en sorte que le choix de l'utilisateur soit toujours appliqué lorsqu'il change de page. (que ce soit visible dans le menu de selection autant que dans les couleurs du site.)
    4.Bonus. Faire un bouton qui change aléatoirement les couleurs du site et les sauvegarder.
*/

const color = document.querySelector("#color");
color.addEventListener("change", changeColor)
function changeColor() {
    document.body.classList.remove("rouge", "bleu", "vert");    
    if (color.value == "rouge") {
        document.body.classList.add("rouge");
        localStorage.setItem("theme2", "rouge");
    }

    if (color.value == "bleu") {
        document.body.classList.add("bleu");
        localStorage.setItem("theme2", "bleu");
    }
    if (color.value == "vert") {
        document.body.classList.add("vert");
        localStorage.setItem("theme2", "vert");
    }
    if (color.value == "choix") {
        localStorage.removeItem("theme2");
    }
}
const change = localStorage.getItem("theme2");
color.value = change;
changeColor();

// couleur random
const rand = document.querySelector("#rand");
rand.addEventListener("click", ouah);
function ouah(e) {
    let backG = localStorage.getItem("fondAl");
    let textC = localStorage.getItem("textAl");
    if (e != undefined) {
        let red = Math.floor(Math.random() * 256);
        let bleu = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        backG = "rgb(" + red + "," + green + "," + bleu + ")";

        let red2 = Math.floor(Math.random() * 256);
        let bleu2 = Math.floor(Math.random() * 256);
        let green2 = Math.floor(Math.random() * 256);
        textC = "rgb(" + red2 + "," + green2 + "," + bleu2 + ")";
    }
    document.documentElement.style.setProperty("--fond", backG); // je sais que mon erreur est là
    document.documentElement.style.setProperty("--text", textC); // je sais que mon erreur est là
    localStorage.setItem("fondAl", backG);
    localStorage.setItem("textAl", textC);
}
ouah();
