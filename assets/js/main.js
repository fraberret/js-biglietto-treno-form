
document.querySelector("button").addEventListener("click", function () {
//chiedere all'utente età e chilometri
let userAge = document.getElementById("age").value
let userKm = document.getElementById("km").value
let userName = document.getElementById("name").value

let discount_20 = 0.2
let discount_40 = 0.4
let discountType = "Standard Price"

//calcolare prezzo in base ai km
let ticket_price = userKm * 0.21
//SE utente ha < 18 anni -20%
if (userAge < 18) { //se minorenne
    
    ticket_price=ticket_price-ticket_price*discount_20
    discountType="20% off"

    //ALTRIMENTI SE > 65 anni -40%
} else if (userAge >= 65) { //se over 65
   
    ticket_price=ticket_price-ticket_price*discount_40
    discountType="40% off"   
}
//stampa risultato
let finalPrice = ticket_price.toFixed(2)

document.getElementById("name_tb").innerHTML= userName;
document.getElementById("discount_tb").innerHTML= discountType
document.getElementById("seat_tb").innerHTML= Math.random
document.getElementById("code_tb").innerHTML= Math.random
document.getElementById("price_tb").innerHTML= finalPrice

})







