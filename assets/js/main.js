//chiedere all'utente età e chilometri
let userAge = prompt("quanti anni hai?")
let userKm = prompt("quanti km vuoi percorrere?")
//calcolare prezzo
// in base ai km
let ticket = (userKm * 0.21)
//in base all'età
//SE utente ha < 18 anni -20%
//ALTRIMENTI SE > 65 anni -40%
//ALTRIMENTI no sconto

let finalPrice=ticket //prezzo ticket base

if (userAge < 18) { //se minorenne
    console.log(userAge, userKm);
    let sconto = (ticket * 20 / 100)
    let finalPrice = (ticket - sconto)
    console.log(finalPrice.toFixed(2));//prezzo finale

} else if (userAge >= 65) { //se over 65
    console.log(userAge, userKm);
    let sconto = (ticket * 40 / 100)
    let finalPrice = (ticket - sconto)
    console.log(finalPrice.toFixed(2));//prezzo finale
    
} else{ //se nessuno dei due
    console.log(userAge, userKm);
    console.log(finalPrice.toFixed(2));//prezzo finale
}









