let num = document.getElementById('txtn')
let lista = document.getElementById('tab')
let resp = document.getElementById('res')
let valores = [] 

function isNumero(n){
    if(Number(n) >=1 && Number(n) <=100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) !=- 1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `O valor ${num.value} foi adicionado! `
        lista.appendChild(item)
        resp.innerHTML = ''

    }else{
        window.alert("Numero incompleto ou já digitado! ")
    }
    num.value=""
    num.focus()
}

function finalizar(){
    if (valores.length == 0){
        window.alert('Você não preencheu o formulario acima')
    }else{
        let tot = valores.length
        let maior = 0
        let menor = 0
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma = soma+valores[pos]
            media = soma/tot
            if (valores[pos]>valores[pos]){
                maior = valores[pos]
            }if(valores[pos]<valores[pos]){
                menor = valores[pos]
            }
        }
        resp.innerHTML = `O valor total foi: ${tot}.`
        resp.innerHTML += ``
    }
}