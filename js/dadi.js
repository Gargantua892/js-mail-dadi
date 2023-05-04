//Dichiarazioni variabili
let userDice;
let computerDice;

const userHtml = document.querySelector("#dado-user>h5");
const computerHtml = document.querySelector("#dado-computer>h5");
const winner = document.querySelector("#risultato>p");


// Generazione random numeri
userDice = Math.floor((Math.random() * 6) + 1)
computerDice = Math.floor((Math.random() * 6) + 1);

// console.log(userDice);
// console.log(computerDice);

//aggiunta event listner al bottone per iniziare il gioco
document.getElementById("btn-dadi").addEventListener("click", function(){
    // btn-dadi
    userHtml.innerHTML = userDice;
    computerHtml.innerHTML = computerDice;

    // stabilire chi vince con condizioni
if(userDice < computerDice){
    console.log("Ha vinto il pc");
    winner.innerHTML = "Ha vinto il pc";
} else if (userDice > computerDice){
    console.log("Ha vinto l'utente");
    winner.innerHTML = "Ha vinto il giocatore 1";
}else if (userDice === computerDice){ 
    console.log("pareggio");
    winner.innerHTML = "Pareggio!";
}
});

