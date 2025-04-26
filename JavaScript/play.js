// Cria a imagem da mosca, com tamanhos e lados diferentes.
class ImageConstructor {
  constructor(body, resolution) {
    this.body = body;
    this.resolution = resolution;
    this.image = this.createImage();
  }

  // Cria e retorna a imagem. Define position = relative.
  createImage() {
    let image = document.createElement("img");
    image.src = "image/mosca.png";
    image.style.position = "relative";
    image.id = "image";
    return image;
  }

  // Muda o tamanho da imagem com base em um número aleatório.
  changeSizeImage() {
    // Número aleatório entre 60 e 130 para o tamanho da imagem.
    let randomSize = Math.floor(Math.random() * (130 - 40) + 60);

    this.image.style.width = randomSize + "px";
    this.image.style.height = randomSize + "px";
  }

  // Recebe um array de posição [X, Y] (valores aleatórios) 
  // e move a imagem para essas coordenadas.
  changePlaceImage() {
    let position = getRandomPositionResolution();
    this.image.style.left = position[0] + "px";
    this.image.style.top = position[1] + "px";
  }

  // Gera um número aleatório entre 1 e 2.
  // Se for menor que 1.5, a imagem é invertida horizontalmente.
  changeSideImage() {
    let randomSize = Math.floor(Math.random() * (1 - 3) + 3);

    if (randomSize < 1.5) {
      this.image.style.transform = "scaleX(-1)";
    } else {
      this.image.style.transform = "scaleX(1)";
    }
  }

  // Insere a imagem na tela.
  insertImageInScreen() {
    this.body.appendChild(this.image);
  }

  // Remove a imagem da tela.
  removeImage() {
    this.body.removeChild(this.image);
  }
}

// Gera uma posição aleatória na tela, respeitando a resolução da tela.
// resolution é um array com largura e altura [X, Y].
function getRandomPositionResolution() {
  let X = Math.floor(Math.random() * resolution[0]) - 200;
  let Y = Math.floor(Math.random() * resolution[1]) - 300;

  if (X < 0 || X >= resolution[0]) {
    X = 0;
  }

  if (Y < 0 || Y >= resolution[1]) {
    Y = 0;
  }

  return [X, Y];
}2
// Troca a imagem do coração cheio para vazio e perde uma vida.
function loseHeart() {
  if (document.getElementById("image")) {
    document.getElementById("h" + life).src = "image/coracao_vazio.png";
    life--;
  }
}

// Se a vida chegar a zero, redireciona para a tela de derrota.
function changeScreen() {
  if (life == 0) {
    window.location.href = "index.html?loser";
  }
}

let life = 3;
let time = 30;

const storeDifficulty = localStorage.getItem('storeDifficulty');

const resolution = [window.innerWidth, window.innerHeight];

let body = document.querySelector("body");

// Atualiza o valor de resolution toda vez que a tela for redimensionada.
window.addEventListener("resize", resolution);

let timerNumber = document.getElementById("timerNumber");

let image = new ImageConstructor(body, resolution);

let stopwatch = setInterval(() => {
  timerNumber.innerHTML = time;

  loseHeart();
  
  changeScreen();

  image.changePlaceImage();
  image.changeSizeImage();
  image.changeSideImage();
  image.insertImageInScreen();

  time -= 1;
}, storeDifficulty);

// Se clicar na imagem, ela some.
image.image.onclick = () => {
  image.removeImage();
};
