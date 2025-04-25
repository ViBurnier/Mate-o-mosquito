//criar a imagem da mosca, de tamanhos difernente, e em diferentes posicoes.
class ImageConstructor{
    constructor(body, resolution){
        this.body = body
        this.resolution = resolution
        this.image = this.createImage()
        this.changePlaceImage()
        this.insertImageInScreen()
    }
    
    getRandomPositionResolution(){
        let X = Math.floor(Math.random() * this.resolution[0]) - 200  
        let Y = Math.floor(Math.random() * this.resolution[1]) - 200
        
        let posX = X < 0 ? 0 : X
        let posY = Y < 0 ? 0 : Y
        
        return [posX, posY]
    }
    
    createImage(){
        let image = document.createElement('img')
        image.src = 'image/mosca.png'
        image.style.position = 'absolute';
        return image
    }
    
    
    changeSizeImage(){
        //numero aleatorios entre 60 130 para o tamanho da image
        let randomSize = Math.floor(Math.random() * (130 - 40) + 60)

        this.image.style.width = randomSize + "px"
        this.image.style.height = randomSize + "px"
    }
    
    
    changePlaceImage(){
        //pegar imagem , atualize o lugar da imagem
            let position = this.getRandomPositionResolution(resolution)
            this.image.style.left = position[0] 
            this.image.style.top = position[1]
           
    }
    
    insertImageInScreen(){
        this.changePlaceImage()
        this.body.appendChild(this.image)
    }

    removeImage(){
        this.body.removeChild(this.image)
    }
}

let body = document.querySelector('body')    
const resolution = [window.innerHeight, window.innerWidth]
let image = new ImageConstructor(body, resolution);

image.image.onclick = () => {
    image.removeImage()
}

let life = 3;
//aparece(inserir a imagem no body no lugar atualizado) e suma(deletar a imagem do body).





//garantir que a mosca nao saia da tela

//inserir a imagem da mosca na tela

//conseguir clicar na mosca

//se clicar: fazer a mosca sumir 

//se nao clicar: perde vida

//se perder as 3 vidas: perde o jogo

//fazer o tempo passar

//se acabar o tempo: vitoria