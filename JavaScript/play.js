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
        
        if(X < 0 || X >= resolution[0]){
            X = 0
        }

        if(Y < 0 || Y >= resolution[1]){
            Y = 0
        }
        
        return [X, Y]
    }
    
    createImage(){
        let image = document.createElement('img')
        image.src = 'image/mosca.png'
        image.style.position = 'relative';
        image.id = 'image'
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
const resolution = [window.innerWidth, window.innerHeight]
let body = document.querySelector('body')  

window.addEventListener('resize', resolution);

let timerNumber = document.getElementById('timerNumber') 

let image = new ImageConstructor(body, resolution);


//fazer o tempo passar
let stopwatch = setInterval(() => {
    timerNumber.innerHTML = time
    xImage()
    time -= 1

    if(time == 0){
        time = 30
    }
}, 1000)

image.image.onclick = () => {
    image.removeImage()
}
//funcao que verifica se a mosca existe
//  se existir: ele apaga perdendo vida
function xImage(){
    if(document.getElementById('image')){
       image.removeImage()
    }
}

//se nao clicar: perde vida

//se perder as 3 vidas: perde o jogo


//se acabar o tempo: vitoria