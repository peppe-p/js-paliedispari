//Palidroma:
//Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma



//Pari e Dispari:
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
var scelta_user = prompt("Scegli fra 'Pari' e 'Dispari'").toLowerCase;
var num_user = parseInt(prompt("Scegli un numero da 1 a 5"));

//Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).
/**
 * Genera un numero da 1 a X
 * @param {Number} x
 * @returns {Number}
 */
function randomNum(x) {
    num_generated = parseInt(Math.random() * x) + 1;
    return num_generated;
}
var num_pc = randomNum(5);
console.log(num_pc);

//Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione)
//Dichiariamo chi ha vinto.