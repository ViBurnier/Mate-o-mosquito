let levelGameDifficulty = document.getElementById('levelGameDifficulty')

let btnStart = document.getElementById('startGame')

let time

function difficulty(levelGameDifficulty){
    switch(levelGameDifficulty){
        case "Easy": return 1500
        break;
        
        case "Normal": return 1000
        break;

        case "Hard": return 650
        break;

        default:
            alert("ERRO")
    }
}

//armazenar a dificuldade do jogo
function storeDifficulty(){
    localStorage.setItem("storeDifficulty", difficulty(levelGameDifficulty.value))
 }

btnStart.addEventListener("click", function(){
    //inicia jogo se o valor do levelGame for diferente de 0
    //salva a dificuldade no localStorage
    if(levelGameDifficulty.value != 0){
        storeDifficulty()
        window.location.href="index.html?play"
    }  
})




