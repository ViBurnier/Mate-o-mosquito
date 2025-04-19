//criar a imagem da mosca, de tamanhos difernente, e em diferentes posicoes.
let body = document.querySelector('body')    

let createImageFly = function(){
    let imageFly = document.createElement('img')
    imageFly.src = 'image/mosca.png'

    //como mudar o tamanho da mosca sempre é necessários, o acoplamento seria aceitável aqui.
    changeSizeImage(imageFly)
    return imageFly
}


function changeSizeImage(image){
    //numero aleatorios entre 60 100 para o tamanho da image
    let randomSize = Math.floor(Math.random() * (130 - 60) + 60)
    
    image.style.width = randomSize + "px"
    image.style.height = randomSize + "px"
    
    return image;
}
body.appendChild(createImageFly())




//garantir que a mosca nao saia da tela

//inserir a imagem da mosca na tela

//conseguir clicar na mosca

//se clicar: fazer a mosca sumir 

//se nao clicar: perde vida

//se perder as 3 vidas: perde o jogo

//fazer o tempo passar

//se acabar o tempo: vitoria