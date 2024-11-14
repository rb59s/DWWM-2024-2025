"use strict";
/*
    Par défaut, toute programmation en Javascript est dite "Synchrone"
    C'est à dire que tous le fonctionnement de la page et de JS s'arrête tant que le 
    code n'a pas terminé de s'executer.
 */
for(let i = 0; i < 1_000_000_000; i++)
{
    if(i=== 999_999_999)
    {
        console.log("Boucle Synchrone Terminé");
    }
}
console.log("Bonjour Synchrone");
/*
    Mais JS peut gérer de la programmation asynchrone. C'est à dire qu'il peut continuer
    d'executer du code pendant qu'une autre partie du code continue à travailler.
    On a pu voir cela avec Fetch.
 */
fetch("test.json").then(res=>{
    for(let i = 0; i < 1_000_000_000; i++)
    {
        if(i=== 999_999_999)
        {
            console.log("Boucle Asynchrone Terminé");
        }
    }
})
console.log("Bonjour Asynchrone");
/*
    Une fonction retourne soit quelque chose, (un chiffre, un string, un tableau...)
    Soit rien du tout (dans ce cas elle retournera en fait "undefined")
    Il s'avère que Fetch retourne bien quelque chose, une promesse.
 */

let request = fetch("test.json");
console.log(request);
/*
    Dans cet objet "promise" on a trois méthodes principales.
    .then() qui va prendre une fonction callback qui sera appelée une fois
        la promesse tenue (réussite);
    .catch() qui va prendre une fonction callback qui sera appelée une fois
        la promesse rejeté (échec);
    .finally() qui va prendre une fonction callback qui sera appelée une fois 
        la promesse traitée (réussite ou échec)
 */
// Avec Fetch, then récupère la réponse de la requête
request.then(res=>console.log("then",res));
// Catch récupère l'erreur de la requête
request.catch(err=>console.log("catch",err));
// finally ne récupère rien, j'aurais donc du utiliser ()=> plutôt que variable=>
request.finally(test=>console.log("finally",test));

/*
    Il est possible de résoudre plusieurs promesses en même temps.
    Pour cela on fera appel à la méthode .all() de l'objet Promise à laquelle on 
    donnera un tableau de toute les promesse que l'on souhaite résoudre.
    Une fois toute résolue, le then() se lancera en donnant en paramètre un tableau
    des résultats.
*/
const r1 = fetch("test.json");
const r2 = fetch("test2.json");

Promise.all([r1, r2]).then(res=>{
    console.log(res);
    // je boucle sur mon tableau de réponse.
    res.forEach(r=>{
        // Et je traite chaque réponse comme je le ferais sur un fetch classique.
        if(r.ok){
            /* Bien sûr cet exemple fonctionne car mes deux fichiers ont la même structure
            En cas de fichier avec une structure différente, il faudra adapter le code. */
            r.json().then(data=>console.log(data.prop))
        }
    })
});

/*
    On trouvera aussi les méthodes "Promise.race()" et "Promise.any()" qui prendrons 
    elles aussi un tableau de promesse.
    mais au contraire de .all(), elles ne rendront que la première promesse à s'executer.
    La différence entre les deux se fait au niveau du catch :
    .race() lancera le catch si la plus rapide des promesses retourne une erreur.
    .any() lancera le catch, si toute les promesses retourne une erreur.
 */
/*
    On peut créer nos propres promesses :
    Lorsque l'on crée une promesse, elle prend une fonction callback avec 2 arguments
    Ces deux arguments représentes respectivement la fonction callback qui sera donné
    à then et celle donné à catch.
 */
Promise.race([r1, r2]).then(res=>{
    console.log(res);
    if(res.ok)
    {
        res.json().then(data=>console.log("race", data.prop));
    }
});
// Promise.any([r1, r2]).then(res=>{
//     console.log(res);
//     if(res.ok)
//     {
//         res.json().then(data=>console.log("any", data.prop));
//     }
// });

const random = new Promise(function(resolve, reject){
    const r = Math.floor(Math.random()*10);
    // const r = 8
    if(r<5)
    {
         // Ici on appelle la fonction callback de then.
        resolve("Bravo r est plus petit que 5!")
    }
    else
    {
        // Ici on appelle la fonction callback de catch.
        reject("Désolé, r est plus grand que 5!")
    }
});

random.then(res=>console.log("then",res))
    .catch(err=>console.log("catch",err))
    .finally(()=>console.log("finally","random terminé"));
// Exemple burger :
// Par défaut JS n'attend pas la fin d'une fonction avant de lancer la suivante.

function burger1()
{
    pain1();
    sauce1();
    viande1();
    salade1();
    console.log("le burger est terminé");
}
/*
    Ici on se retrouve avec la sauce versé dans l'assiette, la salade placé dessus, un burger terminé, puis le pain grillé et placé par dessus et enfin la viande au sommet de tout cela.
    Peu appétissant.
*/
function pain1() 
{
    setTimeout(()=>console.log("Le pain est grillé et placé"), 1000);
}
function sauce1()
{
    console.log("La sauce est versé");
}
function viande1()
{
    setTimeout(()=>console.log("La viande est cuite et placé"), 3000);
}
function salade1() 
{
    console.log("La salade est placé");
}
burger1();
// avec promesse :
function burger2()
{
    pain2().then(pain=>{
        console.log(pain);
        sauce2().then(sauce=>{
            console.log(sauce);
            viande2().then(viande=>{
                console.log(viande);
                salade2().then(salade=>{
                    console.log(salade);
                    console.log("Le burger 2 est terminé");
                })
            })
        })
    })
}

function pain2() 
{
    return new Promise((resolve)=>{
        setTimeout(()=>resolve("Le pain 2 est grillé et placé"), 1000);
    })
    
}
function sauce2()
{
    return new Promise((resolve)=>{
        resolve("La sauce 2 est versé");
    })
}
function viande2()
{
    return new Promise((resolve)=>{
        setTimeout(()=>resolve("La viande 2 est cuite et placé"), 3000);
    })
}
function salade2() 
{
    return new Promise((resolve)=>{
        resolve("La salade 2 est placé");
    });
}
burger2();