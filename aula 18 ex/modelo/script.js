function contar(){
    let start = document.getElementById('start')
    let end = document.getElementById('end')
    let pass = document.getElementById('pass')
    let mensg = document.getElementById('msg')
    if (start.value.length == 0 || end.value.length == 0 || pass.value.length == 0){
        window.alert('[ERRO!] Digite novamente')
    }else{
        mensg.innerHTML = 'Contando...'
        let inicio = Number(start.value)
        let fim = Number(end.value)
        let passo = Number(pass.value)
        if(passo<=0){
            window.alert("Impossivel calcular (CONSIDERE PASSO = 1)")
            passo = 1
        }

        if(inicio<fim){
        for(c=inicio;c<=fim;c+=passo){
            mensg.innerHTML += ` ${c} \u{1F449}`
        }
         
        }else{
        for (c=inicio;c>=fim;c-=passo){
            mensg.innerHTML += ` ${c} \u{1F449}`
        }
        
        }
        mensg.innerHTML += `\u{1F3C1}`
    }
}