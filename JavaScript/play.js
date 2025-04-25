//criar a imagem da mosca, de tamanhos difernente, e em diferentes posicoes.
class ImageConstructor{
    constructor(body, resolution){
        this.body = body
        this.resolution = resolution
        this.image = this.createImage()
        this.changePlaceImage()
        this.insertImageInScreen()
        this.changeSizeImage()
        this.changeSideImage()
    }
    
    getRandomPositionResolution(){
        let X = Math.floor(Math.random() * resolution[0]) - 200  
        let Y = Math.floor(Math.random() * resolution[1]) - 200
        
        let posX = X < 0 ? 0 : X
        let posY = Y < 0 ? 0 : Y
        
        return [posX, posY]
    }
    
    createImage(){
        let image = document.createElement('img')
        image.src = 'image/mosca.png'
        image.style.position = 'relative';
        return image
    }
    
    
    changeSizeImage(){
        //numero aleatorios entre 60 130 para o tamanho da image
        let randomSize = Math.floor(Math.random() * (130 - 40) + 60)

        this.image.style.width = randomSize + "px"
        this.image.style.height = randomSize + "px"
    }
    
    
    changePlaceImage(){
        //atualize o lugar da imagem
            let position = this.getRandomPositionResolution()
            this.image.style.left = position[0] + "px"
            this.image.style.top = position[1] + "px"
            
           console.log(position)
    }

    changeSideImage(){
        let randomSize = Math.floor(Math.random() * (1 - 3) + 3)

       
        if(randomSize < 2){
            this.image.style.transform = "scaleX(-1)"
        }
        else{
            this.image.style.transform = "scaleX(1)"
        }
    }
    
    insertImageInScreen(){
        
        this.body.appendChild(this.image)
    }

    removeImage(){
        this.body.removeChild(this.image)
    }
}

let life = 3;
let time = 30;
const resolution = [window.innerHeight, window.innerWidth]
let body = document.querySelector('body')  

window.addEventListener('resize', resolution);

let timerNumber = document.getElementById('timerNumber') 

//mosca esta saindo da tela
let image = new ImageConstructor(body, resolution);



image.image.onclick = () => {
    image.removeImage()
}
//fazer o tempo passar

    // let stopwatch = setInterval(() => {
    //     time -= 1
    //     timerNumber.innerHTML = time
    // }, 1000)

//se nao clicar: perde vida

//se perder as 3 vidas: perde o jogo


//se acabar o tempo: vitoria