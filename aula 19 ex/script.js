function calcular(){
    let tabul =  document.getElementById('nutb')
    let res = document.getElementById('resu')
    if(tabul.value.length == 0){
        window.alert("[ERRO]... PORFAVOR DIGITE ALGUM NUMERO!")
    }else{
        let t = Number(tabul.value)
        for(c=1; c<=10; c=c+1){
            res.innerHTML += ` ${c} x ${t} = ${c*t} ||`
        }
    }
}