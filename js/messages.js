// Текст формы при загрузке страницы и начала новой игры
function baseMessage () {
    let walletTxt = `Ваш баланс: <span class="value">${cash}$</span>`;
    let messageTxt = null;
    let buttonTxt = `Бросить кубики`;

    return {
        wallet: walletTxt, 
        msg: messageTxt,
        button: buttonTxt
    };

}

//Текст формы при выиграше
function winMessage (cubeA, cubeB, bet) {
    let walletTxt = `Ваш баланс: <span class="value">${cash}$</span>`;
    let messageTxt = 
    `<p>На кубиках: <span class="value">${cubeA}, ${cubeB}</span></p>
     <p>Вы выиграли, и получаете <span class="value">${bet*2}$</span></p>`;
    let buttonTxt = `Забрать награду`;

    return {
        wallet: walletTxt, 
        msg: messageTxt,
        button: buttonTxt
    };
}

//Текст при проигрыше
function loseMessage (cubeA, cubeB, bet) {
    let walletTxt = `Ваш баланс: <span class="value">${cash}$</span>`;
    let messageTxt = 
    `<p>На кубиках: <span class="value">${cubeA}, ${cubeB}</span></p>
     <p>Ваша ставка в <span class="value">${bet}$</span> не сыграла</p>`;
    let buttonTxt = `Жаль, ну ладно`;

    return {
        wallet: walletTxt, 
        msg: messageTxt,
        button: buttonTxt
    };    
}

//Текст при выпадании поинта (один раз)
function pointStartMessage (cubeA, cubeB, bet) {
    let walletTxt = `Ставка: <span class="value">${bet}$</span>`;
    let messageTxt = 
    `<p>На кубиках: <span class="value">${cubeA}, ${cubeB}</span></p>
    <p>Твое очко - <span class="value">${cubeA + cubeB}</span><br>
    Продолжай бросать</p>`;
    let buttonTxt = `Бросить еще раз`;

    return {
        wallet: walletTxt, 
        msg: messageTxt,
        button: buttonTxt
    };
}

//Текст при поинт-игре
function pointMessage (cubeA, cubeB, bet) {
    let walletTxt = `Ставка: <span class="value">${bet}$</span>`;
    let messageTxt = 
    `<p>На кубиках: <span class="value">${cubeA}, ${cubeB}</span></p>
    <p>Продолжай бросать</p>`;
    let buttonTxt = `Бросить еще раз`;

    return {
        wallet: walletTxt, 
        msg: messageTxt,
        button: buttonTxt
    };
}

function errorMessage() {
    let walletTxt = `Ваш баланс: <span class="value">${cash}$</span>`;
    let messageTxt = `<p>Неверное значение!</p>`;
    let buttonTxt = `Бросить кубики`;

    return {
        wallet: walletTxt, 
        msg: messageTxt,
        button: buttonTxt
    };
}

