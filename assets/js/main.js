//chiedere all'utente età e chilometri
let userAge = prompt("quanti anni hai?")
let userKm = prompt("quanti km vuoi percorrere?")
//calcolare prezzo
// in base ai km
let ticket_price = userKm * 0.21
//in base all'età
//SE utente ha < 18 anni -20%
//ALTRIMENTI SE > 65 anni -40%


if (userAge < 18) { //se minorenne
    
    ticket_price=ticket_price-ticket_price*0.2

} else if (userAge >= 65) { //se over 65
   
    ticket_price=ticket_price-ticket_price*0.4   
}

//stampa risultato
console.log(ticket_price.toFixed(2));







