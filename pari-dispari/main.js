// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// faccio scegliere pari o dispari all'utente
const even_or_odd = prompt('scegli pari o dispari?');
console.log(`inserito: ${even_or_odd}`);
// faccio inserire un numero da 1 a 5 all'utente
const user_number = parseInt(prompt('inserire un numero da 1 a 5'));
console.log(`inserito: ${user_number}`);
// funzione per numero random
function getRndNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// assgno un numero al computer
const pc_number = getRndNumber(1, 5);
console.log(`numero pc: ${pc_number}`);
// sommo i due numeri
const somma = user_number + pc_number;

// funzione pari o dispari
function isEven(number) {
    let control = false;
    if (number % 2 == 0) {
        control = true;
    }
    return control;
}

// controllo la somma sia pari o dispari e loggo il risultato
if (isEven(somma)) {
    console.log(`la somma è: ${somma} ed è PARI`);
} else {
    console.log(`la somma è: ${somma} ed è DISPARI`);
}

// loggo l'esito
if (isEven(somma) && (even_or_odd == 'pari' || even_or_odd == 'Pari' || even_or_odd == 'PARI')) {
    console.log('hai VINTO');
} else if ((isEven(somma) == false) && (even_or_odd == 'dispari' || even_or_odd == 'Dispari' || even_or_odd == 'DISPARI')) {
    console.log('hai VINTO');
} else {
    console.log('hai PERSO');
}