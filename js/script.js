// Visualizzare in un alert 5 numeri casuali.
// 30 secondi dopo la chiusura dell'alert, l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.



//function per generare 5 num casuali
function generateRandNum(numRandom, min, max) {

    const numRandomArray = [];

    while (numRandomArray.length < numRandom) {

        const numRand = getRndInteger(min, max);

        if (!numRandomArray.includes(numRand)) {
            numRandomArray.push(numRand);
        }
    }
    return numRandomArray;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// alert 5 numeri casuali.
const randomNum = generateRandNum(5, 1, 100);
alert(randomNum);

//elemento nel DOM se per stampare il punteggio all'utente
const message = document.getElementById('message'); 

// timing function per impostare un timer
// setTimeout(function () {

//     const userNum = []; //array dove pushare i numeri 'azzeccati' dall'utente
//     console.log(userNum);

//     // ciclo for per creare 5 prompt
//     for (let i = 0; i < randomNum.length; i++) {

//         // prompt per chiedere i numeri all'utente
//         const insertNum = parseInt(prompt('Quale ricordi?'));

//         // condizione per controllare se i numeri inseriti sono uguali a quelli generati dal programma 
//         if (randomNum.includes(insertNum)) {
//         // e se lo sono pusharli nell array per fare un confronto
//             userNum.push(insertNum);
//         }

//         // stampo il punteggio
//         message.innerHTML = `Hai indovinato ${userNum.length} numero/i: ${userNum} `;

//     }
// }, 30000);

//-------------------------------------
//Function corretta con ciclo For
//-------------------------------------


// funzione corretta per non vincere con lo stesso numero
// setTimeout(() => {

//     const userNum = []; //array dove pushare i numeri 'azzeccati' dall'utente
//     console.log(userNum);

//     // ciclo for per creare 5 prompt
//     for (let i = 0; i < randomNum.length; i++) {

//         // prompt per chiedere i numeri all'utente
//         const insertNum = parseInt(prompt('Quale ricordi?'));

//         // condizione per controllare se i numeri inseriti sono uguali a quelli generati dal programma 
//         if (randomNum.includes(insertNum) && !userNum.includes(insertNum)) { // aggiungo condizione per non ripetere lo stesso num inserito prima dall'utente

//             // e se lo sono pusharli nell array per fare un confronto
//             userNum.push(insertNum);
//         }

//         // stampo il punteggio
//         message.innerHTML = `Hai indovinato ${userNum.length} numero/i: ${userNum} `;

//     }
// }, 30000);

//-------------------------------------
//Function corretta con ciclo While
//-------------------------------------

setTimeout(() => {

    const userNum = []; //array dove pushare i numeri 'azzeccati' dall'utente
    console.log(userNum);

    // ciclo for per creare 5 prompt
    while (userNum.length < 5) {

        // prompt per chiedere i numeri all'utente
        const insertNum = parseInt(prompt('Quale ricordi?'));

        // aggiungo il numero solo se non compreso nel array coi numeri dell'utente
        if (!userNum.includes(insertNum)) { // 
            userNum.push(insertNum);
        }

        // // stampo il punteggio
        // message.innerHTML = `Hai indovinato ${userNum.length} numero/i: ${userNum} `;
    }

    // Ora ho ottenuto dentro userNum i 5 numeri univoci forniti dall'utente
    // Confronto gli array per capire quali sono i numeri indovinati dall'utente e li salvo 
    // in un terzo Array

    const mindedNum = [];
    for (let i = 0; i < userNum.length; i++) {

        const singleUserNum = userNum[i];

        if (randomNum.includes(singleUserNum)) {
            mindedNum.push(singleUserNum);
        }

        // // stampo il punteggio
        message.innerHTML = `Hai indovinato ${mindedNum.length} numero/i: ${mindedNum.join(' - ')} `;
    }
}, 30000);