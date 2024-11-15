// // function Milosc(){
// //     const Tmess = document.getElementById('traffic-message')
// //     const green1 = document.getElementById('green')
// //     const yellow1 = document.getElementById('yellow')
// //     const red1 = document.getElementById('red')

// // function Lwica(green, yellow, red){
// //     green1.style.opacity = green ? "1" : "0.3 ";
// //     yellow1.style.opacity = yellow ? "1" : "0.3 ";
// //     red1.style.opacity = red ? "1" : "0.3 ";
// // }

// // function konachi(){
// //     return new Promise((resolve) => {
// //         Lwica(true, false, false)
// //         Tmess.textContent = " c'est vert"
// //         setTimeout(() => {

// //             Lwica(false, true, false)
// //             Tmess.textContent = "cest orange"
// //             setTimeout(() => {

// //                 Lwica(false, false, true)
// //                     Tmess.textContent = "c'est rouge"
// //                     setTimeout(() => {
// //                         resolve();
// //                     }, 2000);
// //                 }, 1000);
// //             }, 3000);
// //         });
// //     };

    
// //     (function loop() {
// //         konachi().then(loop)
// //     })();

// // }

// // Milosc();


// function Milosc() {
//     const Tmess = document.getElementById('traffic-message')
//     const green1 = document.getElementById('green')
//     const yellow1 = document.getElementById('yellow')
//     const red1 = document.getElementById('red')

//     function Lwica(green, yellow, red) {
//         // Changement des couleurs via rgba pour chaque feu
//         green1.style.backgroundColor = green ? "rgba(0, 255, 0, 1)" : "rgba(0, 255, 0, 0.3)";
//         yellow1.style.backgroundColor = yellow ? "rgba(255, 255, 0, 1)" : "rgba(255, 255, 0, 0.3)";
//         red1.style.backgroundColor = red ? "rgba(255, 0, 0, 1)" : "rgba(255, 0, 0, 0.3)";
//     }

//     function konachi() {
//         return new Promise((resolve) => {
//             Lwica(true, false, false);
//             Tmess.textContent = "c'est vert";
//             setTimeout(() => {

//                 Lwica(false, true, false);
//                 Tmess.textContent = "c'est orange";
//                 setTimeout(() => {

//                     Lwica(false, false, true);
//                     Tmess.textContent = "c'est rouge";
//                     setTimeout(() => {
//                         resolve();
//                     }, 2000);
//                 }, 1000);
//             }, 3000);
//         });
//     }

//     (function loop() {
//         konachi().then(loop);
//     })();
// }

// Milosc();


function Milosc() {
    const Tmess = document.getElementById('traffic-message');
    const green1 = document.getElementById('green');
    const yellow1 = document.getElementById('yellow');
    const red1 = document.getElementById('red');

    // Fonction pour changer les couleurs des feux
    function Lwica(green, yellow, red) {
        green1.style.backgroundColor = green ? "rgba(0, 255, 0, 1)" : "rgba(0, 255, 0, 0.3)";
        yellow1.style.backgroundColor = yellow ? "rgba(255, 255, 0, 1)" : "rgba(255, 255, 0, 0.3)";
        red1.style.backgroundColor = red ? "rgba(255, 0, 0, 1)" : "rgba(255, 0, 0, 0.3)";
    }

    // Fonction asynchrone pour gérer la séquence des feux
    async function konachi() {
        // Vert
        Lwica(true, false, false);
        Tmess.textContent = "C'est vert";
        await delay(3000); // Attend 3 secondes

        // Jaune
        Lwica(false, true, false);
        Tmess.textContent = "C'est orange";
        await delay(1000); // Attend 1 seconde

        // Rouge
        Lwica(false, false, true);
        Tmess.textContent = "C'est rouge";
        await delay(2000); // Attend 2 secondes
    }

    // Fonction pour créer un délai avec une promesse
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Boucle récursive avec async/await
    async function loop() {
        while (true) {
            await konachi(); // Attends que konachi() se termine avant de recommencer
        }
    }

    loop(); // Démarre la boucle
}

Milosc();
