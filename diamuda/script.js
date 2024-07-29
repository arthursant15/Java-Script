function carregar() {
    var txt = document.getElementById('msg');
    var imag = document.getElementById('fot');
    var resp = document.getElementById('bom');
    var data = new Date();
    var hora = 19 
    //var hora = data.getHours();
    var min = data.getMinutes();
    var seg = data.getSeconds();
    txt.innerHTML = `São exatamente: ${hora} H : ${min} Min`;

    if (hora >= 0 && hora < 6) {
        // Madrugada
        document.body.style.backgroundColor = '#1a2422'
        resp.innerHTML = `Vá Dormir Vá!`;
        imag.src = "madrugada.png";
    } else if (hora >= 6 && hora < 12) {
        // Manhã
        document.body.style.backgroundColor = '#cbb6a0'
        resp.innerHTML = `Bom Dia Princesa Por Favor...`;
        imag.src = "manha.png";
    } else if (hora >= 12 && hora < 18) {
        // Tarde
        document.body.style.backgroundColor = '#c0bdb5'
        resp.innerHTML = `Boa Tarde, moreno`;
        imag.src = "tarde.png";
    } else {
        // Noite
        document.body.style.backgroundColor = '#3a303d'
        resp.innerHTML = `Boa Noite, Modo noturno ativado`;
        imag.src = "noite.png";
    }
}
