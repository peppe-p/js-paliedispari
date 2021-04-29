//##################################
//Palindroma #######################
//##################################
//Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma
/**
 * #La parola inserita è palindroma?
 * @param {string} word 
 * @returns {boolean}
 */
function isPalindrome(word) {
    word_reversed = word.split("").reverse().join("");
    if (word == word_reversed) {
        console.log("La parola è palindroma!");
        return true;
    } else {
        console.log("La parola che hai inserito non è palindroma...");
        return false;
    }
}
var parola = prompt("Inserisci una parola per scoprire se è palindroma");
isPalindrome(parola);




//######################################
//Pari e Dispari #######################
//######################################
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
var scelta_user = prompt("Scegli fra 'Pari' e 'Dispari'").toLowerCase();
var num_user = parseInt(prompt("Scegli un numero da 1 a 5"));

//Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).
/**
 * Genera un numero da 1 a X.
 * @param {Number} x
 * @returns {Number}
 */
function randomNumFrom(x) {
    num_generated = parseInt(Math.random() * x) + 1;
    return num_generated;
}
var num_pc = randomNumFrom(5);


//Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione)
/**
 * Somma 2 numeri e dichiara se il risultato è pari o dispari.
 * @param {Number} x 
 * @param {Number} y 
 * @returns {String}
 */
function sumAndPariDispari(x, y) {
    var somma = x + y;
    if (somma % 2 == 0) {
        return "pari";
    } else {
        return "dispari";
    }
}
var num_finale = sumAndPariDispari(num_user, num_pc);
console.log("Numero pc: " + num_pc);
console.log("Tua scelta: " + num_user + " " + scelta_user);
console.log("Risultato finale: " + num_finale);

//Dichiariamo chi ha vinto.
if (num_finale == scelta_user) {
    console.log("Hai vinto! Congratulazioni!!");
} else {
    console.log("Mi dispiace, hai perso...");
}