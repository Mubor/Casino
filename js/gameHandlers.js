//Обработчик обычной игры
function primaryGameHandler(cubeA, cubeB) {
    let sum = cubeA + cubeB;
    let result;

    if(sum === 7 || sum === 11) {
        result = "win";
    }
    else if(sum === 2 || sum === 8 || sum === 12) {
        result = "lose";
    }
    else {
        result = "point";
    }

    return result;
}

//Обработчик игры при выпадaнии point
function pointGameHandler(cubeA, cubeB) {
    let sum = cubeA + cubeB;
    let result;

    if(sum === point) {
        result = "win";
    }
    else if(sum === 7) {
        result = "lose";
    }
    else {
        result = "continue";
    }

    return result;
}