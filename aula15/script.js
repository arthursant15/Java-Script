function clicar(){
    var data = new Date ()
    var ano = data.getFullYear ()
    var fano = document.getElementById ('txtano')
    var resp = document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert(' [ERRO] Verifique os dados e tente novamente ')
    }else{
        var msex = document.getElementById('masc')
        var fsex = document.getElementById('fem')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (msex.checked){
            genero = 'Homem'
            if(idade>=0 && idade<=4){
                //BÊBE
                img.setAttribute('src', 'BBM.png')
            }else if (idade>4 && idade <=11){
                //CRIANÇA
                img.setAttribute('src', "CM.png")
            }else if (idade>11 && idade<=21){
                //ADOLECENTE 
                img.setAttribute('src', "ADH.png")
            }else if (idade>21 && idade<60){
                //ADULTO
                img.setAttribute('src', 'ATH.png')
            }else if (idade>=60 && idade<=116){
                //IDOSO
                img.setAttribute('src', 'IDH.png')
            }else (idade = ", Esse aí morreu já =( há ")
        }else if (fsex.checked){
            genero = 'Mulher'
            if(idade>=0 && idade<=4){
                //BÊBE
                img.setAttribute('src', 'BBF.png')
            }else if (idade>4 && idade <=11){
                //CRIANÇA
                img.setAttribute('src', "CF.png")
            }else if (idade>11 && idade<=21){
                //ADOLECENTE 
                img.setAttribute('src', "ADF.png")
            }else if (idade>21 && idade<60){
                //ADULTO
                img.setAttribute('src', 'ATF.png')
            }else if (idade>=60 && idade<=116){
                //IDOSO
                img.setAttribute('src', 'IDF.png')
            }else (idade = ", Esse aí morreu já =( há ")
        }
        resp.style.textAlign = 'center'
        resp.innerHTML = (`Detectamos, você é ${genero} com ${idade} anos`)
        resp.appendChild(img)
    }
}