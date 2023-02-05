let partida = document.createElement("div")
partida.innerHTML = "Jogar Partida Amigavel"

elemento_pai.appendChild(partida)
partida.className = "none"

let partidabot = document.createElement("div")
partidabot.innerHTML = "Jogar Partida Contra Bot"

elemento_pai.appendChild(partidabot)
partidabot.className = "none"

partidabot.addEventListener("click",()=>{
    partida.className = "none"
    partidabot.className = "none"
    txtplayerxbot.className = "partida"
})