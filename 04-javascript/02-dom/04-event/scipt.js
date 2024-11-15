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
    btn1.textContent= e.target.value;
    else
    btn1.textContent = "Clique moi !";

});

//------------------------Options------------------------------

btn1.addEventListener("click", ()=>h1.textContent = input1.value,
{once: true});

const div4 = document.querySelector('.div4');
const gp = div4.querySelector('.grandParent');
const pa = div4.querySelector('.parent');
const en = div4.querySelector('.enfant');

div4.addEventListener("click", ()=>console.log(".div4"));
gp.addEventListener("click", ()=>console.log("gp"));
pa.addEventListener("click", ()=>console.log("pa"));
en.addEventListener("click", ()=>console.log("en"));


const div2 = document.querySelector('.div2');
div2.addEventListener("click", ()=>console.log(".div4"));



const div = document.getElementsByClassName("div2");
const color = document.querySelector("#color");
const button = document.getElementById("button");

color.addEventListener("input", function() {
    button.style.color = color.value;
});

button.addEventListener("click", function() {
    div[0].style.backgroundColor = color.value;
});
//-------------------------------------------------------------------------------------------


const button2 = document.getElementById("button2");
 
const modal = document.querySelector(".hidden");
 
button2.addEventListener("click", clique)
function clique () {
    modal.style.display="grid";
};



const button3 = document.getElementById("button4");
 
button3.addEventListener("click", clique2)
function clique2 () {
    modal.style.display="none";
}

//-----------------------------------------------

const liste = document.querySelectorAll(".liste");
console.log(liste);

liste[0].addEventListener("click", changecolor)
function changecolor() {
    liste[0].children[0].style.fontSize="2em";
    liste[0].children[1].style.fontSize="2em";
    liste[0].children[2].style.fontSize="2em";
    liste[0].children[3].style.fontSize="2em";
    liste[0].children[4].style.fontSize="2em";
   
    
}
