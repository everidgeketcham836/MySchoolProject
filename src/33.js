function sum(numbers) {
  if (numbers.length === 0) return 0;
  let sum = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

console.log(sum([1, 2, 3, 4, 5]));
