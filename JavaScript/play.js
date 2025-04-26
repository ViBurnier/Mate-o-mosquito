//criar a imagem da mosca, de tamanhos difernente, e em diferentes posicoes.
class ImageConstructor {
  constructor(body, resolution) {
    this.body = body;
    this.resolution = resolution;
    this.image = this.createImage();
  }

  getRandomPositionResolution() {
    let X = Math.floor(Math.random() * resolution[0]) - 200;
    let Y = Math.floor(Math.random() * resolution[1]) - 200;

    if (X < 0 || X >= resolution[0]) {
      X = 0;
    }

    if (Y < 0 || Y >= resolution[1]) {
      Y = 0;
    }

    return [X, Y];
  }

  createImage() {
    let image = document.createElement("img");
    image.src = "image/mosca.png";
    image.style.position = "relative";
    image.id = "image";
    return image;
  }

  changeSizeImage() {
    //numero aleatorios entre 60 130 para o tamanho da image
    let randomSize = Math.floor(Math.random() * (130 - 40) + 60);

    this.image.style.width = randomSize + "px";
    this.image.style.height = randomSize + "px";
  }

  changePlaceImage() {
    //atualize o lugar da imagem
    let position = this.getRandomPositionResolution();
    this.image.style.left = position[0] + "px";
    this.image.style.top = position[1] + "px";
  }

  changeSideImage() {
    let randomSize = Math.floor(Math.random() * (1 - 3) + 3);

    if (randomSize < 2) {
      this.image.style.transform = "scaleX(-1)";
    } else {
      this.image.style.transform = "scaleX(1)";
    }
  }

  insertImageInScreen() {
    this.body.appendChild(this.image);
  }

  removeImage() {
    this.body.removeChild(this.image);
  }
}

function loseHeart(){
  //muda a imagem do coracao cheio para vazio, e perde vida.
  if (document.getElementById("image")) {
    document.getElementById("h" + life).src = "image/coracao_vazio.png";
    life--;
  }
}

function changeScreen(){
  //se a vida for igual a zero e direcionado para a tela de derrota
  if (life == 0) {
    window.location.href = "index.html?loser";
  }
}

let life = 3;
let time = 30;

const storeDifficulty = localStorage.getItem('storeDifficulty')

const resolution = [window.innerWidth, window.innerHeight];

let body = document.querySelector("body");

window.addEventListener("resize", resolution);

let timerNumber = document.getElementById("timerNumber");

//fazer o tempo passar
let image = new ImageConstructor(body, resolution);

let stopwatch = setInterval(() => {

  timerNumber.innerHTML = time;

  loseHeart()
  
  changeScreen()

  image.changePlaceImage();
  image.changeSizeImage();
  image.changeSideImage();
  image.insertImageInScreen();

  time -= 1;
}, storeDifficulty);

image.image.onclick = () => {
  image.removeImage();
};