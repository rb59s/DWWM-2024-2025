"use strict";

const input = document.getElementById('numberInput');

input.addEventListener('input', () => {
    const value = input.value;
    const estValide = /^[0-9]*$/.test(value);

    if (!estValide) {
        input.classList.add('error');
    } else {
        input.classList.remove('error');
    }
});

const emailInput = document.getElementById("mailInput");

emailInput.addEventListener('input', () => {
    const value = emailInput.value;
    const mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // If empty placeholder, then it goes back to default color, as for valid. No more permanent orange b-g
    if (value === "" || !mailRegex.test(value)) {
        emailInput.classList.add('error');
    } else {
        emailInput.classList.remove('error'); 
    }
});

const usernameInput = document.getElementById("usernameInput");

usernameInput.addEventListener('input', () => {
    
    const value = usernameInput.value;
    const userRegex = /^[a-zA-Z_-]{1,8}$/;

    if (value === "") {
        usernameInput.classList.remove('error');
    } else if (!userRegex.test(value)) {
        usernameInput.classList.add('error');
    } else {
        usernameInput.classList.remove('error');
    }

})



const passwordInput = document.getElementById("passwordInput");
const confirmPasswordInput = document.getElementById("confirmPasswordInput");
const passwordProgressBar = document.getElementById("passwordProgressBar");
const passwordList = document.getElementById("passwordList").getElementsByTagName("li");

passwordInput.addEventListener('input', () => {
    const value = passwordInput.value;

    if (value === "") {
        resetPasswordProgress(); // 
    } else {
        updatePasswordProgress(value); 
    }
    checkPasswordMatch();
});

confirmPasswordInput.addEventListener('input', () => {
    checkPasswordMatch(); 
});

function updatePasswordProgress(value) {
    let critereOk = 0;

    if (value.length >= 8) {
        critereOk++;
        passwordList[0].style.color = "green"; 
    } else {
        passwordList[0].style.color = "orange"; 
    }
    if (/[a-z]/.test(value)) {
        critereOk++;
        passwordList[1].style.color = "green"; 
    } else {
        passwordList[1].style.color = "orange"; 
    }
    if (/[A-Z]/.test(value)) {
        critereOk++;
        passwordList[2].style.color = "green"; 
    } else {
        passwordList[2].style.color = "orange"; 
    }
    if (/\d/.test(value)) {
        critereOk++;
        passwordList[3].style.color = "green"; 
    } else {
        passwordList[3].style.color = "orange"; 
    }
    if (/[^a-zA-Z0-9]/.test(value)) {
        critereOk++;
        passwordList[4].style.color = "green"; 
    } else {
        passwordList[4].style.color = "orange"; 
    }

    const progressPercentage = (critereOk / passwordList.length) * 100; 
    passwordProgressBar.style.width = progressPercentage + '%';
}

function resetPasswordProgress() {
    passwordProgressBar.style.width = '0%';
    for (let i = 0; i < passwordList.length; i++) {
        passwordList[i].style.color = "orange"; 
    }
}

function checkPasswordMatch() {
    if (passwordInput.value ===  confirmPasswordInput.value && confirmPasswordInput.value !== "") {
        confirmPasswordInput.style.backgroundColor = "lightgreen"; 
    }
     else {
        confirmPasswordInput.style.backgroundColor = "orange";
    }
}