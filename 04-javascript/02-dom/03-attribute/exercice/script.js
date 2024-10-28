/* 
    Exercice 1 :
    Changer la taille de chaque paragraphe du main.
    chaque paragraphe doit être plus gros que le précédent.
*/
const para = document.querySelectorAll("main p");
for (let i = 0 ; i < para.length; i++){
    para[i].style.fontSize = 0.5+i+ "em";
}

/* 
    Exercice 2 :
    Faite apparaître la modale via une transition depuis la gauche. 
*/
const d = document.querySelector("aside");
// const bod = document.querySelector("body");
// d.style.left = "-500px";
d.style.transition = "left 1s linear"
setTimeout(() => {
    d.style.left = "50%";
    d.style.top = "50%";
}, 100);
// document.body.append(d);
/* 
    Exercice 3 :
    Faite que la couleur de fond de la modale soit aléatoire à chaque rechargement de la page.
*/
const color = document.querySelector("div");

function colorAlea() {
    let red = Math.floor(Math.random()*256);
    let bleu = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let alea = "rgb(" + red + "," + green + "," + bleu +")";
    color.style.backgroundColor = alea;
}
colorAlea();