//definizione array contenente mail
const mail = ["andrea@gmail.com", "simone@boolean.it", "massimo@boolean.it"];
let i;
const modal = document.getElementById("modal");


//aggiunta eventListner al bottone
document.getElementById("invia-richiesta").addEventListener("click", function(){
    //Dichiarare costante contenente valore input
    const inputValue = document.getElementById("input-email").value;
    console.log(inputValue);

//ciclare array con verifiche
for (i = 0; i < mail.length; i++){
console.log(mail[i]);

if (mail[i] === inputValue){
    console.log("Benvenuto");
}else{
    console.log("Riprova")
}
}

});


