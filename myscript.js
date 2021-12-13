// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

const emailList = ["maurizio.costanzo@gmail.com", "mary.de-filippi@live.it", "zia.mara@libero.it"];
const input = prompt("Qual è la tua email?");
let found = false;

for (let i = 0; i <= emailList.length; i++) {
    if (emailList[i] === input) { //Non basta == perché con input vuoto ti fa accedere ugualmente
        found = true;
        break;
    }
}

if (found) {
    console.log("Puoi accedere");
} else {
    console.log("Non puoi accedere");
}