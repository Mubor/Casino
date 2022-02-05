// Текст формы при загрузке страницы и начала новой игры
function baseMessage() {
  const walletTxt = `Ваш баланс: <span class="value">${cash}$</span>`;
  const messageTxt = null;
  const buttonTxt = 'Бросить кубики';

  return {
    wallet: walletTxt,
    msg: messageTxt,
    button: buttonTxt,
  };
}

// Текст формы при выиграше
function winMessage(cubeA, cubeB, bet) {
  const walletTxt = `Ваш баланс: <span class="value">${cash}$</span>`;
  const messageTxt = `<p>На кубиках: <span class="value">${cubeA}, ${cubeB}</span></p>
     <p>Вы выиграли, и получаете <span class="value">${bet * 2}$</span></p>`;
  const buttonTxt = 'Забрать награду';

  return {
    wallet: walletTxt,
    msg: messageTxt,
    button: buttonTxt,
  };
}

// Текст при проигрыше
function loseMessage(cubeA, cubeB, bet) {
  const walletTxt = `Ваш баланс: <span class="value">${cash}$</span>`;
  const messageTxt = `<p>На кубиках: <span class="value">${cubeA}, ${cubeB}</span></p>
     <p>Ваша ставка в <span class="value">${bet}$</span> не сыграла</p>`;
  const buttonTxt = 'Жаль, ну ладно';

  return {
    wallet: walletTxt,
    msg: messageTxt,
    button: buttonTxt,
  };
}

// Текст при выпадании поинта (один раз)
function pointStartMessage(cubeA, cubeB, bet) {
  const walletTxt = `Ставка: <span class="value">${bet}$</span>`;
  const messageTxt = `<p>На кубиках: <span class="value">${cubeA}, ${cubeB}</span></p>
    <p>Твое очко - <span class="value">${cubeA + cubeB}</span><br>
    Продолжай бросать</p>`;
  const buttonTxt = 'Бросить еще раз';

  return {
    wallet: walletTxt,
    msg: messageTxt,
    button: buttonTxt,
  };
}

// Текст при поинт-игре
function pointMessage(cubeA, cubeB, bet) {
  const walletTxt = `Ставка: <span class="value">${bet}$</span>`;
  const messageTxt = `<p>На кубиках: <span class="value">${cubeA}, ${cubeB}</span></p>
    <p>Продолжай бросать</p>`;
  const buttonTxt = 'Бросить еще раз';

  return {
    wallet: walletTxt,
    msg: messageTxt,
    button: buttonTxt,
  };
}

function errorMessage() {
  const walletTxt = `Ваш баланс: <span class="value">${cash}$</span>`;
  const messageTxt = '<p>Неверное значение!</p>';
  const buttonTxt = 'Бросить кубики';

  return {
    wallet: walletTxt,
    msg: messageTxt,
    button: buttonTxt,
  };
}
