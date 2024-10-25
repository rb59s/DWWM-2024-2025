"use strict";
// ? -------------- WHILE ----------------

let a = true;
/* 
    while va vérifier si ce qui se trouve entre parenthèse est "true" ou "false"
    Tant que c'est "true" les actions entre accolade seront répétés.
    ! Attention lorsque vous faites une boucle d'avoir toujours une condition de sortie de la boucle.
    Le navigateur pourra facilement faire des centaines ou des milliers de boucle, mais si il le fait à l'infini il plantera rapidement.
*/
while(a)
{
    console.log("Coucou");
    // Si mon nombre aléatoire est plus grand que 0.5 alors la boucle s'arrêtera.
    a = Math.random() < 0.5;
}
let b = 0;
while(true)
{
    b++; // b += 1; ou b = b + 1;
    if(b < 10)
    {
        // continue met fin à l'itération en cours et passe à la suivante.
        continue;
    }
    if(b == 20)
    {
        // Break met fin à la boucle.
        break;
    }
    console.log("b vaut ", b);
}
// "Do while" va lancer ses instructions au moins une fois avant de vérifier si il doit boucler.
do
{
    console.log("do while : b vaut ", b);
}while(b<5)

// ? ------------    for    -----------------
/* 
    for va prendre 3 instructions entre ses parenthèses.
    - La première est une déclaration de variable lancé avant le début de la boucle.
    - La seconde est une condition qui sera vérifié avant chaque itération.
    - La troisième la modification de la variable lancé à la fin de chaque itération.
*/
for(let i = 0; i < 10; i++)
{
    console.log("i vaut "+ i);
}

let arr = ["pizza", "cannelé", "gratin dauphinois"];
let person = {nom: "Pierre", age: 55, yeux: "Vert"};
/* 
    "for in" va créer une itération pour chaque valeur dans le tableau ou l'objet suivant le mot clef "in"
    à chaque itération, la variable défini entre parenthèse se verra attribué la valeur suivante.
    
    Pour un tableau cela correspondra à chaque index du tableau.
    Pour un objet cela correspondra à chaque nom des propriétés.
*/
for(let food in arr)
{
    console.log("food vaut ", food);
    console.log(food, " -> ", arr[food]);
}
for(let carac in person)
{
    console.log("carac vaut ", carac);
    console.log(carac, " -> ", person[carac]);
}
/* 
    "for of" fonctionnera de même que "for in" 
    si ce n'est que ce ne sera pas l'index mais la valeur directement qui sera stocké dans la variable.

    Il ne fonctionne pas avec les objets.
*/
for(let f of arr)
{
    console.log("f vaut ", f);
}
// Ceci retourne une erreur :
// for(let c of person){}
