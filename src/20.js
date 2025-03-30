function calculateGCD(a, b) {
  if (b === 0) {
    return a;
  } else {
    return calculateGCD(b, a % b);
  }
}

console.log(calculateGCD(8, 12));
