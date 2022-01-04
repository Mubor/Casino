function rand(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

function tossUp() {
    return [rand(1,6), rand(1,6)];
}