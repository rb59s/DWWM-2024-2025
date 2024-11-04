"use strict"


const dark = document.querySelector("#darkTheme");
// dark.addEventListener("input", changeTheme);
dark.addEventListener("input", changeTheme2);

function changeTheme()
{
    document.body.classList.toggle("dark", dark.checked);
}

function changeTheme2(){

if(
    dark.checked
){
    document.documentElement.style.setProperty("--fond", "#333");
    document.documentElement.style.setProperty("--text", "antiquewhte");
}
else{
    document.documentElement.style.setProperty("--fond", "antiquewhite");
    document.documentElement.style.setProperty("--text", "#333");
    localStorage.removeItem("theme")
}
}
dark.checked = localStorage.getItem("theme") === "dark";
changeTheme2();

sessionStorage.setItem("salutation", "Bonjour tous le monde !");
localStorage.setItem("salutation", "Bonjour tous le monde !");

console.log(sessionStorage.key(0));
// sesion.clear();git puyll