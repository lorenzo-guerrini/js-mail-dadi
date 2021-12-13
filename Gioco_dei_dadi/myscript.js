// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

const username = prompt("Inserisci il tuo nome");
const userDice = Math.floor(Math.random() * 6) + 1;
const aiDice = Math.floor(Math.random() * 6) + 1;

console.log(username + " gioca: " + userDice)
console.log("AI gioca: " + aiDice)

if (userDice > aiDice) {
    console.log("Vince " + username);
} else if (userDice < aiDice) {
    console.log("Vince AI");
} else {
    console.log("Pareggio");
}