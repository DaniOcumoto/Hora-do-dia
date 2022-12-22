function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()

    msg.innerHTML = `Agora são ${hora}:${minutos} horas.`
    if (hora >= 0 && hora <12) {
        //Bom dia!
        img.src = './assets/manha.png'
        document.body.style.background = 'rgba(51, 102, 168, 0.742)'
    } else if (hora >= 12 && hora <18) {
        //Boa tarde!
        img.src = './assets/tarde.png'
        document.body.style.background='rgb(255, 162, 69)'
    } else {
        //Boa noite!
        img.src = './assets/noite.png'
        document.body.style.background='rgb(4, 3, 24)'
    }
}
