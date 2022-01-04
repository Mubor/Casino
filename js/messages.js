function baseMessage () {
    let wallet = `Ваш баланс: <span class="value">${cash}$</span>`;
    let msg = null;
    let buttonTxt = `Бросить кубики`;

    updateForm(wallet, msg, buttonTxt, true);
}

function winMessage (cubeA, cubeB, bet) {
    let wallet = `Ваш баланс: <span class="value">${cash}$</span>`;
    let msg = 
    `<p>На кубиках: <span class="value">${cubeA}, ${cubeB}</span></p>
     <p>Вы выиграли, и получаете <span class="value">${bet*2}$</span></p>`;
    let buttonTxt = `Забрать награду`;

    updateForm(wallet, msg, buttonTxt, false);
}

function loseMessage (cubeA, cubeB, bet) {
    let wallet = `Ваш баланс: <span class="value">${cash}$</span>`;
    let msg = 
    `<p>На кубиках: <span class="value">${cubeA}, ${cubeB}</span></p>
     <p>Ваша ставка в <span class="value">${bet}$</span> не сыграла</p>`;
    let buttonTxt = `Жаль, ну ладно`;

    updateForm(wallet, msg, buttonTxt, false);
}
function pointStartMessage (cubeA, cubeB, bet) {
    let wallet = `Ставка: <span class="value">${bet}$</span>`;
    let msg = 
    `
    <p>На кубиках: <span class="value">${cubeA}, ${cubeB}</span></p>
    <p>Твое очко - <span class="value">${cubeA + cubeB}</span><br>
    Продолжай бросать</p>`;
    let buttonTxt = `Бросить еще раз`;

    updateForm(wallet, msg, buttonTxt, false);
}

function pointMessage (cubeA, cubeB, bet) {
    let wallet = `Ставка: <span class="value">${bet}$</span>`;
    let msg = 
    `
    <p>На кубиках: <span class="value">${cubeA}, ${cubeB}</span></p>
    <p>Продолжай бросать</p>`;
    let buttonTxt = `Бросить еще раз`;

    updateForm(wallet, msg, buttonTxt, false);
}

