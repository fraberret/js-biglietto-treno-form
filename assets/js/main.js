
document.getElementById("send_button").addEventListener("click", function () {
//chiedere all'utente età e chilometri
let userAge =document.getElementById("age_group").value
let userKm = document.getElementById("km").value
let userName = document.getElementById("name").value

let discount_20 = 0.2
let discount_40 = 0.4
let discountType = "Nessuno Sconto"

//calcolare prezzo in base ai km
let ticket_price = userKm * 0.21
//SE utente ha < 18 anni -20%
if (userAge === "minor") { //se minorenne
    
    ticket_price=ticket_price-ticket_price*discount_20
    discountType="Sconto del 20%"

    //ALTRIMENTI SE > 65 anni -40%
} else if (userAge === "senior") { //se over 65
   
    ticket_price=ticket_price-ticket_price*discount_40
    discountType="Sconto del 40%"   
}
//stampa risultato
let finalPrice = ticket_price.toFixed(2)

document.getElementById("results").style.display="block"

document.getElementById("name_tb").innerHTML= userName;
document.getElementById("discount_tb").innerHTML= discountType
document.getElementById("seat_tb").innerHTML= Math.floor(Math.random() * 31);
document.getElementById("code_tb").innerHTML= Math.floor(Math.random() * 10000);
document.getElementById("price_tb").innerHTML= `${finalPrice}€`

})

document.getElementById("clear_button").addEventListener("click", function (){
    document.getElementById("age").value =""
    document.getElementById("name").value =""
    document.getElementById("km").value =""

})







