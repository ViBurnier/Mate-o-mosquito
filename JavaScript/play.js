//criar a imagem da mosca, de tamanhos diferente, e em diferentes posicoes.
let body = document.querySelector('body')    

function createImageFly(){
    let imageFly = document.createElement('img')
    imageFly.src = 'image/mosca.png'
    return imageFly
}

function changeSizeFly(){
    //numero aleatorios entre 60 100
    let randomSize = Math.floor(Math.random() * (100 - 60) + 60)

    //nao consigo mudar o style da imagefly pelo dom
    //talvez criando pelo css e inserindo por classe de, mas quero que seja numero aleatorio
    //por isso seria melhor alterar pelo dom
    

}

changeSizeFly()

//garantir que a mosca nao saia da tela

//inserir a imagem da mosca na tela

//conseguir clicar na mosca

//se clicar: fazer a mosca sumir 

//se nao clicar: perde vida

//se perder as 3 vidas: perde o jogo

//fazer o tempo passar

//se acabar o tempo: vitoria