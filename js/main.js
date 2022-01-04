let cash = 500;
let tempCash = cash;
let currentGameStage = "new"; //содержит информацию по текущей стадии игры ("new"-новая игра, "win"-победа, "lose"-проигрыш, "point" -поинт).
let point;


//Обработка нажатия кнопки 
function clickHandler() {
    debugger;
    let [cubeA, cubeB] = tossUp();
    let bet = document.getElementById("bet").value;
    if(isNaN(bet) || bet < 1 || bet > cash) {
        errorMessage();
    }
    else if(currentGameStage == "new") {
        primaryGameHandler(cubeA, cubeB, bet);
    }
    else if(currentGameStage == "point") {
        pointGameHandler(cubeA, cubeB, bet);
    }
    else {
        currentGameStage = "new";
        cash = tempCash;
        baseMessage();
    }
}
