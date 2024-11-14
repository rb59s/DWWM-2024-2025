"use strict";
/*
    Quand on utilise les promesses, on peut vite se retrouver dans ce qu'on appelle
    les callback hell.
    Ces enfers des callbacks, représente ces fois où l'on a des callbacks, 
    dans des callbacks, dans callbacks et ainsi de suite.
    Si cela ne change pas le fonctionnement du code, cela peut rendre sa visibilité
    difficile.
    
    C'est pour cela que JS implémente les mots clefs "async" et "await".
    Le mot clef "async" se place devant la déclaration d'une fonction qui deviendra alors asynchrone.
    Le mot clef "await" se place devant l'appel d'une fonction retournant une promesse.
    Il indique que le code doit attendre le résultat de la promesse.
        La valeur retourné ne sera donc plus une promesse mais directement sont résultat.
    ! "await" ne peut être utilisé que dans une fonction "async".
 */
burger();
/* 
    Les fonctions asynchrones se mettent à retourner automatiquement une promesse
*/
async function burger()
{
    /*
        await ne gérant pas le .catch(), on peut utiliser un simple 
        try catch finally pour remplacer cela.
    */
    try{
        console.log(await pain2());
        console.log(await sauce2());
        console.log(await viande2());
        console.log(await salade2());
        console.log("Mon burger est terminé");    
    }catch(e)
    {
        console.error(e);
    }
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