function primaryGameHandler(cubeA, cubeB, bet) {
    let sum = cubeA + cubeB;

    if(sum == 7 || sum == 11) {
        setWinStage(cubeA, cubeB, bet);
    }
    else if(sum == 2 || sum == 8 || sum == 12) {
        setLoseStage(cubeA, cubeB, bet);
    }
    else {
        currentGameStage = "point";
        point = sum;
        pointStartMessage(cubeA, cubeB,bet);
    }
}

function pointGameHandler(cubeA, cubeB, bet) {
    let sum = cubeA + cubeB;

    if(sum == point) {
        setWinStage(cubeA, cubeB, bet);;
    }
    else if(sum == 7) {
        setLoseStage(cubeA, cubeB, bet);
    }
    else {
        pointMessage(cubeA, cubeB, bet);
    }
}

function setWinStage(cubeA, cubeB, bet) {
    currentGameStage = "win";
    cashAfterGame = cash + bet * 2;
    winMessage(cubeA, cubeB, bet);
}

function setLoseStage(cubeA, cubeB, bet) {
    currentGameStage = "lose";
    cashAfterGame = cash - bet;
    loseMessage(cubeA, cubeB, bet);
}