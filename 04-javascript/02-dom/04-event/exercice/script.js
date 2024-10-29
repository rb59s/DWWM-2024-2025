

/*
    Exercice 1 :

    Faire que lors de la selection d'une couleur dans la div 2
    le texte du bouton change de couleur, 
    et lors de l'appuie sur le bouton, 
    le background de la div change de couleur.
*/

const div2 = document.querySelector('.div2');
const input2 = document.querySelector('.div2 input');
const btn2 = document.querySelector('.div2 button');

btn2.addEventListener('click', ()=> {
    div2.style.backgroundColor = input2.value;
});

input2.addEventListener('input', (e)=> {
    btn2.style.color = e.target.value;
});


/* 
    Exercie 2 :

    Lors du clique sur le bouton de la div 3,
    faire apparaître une modale (soit déjà créé en html/ soit que l'on crée en JS)
    Cette modale doit contenir un élément permettant de la faire disparaître.
*/

const div3 = document.querySelector('.div3');
const btn3 = document.querySelector('.div3 button');
const modal = document.querySelector('.modal');

btn3.addEventListener('click', ()=> {
    modal.style.display = 'block';
});


const close = document.querySelector('.hidden');
close.addEventListener('click', ()=> {
    modal.style.display = 'none';
    close.style.display = 'none';
});


/* 
    Exercice 3 :

    Faites que tous nos li dans la nav double de taille lorsque l'on clique dessus.
    puis retournent à leurs tailles d'origine si on clique de nouveau dessus.
*/

const lis = document.querySelectorAll("nav ul li");

console.log(lis)

for (let i = 0; i < lis.length; i++) {
    lis[i].addEventListener("click", ()=> {
        if(lis[i].style.fontSize === "")
            lis[i].style.fontSize = "2em";
        else
            lis[i].style.fontSize = "";
    });
}

/* 
    Exercie 4 :
    
    Utilise les évènements "mouseenter" et "mousemove" pour 
    faire que lorsque l'on passe sur le span du footer, il commence à suivre la souris
    et cela jusqu'à ce que l'on clique, il retournera alors à sa position d'origine.
*/

const span = document.querySelector('footer span');

span.addEventListener("mouseenter", (e)=> {console.log(e)
    span.style.position = "absolute";
}  );

document.body.addEventListener("mousemove", (e)=> {
    span.style.top = e.clientY + "px";
    span.style.left = e.clientX + "px";
}  );

document.body.addEventListener("click", ()=> {
    span.style.position = "";
}  );


