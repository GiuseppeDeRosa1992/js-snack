//SNACK CYCLE WHILE

/* Chiedi un numero all'utente tramite prompt. Finchè il numero inserito non è 42, 
continua a chiedere il numero. Se il numero è 42 congratulati. CON CICLO WHILE*/
console.log("Ciao Giuseppe");


//creo variabile
let userNumber; 

//ciclo while con condizione che se il numero dell'utente e diverso da 42 continua a chiedere
while(userNumber != 42) {
    //chiedo all'utente il numero
    userNumber = prompt("Scegli un numero da 1 a 100")
    //lo stampo in console
    console.log("Numero scelto dall'utente è" , userNumber)
    //creo variabile per richiamre il div dell'html
    const resultTrue = document.querySelector(".result-true")
    //creo variabile per creare un div dove scrivere in html
    const div = resultTrue.innerHTML = `<div class="bg-primary py-4 text-center"> 
        Congratulazioni!!! Il Numero giusto è ${userNumber}
    </div>`
    //se il numero è giusto stampo sia in pagina che in console e creo anche un alert di congratulazioni
    if (userNumber == 42) {
        div
        console.log("Il numero scelto è quello giusto")
        alert("Congratulazioni")
    }
    //alla fine del ciclo se il numero dell'utente è sbagliato lo segno in console
    console.log("Il numero è sbagliato" , userNumber)
}

//FINE SNACK CYCLE WHILE

