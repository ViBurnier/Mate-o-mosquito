let levelGame = document.getElementById('levelGame')

let btnStart = document.getElementById('startGame')

//armazenar a dificuldade do jogo
function storeDifficulty(){
    localStorage.setItem("gameLevel", levelGame.value)
 }

btnStart.addEventListener("click", function(){
    //inicia jogo se o valor do levelGame for diferente de 0
    //salva a dificuldade no localStorage
    if(levelGame.value != 0){
        window.location.href="index.html?play"
        storeDifficulty()
    }  
})




