"use strict";

const lis = document.getElementsByTagName("li");

console.log(lis, lis[0]);

lis[0].textContent = "Marbre";
// lis.textContent = "truc";

const ps = document.getElementsByClassName("step");
const p1 = document.getElementsByClassName("marche1");

console.log(ps, p1);

const h1 = document.getElementById("mainTitle");

console.log(h1);

const p2 = document.querySelector(".marche2");
// const p2 = document.querySelector("main > p:nth-of-type(2)");
// const p2 = document.querySelector("body main p.marche2.step");

console.log(p2);

const lis2 = document.querySelectorAll("footer li");
console.log(lis2);

const header = document.querySelector("header");
const h = header.querySelector("h1");
// console.log(header);

//  --------- quelques selecteurs bonus ----------

console.log(header.nextElementSibling);
console.log(header.nextSibling);
console.log(lis2[2].previousElementSibling);
console.log(header.children);
console.log(lis[2].parentElement, header.parentElement);
console.log(lis[2].closest("footer"));

// ------------ supprimer ou déplacer ---------------

header.append(lis2[0]);

lis2[2].remove();
console.log(lis2[2]);

// header.removeChild(h)








