// ------------EXO 1 ---------------
// Déplacer la modale dans le body.

const p3 = document.querySelector("div")

const p4 = document.querySelector("main")

p4.append(p3)


// ----------- EXO 2 ---------------
// modifier le texte des 3 li du footer, si possible avec une boucle.

const p5 = document.querySelectorAll("footer li")

for(let i = 0; i < 3; i++) {
    p5[i].textContent = "Menu - Exercice réussi par Adnam "
    p5[i].style.color = "red"
}

// ------------ EXO 3 --------------
// Remplacer le texte des paragraphes pair.

const p6 = document.querySelectorAll("main p")

for(let i = 0; i < p6.length; i+=2) {
    p6[i].textContent = '- Exercice réussi par Adnam / Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsum ipsam ducimus ab temporibus adipisci commodi illum laboriosam veritatis quas quisquam ipsa recusandae rerum, repudiandae deleniti iste! Molestiae, vel tempora.'

}

