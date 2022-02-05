// Генерация рандомного числа
function rand(min, max) {
  const randNum = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(randNum);
}

// "Подбрасывание кубиков" и возврат результата
// eslint-disable-next-line no-unused-vars
function tossUp() {
  return [rand(1, 6), rand(1, 6)];
}
