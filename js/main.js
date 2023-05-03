//definizione array contenente mail
const mail = ["andrea@gmail.com", "simone@boolean.it", "massimo@boolean.it"];
const modal = document.getElementById("modal-body");
let msg;
let trueInput = false;



//aggiunta eventListner al bottone
document.getElementById("invia-richiesta").addEventListener("click", function(){
    //Dichiarare costante contenente valore input
    const inputValue = document.getElementById("input-email").value;
    console.log(inputValue);

//ciclare array con verifiche
for (let i = 0; i < mail.length; i++){
    let listaArray = mail[i];
    console.log(listaArray);

    if(inputValue === listaArray){
        trueInput = true;
    }
}

// messaggio condizionale
if (trueInput){
    msg = "Bentornato sul nostro portale";
}
else{
    msg = "Hai sbagliato mail :( Riprova";
}
modal.innerHTML = msg;

});

