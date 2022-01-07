let cash = 500;
let tempCash = cash;
let currentGameStage = "new"; //содержит информацию по текущей стадии игры ("new"-новая игра, "win"-победа, "lose"-проигрыш, "point" -поинт).
let point;


//Обработка нажатия кнопки 
function clickHandler() {
    let [cubeA, cubeB] = tossUp();
    let bet = document.getElementById("bet").value;
    let decision;

    if (isNaN(bet) || bet < 1 || bet > cash) {
        updateForm( errorMessage(), true);
    }
    else if (currentGameStage == "new") {
        decision = primaryGameHandler(cubeA, cubeB); //получаем результат обычной игры
        generalHandler(decision, cubeA, cubeB, bet); //обновляем DOM
    }
    else if (currentGameStage == "point") {
        decision = pointGameHandler(cubeA, cubeB); //получаем результат поинт-игры
        generalHandler(decision, cubeA, cubeB, bet); //обновляем DOM
    }
    else {
        currentGameStage = "new";
        cash = tempCash;
        updateForm( baseMessage(), true);
    }
}

//Обработка результата подбрасывания (обновление DOM)
function generalHandler (decision, cubeA, cubeB, bet) {
    if (decision === "win") {
        currentGameStage = "win";
        tempCash = cash + bet * 2;
        updateForm( winMessage(cubeA, cubeB, bet), false);
    } 
    else if (decision === "lose") {
        currentGameStage = "lose";
        tempCash = cash - bet;
        updateForm( loseMessage(cubeA, cubeB, bet), false);
    }
    else if (decision === "point") {
        currentGameStage = "point";
        point = cubeA + cubeB;
        debugger;
        updateForm( pointStartMessage(cubeA, cubeB, bet), false);
    }
    else {
        updateForm( pointMessage(cubeA, cubeB, bet), false);
    }
}

