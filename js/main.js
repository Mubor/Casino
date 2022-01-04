let cash = 500;
let cashAfterGame = cash;
let currentGameStage = "new";
let point;

function clickHandler() {
    let [cubeA, cubeB] = tossUp();
    let bet = document.getElementById("bet").value;
    if(currentGameStage == "new") {
        primaryGameHandler(cubeA, cubeB, bet);
    }
    else if(currentGameStage == "point") {
        pointGameHandler(cubeA, cubeB, bet);
    }
    else {
        currentGameStage = "new";
        cash = cashAfterGame;
        baseMessage();
    }
}
