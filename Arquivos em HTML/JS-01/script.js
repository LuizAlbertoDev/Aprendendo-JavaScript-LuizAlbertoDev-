
function carregar () {


    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if ( hora >= 0 && hora < 12) {
        img.src = "../JS-01/imagens/manha.jpg"
        document.body.style.background = "#ad8e75"
    }
    else if (hora >= 12 && hora < 18) {
        img.src = "../JS-01/imagens/tarde.jpg"
        document.body.style.background = "#6e93b1"
    }
    else {
        img.src = "../JS-01/imagens/noite.jpg"
        document.body.style.background = "#42324d"
    }
}