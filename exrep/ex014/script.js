function carregar(){
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
//var hora = data.getHours()
var hora = 12
msg.innerHTML = `Agora são ${hora} horas `
if (hora>= 0 && hora<12){
    //BOM DIA
    document.body.style.background = '#8c4600'
    img.src = 'imgT.png'
}else if (hora>=12 && hora<18){
    //BOA TARDE
    document.body.style.background = '#3a1e0d'
    img.src = 'imgTT.png'
}else {
    //BOA NOITE
    document.body.style.background = '#1b2e35'
    img.src = 'imgN.png'
    }
}  