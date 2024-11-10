function carregar() {
let txt_externo = document.getElementById('txt')
let msg = document.getElementById('msg')
let img = document.getElementById('img')
let day = new Date()
let hora = day.getHours()
msg.innerHTML = `Agora são ${hora} horas.`

if (hora >= 0 && hora < 12){
    img.src = 'manhã.png'
    document.body.style.background = "#bbb6a9"
    txt_externo.style.color = "#000"  
}else if (hora >= 12 && hora < 18){
    img.src = 'tarde.png'
     document.body.style.background = "#e9e1ce"
     txt_externo.style.color = "#000" 
}else {
    img.src = 'noite.png'
     document.body.style.background = "#2f4549"
}

}