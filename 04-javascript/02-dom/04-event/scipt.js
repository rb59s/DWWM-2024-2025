"use strict"

function test(e)
{
    console.log(e);
}
const h1 = document.querySelector('header > h1');

h1.addEventListener("click", test);

let x = 0;

h1.addEventListener("click", function(e){
    let r = Math.floor(Math.random() * 360);
    e.target.style.transform = `rotate(${r}deg)`;
    x++;
    if(x===5)e.target.style.color="red";
})

const menu1 = document.querySelector('.menu1');

menu1.onclick = test;

menu1.onclick = (e)=>{
        if(e.target.style.fontSize ==="")
            e.target.style.fontSize ="2em";
            else
            e.target.style.fontSize = "";
        
}

menu1.onclick = "";

h1.removeEventListener("click", test);

//-------------------Input Event-----------------

const div1 = document.querySelector('.div1');
const input1 = document.querySelector('input');
const btn1 = document.querySelector('button');

input1.addEventListener("input", e=>{

    console.log(e.target.value);
    if (e.target.value != "")
    brn1.textContent= e.target.value;
    else
    btn1.textContent = "Clique moi !";

});

//------------------------Options------------------------------

btn1.addEventListener("click", ()=>h1.textContent = input1.value,
{once: true});

const div4 = document.querySelector('div4');
const gp = div4.querySelector('.grandParent');
const pa = div4.querySelector('.parent');
const en = div4.querySelector('.enfant');

div4.addEventListener("click", ()=>console.log("div4"));
gp.addEventListener("click", ()=>console.log("gp"));
pa.addEventListener("click", ()=>console.log("pa"));
en.addEventListener("click", ()=>console.log("en"));

