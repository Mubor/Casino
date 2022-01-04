//Генерация рандомного числа
function rand(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

//"Подбрасывание кубиков" и возврат результата
function tossUp() {
    return [rand(1,6), rand(1,6)];
}