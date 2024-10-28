"use strict";

const h1 = document.querySelector('#mainTitle');

//--------------- l'attribut----------------

h1.style.backgroundColor = "rgb(123, 45, 98)";
h1.style.fontStyle = "itlaic";
h1.style.textShadow = "5px 5px rgba(0,0,0,0.3)";

h1.style.couleur = "red";

h1.style.coulor = "rgbaa(255,255,255,0.8)";

//----------------classes-----------------

console.log(h1.className);

h1.className = "banane";

h1.className = "";

h1.className += "banane";

console.log(h1.classList);

h1.classList.remove("banane");

h1.classList.add("banane");

h1.classList.toggle("banane");

console.log(h1.classList.contains("banane"));

//--------------Les autres attributs--------------

console.log(h1.id, h1.getAttribute("id"));

h1.id += "2";

const a = document.querySelector('footer ul li a');
console.log(a);

a.setAttribute("target", "_blank");

console.log(a.getAttribute('href'));

console.log(a.dataset.color);

a.dataset.color = "Je ne suis pas une couleur !";

a.dataset.bidule = "Je ne sert a rien";



var paragraphe1 = document.getElementsByClassName("marche1");
console.log(paragraphe1)
paragraphe1[0].style.fontSize = "20px";

var paragraphe2 = document.getElementsByClassName("marche2");
console.log(paragraphe2)
paragraphe2[0].style.fontSize = "25px";

var paragraphe3 = document.getElementsByClassName("marche3");
console.log(paragraphe3)
paragraphe3[0].style.fontSize = "27px";

var paragraphe4 = document.getElementsByClassName("marche4");
console.log(paragraphe4)
paragraphe4[0].style.fontSize = "30px";

var paragraphe5 = document.getElementsByClassName("marche5");
console.log(paragraphe5)
paragraphe5[0].style.fontSize = "32px";






