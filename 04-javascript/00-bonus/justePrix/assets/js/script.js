"use strict";
const vie = 7;
let tentative = vie;
let nbSecret = Math.floor(Math.random() * 100) + 1;
const revel = document.querySelector(".carte p")
const restart = document.querySelector(".CLC")
const carte = document.querySelector(".carte");

const Toucheentrer = document.querySelector(".input");
Toucheentrer.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        jeu();
    }
});

function jeu() {
    const enigme = document.querySelector(".input");
    const choix = parseInt(enigme.value);
    const tentRest = document.querySelector(".nbTent");
    const message = document.querySelector(".message")
    document.querySelector(".message").style.display = "flex"
    carte.classList.remove("retourne");
    carte.classList.remove("retourne2");

    if (isNaN(choix) ||choix < 1 || choix > 100) {
        message.textContent = "Veuillez entrer un nombre valide entre 1 et 100.";
        return;
    }
    if (choix == nbSecret) {
        message.textContent = "GG";
        message.style.color = "green";
        finJeu();
    }
    else if (choix < nbSecret) {
        message.textContent = "trop faible";
        message.style.color = "red";
        tentative--;
        tentRest.textContent = "tentative restante : " + tentative; //`tentative restante : ${tentative}` 
    }
    else if (choix > nbSecret) {

        message.textContent = "trop fort";
        message.style.color = "red";
        tentative--;
        tentRest.textContent = "tentative restante : " + tentative; //`tentative restante : ${tentative}` 
    }
    if (tentative <= 0) {
        message.textContent = "t null";
        message.style.color = "yellow";
        finJeu();
    }
}

function finJeu() {
    document.querySelector(".input").disabled = true;
    document.querySelector(".button").disabled = true;
    revel.textContent = "";
    restart.style.display = "none";
    carte.classList.add("retourne");
    const delay = 500;
    setTimeout(function () {
        revel.textContent = nbSecret
        restart.style.display = "flex";
        carte.style.background = `rgb(77, 5, 5)`;
    }, delay);

}
function restartJeu() {
    tentative = vie;
    nbSecret = Math.floor(Math.random() * 100 + 1);
    document.querySelector(".carte p").textContent = "";
    document.querySelector(".CLC").style.display = "none";
    document.querySelector(".nbTent").textContent = `il te reste ${tentative} vie`;
    document.querySelector(".input").disabled = false;
    document.querySelector(".button").disabled = false;
    document.querySelector(".message").textContent = "bonne chance"
    document.querySelector(".message").style.color = "white";
    revel.textContent = "?";
    carte.classList.add("retourne2");
    const delay = 500;
    setTimeout(function () {
        carte.style.backgroundColor = `white`;
        carte.style.backgroundImage = /* CSS */
    `repeating-linear-gradient(45deg, transparent,transparent 2px, rgb(6, 21, 109) 1px, rgb(6, 21, 109) 5px),
    repeating-linear-gradient(-45deg, transparent,transparent 2px, rgb(6, 21, 109) 1px, rgb(6, 21, 109) 5px)`;
        revel.textContent = "";
    }, delay);
}