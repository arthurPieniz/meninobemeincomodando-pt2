let foto = document.createElement('img')
foto.src = "https://cdn.icon-icons.com/icons2/3066/PNG/96/user_person_profile_avatar_icon_190943.png"

elemento_pai.appendChild(foto)
foto.className = "none"

let profilename = document.createElement("h2")
profilename.innerHTML = "[Nome da conta]"

elemento_pai.appendChild(profilename)
profilename.className = "none"

let profilenamemudar = document.createElement("h5")
profilenamemudar.innerHTML = "Alterar nome"

elemento_pai.appendChild(profilenamemudar)
profilenamemudar.className = "none"

let tema = document.createElement("h6")
tema.innerHTML = "Tema escuro : off"

elemento_pai.appendChild(tema)
tema.className = "none"

tema.addEventListener("click",()=>{
    if(tema.value = "Tema escuro : off"){
        tema.innerHTML = "Tema escuro : on"
    }else if(tema.value == "Tema escuro : on"){
        tema.innerHTML = "Tema escuro : off"
    }
})


