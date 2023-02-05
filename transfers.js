let cancelar = document.getElementById("cancelar")

let card1 = document.getElementById("elonmusk")
card1.className = "none"

let card2 = document.getElementById("eisten")
card2.className = "none"

let card3 = document.getElementById("flakes")
card3.className = "none"

let card4 = document.getElementById("godocard")
card4.className = "none"

let playername = document.getElementById("playername")
let princeplayer = document.getElementById("priceplayer")

btn1.addEventListener("click",()=>{
    card1.className = "none"
    card2.className = "none"
    card3.className = "none"
    card4.className = "none"
})

btn2.addEventListener("click",()=>{
    card1.className = "none"
    card2.className = "none"
    card3.className = "none"
    card4.className = "none"
})

btn3.addEventListener("click",()=>{
    card1.className = "none"
    card2.className = "none"
    card3.className = "none"
    card4.className = "none"
})

card1.addEventListener("click",()=>{
    compra.className = "compra"
    playername.innerHTML = "Elon Musk"
    princeplayer.innerHTML = "100.000"
})

card2.addEventListener("click",()=>{
    compra.className = "compra"
    playername.innerHTML = "Albert Eisten"
    princeplayer.innerHTML = "100.000"
})

card3.addEventListener("click",()=>{
    compra.className = "compra"
    playername.innerHTML = "Flakes careca"
    princeplayer.innerHTML = "100.000"
})

card4.addEventListener("click",()=>{
    compra.className = "compra"
    playername.innerHTML = "Godofredo"
    princeplayer.innerHTML = "100.000"
})

cancelar.addEventListener("click",()=>{
    compra.className = "none"
})