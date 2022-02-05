function rand(min, max) {
  const randNum = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(randNum);
}

export default function tossUp() {
  return [rand(1, 6), rand(1, 6)];
}
