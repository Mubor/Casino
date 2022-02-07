// Обработчик обычной игры
// eslint-disable-next-line no-unused-vars
function primaryGameHandler(cubeA, cubeB) {
  const sum = cubeA + cubeB;
  let result;

  if (sum === 7 || sum === 11) {
    result = 'win';
  } else if (sum === 2 || sum === 8 || sum === 12) {
    result = 'lose';
  } else {
    result = 'point';
  }

  return result;
}

// Обработчик игры при выпадaнии point
// eslint-disable-next-line no-unused-vars
function pointGameHandler(cubeA, cubeB, point) {
  const sum = cubeA + cubeB;
  let result;

  // eslint-disable-next-line no-undef
  if (sum === point) {
    result = 'win';
  } else if (sum === 7) {
    result = 'lose';
  } else {
    result = 'continue';
  }

  return result;
}

export default {
  primaryGameHandler,
  pointGameHandler,
};
