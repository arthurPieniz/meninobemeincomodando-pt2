let btn1 = document.getElementById("one")
let btn2 = document.getElementById("two")
let btn3 = document.getElementById("tres")
let compra = document.querySelector(".compra")
let footer = document.querySelector(".footer")

var elemento_pai = document.body;

compra.className = "none"
footer.className = "none"

let pack = document.createElement("div")
pack.innerHTML = "Packs"

elemento_pai.appendChild(pack)
pack.className = "none"


let transfers = document.createElement("div")
transfers.innerHTML = "Comprar Cartas"

elemento_pai.appendChild(transfers)
transfers.className = "none"


let cards = document.createElement("div")
cards.innerHTML = "Minhas Cartas"

elemento_pai.appendChild(cards)
cards.className = "none"


btn1.addEventListener("click",()=>{
    pack.className = "packs"
    transfers.className = "packs"
    cards.className = "packs"
    partida.className = "none"
    foto.className = "none"
    tema.className = "none"
    profilename.className = "none"
    profilenamemudar.className = "none"
    txtplayerxbot.className = "none"
    mensagemplayerxbot = "none"
    btn1.className = "selected"
    btn2.className = ""
    btn3.className = ""
})

btn2.addEventListener("click",()=>{
    pack.className = "none"
    transfers.className = "none"
    cards.className = "none"
    partida.className = "packs"
    partidabot.className = "packs"
    foto.className = "none"
    tema.className = "none"
    profilename.className = "none"
    profilenamemudar.className = "none"
    txtplayerxbot.className = "none"
    mensagemplayerxbot = "none"
    btn1.className = ""
    btn2.className = "selected"
    btn3.className = ""
})

btn3.addEventListener("click",()=>{
    pack.className = "none"
    transfers.className = "none"
    cards.className = "none"
    partida.className = "none"
    partidabot.className = "none"
    foto.className = ""
    tema.className = ""
    profilename.className = ""
    profilenamemudar.className = ""
    txtplayerxbot.className = "none"
    mensagemplayerxbot = "none"
    btn1.className = ""
    btn2.className = ""
    btn3.className = "selected"
})

transfers.addEventListener("click",()=>{
    pack.className = "none"
    transfers.className = "none"
    cards.className = "none"
    card1.className = "cartas"
    card2.className = "cartas"
    card3.className = "cartas"
    card4.className = "cartas"
    partida.className = "none"
    partidabot.className = "none"
})