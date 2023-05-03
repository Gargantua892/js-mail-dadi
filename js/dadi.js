//Dichiarazioni variabili
let userDice;
let computerDice;



// Generazione random numeri
userDice = Math.floor((Math.random() * 6) + 1);
computerDice = Math.floor((Math.random() * 6) + 1);

console.log(userDice);
console.log(computerDice);

// stabilire chi vince con condizioni
if(userDice < computerDice){
    console.log("Ha vinto il pc");
} else if (userDice > computerDice){
    console.log("Ha vinto l'utente");
}else if (userDice === computerDice){ 
    console.log("pareggio");
}
