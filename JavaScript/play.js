//criar a imagem da mosca, de tamanhos difernente, e em diferentes posicoes.
let body = document.querySelector('body')    
const resolution = getResolutionUser()
var life = 3;

function getResolutionUser(){ 
    const height = window.innerHeight
    const width = window.innerWidth

    return [width, height]
}

function getRandomPositionResolution(resolution){
    let X = Math.floor(Math.random() * resolution[0]) - 200  
    let Y = Math.floor(Math.random() * resolution[1]) - 200
    
    posX = X < 0 ? 0 : X
    posY = Y < 0 ? 0 : Y
    
    return [posX, posY]
}

let createImage = function(){
    let image = document.createElement('img')
    image.src = 'image/mosca.png'

    //como mudar o tamanho da mosca sempre é necessários, o acoplamento seria aceitável aqui.
    //changeSizeImage(image)

    return image
}


function changeSizeImage(image){
    //numero aleatorios entre 60 130 para o tamanho da image
    let randomSize = Math.floor(Math.random() * (130 - 60) + 60)
    
    image.style.width = randomSize + "px"
    image.style.height = randomSize + "px"
}


function changePlaceImage(image){
    //pegar imagem , atualize o lugar da imagem
    while(life > 0){
        let position = getRandomPositionResolution(resolution)
        image.style.left = position[0] 
        image.style.top = position[1]
        image.style.display = 'block'
        
    }    
}



function insertImageInScreen(image){
    //adicionei ao body a imagem
    body.appendChild(changePlaceImage(image))
}

//aparece(inserir a imagem no body no lugar atualizado) e suma(deletar a imagem do body).





//garantir que a mosca nao saia da tela

//inserir a imagem da mosca na tela

//conseguir clicar na mosca

//se clicar: fazer a mosca sumir 

//se nao clicar: perde vida

//se perder as 3 vidas: perde o jogo

//fazer o tempo passar

//se acabar o tempo: vitoria