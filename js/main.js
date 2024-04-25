/* Chiedi un numero all'utente tramite prompt. Finchè il numero inserito non è 42, 
continua a chiedere il numero. Se il numero è 42 congratulati. CON CICLO WHILE*/
console.log("Ciao Giuseppe");

//promt per chiedere il numero all'utente
let userNumber = prompt("Scegli un numero da 1 a 100")
console.log("Numero scelto dall'utente è" , userNumber)

//ciclo while con condizione che se il numero dell'utente e diverso da 42 continua a chiedere
while(userNumber != 42) {
        console.log("Il numero scelto è sbagliato" ,userNumber)
        userNumber = prompt("Scegli un'altro numero da 1 a 100")
    //sennò se e uguale lo stampa in un alert
    if (userNumber == 42) {
        console.log("Il numero scelto è quello giusto")
        alert("Congratulazioni")
    }
}
prompt("Come ti chiami?")