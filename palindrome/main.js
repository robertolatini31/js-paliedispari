// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


// chiedo all'utente di inesrire una parola
const user_word = prompt('inserisci una parola');
console.log(user_word.length);
// creo funzione controllo parole palindrome
function isPalindrome(userWord) {
    let control = true; // imposto variabile di uscita della funzione
    let j = (userWord.length - 1);  // simulo un secondo ciclo per lettura stringa dx-sx
    for (let i = 0; i < userWord.length; i++) { // inizio primo ciclo per lettura stringa sx-dx
            console.log(`i=${i} => ${userWord[i]} j=${j} => ${userWord[j]}`);
            // confronto i caratteri della stringa in modo siano uguali da entrambi i lati
            if (userWord[i] != userWord[j]) {
                control = false; // cambio il controllo in falso se caratteri diversi per lettura sx-dx & dx-sx
            }
        j--;
        
    }
    return control;
}

// creo una variabile in cui salvo il risultato della funzione
const palindrome_word = isPalindrome(user_word);

// controllo il risultato e lo loggo
if (palindrome_word) {
    console.log(`Hai inserito ${user_word} ed è PALINDROMA`);
} else {
    console.log(`Hai inserito ${user_word} e NON è PALINDROMA`);
}