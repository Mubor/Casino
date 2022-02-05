import messages from './lib/messages';
import gameHandlers from './lib/gameHandlers';
import updateForm from './lib/formUpdating';
import tossUp from './lib/cubesGenerating';

let cash = 500;
let tempCash = cash;
let currentGameStage = 'new'; // содержит информацию по текущей стадии игры ("new"-новая игра, "win"-победа, "lose"-проигрыш, "point" -поинт).
let point;

const {
  baseMessage,
  winMessage,
  loseMessage,
  pointStartMessage,
  pointMessage,
  errorMessage,
} = messages;

const { primaryGameHandler, pointGameHandler } = gameHandlers;

// Обработка результата подбрасывания (обновление DOM)
function generalHandler(decision, cubeA, cubeB, bet) {
  if (decision === 'win') {
    currentGameStage = 'win';
    tempCash = cash + bet * 2;
    updateForm(winMessage(cubeA, cubeB, bet, cash), false);
  } else if (decision === 'lose') {
    currentGameStage = 'lose';
    tempCash = cash - bet;
    updateForm(loseMessage(cubeA, cubeB, bet, cash), false);
  } else if (decision === 'point') {
    currentGameStage = 'point';
    point = cubeA + cubeB;
    updateForm(pointStartMessage(cubeA, cubeB, bet), false);
  } else {
    updateForm(pointMessage(cubeA, cubeB, bet), false);
  }
}

// Обработка нажатия кнопки
function clickHandler() {
  const [cubeA, cubeB] = tossUp();
  const bet = document.getElementById('bet').value;
  let decision;

  if (isNaN(bet) || bet < 1 || bet > cash) {
    updateForm(errorMessage(cash), true);
  } else if (currentGameStage === 'new') {
    decision = primaryGameHandler(cubeA, cubeB); // получаем результат обычной игры
    generalHandler(decision, cubeA, cubeB, bet); // обновляем DOM
  } else if (currentGameStage === 'point') {
    decision = pointGameHandler(cubeA, cubeB, point); // получаем результат поинт-игры
    generalHandler(decision, cubeA, cubeB, bet); // обновляем DOM
  } else {
    currentGameStage = 'new';
    cash = tempCash;
    updateForm(baseMessage(cash), true);
  }
}

document.getElementById('toss-button').addEventListener('click', clickHandler);
